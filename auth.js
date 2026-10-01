(function(){
  const TOKEN_KEY='at360_token';
  let token=localStorage.getItem(TOKEN_KEY)||'';
  let syncTimer=null;
  let syncing=false;

  const css=document.createElement('style');
  css.textContent=`
    .at-auth-overlay{position:fixed;inset:0;background:linear-gradient(135deg,#0b1220,#172554 65%,#312e81);z-index:2147483600;display:none;align-items:center;justify-content:center;padding:20px;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    .at-auth-overlay.show{display:flex}
    .at-auth-card{width:min(920px,100%);background:#fff;border-radius:28px;overflow:hidden;box-shadow:0 30px 100px rgba(0,0,0,.35);display:grid;grid-template-columns:1fr 1fr}
    .at-auth-brand{padding:38px;background:linear-gradient(145deg,#111827,#1e293b);color:#fff;display:flex;flex-direction:column;justify-content:space-between;min-height:560px}
    .at-auth-logo{display:flex;align-items:center;gap:12px}.at-auth-logo i{width:44px;height:44px;border-radius:14px;background:linear-gradient(135deg,#6366f1,#7c3aed);display:grid;place-items:center;font-style:normal;font-weight:900}.at-auth-logo b{font-size:18px}.at-auth-brand h2{font-size:34px;line-height:1.05;letter-spacing:-.04em;margin:30px 0 12px}.at-auth-brand p{color:#cbd5e1;line-height:1.6;font-size:14px}.at-auth-points{display:grid;gap:12px;margin-top:24px}.at-auth-point{display:flex;gap:10px;align-items:flex-start;font-size:12px;color:#dbeafe}.at-auth-point span{width:24px;height:24px;border-radius:8px;background:rgba(99,102,241,.25);display:grid;place-items:center;flex:0 0 auto}
    .at-auth-formwrap{padding:38px}.at-auth-tabs{display:flex;gap:8px;background:#f1f5f9;padding:5px;border-radius:12px;margin-bottom:24px}.at-auth-tabs button{flex:1;border:0;background:transparent;border-radius:9px;padding:10px;font-weight:800;color:#64748b}.at-auth-tabs button.active{background:#fff;color:#0f172a;box-shadow:0 3px 12px rgba(15,23,42,.08)}
    .at-auth-pane{display:none}.at-auth-pane.active{display:block}.at-auth-pane h3{font-size:25px;letter-spacing:-.03em;margin:0 0 6px}.at-auth-pane>p{margin:0 0 20px;color:#64748b;font-size:13px;line-height:1.5}
    .at-auth-field{display:block;font-size:12px;font-weight:800;color:#334155;margin-bottom:13px}.at-auth-field input{width:100%;margin-top:7px;border:1px solid #dbe3ee;border-radius:12px;padding:12px 13px;outline:none}.at-auth-field input:focus{border-color:#818cf8;box-shadow:0 0 0 3px rgba(99,102,241,.1)}
    .at-auth-submit{width:100%;border:0;border-radius:12px;padding:12px 15px;background:linear-gradient(135deg,#5b5cf0,#7c3aed);color:#fff;font-weight:900;margin-top:5px;cursor:pointer}.at-auth-demo{margin-top:15px;padding:12px;border:1px solid #e2e8f0;background:#f8fafc;border-radius:12px;font-size:11px;color:#64748b;line-height:1.5}.at-auth-demo b{color:#334155}.at-auth-error{min-height:18px;margin-top:10px;color:#be123c;font-size:11px;font-weight:700}
    .at-cloud-pill{position:fixed;left:14px;bottom:14px;z-index:2147483500;background:#fff;border:1px solid #e2e8f0;border-radius:999px;padding:7px 10px;font:700 10px Inter,system-ui;color:#475569;box-shadow:0 8px 24px rgba(15,23,42,.08);display:none}
    @media(max-width:760px){.at-auth-card{grid-template-columns:1fr;max-width:480px}.at-auth-brand{min-height:auto;padding:24px}.at-auth-brand h2{font-size:26px;margin:22px 0 10px}.at-auth-points{display:none}.at-auth-formwrap{padding:24px}.at-auth-logo b{font-size:16px}.at-cloud-pill{display:none!important}}
  `;
  document.head.appendChild(css);

  const overlay=document.createElement('div');
  overlay.className='at-auth-overlay';
  overlay.innerHTML=`
    <div class="at-auth-card">
      <section class="at-auth-brand">
        <div>
          <div class="at-auth-logo"><i>A</i><b>AtendeBot 360</b></div>
          <h2>Seu atendimento, seus leads e suas vendas em um só lugar.</h2>
          <p>Crie um atendente virtual para responder clientes, captar oportunidades e acompanhar o que realmente gera resultado.</p>
          <div class="at-auth-points">
            <div class="at-auth-point"><span>✓</span><div><b>Configuração rápida</b><br>Modelos prontos por segmento.</div></div>
            <div class="at-auth-point"><span>✓</span><div><b>Leads organizados</b><br>Contatos e interesses centralizados.</div></div>
            <div class="at-auth-point"><span>✓</span><div><b>Funil de vendas</b><br>Do atendimento até a conversão.</div></div>
          </div>
        </div>
        <small style="color:#94a3b8">AtendeBot 360 • Plataforma demonstrativa SaaS</small>
      </section>
      <section class="at-auth-formwrap">
        <div class="at-auth-tabs">
          <button id="atTabLogin" class="active">Entrar</button>
          <button id="atTabRegister">Criar conta</button>
        </div>
        <div class="at-auth-pane active" id="atPaneLogin">
          <h3>Bem-vindo de volta</h3>
          <p>Acesse o painel do seu negócio.</p>
          <label class="at-auth-field">E-mail<input id="atLoginEmail" type="email" autocomplete="email" value="cliente@demo.com"></label>
          <label class="at-auth-field">Senha<input id="atLoginPass" type="password" autocomplete="current-password" value="123456"></label>
          <button class="at-auth-submit" id="atLoginBtn">Entrar no painel</button>
          <div class="at-auth-demo"><b>Acesso de demonstração</b><br>cliente@demo.com • senha 123456</div>
          <div class="at-auth-error" id="atLoginError"></div>
        </div>
        <div class="at-auth-pane" id="atPaneRegister">
          <h3>Crie sua conta</h3>
          <p>Comece com um negócio e personalize depois.</p>
          <label class="at-auth-field">Nome do negócio<input id="atRegisterBusiness" placeholder="Ex.: Barbearia Imperial"></label>
          <label class="at-auth-field">E-mail<input id="atRegisterEmail" type="email" autocomplete="email"></label>
          <label class="at-auth-field">Senha<input id="atRegisterPass" type="password" autocomplete="new-password" placeholder="Mínimo 6 caracteres"></label>
          <button class="at-auth-submit" id="atRegisterBtn">Criar conta grátis</button>
          <div class="at-auth-error" id="atRegisterError"></div>
        </div>
      </section>
    </div>
  `;
  document.body.appendChild(overlay);

  const cloud=document.createElement('div');
  cloud.className='at-cloud-pill';
  cloud.textContent='● dados sincronizados';
  document.body.appendChild(cloud);

  function tab(mode){
    const login=mode==='login';
    document.getElementById('atTabLogin').classList.toggle('active',login);
    document.getElementById('atTabRegister').classList.toggle('active',!login);
    document.getElementById('atPaneLogin').classList.toggle('active',login);
    document.getElementById('atPaneRegister').classList.toggle('active',!login);
  }
  document.getElementById('atTabLogin').onclick=()=>tab('login');
  document.getElementById('atTabRegister').onclick=()=>tab('register');

  async function api(path,options={}){
    const headers={'Content-Type':'application/json',...(options.headers||{})};
    if(token) headers.Authorization='Bearer '+token;
    const res=await fetch(path,{...options,headers});
    const data=await res.json().catch(()=>({}));
    if(!res.ok) throw new Error(data.error||'Não foi possível concluir a operação.');
    return data;
  }
  window.at360Api=api;

  async function loadAccount(){
    if(!token){overlay.classList.add('show');return false}
    try{
      const me=await api('/api/me');
      window.at360Account=me.user;
      const state=await api('/api/state');
      if(state.config) config={...config,...state.config};
      config={...config,botId:me.user.id};
      if(state.metrics) metrics={...metrics,...state.metrics};
      if(Array.isArray(state.leads)) leads=state.leads;
      fillForms();renderTemplates();updateUI();
      const profileName=document.querySelector('.profile b');
      const profileRole=document.querySelector('.profile small');
      if(profileName) profileName.textContent=me.user.businessName||'Cliente';
      if(profileRole) profileRole.textContent=me.user.email;
      overlay.classList.remove('show');
      cloud.style.display='block';
      cloud.textContent=state.persistence==='postgres'?'● dados no banco':'● modo demonstração';
      if(state.persistence!=='postgres') cloud.title='O banco ainda não está conectado ao serviço.';
      return true;
    }catch(e){
      localStorage.removeItem(TOKEN_KEY);
      token='';
      overlay.classList.add('show');
      return false;
    }
  }

  async function syncAll(){
    if(!token||syncing)return;
    syncing=true;
    clearTimeout(syncTimer);
    try{
      await api('/api/state',{method:'PUT',body:JSON.stringify({config,metrics})});
      await api('/api/leads',{method:'DELETE'});
      for(const l of leads){
        await api('/api/leads',{method:'POST',body:JSON.stringify({
          name:l.name,phone:l.phone,interest:l.interest,status:l.status||'new',value:Number(l.value||0)
        })});
      }
      cloud.textContent='● dados sincronizados';
    }catch(e){
      cloud.textContent='● sincronização pendente';
    }finally{syncing=false}
  }
  function scheduleSync(){
    clearTimeout(syncTimer);
    syncTimer=setTimeout(syncAll,350);
  }

  const originalSaveAll=saveAll;
  saveAll=function(){
    originalSaveAll();
    scheduleSync();
  };

  document.getElementById('atLoginBtn').onclick=async()=>{
    const btn=document.getElementById('atLoginBtn');
    const err=document.getElementById('atLoginError');
    err.textContent='';btn.disabled=true;btn.textContent='Entrando...';
    try{
      const data=await api('/api/auth/login',{method:'POST',body:JSON.stringify({
        email:document.getElementById('atLoginEmail').value.trim(),
        password:document.getElementById('atLoginPass').value
      })});
      token=data.token;localStorage.setItem(TOKEN_KEY,token);
      window.at360Account=data.user;
      config={...config,botId:data.user.id};
      await loadAccount();
    }catch(e){err.textContent=e.message}
    finally{btn.disabled=false;btn.textContent='Entrar no painel'}
  };

  document.getElementById('atRegisterBtn').onclick=async()=>{
    const btn=document.getElementById('atRegisterBtn');
    const err=document.getElementById('atRegisterError');
    err.textContent='';btn.disabled=true;btn.textContent='Criando conta...';
    try{
      const businessName=document.getElementById('atRegisterBusiness').value.trim();
      const data=await api('/api/auth/register',{method:'POST',body:JSON.stringify({
        businessName,
        email:document.getElementById('atRegisterEmail').value.trim(),
        password:document.getElementById('atRegisterPass').value
      })});
      token=data.token;localStorage.setItem(TOKEN_KEY,token);
      window.at360Account=data.user;
      config={...config,businessName:businessName||config.businessName,botId:data.user.id};
      originalSaveAll();
      await syncAll();
      await loadAccount();
      if(typeof startWizard==='function') startWizard();
    }catch(e){err.textContent=e.message}
    finally{btn.disabled=false;btn.textContent='Criar conta grátis'}
  };

  window.at360Logout=function(){
    localStorage.removeItem(TOKEN_KEY);
    token='';
    overlay.classList.add('show');
    cloud.style.display='none';
  };

  const profile=document.querySelector('.profile');
  if(profile){
    profile.style.cursor='pointer';
    profile.title='Clique para sair';
    profile.addEventListener('click',()=>{if(confirm('Sair desta conta?'))window.at360Logout()});
  }

  loadAccount();
})();