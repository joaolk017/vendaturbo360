(function(){
  if(window.__AT360_MANAGEMENT__)return;
  window.__AT360_MANAGEMENT__=true;

  const css=document.createElement('style');
  css.textContent=`
    .mg-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(320px,.75fr);gap:16px}.mg-stack{display:grid;gap:16px}.mg-panel{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 9px 26px rgba(15,23,42,.035)}.mg-head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 17px;border-bottom:1px solid var(--line)}.mg-head h3{margin:0;font-size:14px}.mg-head p{margin:3px 0 0;font-size:10px;color:#64748b}.mg-body{padding:16px}
    .mg-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:16px}.mg-kpi{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px}.mg-kpi small{display:block;font-size:9px;color:#64748b;font-weight:900}.mg-kpi b{display:block;font-size:23px;margin-top:7px}.mg-kpi span{display:block;font-size:8.5px;color:#94a3b8;margin-top:3px}
    .mg-search{width:100%;border:1px solid #dbe3ee;border-radius:11px;padding:10px 12px;outline:none}.mg-search:focus{border-color:#818cf8;box-shadow:0 0 0 3px rgba(99,102,241,.08)}
    .customer-list{display:grid;gap:8px;margin-top:12px}.customer-card{display:grid;grid-template-columns:42px minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #e2e8f0;background:#fff;border-radius:14px;padding:11px;cursor:pointer;text-align:left}.customer-card:hover{background:#f8fafc}.customer-avatar{width:40px;height:40px;border-radius:12px;background:linear-gradient(135deg,#5b5cf0,#7c3aed);color:#fff;display:grid;place-items:center;font-weight:900}.customer-card b{font-size:11px;display:block}.customer-card small{font-size:9px;color:#64748b;display:block;margin-top:2px}.customer-value{text-align:right;font-size:10px;font-weight:900}.customer-value span{display:block;font-size:8px;color:#94a3b8;font-weight:700;margin-top:2px}
    .customer-empty,.mg-empty{padding:28px;text-align:center;color:#64748b;font-size:10px;border:1px dashed #cbd5e1;border-radius:13px}.customer-detail{display:grid;gap:12px}.customer-identity{display:flex;gap:11px;align-items:center}.customer-identity .customer-avatar{width:48px;height:48px;border-radius:15px}.customer-identity h3{margin:0;font-size:16px}.customer-identity p{margin:3px 0 0;color:#64748b;font-size:10px}.customer-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}.customer-stat{padding:9px;border:1px solid #e2e8f0;border-radius:11px;background:#f8fafc}.customer-stat small{font-size:8px;color:#64748b;display:block}.customer-stat b{font-size:12px;display:block;margin-top:3px}
    .mg-field{display:block;font-size:9px;font-weight:900;color:#475569}.mg-field input,.mg-field textarea,.mg-field select{width:100%;margin-top:5px;border:1px solid #dbe3ee;border-radius:10px;padding:10px 11px;outline:none;background:#fff}.mg-field textarea{min-height:70px;resize:vertical}.mg-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px}.mg-wide{grid-column:1/-1}
    .history{display:grid;gap:8px;max-height:430px;overflow:auto}.history-item{display:grid;grid-template-columns:34px minmax(0,1fr) auto;gap:9px;align-items:start;padding:10px;border:1px solid #e2e8f0;border-radius:11px}.history-icon{width:32px;height:32px;border-radius:10px;background:#eef2ff;display:grid;place-items:center}.history-item b{font-size:10px;display:block}.history-item p{font-size:8.8px;color:#64748b;margin:3px 0 0;line-height:1.35}.history-value{font-size:9px;font-weight:900;white-space:nowrap}
    .ledger{display:grid;gap:8px}.ledger-row{display:grid;grid-template-columns:38px minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid #e2e8f0;border-radius:12px;padding:10px}.ledger-icon{width:36px;height:36px;border-radius:11px;display:grid;place-items:center;background:#f1f5f9}.ledger-row.income .ledger-icon{background:#ecfdf5;color:#047857}.ledger-row.expense .ledger-icon{background:#fff1f2;color:#be123c}.ledger-row b{display:block;font-size:10px}.ledger-row small{display:block;font-size:8.5px;color:#64748b;margin-top:2px}.ledger-amount{text-align:right;font-size:11px;font-weight:900}.ledger-amount span{display:block;font-size:8px;margin-top:2px;color:#64748b}
    .pix-box{border-radius:16px;background:linear-gradient(145deg,#0f172a,#1e293b);color:#fff;padding:16px}.pix-box h3{margin:0 0 5px}.pix-box p{margin:0;color:#cbd5e1;font-size:10px;line-height:1.45}.pix-result{display:none;margin-top:12px}.pix-result.show{display:grid;grid-template-columns:112px 1fr;gap:11px;align-items:center}.pix-result img{width:112px;height:112px;background:#fff;border-radius:11px;padding:5px}.pix-code{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);padding:9px;border-radius:10px;font-size:8px;word-break:break-all;max-height:105px;overflow:auto}.pix-note{margin-top:8px!important;color:#fde68a!important}
    .team-list,.stock-list{display:grid;gap:9px}.team-card,.stock-card{border:1px solid #e2e8f0;border-radius:13px;padding:11px;background:#fff}.team-top,.stock-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.team-card b,.stock-card b{font-size:11px}.team-card small,.stock-card small{display:block;color:#64748b;font-size:8.5px;margin-top:3px}.team-actions,.stock-actions{display:flex;gap:6px;margin-top:9px;flex-wrap:wrap}.team-actions button,.stock-actions button{border:0;border-radius:8px;padding:7px 8px;font-size:8.5px;font-weight:900}.mg-on{background:#ecfdf5;color:#047857}.mg-off{background:#f1f5f9;color:#475569}.stock-low{border-color:#fdba74;background:#fff7ed}.stock-qty{font-size:18px;font-weight:900;text-align:right}.stock-qty span{display:block;font-size:8px;color:#64748b;font-weight:700}.stock-badge{display:inline-flex;border-radius:999px;padding:4px 7px;font-size:8px;font-weight:900;background:#fff7ed;color:#c2410c;margin-top:5px}
    .mg-tabs{display:flex;gap:6px;flex-wrap:wrap}.mg-tabs button{border:1px solid #e2e8f0;background:#fff;border-radius:9px;padding:7px 9px;font-size:8.5px;font-weight:900}.mg-tabs button.active{background:#eef2ff;color:#4338ca;border-color:#c7d2fe}.perm-grid{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:6px}.perm-option{display:flex;align-items:center;gap:7px;padding:8px;border:1px solid #e2e8f0;border-radius:9px;background:#f8fafc;font-size:8.5px;font-weight:800}.integration-status{padding:10px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.07);border-radius:11px;margin:10px 0;font-size:9px;line-height:1.45}.access-badge{display:inline-flex;border-radius:999px;padding:4px 7px;font-size:8px;font-weight:900;background:#eef2ff;color:#4338ca;margin-top:5px}
    @media(max-width:1050px){.mg-grid{grid-template-columns:1fr}.mg-kpis{grid-template-columns:1fr 1fr}}
    @media(max-width:760px),(pointer:coarse) and (max-device-width:900px){.mg-grid{grid-template-columns:1fr;gap:11px}.mg-kpis{grid-template-columns:1fr 1fr;gap:8px}.mg-kpi{padding:11px}.mg-kpi b{font-size:20px}.mg-head{padding:13px}.mg-body{padding:12px}.customer-card{grid-template-columns:38px minmax(0,1fr)}.customer-value{grid-column:2;text-align:left}.mg-form-grid{grid-template-columns:1fr}.mg-wide{grid-column:auto}.pix-result.show{grid-template-columns:1fr}.pix-result img{margin:auto}.ledger-row{grid-template-columns:34px minmax(0,1fr)}.ledger-amount{grid-column:2;text-align:left}.customer-stats{grid-template-columns:1fr 1fr 1fr}}
  `;
  document.head.appendChild(css);

  let customers=[],selectedCustomer=null,finance=null,paymentIntegration=null,team=[],inventory=[];

  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const money=v=>Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  const initials=n=>String(n||'C').trim().split(/\s+/).slice(0,2).map(x=>x[0]||'').join('').toUpperCase()||'C';

  function installNav(){
    if(document.querySelector('[data-view="customers"]'))return;
    const leads=document.querySelector('.nav-btn[data-view="leads"]');
    if(!leads)return;
    const customersBtn=document.createElement('button');customersBtn.className='nav-btn';customersBtn.dataset.view='customers';customersBtn.innerHTML='<span class="ico">👥</span>Clientes 360';
    leads.after(customersBtn);
    const anchor=[...document.querySelectorAll('.nav-title')].find(x=>x.textContent.trim()==='Configuração');
    const title=document.createElement('div');title.className='nav-title';title.textContent='Gestão 360';
    const financeBtn=document.createElement('button');financeBtn.className='nav-btn';financeBtn.dataset.view='finance';financeBtn.innerHTML='<span class="ico">R$</span>Financeiro 360';
    const teamBtn=document.createElement('button');teamBtn.className='nav-btn';teamBtn.dataset.view='team';teamBtn.innerHTML='<span class="ico">♟</span>Equipe 360';
    const stockBtn=document.createElement('button');stockBtn.className='nav-btn';stockBtn.dataset.view='inventory';stockBtn.innerHTML='<span class="ico">▣</span>Estoque 360';
    if(anchor)anchor.before(title,financeBtn,teamBtn,stockBtn);else leads.after(title,financeBtn,teamBtn,stockBtn);
    [customersBtn,financeBtn,teamBtn,stockBtn].forEach(b=>b.addEventListener('click',()=>{goView(b.dataset.view);loadView(b.dataset.view)}));
    applyVertical();
  }
  function applyVertical(){
    const stock=document.querySelector('[data-view="inventory"]');
    const t=config?.template||'barbearia';
    const enabled=['marmitex','restaurante','acai','loja','oficina','barbearia'].includes(t);
    if(stock)stock.style.display=enabled?'flex':'none';
  }
  function panel(title,sub,body,id=''){return '<section class="mg-panel" '+(id?'id="'+id+'"':'')+'><div class="mg-head"><div><h3>'+title+'</h3><p>'+sub+'</p></div></div><div class="mg-body">'+body+'</div></section>'}

  function installViews(){
    const content=document.querySelector('.content');if(!content)return;
    if(!document.getElementById('view-customers')){
      const v=document.createElement('section');v.className='view';v.id='view-customers';v.innerHTML=
        '<div class="heading"><div><h1>Clientes 360</h1><p>Uma ficha única com tudo o que cada cliente já fez no seu negócio.</p></div><div class="heading-actions"><button class="btn secondary" id="customersRefresh">↻ Atualizar</button></div></div>'+
        '<div class="mg-kpis"><div class="mg-kpi"><small>CLIENTES</small><b id="custTotal">0</b><span>identificados</span></div><div class="mg-kpi"><small>RECORRENTES</small><b id="custRepeat">0</b><span>mais de 1 interação</span></div><div class="mg-kpi"><small>VALOR RECEBIDO</small><b id="custRevenue">R$ 0</b><span>clientes identificados</span></div><div class="mg-kpi"><small>ATIVOS RECENTES</small><b id="custRecent">0</b><span>últimos 30 dias</span></div></div>'+
        '<div class="mg-grid"><div class="mg-panel"><div class="mg-head"><div><h3>Base de clientes</h3><p>Pedidos, agenda e leads unificados pelo telefone</p></div></div><div class="mg-body"><input class="mg-search" id="customerSearch" placeholder="Buscar por nome ou telefone"><div class="customer-list" id="customerList"></div></div></div><div class="mg-panel"><div class="mg-head"><div><h3>Ficha do cliente</h3><p>Perfil, observações e histórico completo</p></div></div><div class="mg-body" id="customerDetail"><div class="customer-empty">Selecione um cliente para abrir a ficha.</div></div></div></div>';
      content.appendChild(v);
    }
    if(!document.getElementById('view-finance')){
      const v=document.createElement('section');v.className='view';v.id='view-finance';v.innerHTML=
        '<div class="heading"><div><h1>Financeiro 360</h1><p>Entradas, despesas, recebimentos e PIX em um único caixa.</p></div><div class="heading-actions"><button class="btn secondary" id="financeRefresh">↻ Atualizar</button></div></div>'+
        '<div class="mg-kpis"><div class="mg-kpi"><small>SALDO REALIZADO</small><b id="finBalance">R$ 0</b><span>entradas - saídas pagas</span></div><div class="mg-kpi"><small>RECEBIDO NO MÊS</small><b id="finMonthIncome">R$ 0</b><span>caixa confirmado</span></div><div class="mg-kpi"><small>DESPESAS NO MÊS</small><b id="finMonthExpense">R$ 0</b><span>saídas confirmadas</span></div><div class="mg-kpi"><small>A RECEBER</small><b id="finPending">R$ 0</b><span>pendências</span></div></div>'+
        '<div class="mg-grid"><div class="mg-stack">'+
          panel('Livro-caixa','Movimentações automáticas e manuais','<div class="mg-tabs" id="financeTabs"><button class="active" data-fin-filter="all">Todos</button><button data-fin-filter="paid">Pagos</button><button data-fin-filter="pending">Pendentes</button><button data-fin-filter="expense">Despesas</button></div><div class="ledger" id="financeLedger" style="margin-top:11px"></div>','financeLedgerPanel')+
          panel('Novo lançamento','Registre uma entrada ou despesa','<form id="financeForm"><div class="mg-form-grid"><label class="mg-field">Tipo<select id="finType"><option value="income">Entrada</option><option value="expense">Despesa</option></select></label><label class="mg-field">Valor<input id="finAmount" type="number" min="0" step="0.01"></label><label class="mg-field mg-wide">Descrição<input id="finDescription" placeholder="Ex.: compra de material"></label><label class="mg-field">Pagamento<select id="finMethod"><option value="pix">PIX</option><option value="card">Cartão</option><option value="cash">Dinheiro</option><option value="transfer">Transferência</option><option value="other">Outro</option></select></label><label class="mg-field">Status<select id="finStatus"><option value="paid">Pago</option><option value="pending">Pendente</option></select></label></div><button class="btn primary" style="width:100%;margin-top:10px">Adicionar lançamento</button></form>')
        +'</div><div class="mg-stack">'+
          '<section class="pix-box"><h3>⚡ PIX automático Woovi</h3><p>Conecte a conta PIX do próprio estabelecimento. Pedidos passam a gerar cobrança dinâmica e o webhook baixa o pagamento automaticamente.</p><div class="integration-status" id="autoPixStatus">Verificando integração...</div><label class="mg-field" style="color:#cbd5e1">App ID Woovi<input id="wooviAppId" type="password" autocomplete="off" placeholder="Cole o App ID da conta do estabelecimento"></label><button class="btn primary" id="connectWoovi" style="width:100%;margin-top:9px">Conectar e ativar webhook</button><div id="wooviWebhookBox" style="display:none;margin-top:9px"><div class="pix-code" id="wooviWebhookUrl"></div></div></section>'+
          '<section class="pix-box"><h3>⚡ Caixa / PIX manual</h3><p>Gere um PIX copia e cola estático para receber diretamente na chave do negócio.</p><div class="mg-form-grid" style="margin-top:11px"><label class="mg-field" style="color:#cbd5e1">Chave PIX<input id="pixKey" placeholder="CPF, CNPJ, e-mail, telefone ou aleatória"></label><label class="mg-field" style="color:#cbd5e1">Nome do recebedor<input id="pixName" placeholder="Nome do negócio"></label><label class="mg-field" style="color:#cbd5e1">Cidade<input id="pixCity" placeholder="JALES"></label><label class="mg-field" style="color:#cbd5e1">Valor para cobrar<input id="pixAmount" type="number" min="0" step="0.01" placeholder="0,00"></label></div><button class="btn secondary" id="savePixSettings" style="width:100%;margin-top:9px">Salvar dados PIX</button><button class="btn primary" id="generatePix" style="width:100%;margin-top:8px">Gerar PIX</button><div class="pix-result" id="pixResult"><img id="pixQr"><div><div class="pix-code" id="pixCode"></div><button class="btn secondary" id="copyPix" style="width:100%;margin-top:7px">Copiar código PIX</button></div></div><p class="pix-note">Este modo é manual. Para confirmação automática, use a integração Woovi acima.</p></section>'+
          panel('Resumo do caixa','Visão consolidada','<div id="financeSummaryBox"></div>')
        +'</div></div>';
      content.appendChild(v);
    }
    if(!document.getElementById('view-team')){
      const v=document.createElement('section');v.className='view';v.id='view-team';v.innerHTML=
        '<div class="heading"><div><h1>Equipe 360</h1><p>Organize quem trabalha no negócio e as funções de cada pessoa.</p></div><button class="btn secondary" id="teamRefresh">↻ Atualizar</button></div>'+
        '<div class="mg-grid"><div class="mg-panel"><div class="mg-head"><div><h3>Equipe</h3><p id="teamCount">0 membros</p></div></div><div class="mg-body"><div class="team-list" id="teamList"></div></div></div>'+
        '<div class="mg-panel"><div class="mg-head"><div><h3>Adicionar membro + acesso</h3><p>Crie o funcionário e, se quiser, o login individual</p></div></div><div class="mg-body"><form id="teamForm"><div class="mg-form-grid"><label class="mg-field mg-wide">Nome<input id="teamName" placeholder="Nome completo"></label><label class="mg-field">Função<input id="teamRole" placeholder="Ex.: Barbeiro"></label><label class="mg-field">WhatsApp<input id="teamPhone" placeholder="17999999999"></label><label class="mg-field mg-wide">E-mail de contato<input id="teamEmail" type="email" placeholder="opcional"></label><label class="mg-field">E-mail de acesso<input id="teamLoginEmail" type="email" placeholder="funcionario@empresa.com"></label><label class="mg-field">Senha inicial<input id="teamLoginPass" type="password" minlength="6" placeholder="mínimo 6 caracteres"></label><label class="mg-field mg-wide">Perfil<select id="teamAccessRole"><option value="attendant">Atendimento</option><option value="professional">Profissional</option><option value="manager">Gerente</option><option value="finance">Financeiro</option><option value="stock">Estoque</option></select></label><div class="mg-field mg-wide">Permissões<div class="perm-grid" id="teamPermissions"><label class="perm-option"><input type="checkbox" value="central" checked> Central</label><label class="perm-option"><input type="checkbox" value="customers" checked> Clientes</label><label class="perm-option"><input type="checkbox" value="leads" checked> Leads</label><label class="perm-option"><input type="checkbox" value="orders"> Pedidos</label><label class="perm-option"><input type="checkbox" value="appointments" checked> Agenda</label><label class="perm-option"><input type="checkbox" value="finance"> Financeiro</label><label class="perm-option"><input type="checkbox" value="inventory"> Estoque</label><label class="perm-option"><input type="checkbox" value="team"> Equipe</label><label class="perm-option"><input type="checkbox" value="growth"> Growth</label><label class="perm-option"><input type="checkbox" value="chatbot"> Chatbot</label><label class="perm-option"><input type="checkbox" value="settings"> Configurações</label></div></div></div><button class="btn primary" style="width:100%;margin-top:10px">Adicionar à equipe</button></form></div></div></div>';
      content.appendChild(v);
    }
    if(!document.getElementById('view-inventory')){
      const v=document.createElement('section');v.className='view';v.id='view-inventory';v.innerHTML=
        '<div class="heading"><div><h1>Estoque 360</h1><p>Controle produtos, insumos e itens que não podem faltar.</p></div><button class="btn secondary" id="inventoryRefresh">↻ Atualizar</button></div>'+
        '<div class="mg-kpis"><div class="mg-kpi"><small>ITENS ATIVOS</small><b id="stockTotal">0</b><span>cadastrados</span></div><div class="mg-kpi"><small>ESTOQUE BAIXO</small><b id="stockLow">0</b><span>precisam de atenção</span></div><div class="mg-kpi"><small>CUSTO ESTIMADO</small><b id="stockCost">R$ 0</b><span>valor em estoque</span></div><div class="mg-kpi"><small>VALOR DE VENDA</small><b id="stockSale">R$ 0</b><span>potencial bruto</span></div></div>'+
        '<div class="mg-grid"><div class="mg-panel"><div class="mg-head"><div><h3>Itens de estoque</h3><p>Use + e − para atualizar rapidamente</p></div></div><div class="mg-body"><div class="stock-list" id="stockList"></div></div></div>'+
        '<div class="mg-panel"><div class="mg-head"><div><h3>Novo item</h3><p>Produto, ingrediente ou material</p></div></div><div class="mg-body"><form id="stockForm"><div class="mg-form-grid"><label class="mg-field mg-wide">Nome<input id="stockName" placeholder="Ex.: Coca-Cola lata"></label><label class="mg-field">SKU / código<input id="stockSku"></label><label class="mg-field">Categoria<input id="stockCategory" placeholder="Bebidas"></label><label class="mg-field">Quantidade<input id="stockQty" type="number" min="0" step="0.001"></label><label class="mg-field">Estoque mínimo<input id="stockMin" type="number" min="0" step="0.001"></label><label class="mg-field">Unidade<input id="stockUnit" value="un" placeholder="un, kg, L"></label><label class="mg-field">Custo unitário<input id="stockCostPrice" type="number" min="0" step="0.01"></label><label class="mg-field">Preço de venda<input id="stockSalePrice" type="number" min="0" step="0.01"></label><label class="mg-field mg-wide">Vincular ao item vendido<select id="stockCatalogLink"><option value="">Sem baixa automática</option></select></label></div><button class="btn primary" style="width:100%;margin-top:10px">Cadastrar item</button></form></div></div></div>';
      content.appendChild(v);
    }
  }

  async function loadCustomers(){
    if(!window.at360Api)return;
    try{const r=await window.at360Api('/api/customers');customers=r.customers||[];renderCustomers()}catch(e){document.getElementById('customerList').innerHTML='<div class="mg-empty">Não foi possível carregar os clientes.</div>'}
  }
  function renderCustomers(){
    const q=(document.getElementById('customerSearch')?.value||'').toLowerCase().replace(/\D/g,'');
    const raw=(document.getElementById('customerSearch')?.value||'').toLowerCase();
    const list=customers.filter(x=>!raw||String(x.name).toLowerCase().includes(raw)||String(x.phone).includes(q||raw));
    document.getElementById('custTotal').textContent=customers.length;
    document.getElementById('custRepeat').textContent=customers.filter(x=>x.interactions>1).length;
    document.getElementById('custRevenue').textContent=money(customers.reduce((s,x)=>s+Number(x.totalSpent||0),0));
    const cutoff=Date.now()-30*86400000;document.getElementById('custRecent').textContent=customers.filter(x=>new Date(x.lastSeen).getTime()>=cutoff).length;
    const box=document.getElementById('customerList');
    box.innerHTML=list.length?list.map(x=>'<button class="customer-card" data-customer="'+esc(x.phone)+'"><div class="customer-avatar">'+esc(initials(x.name))+'</div><div><b>'+esc(x.name)+'</b><small>'+esc(x.phone)+' • '+x.interactions+' interações</small></div><div class="customer-value">'+money(x.totalSpent)+'<span>'+x.orders+' pedidos • '+x.appointments+' agendas</span></div></button>').join(''):'<div class="mg-empty">Nenhum cliente encontrado.</div>';
    box.querySelectorAll('[data-customer]').forEach(b=>b.onclick=()=>openCustomer(b.dataset.customer));
  }
  async function openCustomer(phone){
    selectedCustomer=customers.find(x=>x.phone===phone);if(!selectedCustomer)return;
    const box=document.getElementById('customerDetail');box.innerHTML='<div class="mg-empty">Carregando histórico...</div>';
    try{
      const r=await window.at360Api('/api/customers/'+encodeURIComponent(phone));
      const x=selectedCustomer,h=r.history||[];
      box.innerHTML='<div class="customer-detail"><div class="customer-identity"><div class="customer-avatar">'+esc(initials(x.name))+'</div><div><h3>'+esc(x.name)+'</h3><p>'+esc(x.phone)+(x.email?' • '+esc(x.email):'')+'</p></div></div>'+
        '<div class="customer-stats"><div class="customer-stat"><small>INTERAÇÕES</small><b>'+x.interactions+'</b></div><div class="customer-stat"><small>RECEBIDO</small><b>'+money(x.totalSpent)+'</b></div><div class="customer-stat"><small>PEDIDOS</small><b>'+x.orders+'</b></div></div>'+
        '<div class="mg-form-grid"><label class="mg-field">Nome<input id="custEditName" value="'+esc(x.name)+'"></label><label class="mg-field">E-mail<input id="custEditEmail" value="'+esc(x.email||'')+'"></label><label class="mg-field mg-wide">Tags<input id="custEditTags" value="'+esc((x.tags||[]).join(', '))+'" placeholder="VIP, recorrente, orçamento"></label><label class="mg-field mg-wide">Observações<textarea id="custEditNotes">'+esc(x.notes||'')+'</textarea></label></div><button class="btn primary" id="saveCustomer" style="width:100%">Salvar ficha</button>'+
        '<div><h3 style="font-size:12px;margin:4px 0 8px">Histórico completo</h3><div class="history">'+(h.length?h.map(ev=>'<div class="history-item"><div class="history-icon">'+(ev.type==='order'?'▤':ev.type==='appointment'?'◷':'◎')+'</div><div><b>'+esc(ev.title)+'</b><p>'+esc(ev.detail||'')+' • '+esc(new Date(ev.date).toLocaleString('pt-BR'))+' • '+esc(ev.status)+'</p></div><div class="history-value">'+(Number(ev.value||0)>0?money(ev.value):'')+'</div></div>').join(''):'<div class="mg-empty">Sem histórico.</div>')+'</div></div></div>';
      document.getElementById('saveCustomer').onclick=saveCustomer;
    }catch(e){box.innerHTML='<div class="mg-empty">'+esc(e.message||'Erro ao carregar ficha.')+'</div>'}
  }
  async function saveCustomer(){
    if(!selectedCustomer)return;
    const body={name:document.getElementById('custEditName').value.trim(),email:document.getElementById('custEditEmail').value.trim(),tags:document.getElementById('custEditTags').value.split(',').map(x=>x.trim()).filter(Boolean),notes:document.getElementById('custEditNotes').value.trim()};
    try{await window.at360Api('/api/customers/'+encodeURIComponent(selectedCustomer.phone),{method:'PATCH',body:JSON.stringify(body)});showToast('Ficha do cliente salva');await loadCustomers();selectedCustomer=customers.find(x=>x.phone===selectedCustomer.phone);openCustomer(selectedCustomer.phone)}catch(e){showToast(e.message||'Não foi possível salvar')}
  }

  let finFilter='all';
  async function loadFinance(){
    try{
      const results=await Promise.all([window.at360Api('/api/finance/summary'),window.at360Api('/api/payments/integration').catch(()=>null)]);
      finance=results[0];paymentIntegration=results[1];renderFinance();
    }catch(e){showToast('Não foi possível carregar o financeiro')}
  }
  function renderFinance(){
    if(!finance)return;
    document.getElementById('finBalance').textContent=money(finance.balance);document.getElementById('finMonthIncome').textContent=money(finance.monthIncome);document.getElementById('finMonthExpense').textContent=money(finance.monthExpense);document.getElementById('finPending').textContent=money(finance.pendingIncome);
    const entries=(finance.entries||[]).filter(x=>finFilter==='all'||(finFilter==='expense'?x.type==='expense':x.status===finFilter));
    const box=document.getElementById('financeLedger');box.innerHTML=entries.length?entries.slice(0,120).map(x=>'<div class="ledger-row '+esc(x.type)+'"><div class="ledger-icon">'+(x.type==='income'?'↗':'↘')+'</div><div><b>'+esc(x.description)+'</b><small>'+esc(x.method)+' • '+esc(x.status)+' • '+new Date(x.createdAt).toLocaleString('pt-BR')+'</small></div><div class="ledger-amount">'+(x.type==='expense'?'- ':'+ ')+money(x.amount)+(x.status==='pending'?'<span><button data-fin-paid="'+esc(x.id)+'" style="border:0;background:#ecfdf5;color:#047857;border-radius:7px;padding:5px 7px;font-size:8px;font-weight:900">Marcar pago</button></span>':'<span>'+esc(x.status)+'</span>')+'</div></div>').join(''):'<div class="mg-empty">Nenhum lançamento neste filtro.</div>';
    box.querySelectorAll('[data-fin-paid]').forEach(b=>b.onclick=async()=>{await window.at360Api('/api/finance/entries/'+encodeURIComponent(b.dataset.finPaid),{method:'PATCH',body:JSON.stringify({status:'paid'})});loadFinance()});
    document.getElementById('financeSummaryBox').innerHTML='<div class="customer-stats"><div class="customer-stat"><small>TOTAL ENTRADAS</small><b>'+money(finance.incomePaid)+'</b></div><div class="customer-stat"><small>TOTAL SAÍDAS</small><b>'+money(finance.expensePaid)+'</b></div><div class="customer-stat"><small>SALDO</small><b>'+money(finance.balance)+'</b></div></div>';
    const f=config.finance||{};document.getElementById('pixKey').value=f.pixKey||'';document.getElementById('pixName').value=f.pixName||config.businessName||'';document.getElementById('pixCity').value=f.pixCity||'JALES';
    const status=document.getElementById('autoPixStatus'),urlBox=document.getElementById('wooviWebhookBox'),url=document.getElementById('wooviWebhookUrl');
    if(status){
      if(paymentIntegration?.configured&&paymentIntegration?.active)status.innerHTML='✅ <b>PIX automático ativo</b><br>Novos pedidos geram cobrança dinâmica e o webhook confirma pagamentos.';
      else status.innerHTML='Ainda não conectado. Cole o App ID da conta Woovi do estabelecimento.';
    }
    if(urlBox&&url){urlBox.style.display=paymentIntegration?.webhookUrl?'block':'none';url.textContent=paymentIntegration?.webhookUrl||''}
  }
  async function addFinance(e){e.preventDefault();try{await window.at360Api('/api/finance/entries',{method:'POST',body:JSON.stringify({type:document.getElementById('finType').value,amount:Number(document.getElementById('finAmount').value||0),description:document.getElementById('finDescription').value.trim()||'Lançamento manual',method:document.getElementById('finMethod').value,status:document.getElementById('finStatus').value})});e.target.reset();showToast('Lançamento adicionado');loadFinance()}catch(err){showToast(err.message||'Erro no lançamento')}}
  function savePixSettings(){config.finance={...(config.finance||{}),pixKey:document.getElementById('pixKey').value.trim(),pixName:document.getElementById('pixName').value.trim(),pixCity:document.getElementById('pixCity').value.trim().toUpperCase()};saveAll();showToast('Dados PIX salvos')}
  async function generatePix(){savePixSettings();try{const r=await window.at360Api('/api/finance/pix',{method:'POST',body:JSON.stringify({amount:Number(document.getElementById('pixAmount').value||0)})});document.getElementById('pixCode').textContent=r.payload;document.getElementById('pixQr').src='/api/qr?data='+encodeURIComponent(r.payload);document.getElementById('pixResult').classList.add('show')}catch(e){showToast(e.message||'Não foi possível gerar PIX')}}
  async function copyPix(){const t=document.getElementById('pixCode').textContent;if(!t)return;await navigator.clipboard.writeText(t);showToast('Código PIX copiado')}
  async function connectWoovi(){
    const appId=document.getElementById('wooviAppId').value.trim();
    if(!appId&&!paymentIntegration?.configured){showToast('Cole o App ID da Woovi');return}
    const b=document.getElementById('connectWoovi');b.disabled=true;b.textContent='Conectando...';
    try{
      paymentIntegration=await window.at360Api('/api/payments/integration',{method:'POST',body:JSON.stringify({provider:'woovi',appId,active:true})});
      document.getElementById('wooviAppId').value='';
      showToast('PIX automático conectado');
      renderFinance();
    }catch(e){showToast(e.message||'Não foi possível conectar a Woovi')}
    finally{b.disabled=false;b.textContent='Conectar e ativar webhook'}
  }

  async function loadTeam(){try{const r=await window.at360Api('/api/team');team=r.members||[];renderTeam()}catch(e){showToast('Não foi possível carregar equipe')}}
  function renderTeam(){
    document.getElementById('teamCount').textContent=team.filter(x=>x.active).length+' ativos • '+team.length+' cadastrados';
    const b=document.getElementById('teamList');
    b.innerHTML=team.length?team.map(x=>'<div class="team-card"><div class="team-top"><div><b>'+esc(x.name)+'</b><small>'+esc(x.role)+(x.phone?' • '+esc(x.phone):'')+'</small>'+(x.access?'<span class="access-badge">🔐 '+esc(x.access.email)+' • '+esc(x.access.role)+'</span>':'<span class="access-badge" style="background:#f1f5f9;color:#64748b">Sem login</span>')+'</div><span class="'+(x.active?'mg-on':'mg-off')+'" style="padding:5px 7px;border-radius:999px;font-size:8px;font-weight:900">'+(x.active?'Ativo':'Inativo')+'</span></div><div class="team-actions"><button class="'+(x.active?'mg-off':'mg-on')+'" data-team-toggle="'+esc(x.id)+'">'+(x.active?'Desativar':'Ativar')+'</button>'+(x.access?'<button class="'+(x.access.active?'mg-off':'mg-on')+'" data-access-toggle="'+esc(x.access.id)+'|'+(x.access.active?'0':'1')+'">'+(x.access.active?'Bloquear login':'Liberar login')+'</button><button class="mg-on" data-access-reset="'+esc(x.access.id)+'">Nova senha</button>':'')+'</div></div>').join(''):'<div class="mg-empty">Nenhum membro cadastrado.</div>';
    b.querySelectorAll('[data-team-toggle]').forEach(btn=>btn.onclick=async()=>{const x=team.find(y=>y.id===btn.dataset.teamToggle);await window.at360Api('/api/team/'+encodeURIComponent(x.id),{method:'PATCH',body:JSON.stringify({active:!x.active})});loadTeam()});
    b.querySelectorAll('[data-access-toggle]').forEach(btn=>btn.onclick=async()=>{const [id,v]=btn.dataset.accessToggle.split('|');await window.at360Api('/api/staff/'+encodeURIComponent(id),{method:'PATCH',body:JSON.stringify({active:v==='1'})});loadTeam()});
    b.querySelectorAll('[data-access-reset]').forEach(btn=>btn.onclick=async()=>{const pass=prompt('Digite a nova senha (mínimo 6 caracteres):');if(!pass)return;try{await window.at360Api('/api/staff/'+encodeURIComponent(btn.dataset.accessReset),{method:'PATCH',body:JSON.stringify({password:pass})});showToast('Senha atualizada')}catch(e){showToast(e.message)}});
  }
  function selectedPermissions(){return [...document.querySelectorAll('#teamPermissions input:checked')].map(x=>x.value)}
  function applyRolePreset(){
    const presets={manager:['central','customers','leads','orders','appointments','finance','inventory','team','growth'],attendant:['central','customers','leads','orders','appointments'],professional:['central','customers','appointments'],finance:['central','customers','finance'],stock:['central','inventory','orders']};
    const role=document.getElementById('teamAccessRole').value,p=presets[role]||[];
    document.querySelectorAll('#teamPermissions input').forEach(x=>x.checked=p.includes(x.value));
  }
  async function addTeam(e){
    e.preventDefault();
    try{
      const created=await window.at360Api('/api/team',{method:'POST',body:JSON.stringify({name:document.getElementById('teamName').value.trim(),role:document.getElementById('teamRole').value.trim(),phone:document.getElementById('teamPhone').value,email:document.getElementById('teamEmail').value.trim()})});
      const loginEmail=document.getElementById('teamLoginEmail').value.trim(),loginPass=document.getElementById('teamLoginPass').value;
      if(loginEmail||loginPass){
        if(!loginEmail||loginPass.length<6)throw new Error('Para criar o login, informe e-mail e senha com pelo menos 6 caracteres.');
        await window.at360Api('/api/team/'+encodeURIComponent(created.member.id)+'/access',{method:'POST',body:JSON.stringify({email:loginEmail,password:loginPass,role:document.getElementById('teamAccessRole').value,permissions:selectedPermissions()})});
      }
      e.target.reset();document.getElementById('teamAccessRole').value='attendant';applyRolePreset();showToast(loginEmail?'Membro e login criados':'Membro adicionado');loadTeam();
    }catch(err){showToast(err.message||'Erro ao adicionar')}
  }

  async function loadInventory(){try{const r=await window.at360Api('/api/inventory');inventory=r.items||[];renderInventory()}catch(e){showToast('Não foi possível carregar estoque')}}
  function renderInventory(){
    const active=inventory.filter(x=>x.active),low=active.filter(x=>x.quantity<=x.minQuantity);
    document.getElementById('stockTotal').textContent=active.length;document.getElementById('stockLow').textContent=low.length;document.getElementById('stockCost').textContent=money(active.reduce((s,x)=>s+x.quantity*x.costPrice,0));document.getElementById('stockSale').textContent=money(active.reduce((s,x)=>s+x.quantity*x.salePrice,0));
    const catalog=(config?.delivery?.catalog||[]).filter(x=>x.kind!=='addon');
    const select=document.getElementById('stockCatalogLink');if(select){const current=select.value;select.innerHTML='<option value="">Sem baixa automática</option>'+catalog.map(x=>'<option value="'+esc(x.id)+'">'+esc(x.name)+'</option>').join('');select.value=current}
    const names=new Map(catalog.map(x=>[String(x.id),x.name]));
    const b=document.getElementById('stockList');b.innerHTML=inventory.length?inventory.map(x=>'<div class="stock-card '+(x.active&&x.quantity<=x.minQuantity?'stock-low':'')+'"><div class="stock-top"><div><b>'+esc(x.name)+'</b><small>'+esc(x.category||'Sem categoria')+(x.sku?' • '+esc(x.sku):'')+(x.catalogItemId?' • baixa: '+esc(names.get(String(x.catalogItemId))||'produto vinculado'):'')+'</small>'+(x.active&&x.quantity<=x.minQuantity?'<span class="stock-badge">⚠ Repor estoque</span>':'')+'</div><div class="stock-qty">'+x.quantity+'<span>'+esc(x.unit)+' • mínimo '+x.minQuantity+'</span></div></div><div class="stock-actions"><button class="mg-off" data-stock-delta="'+esc(x.id)+'|-1">− 1</button><button class="mg-on" data-stock-delta="'+esc(x.id)+'|1">＋ 1</button><button class="'+(x.active?'mg-off':'mg-on')+'" data-stock-toggle="'+esc(x.id)+'">'+(x.active?'Desativar':'Ativar')+'</button></div></div>').join(''):'<div class="mg-empty">Nenhum item cadastrado.</div>';
    b.querySelectorAll('[data-stock-delta]').forEach(btn=>btn.onclick=async()=>{const [id,d]=btn.dataset.stockDelta.split('|'),x=inventory.find(y=>y.id===id);await window.at360Api('/api/inventory/'+encodeURIComponent(id),{method:'PATCH',body:JSON.stringify({quantity:Math.max(0,x.quantity+Number(d))})});loadInventory()});
    b.querySelectorAll('[data-stock-toggle]').forEach(btn=>btn.onclick=async()=>{const x=inventory.find(y=>y.id===btn.dataset.stockToggle);await window.at360Api('/api/inventory/'+encodeURIComponent(x.id),{method:'PATCH',body:JSON.stringify({active:!x.active})});loadInventory()});
  }
  async function addInventory(e){e.preventDefault();try{await window.at360Api('/api/inventory',{method:'POST',body:JSON.stringify({name:document.getElementById('stockName').value.trim(),sku:document.getElementById('stockSku').value.trim(),category:document.getElementById('stockCategory').value.trim(),quantity:Number(document.getElementById('stockQty').value||0),minQuantity:Number(document.getElementById('stockMin').value||0),unit:document.getElementById('stockUnit').value.trim()||'un',costPrice:Number(document.getElementById('stockCostPrice').value||0),salePrice:Number(document.getElementById('stockSalePrice').value||0),catalogItemId:document.getElementById('stockCatalogLink').value})});e.target.reset();document.getElementById('stockUnit').value='un';showToast('Item cadastrado');loadInventory()}catch(err){showToast(err.message||'Erro ao cadastrar item')}}

  function loadView(name){if(name==='customers')loadCustomers();if(name==='finance')loadFinance();if(name==='team')loadTeam();if(name==='inventory')loadInventory()}
  function bind(){
    document.getElementById('customersRefresh').onclick=loadCustomers;document.getElementById('customerSearch').oninput=renderCustomers;
    document.getElementById('financeRefresh').onclick=loadFinance;document.getElementById('financeForm').onsubmit=addFinance;document.getElementById('savePixSettings').onclick=savePixSettings;document.getElementById('generatePix').onclick=generatePix;document.getElementById('copyPix').onclick=copyPix;document.getElementById('connectWoovi').onclick=connectWoovi;
    document.querySelectorAll('[data-fin-filter]').forEach(b=>b.onclick=()=>{finFilter=b.dataset.finFilter;document.querySelectorAll('[data-fin-filter]').forEach(x=>x.classList.toggle('active',x===b));renderFinance()});
    document.getElementById('teamRefresh').onclick=loadTeam;document.getElementById('teamForm').onsubmit=addTeam;document.getElementById('teamAccessRole').onchange=applyRolePreset;
    document.getElementById('inventoryRefresh').onclick=loadInventory;document.getElementById('stockForm').onsubmit=addInventory;
  }

  installNav();installViews();
  if(typeof viewMeta!=='undefined'){viewMeta.customers=['Clientes 360','Histórico e relacionamento com cada cliente'];viewMeta.finance=['Financeiro 360','Caixa, recebimentos, despesas e PIX'];viewMeta.team=['Equipe 360','Pessoas e funções da operação'];viewMeta.inventory=['Estoque 360','Produtos, insumos e alertas de reposição']}
  bind();
  const oldUpdate=typeof updateUI==='function'?updateUI:null;if(oldUpdate)updateUI=function(){oldUpdate();applyVertical()};
  setTimeout(()=>{applyVertical();if(window.at360ApplyPermissions)window.at360ApplyPermissions();loadCustomers();applyRolePreset()},900);
})();