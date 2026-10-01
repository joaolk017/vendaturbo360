const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3000;
const publicDir = __dirname;
const DATABASE_URL = process.env.DATABASE_URL || '';
const SESSION_SECRET = process.env.SESSION_SECRET || 'atendebot360-demo-session-secret-change-me';
const pool = DATABASE_URL ? new Pool({ connectionString: DATABASE_URL, ssl: { rejectUnauthorized: false } }) : null;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

const mem = {
  users: new Map(),
  state: new Map(),
  leads: new Map()
};

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}
function safeId() {
  return crypto.randomUUID();
}
function seedDemo() {
  const email = 'cliente@demo.com';
  if (mem.users.has(email)) return;
  const salt = crypto.randomBytes(16).toString('hex');
  const id = 'demo-user';
  mem.users.set(email, { id, email, salt, passwordHash: hashPassword('123456', salt), businessName: 'Barbearia Demo' });
  mem.state.set(id, {
    config: null,
    metrics: { chats: 0, whatsapp: 0 },
    updatedAt: new Date().toISOString()
  });
  mem.leads.set(id, []);
}
seedDemo();

async function initDb() {
  if (!pool) {
    console.log('AtendeBot 360 em modo demo: DATABASE_URL ainda não configurada.');
    return;
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      password_salt TEXT NOT NULL,
      business_name TEXT NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS business_state (
      user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
      config JSONB,
      metrics JSONB NOT NULL DEFAULT '{"chats":0,"whatsapp":0}'::jsonb,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS leads (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      interest TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'new',
      value NUMERIC(12,2) NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS idx_leads_user_id ON leads(user_id);
  `);
  const demo = await pool.query('SELECT id FROM users WHERE email=$1', ['cliente@demo.com']);
  if (!demo.rowCount) {
    const salt = crypto.randomBytes(16).toString('hex');
    await pool.query(
      'INSERT INTO users(id,email,password_hash,password_salt,business_name) VALUES($1,$2,$3,$4,$5)',
      ['demo-user','cliente@demo.com',hashPassword('123456', salt),salt,'Barbearia Demo']
    );
    await pool.query('INSERT INTO business_state(user_id,config,metrics) VALUES($1,$2,$3) ON CONFLICT DO NOTHING',
      ['demo-user', null, JSON.stringify({ chats: 0, whatsapp: 0 })]);
  }
  console.log('Banco PostgreSQL conectado e estrutura pronta.');
}

function json(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store'
  });
  res.end(payload);
}
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
      if (data.length > 1_000_000) req.destroy();
    });
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { reject(e); }
    });
  });
}
function b64url(input) {
  return Buffer.from(input).toString('base64url');
}
function signToken(user) {
  const payload = b64url(JSON.stringify({ sub: user.id, email: user.email, exp: Date.now() + 1000 * 60 * 60 * 24 * 7 }));
  const sig = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
  return payload + '.' + sig;
}
function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [payload, sig] = token.split('.');
  const expected = crypto.createHmac('sha256', SESSION_SECRET).update(payload).digest('base64url');
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    if (!data.exp || data.exp < Date.now()) return null;
    return data;
  } catch { return null; }
}
function authUser(req) {
  const header = req.headers.authorization || '';
  return verifyToken(header.startsWith('Bearer ') ? header.slice(7) : '');
}
function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').toLowerCase());
}
async function findUserByEmail(email) {
  email = email.toLowerCase();
  if (pool) {
    const r = await pool.query('SELECT * FROM users WHERE email=$1', [email]);
    return r.rows[0] || null;
  }
  return mem.users.get(email) || null;
}
async function findUserById(id) {
  if (pool) {
    const r = await pool.query('SELECT * FROM users WHERE id=$1', [id]);
    return r.rows[0] || null;
  }
  return [...mem.users.values()].find(u => u.id === id) || null;
}
async function createUser({ email, password, businessName }) {
  email = email.toLowerCase();
  const id = safeId();
  const salt = crypto.randomBytes(16).toString('hex');
  const passwordHash = hashPassword(password, salt);
  if (pool) {
    await pool.query(
      'INSERT INTO users(id,email,password_hash,password_salt,business_name) VALUES($1,$2,$3,$4,$5)',
      [id,email,passwordHash,salt,businessName]
    );
    await pool.query(
      'INSERT INTO business_state(user_id,config,metrics) VALUES($1,$2,$3)',
      [id,null,JSON.stringify({ chats: 0, whatsapp: 0 })]
    );
    return { id, email, business_name: businessName, password_hash: passwordHash, password_salt: salt };
  }
  const user = { id, email, businessName, passwordHash, salt };
  mem.users.set(email, user);
  mem.state.set(id, { config: null, metrics: { chats: 0, whatsapp: 0 }, updatedAt: new Date().toISOString() });
  mem.leads.set(id, []);
  return user;
}
function normalizeUser(user) {
  return {
    id: user.id,
    email: user.email,
    businessName: user.business_name || user.businessName || ''
  };
}
async function getState(userId) {
  if (pool) {
    const [s, l] = await Promise.all([
      pool.query('SELECT config,metrics,updated_at FROM business_state WHERE user_id=$1', [userId]),
      pool.query('SELECT id,name,phone,interest,status,value,created_at FROM leads WHERE user_id=$1 ORDER BY created_at DESC', [userId])
    ]);
    const state = s.rows[0] || { config: null, metrics: { chats: 0, whatsapp: 0 } };
    return {
      config: state.config,
      metrics: state.metrics || { chats: 0, whatsapp: 0 },
      leads: l.rows.map(x => ({
        id: x.id, name: x.name, phone: x.phone, interest: x.interest,
        status: x.status, value: Number(x.value || 0),
        date: new Date(x.created_at).toLocaleString('pt-BR')
      })),
      persistence: 'postgres'
    };
  }
  const state = mem.state.get(userId) || { config: null, metrics: { chats: 0, whatsapp: 0 } };
  return { config: state.config, metrics: state.metrics, leads: mem.leads.get(userId) || [], persistence: 'memory' };
}
async function saveState(userId, body) {
  const config = body.config || null;
  const metrics = body.metrics || { chats: 0, whatsapp: 0 };
  if (pool) {
    await pool.query(
      `INSERT INTO business_state(user_id,config,metrics,updated_at)
       VALUES($1,$2,$3,NOW())
       ON CONFLICT(user_id) DO UPDATE SET config=EXCLUDED.config,metrics=EXCLUDED.metrics,updated_at=NOW()`,
      [userId, config ? JSON.stringify(config) : null, JSON.stringify(metrics)]
    );
  } else {
    mem.state.set(userId, { config, metrics, updatedAt: new Date().toISOString() });
  }
}
async function addLead(userId, lead) {
  const row = {
    id: safeId(),
    name: String(lead.name || 'Lead sem nome').slice(0,120),
    phone: String(lead.phone || '').slice(0,40),
    interest: String(lead.interest || 'Contato').slice(0,250),
    status: ['new','contacted','converted'].includes(lead.status) ? lead.status : 'new',
    value: Number(lead.value || 0),
    date: new Date().toLocaleString('pt-BR')
  };
  if (pool) {
    await pool.query(
      'INSERT INTO leads(id,user_id,name,phone,interest,status,value) VALUES($1,$2,$3,$4,$5,$6,$7)',
      [row.id,userId,row.name,row.phone,row.interest,row.status,row.value]
    );
  } else {
    const arr = mem.leads.get(userId) || [];
    arr.unshift(row);
    mem.leads.set(userId, arr);
  }
  return row;
}
async function updateLead(userId, id, patch) {
  if (pool) {
    const current = await pool.query('SELECT * FROM leads WHERE id=$1 AND user_id=$2', [id,userId]);
    if (!current.rowCount) return null;
    const c = current.rows[0];
    const status = ['new','contacted','converted'].includes(patch.status) ? patch.status : c.status;
    const value = patch.value == null ? Number(c.value || 0) : Number(patch.value || 0);
    await pool.query('UPDATE leads SET status=$1,value=$2 WHERE id=$3 AND user_id=$4', [status,value,id,userId]);
    return { ...c, status, value };
  }
  const arr = mem.leads.get(userId) || [];
  const lead = arr.find(x => x.id === id);
  if (!lead) return null;
  if (['new','contacted','converted'].includes(patch.status)) lead.status = patch.status;
  if (patch.value != null) lead.value = Number(patch.value || 0);
  return lead;
}
async function clearLeads(userId) {
  if (pool) await pool.query('DELETE FROM leads WHERE user_id=$1', [userId]);
  else mem.leads.set(userId, []);
}

async function handleApi(req, res, urlPath) {
  if (req.method === 'GET' && urlPath === '/api/health') {
    return json(res, 200, { ok: true, database: pool ? 'configured' : 'demo-memory' });
  }
  if (req.method === 'POST' && urlPath === '/api/auth/register') {
    try {
      const body = await parseBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const businessName = String(body.businessName || '').trim();
      if (!validEmail(email)) return json(res, 400, { error: 'Informe um e-mail válido.' });
      if (password.length < 6) return json(res, 400, { error: 'A senha precisa ter pelo menos 6 caracteres.' });
      if (!businessName) return json(res, 400, { error: 'Informe o nome do negócio.' });
      if (await findUserByEmail(email)) return json(res, 409, { error: 'Este e-mail já está cadastrado.' });
      const user = await createUser({ email, password, businessName });
      return json(res, 201, { token: signToken(normalizeUser(user)), user: normalizeUser(user), persistence: pool ? 'postgres' : 'memory' });
    } catch (e) {
      console.error(e);
      return json(res, 500, { error: 'Não foi possível criar a conta.' });
    }
  }
  if (req.method === 'POST' && urlPath === '/api/auth/login') {
    try {
      const body = await parseBody(req);
      const user = await findUserByEmail(String(body.email || '').trim().toLowerCase());
      if (!user) return json(res, 401, { error: 'E-mail ou senha inválidos.' });
      const salt = user.password_salt || user.salt;
      const expected = user.password_hash || user.passwordHash;
      const actual = hashPassword(String(body.password || ''), salt);
      if (actual !== expected) return json(res, 401, { error: 'E-mail ou senha inválidos.' });
      const clean = normalizeUser(user);
      return json(res, 200, { token: signToken(clean), user: clean, persistence: pool ? 'postgres' : 'memory' });
    } catch (e) {
      console.error(e);
      return json(res, 500, { error: 'Não foi possível entrar.' });
    }
  }
  const auth = authUser(req);
  if (!auth) return json(res, 401, { error: 'Sessão inválida ou expirada.' });
  const user = await findUserById(auth.sub);
  if (!user) return json(res, 401, { error: 'Usuário não encontrado.' });

  if (req.method === 'GET' && urlPath === '/api/me') {
    return json(res, 200, { user: normalizeUser(user), persistence: pool ? 'postgres' : 'memory' });
  }
  if (req.method === 'GET' && urlPath === '/api/state') {
    return json(res, 200, await getState(auth.sub));
  }
  if (req.method === 'PUT' && urlPath === '/api/state') {
    const body = await parseBody(req);
    await saveState(auth.sub, body);
    return json(res, 200, { ok: true });
  }
  if (req.method === 'POST' && urlPath === '/api/leads') {
    const body = await parseBody(req);
    return json(res, 201, { lead: await addLead(auth.sub, body) });
  }
  if (req.method === 'DELETE' && urlPath === '/api/leads') {
    await clearLeads(auth.sub);
    return json(res, 200, { ok: true });
  }
  const match = urlPath.match(/^\/api\/leads\/([^/]+)$/);
  if (match && req.method === 'PATCH') {
    const body = await parseBody(req);
    const lead = await updateLead(auth.sub, match[1], body);
    return lead ? json(res, 200, { lead }) : json(res, 404, { error: 'Lead não encontrado.' });
  }
  return json(res, 404, { error: 'Endpoint não encontrado.' });
}

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath.startsWith('/api/')) return await handleApi(req, res, urlPath);

    let filePath = path.join(publicDir, urlPath === '/' ? 'index.html' : urlPath);
    if (!filePath.startsWith(publicDir)) {
      res.writeHead(403);
      return res.end('Forbidden');
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        fs.readFile(path.join(publicDir, 'index.html'), (indexErr, indexData) => {
          if (indexErr) {
            res.writeHead(404);
            return res.end('Not found');
          }
          res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
          res.end(indexData);
        });
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {'Content-Type': mimeTypes[ext] || 'application/octet-stream'});
      res.end(data);
    });
  } catch (e) {
    console.error('Erro no servidor:', e);
    if (!res.headersSent) json(res, 500, { error: 'Erro interno.' });
    else res.end();
  }
});

initDb()
  .catch(err => console.error('Falha ao inicializar banco:', err))
  .finally(() => {
    server.listen(PORT, () => {
      console.log(`AtendeBot 360 rodando na porta ${PORT}`);
    });
  });
