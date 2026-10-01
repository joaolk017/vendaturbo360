(function(){
  if(window.__AT360_CENTRAL__)return;
  window.__AT360_CENTRAL__=true;

  const css=document.createElement('style');
  css.textContent=`
    .ops-shell{display:grid;gap:16px}
    .ops-hero{background:linear-gradient(135deg,#0b1220,#172554 62%,#312e81);color:#fff;border-radius:24px;padding:22px;display:grid;grid-template-columns:minmax(0,1.25fr) minmax(260px,.75fr);gap:18px;align-items:center;box-shadow:0 18px 50px rgba(15,23,42,.16)}
    .ops-hero small{display:inline-flex;align-items:center;gap:6px;color:#c7d2fe;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.08em}
    .ops-hero h1{font-size:30px;line-height:1.06;letter-spacing:-.045em;margin:8px 0}.ops-hero p{margin:0;color:#cbd5e1;font-size:12px;line-height:1.55;max-width:680px}
    .ops-health{border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.07);border-radius:18px;padding:16px}.ops-health-top{display:flex;align-items:center;justify-content:space-between;gap:10px}.ops-health-top b{font-size:13px}.ops-live{display:inline-flex;align-items:center;gap:6px;border-radius:999px;background:rgba(34,197,94,.13);color:#bbf7d0;padding:6px 8px;font-size:9px;font-weight:900}.ops-live i{width:6px;height:6px;border-radius:50%;background:#22c55e}
    .ops-health strong{display:block;font-size:30px;margin-top:14px}.ops-health span{display:block;color:#cbd5e1;font-size:10px;margin-top:4px;line-height:1.4}
    .ops-kpis{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}.ops-kpi{background:#fff;border:1px solid var(--line);border-radius:17px;padding:15px;cursor:pointer;transition:.18s;min-width:0}.ops-kpi:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(15,23,42,.07)}.ops-kpi-top{display:flex;align-items:center;justify-content:space-between;gap:8px}.ops-kpi-icon{width:34px;height:34px;border-radius:11px;background:#eef2ff;display:grid;place-items:center}.ops-kpi small{color:#64748b;font-size:9px;font-weight:900}.ops-kpi strong{display:block;font-size:25px;margin-top:10px}.ops-kpi p{margin:3px 0 0;font-size:9px;color:#94a3b8}
    .ops-main-grid{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(310px,.65fr);gap:16px}.ops-panel{background:#fff;border:1px solid var(--line);border-radius:20px;overflow:hidden;box-shadow:0 9px 26px rgba(15,23,42,.035)}.ops-panel-head{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:16px 17px;border-bottom:1px solid var(--line)}.ops-panel-head h3{margin:0;font-size:14px}.ops-panel-head p{margin:3px 0 0;font-size:10px;color:#64748b}.ops-panel-head button{border:1px solid var(--line);background:#fff;border-radius:9px;padding:7px 9px;font-size:9px;font-weight:900}
    .ops-feed{display:grid}.ops-item{display:grid;grid-template-columns:40px minmax(0,1fr) auto;gap:11px;padding:13px 16px;border-bottom:1px solid #eef2f7;align-items:center}.ops-item:last-child{border-bottom:0}.ops-item-icon{width:38px;height:38px;border-radius:12px;background:#f1f5f9;display:grid;place-items:center;font-size:17px}.ops-item b{display:block;font-size:11px}.ops-item p{margin:3px 0 0;color:#64748b;font-size:9.5px;line-height:1.4}.ops-item-actions{display:flex;gap:6px}.ops-item-actions button{border:0;border-radius:9px;padding:7px 8px;font-size:9px;font-weight:900;background:#eef2ff;color:#4338ca}.ops-item-actions button.done{background:#ecfdf5;color:#047857}
    .ops-empty{padding:28px;text-align:center;color:#64748b;font-size:10px}
    .ops-side{display:grid;gap:16px;align-content:start}.ops-quick{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:15px}.ops-quick button{border:1px solid #e2e8f0;background:#fff;border-radius:12px;padding:12px 9px;font-size:10px;font-weight:900;text-align:left}.ops-quick button span{display:block;font-size:18px;margin-bottom:6px}.ops-quick button small{display:block;color:#64748b;font-size:8.5px;margin-top:3px;line-height:1.3}
    .ops-task-form{padding:15px;display:grid;gap:10px}.ops-task-form label{font-size:9px;font-weight:900;color:#475569}.ops-task-form input,.ops-task-form textarea,.ops-task-form select{width:100%;margin-top:5px;border:1px solid #dbe3ee;border-radius:10px;padding:10px 11px;outline:none;background:#fff}.ops-task-form textarea{min-height:65px;resize:vertical}.ops-task-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ops-task-form .btn{width:100%}
    .ops-modules{display:grid;gap:7px;padding:15px}.ops-module{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px;border:1px solid #e2e8f0;border-radius:11px;background:#f8fafc}.ops-module div{display:flex;align-items:center;gap:8px}.ops-module b{font-size:10px}.ops-module small{font-size:8.5px;color:#64748b}.ops-module i{width:8px;height:8px;border-radius:50%;background:#22c55e}
    .ops-refreshing{opacity:.65;pointer-events:none}
    @media(max-width:1180px){.ops-kpis{grid-template-columns:repeat(3,1fr)}.ops-main-grid{grid-template-columns:1fr}.ops-hero{grid-template-columns:1fr}}
    @media(max-width:760px),(pointer:coarse) and (max-device-width:900px){
      .ops-shell{gap:11px}.ops-hero{padding:16px;border-radius:18px;gap:12px}.ops-hero h1{font-size:23px}.ops-hero p{font-size:10.5px}.ops-health{padding:13px}
      .ops-kpis{grid-template-columns:1fr 1fr;gap:8px}.ops-kpi{padding:12px;border-radius:14px}.ops-kpi strong{font-size:21px;margin-top:7px}.ops-kpi:last-child{grid-column:1/-1}
      .ops-main-grid{grid-template-columns:1fr;gap:11px}.ops-panel{border-radius:16px}.ops-panel-head{padding:13px}.ops-item{grid-template-columns:34px minmax(0,1fr);padding:11px 12px;gap:9px}.ops-item-icon{width:34px;height:34px}.ops-item-actions{grid-column:2;justify-content:flex-start}.ops-quick{padding:12px}.ops-task-form{padding:12px}.ops-task-form-grid{grid-template-columns:1fr}
    }
  `;
  document.head.appendChild(css);

  let summary=null;
  let loading=false;

  function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function money(v){return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
  function installNav(){
    if(document.querySelector('[data-view="central"]'))return;
    const dashboard=document.querySelector('.nav-btn[data-view="dashboard"]');
    if(!dashboard)return;
    const b=document.createElement('button');b.className='nav-btn';b.dataset.view='central';
    b.innerHTML='<span class="ico">⚡</span>Central 360 <span id="opsNavBadge" style="margin-left:auto;background:#7c3aed;color:white;padding:2px 7px;border-radius:999px;font-size:9px">0</span>';
    dashboard.before(b);
    b.addEventListener('click',()=>{goView('central');loadSummary()});
  }
  function installView(){
    if(document.getElementById('view-central'))return;
    const view=document.createElement('section');view.className='view';view.id='view-central';
    view.innerHTML=`
      <div class="ops-shell" id="opsShell">
        <section class="ops-hero">
          <div><small>⚡ Central Operacional 360</small><h1>O que precisa da sua atenção agora.</h1><p>Pedidos, agenda, leads, pagamentos e tarefas em uma única fila operacional, atualizada automaticamente.</p></div>
          <div class="ops-health"><div class="ops-health-top"><b>Saúde da operação</b><span class="ops-live"><i></i> AO VIVO</span></div><strong id="opsHealthScore">100%</strong><span id="opsHealthText">Tudo sob controle.</span></div>
        </section>

        <section class="ops-kpis">
          <article class="ops-kpi" data-go="leads"><div class="ops-kpi-top"><div class="ops-kpi-icon">◎</div><small>CRM</small></div><strong id="opsNewLeads">0</strong><p>leads novos</p></article>
          <article class="ops-kpi" data-go="orders"><div class="ops-kpi-top"><div class="ops-kpi-icon">▤</div><small>OPERAÇÃO</small></div><strong id="opsOpenOrders">0</strong><p>pedidos abertos</p></article>
          <article class="ops-kpi" data-go="finance"><div class="ops-kpi-top"><div class="ops-kpi-icon">R$</div><small>FINANCEIRO</small></div><strong id="opsPendingPayments">0</strong><p>pagamentos pendentes</p></article>
          <article class="ops-kpi" data-go="appointments"><div class="ops-kpi-top"><div class="ops-kpi-icon">◷</div><small>AGENDA</small></div><strong id="opsTodayAppointments">0</strong><p>horários hoje</p></article>
          <article class="ops-kpi" data-focus="tasks"><div class="ops-kpi-top"><div class="ops-kpi-icon">✓</div><small>EQUIPE</small></div><strong id="opsOpenTasks">0</strong><p>tarefas abertas</p></article>
        </section>

        <section class="ops-main-grid">
          <div class="ops-panel">
            <div class="ops-panel-head"><div><h3>Fila de atenção</h3><p>Prioridades reais da operação neste momento</p></div><button id="opsRefresh">↻ Atualizar</button></div>
            <div class="ops-feed" id="opsFeed"><div class="ops-empty">Carregando operação...</div></div>
          </div>
          <aside class="ops-side">
            <div class="ops-panel"><div class="ops-panel-head"><div><h3>Ações rápidas</h3><p>Vá direto ao que precisa fazer</p></div></div><div class="ops-quick" id="opsQuick"></div></div>
            <div class="ops-panel" id="opsTasksPanel"><div class="ops-panel-head"><div><h3>Nova tarefa</h3><p>Organize pendências internas</p></div></div><form class="ops-task-form" id="opsTaskForm">
              <label>Título<input id="opsTaskTitle" maxlength="180" placeholder="Ex.: Retornar orçamento do João"></label>
              <label>Detalhes<textarea id="opsTaskDetails" placeholder="Opcional"></textarea></label>
              <div class="ops-task-form-grid"><label>Prioridade<select id="opsTaskPriority"><option value="normal">Normal</option><option value="high">Alta</option><option value="urgent">Urgente</option><option value="low">Baixa</option></select></label><label>Prazo<input id="opsTaskDue" type="datetime-local"></label></div>
              <button class="btn primary">Adicionar tarefa</button>
            </form></div>
            <div class="ops-panel"><div class="ops-panel-head"><div><h3>Módulos ativos</h3><p>Central adaptada ao segmento</p></div></div><div class="ops-modules" id="opsModules"></div></div>
          </aside>
        </section>
      </div>`;
    const content=document.querySelector('.content'),dashboard=document.getElementById('view-dashboard');
    if(content&&dashboard)content.insertBefore(view,dashboard);else if(content)content.prepend(view);
  }
  function moduleConfig(){
    const t=config?.template||'barbearia';
    const commerce=['marmitex','restaurante','acai','loja'].includes(t);
    const schedule=['barbearia','estetica','clinica','oficina','imobiliaria'].includes(t);
    const stock=['marmitex','restaurante','acai','loja','oficina','barbearia'].includes(t);
    return [
      {name:'Chatbot + IA',sub:'Atendimento e qualificação',on:true,icon:'🧠',view:'chatbot'},
      {name:'CRM 360',sub:'Leads e oportunidades',on:true,icon:'◎',view:'leads'},
      {name:'Clientes 360',sub:'Histórico e relacionamento',on:true,icon:'👥',view:'customers'},
      {name:'Financeiro 360',sub:'Caixa, PIX e movimentações',on:true,icon:'R
      {name:'Cardápio / Catálogo',sub:'Produtos e adicionais',on:commerce,icon:'🍽',view:'menu'},
      {name:'Agenda 360',sub:'Horários e profissionais',on:schedule,icon:'◷',view:'appointments'},
      {name:'Growth 360',sub:'Inteligência de conversão',on:true,icon:'↗',view:'growth'}
    ];
  }
  function renderModules(){
    const box=document.getElementById('opsModules');if(!box)return;
    box.innerHTML=moduleConfig().filter(x=>x.on).map(x=>'<button class="ops-module" data-module="'+esc(x.view)+'" style="width:100%;border:0;text-align:left"><div><span>'+x.icon+'</span><span><b>'+esc(x.name)+'</b><small>'+esc(x.sub)+'</small></span></div><i></i></button>').join('');
    box.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>goView(b.dataset.module));
  }
  function quickButtons(){
    const t=config?.template||'barbearia',commerce=['marmitex','restaurante','acai','loja'].includes(t),schedule=['barbearia','estetica','clinica','oficina','imobiliaria'].includes(t),stock=['marmitex','restaurante','acai','loja','oficina','barbearia'].includes(t);
    const arr=[
      {icon:'💬',title:'Testar chatbot',sub:'Abrir atendimento',action:'chat'},
      {icon:'👥',title:'Clientes',sub:'Histórico completo',view:'customers'},
      {icon:'R
    if(commerce)arr.push({icon:'▤',title:'Pedidos',sub:'Fila operacional',view:'orders'},{icon:'🍽',title:'Cardápio',sub:'Editar produtos',view:'menu'});
    if(schedule)arr.push({icon:'◷',title:'Agenda',sub:'Horários marcados',view:'appointments'},{icon:'📅',title:'Página cliente',sub:'Testar marcação',action:'public'});
    arr.push({icon:'↗',title:'Growth',sub:'Conversão e gargalos',view:'growth'});
    return arr;
  }
  function renderQuick(){
    const box=document.getElementById('opsQuick');if(!box)return;
    box.innerHTML=quickButtons().map((x,i)=>'<button data-q="'+i+'"><span>'+x.icon+'</span>'+esc(x.title)+'<small>'+esc(x.sub)+'</small></button>').join('');
    box.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{
      const x=quickButtons()[Number(b.dataset.q)];
      if(x.view)goView(x.view);else if(x.action==='chat'&&typeof openChat==='function')openChat();else if(x.action==='public'&&typeof openPublicBot==='function')openPublicBot();
    });
  }
  function feedItems(){
    if(!summary)return[];
    const out=[];
    (summary.orders||[]).forEach(o=>{
      out.push({type:'order',id:o.id,priority:o.status==='new'?0:2,icon:'🛎️',title:'Pedido '+o.code+' • '+o.customerName,sub:(o.status==='new'?'Novo pedido':'Em andamento')+' • '+money(o.total)+(o.paymentStatus==='pending'?' • pagamento pendente':''),view:'orders'});
    });
    (summary.appointments||[]).forEach(a=>{
      out.push({type:'appointment',id:a.id,priority:a.date===new Date().toISOString().slice(0,10)?0:2,icon:'✂️',title:a.time+' • '+a.customerName,sub:a.serviceName+' • '+a.professionalName+' • '+String(a.date).split('-').reverse().join('/'),view:'appointments'});
    });
    (summary.leads||[]).forEach(l=>{
      out.push({type:'lead',id:l.id,priority:1,icon:'◎',title:'Novo lead • '+l.name,sub:l.interest+' • '+l.phone,view:'leads'});
    });
    (summary.tasks||[]).forEach(t=>{
      out.push({type:'task',id:t.id,priority:t.priority==='urgent'?0:t.priority==='high'?1:3,icon:'✓',title:t.title,sub:(t.priority==='urgent'?'Urgente • ':t.priority==='high'?'Alta prioridade • ':'')+(t.details||'Tarefa interna'),task:t});
    });
    (summary.stock||[]).forEach(s=>{
      out.push({type:'stock',id:s.id,priority:1,icon:'📦',title:'Estoque baixo • '+s.name,sub:'Restam '+s.quantity+' '+s.unit+' • mínimo '+s.minQuantity,view:'inventory'});
    });
    return out.sort((a,b)=>a.priority-b.priority).slice(0,18);
  }
  function renderFeed(){
    const box=document.getElementById('opsFeed');if(!box)return;
    const rows=feedItems();
    if(!rows.length){box.innerHTML='<div class="ops-empty">✅ Nada urgente agora. Sua operação está sob controle.</div>';return}
    box.innerHTML=rows.map((x,i)=>'<article class="ops-item"><div class="ops-item-icon">'+x.icon+'</div><div><b>'+esc(x.title)+'</b><p>'+esc(x.sub)+'</p></div><div class="ops-item-actions">'+(x.type==='task'?'<button class="done" data-task-done="'+esc(x.id)+'">Concluir</button>':'<button data-feed-go="'+i+'">Abrir</button>')+'</div></article>').join('');
    box.querySelectorAll('[data-feed-go]').forEach(b=>{b.onclick=()=>{const x=rows[Number(b.dataset.feedGo)];if(x?.view)goView(x.view)}});
    box.querySelectorAll('[data-task-done]').forEach(b=>b.onclick=async()=>{
      try{await window.at360Api('/api/tasks/'+encodeURIComponent(b.dataset.taskDone),{method:'PATCH',body:JSON.stringify({status:'done'})});showToast('Tarefa concluída');loadSummary()}catch(e){showToast(e.message||'Não foi possível concluir')}
    });
  }
  function renderCounters(){
    const c=summary?.counters||{};
    const map={opsNewLeads:c.newLeads||0,opsOpenOrders:c.openOrders||0,opsPendingPayments:c.pendingPayments||0,opsTodayAppointments:c.todayAppointments||0,opsOpenTasks:c.openTasks||0};
    Object.entries(map).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v});
    const total=(c.newLeads||0)+(c.openOrders||0)+(c.pendingPayments||0)+(c.todayAppointments||0)+(c.openTasks||0)+(c.lowStock||0);
    const badge=document.getElementById('opsNavBadge');if(badge)badge.textContent=total;
    const urgent=(c.openOrders||0)+(c.pendingPayments||0)+(c.openTasks||0)+(c.lowStock||0);
    const score=Math.max(35,100-Math.min(65,urgent*6+(c.newLeads||0)*2));
    const hs=document.getElementById('opsHealthScore'),ht=document.getElementById('opsHealthText');
    if(hs)hs.textContent=score+'%';
    if(ht)ht.textContent=urgent===0?'Tudo sob controle.':urgent<=3?'Alguns itens precisam de atenção.':'Há prioridades aguardando ação.';
  }
  async function loadSummary(){
    if(loading||!window.at360Api)return;
    loading=true;document.getElementById('opsShell')?.classList.add('ops-refreshing');
    try{
      summary=await window.at360Api('/api/operations/summary');
      renderCounters();renderFeed();renderQuick();renderModules();
    }catch(e){
      const box=document.getElementById('opsFeed');if(box)box.innerHTML='<div class="ops-empty">Não foi possível carregar a central agora.</div>';
    }finally{loading=false;document.getElementById('opsShell')?.classList.remove('ops-refreshing')}
  }
  async function addTask(e){
    e.preventDefault();if(!window.at360Api)return;
    const title=document.getElementById('opsTaskTitle').value.trim();
    if(!title){showToast('Informe o título da tarefa');return}
    const dueRaw=document.getElementById('opsTaskDue').value;
    try{
      await window.at360Api('/api/tasks',{method:'POST',body:JSON.stringify({title,details:document.getElementById('opsTaskDetails').value.trim(),priority:document.getElementById('opsTaskPriority').value,dueAt:dueRaw?new Date(dueRaw).toISOString():null})});
      e.target.reset();showToast('Tarefa adicionada');loadSummary();
    }catch(err){showToast(err.message||'Não foi possível criar a tarefa')}
  }
  function bind(){
    document.getElementById('opsRefresh').onclick=loadSummary;
    document.getElementById('opsTaskForm').onsubmit=addTask;
    document.querySelectorAll('.ops-kpi[data-go]').forEach(x=>x.onclick=()=>goView(x.dataset.go));
    document.querySelector('.ops-kpi[data-focus="tasks"]').onclick=()=>document.getElementById('opsTasksPanel').scrollIntoView({behavior:'smooth',block:'center'});
  }

  installNav();installView();
  if(typeof viewMeta!=='undefined')viewMeta.central=['Central Operacional 360','Tudo o que precisa da sua atenção em um só lugar'];
  bind();renderQuick();renderModules();

  let tries=0;
  const ready=setInterval(()=>{
    tries++;
    if(window.at360Api){clearInterval(ready);loadSummary();setTimeout(()=>{
      const p=new URLSearchParams(location.search).get('view');
      if(p&&document.getElementById('view-'+p))goView(p);
      else if(!location.hash)goView('central');
    },350)}
    if(tries>60)clearInterval(ready);
  },200);
  setInterval(()=>{if(document.getElementById('view-central')?.classList.contains('active'))loadSummary()},15000);
  window.at360LoadOperations=loadSummary;
})();,view:'finance'},
      {name:'Equipe 360',sub:'Pessoas e funções',on:true,icon:'♟',view:'team'},
      {name:'Estoque 360',sub:'Produtos e reposição',on:stock,icon:'▣',view:'inventory'},
      {name:'Pedidos',sub:'Venda, entrega e retirada',on:commerce,icon:'▤',view:'orders'},
      {name:'Cardápio / Catálogo',sub:'Produtos e adicionais',on:commerce,icon:'🍽',view:'menu'},
      {name:'Agenda 360',sub:'Horários e profissionais',on:schedule,icon:'◷',view:'appointments'},
      {name:'Growth 360',sub:'Inteligência de conversão',on:true,icon:'↗',view:'growth'}
    ];
  }
  function renderModules(){
    const box=document.getElementById('opsModules');if(!box)return;
    box.innerHTML=moduleConfig().filter(x=>x.on).map(x=>'<button class="ops-module" data-module="'+esc(x.view)+'" style="width:100%;border:0;text-align:left"><div><span>'+x.icon+'</span><span><b>'+esc(x.name)+'</b><small>'+esc(x.sub)+'</small></span></div><i></i></button>').join('');
    box.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>goView(b.dataset.module));
  }
  function quickButtons(){
    const t=config?.template||'barbearia',commerce=['marmitex','restaurante','acai','loja'].includes(t),schedule=['barbearia','estetica','clinica','oficina','imobiliaria'].includes(t);
    const arr=[
      {icon:'💬',title:'Testar chatbot',sub:'Abrir atendimento',action:'chat'},
      {icon:'◎',title:'Ver leads',sub:'CRM e contatos',view:'leads'}
    ];
    if(commerce)arr.push({icon:'▤',title:'Pedidos',sub:'Fila operacional',view:'orders'},{icon:'🍽',title:'Cardápio',sub:'Editar produtos',view:'menu'});
    if(schedule)arr.push({icon:'◷',title:'Agenda',sub:'Horários marcados',view:'appointments'},{icon:'📅',title:'Página cliente',sub:'Testar marcação',action:'public'});
    arr.push({icon:'↗',title:'Growth',sub:'Conversão e gargalos',view:'growth'});
    return arr;
  }
  function renderQuick(){
    const box=document.getElementById('opsQuick');if(!box)return;
    box.innerHTML=quickButtons().map((x,i)=>'<button data-q="'+i+'"><span>'+x.icon+'</span>'+esc(x.title)+'<small>'+esc(x.sub)+'</small></button>').join('');
    box.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{
      const x=quickButtons()[Number(b.dataset.q)];
      if(x.view)goView(x.view);else if(x.action==='chat'&&typeof openChat==='function')openChat();else if(x.action==='public'&&typeof openPublicBot==='function')openPublicBot();
    });
  }
  function feedItems(){
    if(!summary)return[];
    const out=[];
    (summary.orders||[]).forEach(o=>{
      out.push({type:'order',id:o.id,priority:o.status==='new'?0:2,icon:'🛎️',title:'Pedido '+o.code+' • '+o.customerName,sub:(o.status==='new'?'Novo pedido':'Em andamento')+' • '+money(o.total)+(o.paymentStatus==='pending'?' • pagamento pendente':''),view:'orders'});
    });
    (summary.appointments||[]).forEach(a=>{
      out.push({type:'appointment',id:a.id,priority:a.date===new Date().toISOString().slice(0,10)?0:2,icon:'✂️',title:a.time+' • '+a.customerName,sub:a.serviceName+' • '+a.professionalName+' • '+String(a.date).split('-').reverse().join('/'),view:'appointments'});
    });
    (summary.leads||[]).forEach(l=>{
      out.push({type:'lead',id:l.id,priority:1,icon:'◎',title:'Novo lead • '+l.name,sub:l.interest+' • '+l.phone,view:'leads'});
    });
    (summary.tasks||[]).forEach(t=>{
      out.push({type:'task',id:t.id,priority:t.priority==='urgent'?0:t.priority==='high'?1:3,icon:'✓',title:t.title,sub:(t.priority==='urgent'?'Urgente • ':t.priority==='high'?'Alta prioridade • ':'')+(t.details||'Tarefa interna'),task:t});
    });
    return out.sort((a,b)=>a.priority-b.priority).slice(0,18);
  }
  function renderFeed(){
    const box=document.getElementById('opsFeed');if(!box)return;
    const rows=feedItems();
    if(!rows.length){box.innerHTML='<div class="ops-empty">✅ Nada urgente agora. Sua operação está sob controle.</div>';return}
    box.innerHTML=rows.map((x,i)=>'<article class="ops-item"><div class="ops-item-icon">'+x.icon+'</div><div><b>'+esc(x.title)+'</b><p>'+esc(x.sub)+'</p></div><div class="ops-item-actions">'+(x.type==='task'?'<button class="done" data-task-done="'+esc(x.id)+'">Concluir</button>':'<button data-feed-go="'+i+'">Abrir</button>')+'</div></article>').join('');
    box.querySelectorAll('[data-feed-go]').forEach(b=>{b.onclick=()=>{const x=rows[Number(b.dataset.feedGo)];if(x?.view)goView(x.view)}});
    box.querySelectorAll('[data-task-done]').forEach(b=>b.onclick=async()=>{
      try{await window.at360Api('/api/tasks/'+encodeURIComponent(b.dataset.taskDone),{method:'PATCH',body:JSON.stringify({status:'done'})});showToast('Tarefa concluída');loadSummary()}catch(e){showToast(e.message||'Não foi possível concluir')}
    });
  }
  function renderCounters(){
    const c=summary?.counters||{};
    const map={opsNewLeads:c.newLeads||0,opsOpenOrders:c.openOrders||0,opsPendingPayments:c.pendingPayments||0,opsTodayAppointments:c.todayAppointments||0,opsOpenTasks:c.openTasks||0};
    Object.entries(map).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v});
    const total=(c.newLeads||0)+(c.openOrders||0)+(c.pendingPayments||0)+(c.todayAppointments||0)+(c.openTasks||0);
    const badge=document.getElementById('opsNavBadge');if(badge)badge.textContent=total;
    const urgent=(c.openOrders||0)+(c.pendingPayments||0)+(c.openTasks||0);
    const score=Math.max(35,100-Math.min(65,urgent*6+(c.newLeads||0)*2));
    const hs=document.getElementById('opsHealthScore'),ht=document.getElementById('opsHealthText');
    if(hs)hs.textContent=score+'%';
    if(ht)ht.textContent=urgent===0?'Tudo sob controle.':urgent<=3?'Alguns itens precisam de atenção.':'Há prioridades aguardando ação.';
  }
  async function loadSummary(){
    if(loading||!window.at360Api)return;
    loading=true;document.getElementById('opsShell')?.classList.add('ops-refreshing');
    try{
      summary=await window.at360Api('/api/operations/summary');
      renderCounters();renderFeed();renderQuick();renderModules();
    }catch(e){
      const box=document.getElementById('opsFeed');if(box)box.innerHTML='<div class="ops-empty">Não foi possível carregar a central agora.</div>';
    }finally{loading=false;document.getElementById('opsShell')?.classList.remove('ops-refreshing')}
  }
  async function addTask(e){
    e.preventDefault();if(!window.at360Api)return;
    const title=document.getElementById('opsTaskTitle').value.trim();
    if(!title){showToast('Informe o título da tarefa');return}
    const dueRaw=document.getElementById('opsTaskDue').value;
    try{
      await window.at360Api('/api/tasks',{method:'POST',body:JSON.stringify({title,details:document.getElementById('opsTaskDetails').value.trim(),priority:document.getElementById('opsTaskPriority').value,dueAt:dueRaw?new Date(dueRaw).toISOString():null})});
      e.target.reset();showToast('Tarefa adicionada');loadSummary();
    }catch(err){showToast(err.message||'Não foi possível criar a tarefa')}
  }
  function bind(){
    document.getElementById('opsRefresh').onclick=loadSummary;
    document.getElementById('opsTaskForm').onsubmit=addTask;
    document.querySelectorAll('.ops-kpi[data-go]').forEach(x=>x.onclick=()=>goView(x.dataset.go));
    document.querySelector('.ops-kpi[data-focus="tasks"]').onclick=()=>document.getElementById('opsTasksPanel').scrollIntoView({behavior:'smooth',block:'center'});
  }

  installNav();installView();
  if(typeof viewMeta!=='undefined')viewMeta.central=['Central Operacional 360','Tudo o que precisa da sua atenção em um só lugar'];
  bind();renderQuick();renderModules();

  let tries=0;
  const ready=setInterval(()=>{
    tries++;
    if(window.at360Api){clearInterval(ready);loadSummary();setTimeout(()=>{
      const p=new URLSearchParams(location.search).get('view');
      if(p&&document.getElementById('view-'+p))goView(p);
      else if(!location.hash)goView('central');
    },350)}
    if(tries>60)clearInterval(ready);
  },200);
  setInterval(()=>{if(document.getElementById('view-central')?.classList.contains('active'))loadSummary()},15000);
  window.at360LoadOperations=loadSummary;
})();,title:'Financeiro',sub:'Caixa e PIX',view:'finance'},
      {icon:'♟',title:'Equipe',sub:'Pessoas e funções',view:'team'}
    ];
    if(stock)arr.push({icon:'▣',title:'Estoque',sub:'Alertas e quantidades',view:'inventory'});
    if(commerce)arr.push({icon:'▤',title:'Pedidos',sub:'Fila operacional',view:'orders'},{icon:'🍽',title:'Cardápio',sub:'Editar produtos',view:'menu'});
    if(schedule)arr.push({icon:'◷',title:'Agenda',sub:'Horários marcados',view:'appointments'},{icon:'📅',title:'Página cliente',sub:'Testar marcação',action:'public'});
    arr.push({icon:'↗',title:'Growth',sub:'Conversão e gargalos',view:'growth'});
    return arr;
  }
  function renderQuick(){
    const box=document.getElementById('opsQuick');if(!box)return;
    box.innerHTML=quickButtons().map((x,i)=>'<button data-q="'+i+'"><span>'+x.icon+'</span>'+esc(x.title)+'<small>'+esc(x.sub)+'</small></button>').join('');
    box.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{
      const x=quickButtons()[Number(b.dataset.q)];
      if(x.view)goView(x.view);else if(x.action==='chat'&&typeof openChat==='function')openChat();else if(x.action==='public'&&typeof openPublicBot==='function')openPublicBot();
    });
  }
  function feedItems(){
    if(!summary)return[];
    const out=[];
    (summary.orders||[]).forEach(o=>{
      out.push({type:'order',id:o.id,priority:o.status==='new'?0:2,icon:'🛎️',title:'Pedido '+o.code+' • '+o.customerName,sub:(o.status==='new'?'Novo pedido':'Em andamento')+' • '+money(o.total)+(o.paymentStatus==='pending'?' • pagamento pendente':''),view:'orders'});
    });
    (summary.appointments||[]).forEach(a=>{
      out.push({type:'appointment',id:a.id,priority:a.date===new Date().toISOString().slice(0,10)?0:2,icon:'✂️',title:a.time+' • '+a.customerName,sub:a.serviceName+' • '+a.professionalName+' • '+String(a.date).split('-').reverse().join('/'),view:'appointments'});
    });
    (summary.leads||[]).forEach(l=>{
      out.push({type:'lead',id:l.id,priority:1,icon:'◎',title:'Novo lead • '+l.name,sub:l.interest+' • '+l.phone,view:'leads'});
    });
    (summary.tasks||[]).forEach(t=>{
      out.push({type:'task',id:t.id,priority:t.priority==='urgent'?0:t.priority==='high'?1:3,icon:'✓',title:t.title,sub:(t.priority==='urgent'?'Urgente • ':t.priority==='high'?'Alta prioridade • ':'')+(t.details||'Tarefa interna'),task:t});
    });
    return out.sort((a,b)=>a.priority-b.priority).slice(0,18);
  }
  function renderFeed(){
    const box=document.getElementById('opsFeed');if(!box)return;
    const rows=feedItems();
    if(!rows.length){box.innerHTML='<div class="ops-empty">✅ Nada urgente agora. Sua operação está sob controle.</div>';return}
    box.innerHTML=rows.map((x,i)=>'<article class="ops-item"><div class="ops-item-icon">'+x.icon+'</div><div><b>'+esc(x.title)+'</b><p>'+esc(x.sub)+'</p></div><div class="ops-item-actions">'+(x.type==='task'?'<button class="done" data-task-done="'+esc(x.id)+'">Concluir</button>':'<button data-feed-go="'+i+'">Abrir</button>')+'</div></article>').join('');
    box.querySelectorAll('[data-feed-go]').forEach(b=>{b.onclick=()=>{const x=rows[Number(b.dataset.feedGo)];if(x?.view)goView(x.view)}});
    box.querySelectorAll('[data-task-done]').forEach(b=>b.onclick=async()=>{
      try{await window.at360Api('/api/tasks/'+encodeURIComponent(b.dataset.taskDone),{method:'PATCH',body:JSON.stringify({status:'done'})});showToast('Tarefa concluída');loadSummary()}catch(e){showToast(e.message||'Não foi possível concluir')}
    });
  }
  function renderCounters(){
    const c=summary?.counters||{};
    const map={opsNewLeads:c.newLeads||0,opsOpenOrders:c.openOrders||0,opsPendingPayments:c.pendingPayments||0,opsTodayAppointments:c.todayAppointments||0,opsOpenTasks:c.openTasks||0};
    Object.entries(map).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v});
    const total=(c.newLeads||0)+(c.openOrders||0)+(c.pendingPayments||0)+(c.todayAppointments||0)+(c.openTasks||0);
    const badge=document.getElementById('opsNavBadge');if(badge)badge.textContent=total;
    const urgent=(c.openOrders||0)+(c.pendingPayments||0)+(c.openTasks||0);
    const score=Math.max(35,100-Math.min(65,urgent*6+(c.newLeads||0)*2));
    const hs=document.getElementById('opsHealthScore'),ht=document.getElementById('opsHealthText');
    if(hs)hs.textContent=score+'%';
    if(ht)ht.textContent=urgent===0?'Tudo sob controle.':urgent<=3?'Alguns itens precisam de atenção.':'Há prioridades aguardando ação.';
  }
  async function loadSummary(){
    if(loading||!window.at360Api)return;
    loading=true;document.getElementById('opsShell')?.classList.add('ops-refreshing');
    try{
      summary=await window.at360Api('/api/operations/summary');
      renderCounters();renderFeed();renderQuick();renderModules();
    }catch(e){
      const box=document.getElementById('opsFeed');if(box)box.innerHTML='<div class="ops-empty">Não foi possível carregar a central agora.</div>';
    }finally{loading=false;document.getElementById('opsShell')?.classList.remove('ops-refreshing')}
  }
  async function addTask(e){
    e.preventDefault();if(!window.at360Api)return;
    const title=document.getElementById('opsTaskTitle').value.trim();
    if(!title){showToast('Informe o título da tarefa');return}
    const dueRaw=document.getElementById('opsTaskDue').value;
    try{
      await window.at360Api('/api/tasks',{method:'POST',body:JSON.stringify({title,details:document.getElementById('opsTaskDetails').value.trim(),priority:document.getElementById('opsTaskPriority').value,dueAt:dueRaw?new Date(dueRaw).toISOString():null})});
      e.target.reset();showToast('Tarefa adicionada');loadSummary();
    }catch(err){showToast(err.message||'Não foi possível criar a tarefa')}
  }
  function bind(){
    document.getElementById('opsRefresh').onclick=loadSummary;
    document.getElementById('opsTaskForm').onsubmit=addTask;
    document.querySelectorAll('.ops-kpi[data-go]').forEach(x=>x.onclick=()=>goView(x.dataset.go));
    document.querySelector('.ops-kpi[data-focus="tasks"]').onclick=()=>document.getElementById('opsTasksPanel').scrollIntoView({behavior:'smooth',block:'center'});
  }

  installNav();installView();
  if(typeof viewMeta!=='undefined')viewMeta.central=['Central Operacional 360','Tudo o que precisa da sua atenção em um só lugar'];
  bind();renderQuick();renderModules();

  let tries=0;
  const ready=setInterval(()=>{
    tries++;
    if(window.at360Api){clearInterval(ready);loadSummary();setTimeout(()=>{
      const p=new URLSearchParams(location.search).get('view');
      if(p&&document.getElementById('view-'+p))goView(p);
      else if(!location.hash)goView('central');
    },350)}
    if(tries>60)clearInterval(ready);
  },200);
  setInterval(()=>{if(document.getElementById('view-central')?.classList.contains('active'))loadSummary()},15000);
  window.at360LoadOperations=loadSummary;
})();,view:'finance'},
      {name:'Equipe 360',sub:'Pessoas e funções',on:true,icon:'♟',view:'team'},
      {name:'Estoque 360',sub:'Produtos e reposição',on:stock,icon:'▣',view:'inventory'},
      {name:'Pedidos',sub:'Venda, entrega e retirada',on:commerce,icon:'▤',view:'orders'},
      {name:'Cardápio / Catálogo',sub:'Produtos e adicionais',on:commerce,icon:'🍽',view:'menu'},
      {name:'Agenda 360',sub:'Horários e profissionais',on:schedule,icon:'◷',view:'appointments'},
      {name:'Growth 360',sub:'Inteligência de conversão',on:true,icon:'↗',view:'growth'}
    ];
  }
  function renderModules(){
    const box=document.getElementById('opsModules');if(!box)return;
    box.innerHTML=moduleConfig().filter(x=>x.on).map(x=>'<button class="ops-module" data-module="'+esc(x.view)+'" style="width:100%;border:0;text-align:left"><div><span>'+x.icon+'</span><span><b>'+esc(x.name)+'</b><small>'+esc(x.sub)+'</small></span></div><i></i></button>').join('');
    box.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>goView(b.dataset.module));
  }
  function quickButtons(){
    const t=config?.template||'barbearia',commerce=['marmitex','restaurante','acai','loja'].includes(t),schedule=['barbearia','estetica','clinica','oficina','imobiliaria'].includes(t);
    const arr=[
      {icon:'💬',title:'Testar chatbot',sub:'Abrir atendimento',action:'chat'},
      {icon:'◎',title:'Ver leads',sub:'CRM e contatos',view:'leads'}
    ];
    if(commerce)arr.push({icon:'▤',title:'Pedidos',sub:'Fila operacional',view:'orders'},{icon:'🍽',title:'Cardápio',sub:'Editar produtos',view:'menu'});
    if(schedule)arr.push({icon:'◷',title:'Agenda',sub:'Horários marcados',view:'appointments'},{icon:'📅',title:'Página cliente',sub:'Testar marcação',action:'public'});
    arr.push({icon:'↗',title:'Growth',sub:'Conversão e gargalos',view:'growth'});
    return arr;
  }
  function renderQuick(){
    const box=document.getElementById('opsQuick');if(!box)return;
    box.innerHTML=quickButtons().map((x,i)=>'<button data-q="'+i+'"><span>'+x.icon+'</span>'+esc(x.title)+'<small>'+esc(x.sub)+'</small></button>').join('');
    box.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{
      const x=quickButtons()[Number(b.dataset.q)];
      if(x.view)goView(x.view);else if(x.action==='chat'&&typeof openChat==='function')openChat();else if(x.action==='public'&&typeof openPublicBot==='function')openPublicBot();
    });
  }
  function feedItems(){
    if(!summary)return[];
    const out=[];
    (summary.orders||[]).forEach(o=>{
      out.push({type:'order',id:o.id,priority:o.status==='new'?0:2,icon:'🛎️',title:'Pedido '+o.code+' • '+o.customerName,sub:(o.status==='new'?'Novo pedido':'Em andamento')+' • '+money(o.total)+(o.paymentStatus==='pending'?' • pagamento pendente':''),view:'orders'});
    });
    (summary.appointments||[]).forEach(a=>{
      out.push({type:'appointment',id:a.id,priority:a.date===new Date().toISOString().slice(0,10)?0:2,icon:'✂️',title:a.time+' • '+a.customerName,sub:a.serviceName+' • '+a.professionalName+' • '+String(a.date).split('-').reverse().join('/'),view:'appointments'});
    });
    (summary.leads||[]).forEach(l=>{
      out.push({type:'lead',id:l.id,priority:1,icon:'◎',title:'Novo lead • '+l.name,sub:l.interest+' • '+l.phone,view:'leads'});
    });
    (summary.tasks||[]).forEach(t=>{
      out.push({type:'task',id:t.id,priority:t.priority==='urgent'?0:t.priority==='high'?1:3,icon:'✓',title:t.title,sub:(t.priority==='urgent'?'Urgente • ':t.priority==='high'?'Alta prioridade • ':'')+(t.details||'Tarefa interna'),task:t});
    });
    return out.sort((a,b)=>a.priority-b.priority).slice(0,18);
  }
  function renderFeed(){
    const box=document.getElementById('opsFeed');if(!box)return;
    const rows=feedItems();
    if(!rows.length){box.innerHTML='<div class="ops-empty">✅ Nada urgente agora. Sua operação está sob controle.</div>';return}
    box.innerHTML=rows.map((x,i)=>'<article class="ops-item"><div class="ops-item-icon">'+x.icon+'</div><div><b>'+esc(x.title)+'</b><p>'+esc(x.sub)+'</p></div><div class="ops-item-actions">'+(x.type==='task'?'<button class="done" data-task-done="'+esc(x.id)+'">Concluir</button>':'<button data-feed-go="'+i+'">Abrir</button>')+'</div></article>').join('');
    box.querySelectorAll('[data-feed-go]').forEach(b=>{b.onclick=()=>{const x=rows[Number(b.dataset.feedGo)];if(x?.view)goView(x.view)}});
    box.querySelectorAll('[data-task-done]').forEach(b=>b.onclick=async()=>{
      try{await window.at360Api('/api/tasks/'+encodeURIComponent(b.dataset.taskDone),{method:'PATCH',body:JSON.stringify({status:'done'})});showToast('Tarefa concluída');loadSummary()}catch(e){showToast(e.message||'Não foi possível concluir')}
    });
  }
  function renderCounters(){
    const c=summary?.counters||{};
    const map={opsNewLeads:c.newLeads||0,opsOpenOrders:c.openOrders||0,opsPendingPayments:c.pendingPayments||0,opsTodayAppointments:c.todayAppointments||0,opsOpenTasks:c.openTasks||0};
    Object.entries(map).forEach(([id,v])=>{const e=document.getElementById(id);if(e)e.textContent=v});
    const total=(c.newLeads||0)+(c.openOrders||0)+(c.pendingPayments||0)+(c.todayAppointments||0)+(c.openTasks||0);
    const badge=document.getElementById('opsNavBadge');if(badge)badge.textContent=total;
    const urgent=(c.openOrders||0)+(c.pendingPayments||0)+(c.openTasks||0);
    const score=Math.max(35,100-Math.min(65,urgent*6+(c.newLeads||0)*2));
    const hs=document.getElementById('opsHealthScore'),ht=document.getElementById('opsHealthText');
    if(hs)hs.textContent=score+'%';
    if(ht)ht.textContent=urgent===0?'Tudo sob controle.':urgent<=3?'Alguns itens precisam de atenção.':'Há prioridades aguardando ação.';
  }
  async function loadSummary(){
    if(loading||!window.at360Api)return;
    loading=true;document.getElementById('opsShell')?.classList.add('ops-refreshing');
    try{
      summary=await window.at360Api('/api/operations/summary');
      renderCounters();renderFeed();renderQuick();renderModules();
    }catch(e){
      const box=document.getElementById('opsFeed');if(box)box.innerHTML='<div class="ops-empty">Não foi possível carregar a central agora.</div>';
    }finally{loading=false;document.getElementById('opsShell')?.classList.remove('ops-refreshing')}
  }
  async function addTask(e){
    e.preventDefault();if(!window.at360Api)return;
    const title=document.getElementById('opsTaskTitle').value.trim();
    if(!title){showToast('Informe o título da tarefa');return}
    const dueRaw=document.getElementById('opsTaskDue').value;
    try{
      await window.at360Api('/api/tasks',{method:'POST',body:JSON.stringify({title,details:document.getElementById('opsTaskDetails').value.trim(),priority:document.getElementById('opsTaskPriority').value,dueAt:dueRaw?new Date(dueRaw).toISOString():null})});
      e.target.reset();showToast('Tarefa adicionada');loadSummary();
    }catch(err){showToast(err.message||'Não foi possível criar a tarefa')}
  }
  function bind(){
    document.getElementById('opsRefresh').onclick=loadSummary;
    document.getElementById('opsTaskForm').onsubmit=addTask;
    document.querySelectorAll('.ops-kpi[data-go]').forEach(x=>x.onclick=()=>goView(x.dataset.go));
    document.querySelector('.ops-kpi[data-focus="tasks"]').onclick=()=>document.getElementById('opsTasksPanel').scrollIntoView({behavior:'smooth',block:'center'});
  }

  installNav();installView();
  if(typeof viewMeta!=='undefined')viewMeta.central=['Central Operacional 360','Tudo o que precisa da sua atenção em um só lugar'];
  bind();renderQuick();renderModules();

  let tries=0;
  const ready=setInterval(()=>{
    tries++;
    if(window.at360Api){clearInterval(ready);loadSummary();setTimeout(()=>{
      const p=new URLSearchParams(location.search).get('view');
      if(p&&document.getElementById('view-'+p))goView(p);
      else if(!location.hash)goView('central');
    },350)}
    if(tries>60)clearInterval(ready);
  },200);
  setInterval(()=>{if(document.getElementById('view-central')?.classList.contains('active'))loadSummary()},15000);
  window.at360LoadOperations=loadSummary;
})();