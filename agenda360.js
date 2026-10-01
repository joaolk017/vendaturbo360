(function(){
  if(window.__AT360_AGENDA__)return;
  window.__AT360_AGENDA__=true;

  const css=document.createElement('style');
  css.textContent=
  '.agenda-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(320px,.85fr);gap:18px}.agenda-stack{display:grid;gap:18px}'+
  '.agenda-form-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.agenda-field{display:block;font-size:10px;font-weight:900;color:#334155}.agenda-field input,.agenda-field select{width:100%;margin-top:6px;border:1px solid #dbe3ee;border-radius:11px;padding:10px 11px;background:#fff;outline:none}.agenda-field input:focus,.agenda-field select:focus{border-color:#818cf8;box-shadow:0 0 0 3px rgba(99,102,241,.08)}'+
  '.agenda-toggle-row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:13px;border:1px solid #e2e8f0;background:#f8fafc;border-radius:14px}.agenda-toggle-row b{display:block;font-size:12px}.agenda-toggle-row small{display:block;color:#64748b;font-size:10px;margin-top:3px;line-height:1.45}.agenda-toggle{width:44px;height:24px;appearance:none;background:#cbd5e1;border-radius:999px;position:relative;cursor:pointer;transition:.2s;flex:0 0 auto}.agenda-toggle:before{content:"";position:absolute;width:18px;height:18px;border-radius:50%;background:#fff;left:3px;top:3px;transition:.2s;box-shadow:0 2px 6px rgba(15,23,42,.2)}.agenda-toggle:checked{background:#22c55e}.agenda-toggle:checked:before{transform:translateX(20px)}'+
  '.agenda-list{display:grid;gap:9px}.agenda-edit-card{display:grid;grid-template-columns:minmax(0,1fr) 95px 85px auto;gap:8px;align-items:end;padding:11px;border:1px solid #e2e8f0;border-radius:13px;background:#fff}.agenda-edit-card.pro{grid-template-columns:minmax(0,1fr) auto}.agenda-edit-card .agenda-delete{width:34px;height:36px;border:1px solid #fecdd3;background:#fff1f2;color:#be123c;border-radius:10px;font-weight:900}.agenda-active{display:flex;align-items:center;gap:6px;font-size:9px;font-weight:800;color:#475569;padding-bottom:10px}'+
  '.week-grid{display:grid;gap:8px}.week-row{display:grid;grid-template-columns:90px 1fr 1fr;gap:9px;align-items:center;padding:9px 10px;border:1px solid #e2e8f0;border-radius:12px}.week-day{display:flex;align-items:center;gap:7px;font-size:10px;font-weight:900}.week-row input[type=time]{width:100%;border:1px solid #dbe3ee;border-radius:9px;padding:8px;font-size:10px}.week-row.off{opacity:.5}'+
  '.notify-card{background:linear-gradient(145deg,#0f172a,#1e293b);color:#fff;border-radius:20px;padding:18px}.notify-card h3{margin:0 0 6px}.notify-card p{margin:0;color:#cbd5e1;font-size:11px;line-height:1.55}.notify-status{margin:14px 0;padding:10px 11px;border-radius:12px;background:rgba(255,255,255,.08);font-size:10px}.notify-card .btn{width:100%;margin-top:8px}'+
  '.appointments-toolbar{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.appointments-toolbar input{border:1px solid #dbe3ee;border-radius:10px;padding:9px 10px;font-size:11px}.appointment-list{display:grid;gap:10px}.appointment-card{border:1px solid #e2e8f0;border-radius:15px;padding:13px;background:#fff}.appointment-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.appointment-top h4{margin:0;font-size:13px}.appointment-top small{display:block;color:#64748b;font-size:9px;margin-top:3px}.appointment-time{font-size:18px;font-weight:900;color:#4338ca}.appointment-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:11px}.appointment-meta div{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:8px}.appointment-meta small{display:block;color:#64748b;font-size:8px}.appointment-meta b{display:block;font-size:10px;margin-top:3px}.appointment-actions{display:flex;gap:7px;flex-wrap:wrap;margin-top:11px}.appointment-actions button{border:0;border-radius:9px;padding:7px 9px;font-size:9px;font-weight:900}.appointment-actions .done{background:#ecfdf5;color:#047857}.appointment-actions .cancel{background:#fff1f2;color:#be123c}.appointment-actions .noshow{background:#fff7ed;color:#c2410c}.appointment-actions .wa{background:#f0fdf4;color:#15803d}.appt-paid{color:#047857}.appt-pending{color:#b45309}.appt-empty{padding:24px;border:1px dashed #cbd5e1;border-radius:14px;text-align:center;color:#64748b;font-size:11px}'+
  '@media(max-width:1050px){.agenda-grid{grid-template-columns:1fr}.notify-card{position:static}}@media(max-width:680px){.agenda-form-grid{grid-template-columns:1fr}.agenda-edit-card{grid-template-columns:1fr 1fr}.agenda-edit-card .agenda-field:first-child{grid-column:1/-1}.agenda-edit-card.pro{grid-template-columns:1fr auto}.week-row{grid-template-columns:74px 1fr 1fr}.appointment-meta{grid-template-columns:1fr 1fr}.appointments-toolbar{display:grid;grid-template-columns:1fr 1fr}.appointments-toolbar input,.appointments-toolbar .btn{width:100%}}';
  document.head.appendChild(css);

  const APPOINTMENT_TEMPLATES=new Set(['barbearia','estetica','clinica','oficina','imobiliaria']);
  let appointments=[];

  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function id(prefix){return prefix+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7)}
  function money(v){return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
  function defaultServices(){
    const t=config.template;
    if(t==='barbearia')return [
      {id:'corte',name:'Corte',duration:30,price:35,active:true},
      {id:'barba',name:'Barba',duration:30,price:25,active:true},
      {id:'combo',name:'Corte + Barba',duration:60,price:55,active:true}
    ];
    if(t==='estetica')return [
      {id:'procedimento-1',name:'Procedimento',duration:60,price:0,active:true}
    ];
    if(t==='clinica')return [{id:'consulta',name:'Consulta',duration:60,price:0,active:true}];
    if(t==='oficina')return [{id:'avaliacao',name:'Avaliação / orçamento',duration:60,price:0,active:true}];
    if(t==='imobiliaria')return [{id:'visita',name:'Visita ao imóvel',duration:60,price:0,active:true}];
    return [{id:'atendimento',name:'Atendimento',duration:30,price:0,active:true}];
  }
  function defaultWeekly(){
    const h={};
    for(let d=0;d<7;d++)h[String(d)]={enabled:d!==0,start:'08:00',end:d===6?'14:00':'19:00'};
    return h;
  }
  function ensureConfig(){
    if(!config.appointments||typeof config.appointments!=='object'){
      config.appointments={
        enabled:APPOINTMENT_TEMPLATES.has(config.template),
        slotMinutes:30,
        advanceDays:30,
        professionals:[{id:'prof-1',name:config.template==='barbearia'?'Barbeiro principal':'Profissional principal',active:true}],
        services:defaultServices(),
        weeklyHours:defaultWeekly()
      };
    }
    const a=config.appointments;
    if(typeof a.enabled!=='boolean')a.enabled=APPOINTMENT_TEMPLATES.has(config.template);
    a.slotMinutes=Math.max(10,Number(a.slotMinutes||30));
    a.advanceDays=Math.max(1,Number(a.advanceDays||30));
    if(!Array.isArray(a.professionals)||!a.professionals.length)a.professionals=[{id:'prof-1',name:'Profissional principal',active:true}];
    if(!Array.isArray(a.services)||!a.services.length)a.services=defaultServices();
    if(!a.weeklyHours||typeof a.weeklyHours!=='object')a.weeklyHours=defaultWeekly();
    return a;
  }
  function installNav(){
    if(document.querySelector('[data-view="appointments"]'))return;
    const orders=document.querySelector('.nav-btn[data-view="orders"]');
    if(!orders)return;
    const b=document.createElement('button');
    b.className='nav-btn';b.dataset.view='appointments';
    b.innerHTML='<span class="ico">◷</span>Agenda 360 <span id="navAppointmentCount" style="margin-left:auto;background:#25334d;padding:2px 7px;border-radius:999px;font-size:10px">0</span>';
    orders.after(b);
    b.addEventListener('click',()=>{goView('appointments');setTimeout(loadAppointments,50)});
  }
  function installView(){
    if(document.getElementById('view-appointments'))return;
    const view=document.createElement('section');
    view.className='view';view.id='view-appointments';
    view.innerHTML=
      '<div class="heading"><div><h1>Agenda 360</h1><p>Horários online, profissionais, serviços e notificações no celular.</p></div><div class="heading-actions"><button class="btn secondary" id="agendaOpenPublic">↗ Testar agendamento</button><button class="btn primary" id="agendaSaveTop">Salvar agenda</button></div></div>'+
      '<div class="agenda-grid"><div class="agenda-stack">'+
        '<div class="panel"><div class="panel-head"><div><h3>Agendamento online</h3><span>Defina como os clientes podem marcar horários</span></div></div><div class="panel-body">'+
          '<div class="agenda-toggle-row"><div><b>Permitir agendamento pelo AtendeBot</b><small>O cliente verá horários livres e poderá confirmar sem conversar com um atendente.</small></div><input class="agenda-toggle" type="checkbox" id="agendaEnabled"></div>'+
          '<div class="agenda-form-grid" style="margin-top:13px"><label class="agenda-field">Intervalo entre horários<select id="agendaSlot"><option value="15">15 minutos</option><option value="20">20 minutos</option><option value="30">30 minutos</option><option value="45">45 minutos</option><option value="60">60 minutos</option></select></label><label class="agenda-field">Agenda aberta por quantos dias?<input type="number" min="1" max="120" id="agendaAdvance"></label></div>'+
        '</div></div>'+
        '<div class="panel"><div class="panel-head"><div><h3>Profissionais</h3><span>Barbeiros, profissionais, técnicos ou consultores</span></div><button class="btn secondary" id="agendaAddPro">＋ Profissional</button></div><div class="panel-body"><div class="agenda-list" id="agendaProfessionals"></div></div></div>'+
        '<div class="panel"><div class="panel-head"><div><h3>Serviços agendáveis</h3><span>Preço e duração usados para montar os horários livres</span></div><button class="btn secondary" id="agendaAddService">＋ Serviço</button></div><div class="panel-body"><div class="agenda-list" id="agendaServices"></div></div></div>'+
        '<div class="panel"><div class="panel-head"><div><h3>Horários da semana</h3><span>Configure os dias em que a agenda aceita marcações</span></div></div><div class="panel-body"><div class="week-grid" id="agendaWeek"></div></div></div>'+
        '<div class="panel"><div class="panel-head"><div><h3>Agendamentos</h3><span>Acompanhe a agenda e atualize o atendimento</span></div><div class="appointments-toolbar"><input type="date" id="agendaFilterDate"><button class="btn secondary" id="agendaRefresh">↻ Atualizar</button></div></div><div class="panel-body"><div class="appointment-list" id="appointmentList"></div></div></div>'+
      '</div><div><div class="notify-card"><h3>🔔 Notificações no celular</h3><p>Ative neste aparelho. Quando um cliente marcar um horário, o AtendeBot poderá avisar mesmo com o painel fechado.</p><div class="notify-status" id="notifyStatus">Verificando disponibilidade...</div><button class="btn primary" id="notifyEnable">Ativar notificações neste celular</button><button class="btn secondary" id="notifyTest">Enviar notificação de teste</button><p style="margin-top:12px;font-size:9px;color:#94a3b8">No iPhone, as notificações web exigem que o site seja adicionado à Tela de Início. No Android, basta permitir as notificações quando solicitado.</p></div></div></div>';
    const content=document.querySelector('.content');
    const install=document.getElementById('view-install');
    if(install&&content)content.insertBefore(view,install);else if(content)content.appendChild(view);
  }
  function proCard(p){
    return '<div class="agenda-edit-card pro" data-pro="'+esc(p.id)+'"><label class="agenda-field">Nome do profissional<input data-pro-field="name" value="'+esc(p.name)+'"></label><div style="display:flex;gap:8px;align-items:center"><label class="agenda-active"><input type="checkbox" data-pro-field="active" '+(p.active!==false?'checked':'')+'> Ativo</label><button class="agenda-delete" data-del-pro="'+esc(p.id)+'">×</button></div></div>';
  }
  function serviceCard(s){
    return '<div class="agenda-edit-card" data-service="'+esc(s.id)+'"><label class="agenda-field">Serviço<input data-service-field="name" value="'+esc(s.name)+'"></label><label class="agenda-field">Duração<input data-service-field="duration" type="number" min="10" step="5" value="'+Number(s.duration||30)+'"></label><label class="agenda-field">Preço<input data-service-field="price" type="number" min="0" step="0.01" value="'+Number(s.price||0)+'"></label><div><label class="agenda-active"><input type="checkbox" data-service-field="active" '+(s.active!==false?'checked':'')+'> Ativo</label><button class="agenda-delete" data-del-service="'+esc(s.id)+'">×</button></div></div>';
  }
  function render(){
    const a=ensureConfig();
    const en=document.getElementById('agendaEnabled');if(!en)return;
    en.checked=!!a.enabled;
    document.getElementById('agendaSlot').value=String(a.slotMinutes||30);
    document.getElementById('agendaAdvance').value=Number(a.advanceDays||30);
    document.getElementById('agendaProfessionals').innerHTML=a.professionals.map(proCard).join('');
    document.getElementById('agendaServices').innerHTML=a.services.map(serviceCard).join('');
    const days=['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    document.getElementById('agendaWeek').innerHTML=days.map((name,i)=>{
      const d=a.weeklyHours[String(i)]||{enabled:false,start:'08:00',end:'18:00'};
      return '<div class="week-row '+(d.enabled===false?'off':'')+'" data-day="'+i+'"><label class="week-day"><input type="checkbox" data-day-field="enabled" '+(d.enabled!==false?'checked':'')+'>'+name+'</label><input type="time" data-day-field="start" value="'+esc(d.start||'08:00')+'"><input type="time" data-day-field="end" value="'+esc(d.end||'18:00')+'"></div>';
    }).join('');
    bindEditors();
  }
  function bindEditors(){
    document.querySelectorAll('[data-pro]').forEach(card=>{
      const p=ensureConfig().professionals.find(x=>x.id===card.dataset.pro);if(!p)return;
      card.querySelectorAll('[data-pro-field]').forEach(inp=>inp.addEventListener(inp.type==='checkbox'?'change':'input',()=>{p[inp.dataset.proField]=inp.type==='checkbox'?inp.checked:inp.value}));
    });
    document.querySelectorAll('[data-service]').forEach(card=>{
      const s=ensureConfig().services.find(x=>x.id===card.dataset.service);if(!s)return;
      card.querySelectorAll('[data-service-field]').forEach(inp=>inp.addEventListener(inp.type==='checkbox'?'change':'input',()=>{
        const k=inp.dataset.serviceField;
        s[k]=inp.type==='checkbox'?inp.checked:(k==='duration'||k==='price'?Math.max(0,Number(inp.value||0)):inp.value);
      }));
    });
    document.querySelectorAll('[data-del-pro]').forEach(b=>b.onclick=()=>{const a=ensureConfig();a.professionals=a.professionals.filter(x=>x.id!==b.dataset.delPro);render()});
    document.querySelectorAll('[data-del-service]').forEach(b=>b.onclick=()=>{const a=ensureConfig();a.services=a.services.filter(x=>x.id!==b.dataset.delService);render()});
    document.querySelectorAll('[data-day]').forEach(row=>{
      const day=ensureConfig().weeklyHours[String(row.dataset.day)]||(ensureConfig().weeklyHours[String(row.dataset.day)]={enabled:true,start:'08:00',end:'18:00'});
      row.querySelectorAll('[data-day-field]').forEach(inp=>inp.addEventListener(inp.type==='checkbox'?'change':'input',()=>{
        day[inp.dataset.dayField]=inp.type==='checkbox'?inp.checked:inp.value;
        row.classList.toggle('off',day.enabled===false);
      }));
    });
  }
  function readBase(){
    const a=ensureConfig();
    a.enabled=document.getElementById('agendaEnabled').checked;
    a.slotMinutes=Math.max(10,Number(document.getElementById('agendaSlot').value||30));
    a.advanceDays=Math.max(1,Math.min(120,Number(document.getElementById('agendaAdvance').value||30)));
  }
  function save(){
    readBase();
    saveAll();
    showToast('Agenda salva e sincronizada');
    render();
  }
  function addPro(){
    ensureConfig().professionals.push({id:id('pro'),name:'Novo profissional',active:true});render();
  }
  function addService(){
    ensureConfig().services.push({id:id('service'),name:'Novo serviço',duration:30,price:0,active:true});render();
  }
  function openPublic(){if(typeof getPublicBotLink==='function')window.open(getPublicBotLink(),'_blank')}
  function statusLabel(s){return ({confirmed:'Confirmado',completed:'Concluído',cancelled:'Cancelado',no_show:'Não compareceu'})[s]||s}
  async function loadAppointments(){
    const list=document.getElementById('appointmentList');if(!list||!window.at360Api)return;
    try{
      const data=await window.at360Api('/api/appointments');
      appointments=Array.isArray(data.appointments)?data.appointments:[];
      renderAppointments();
    }catch(e){list.innerHTML='<div class="appt-empty">'+esc(e.message||'Não foi possível carregar a agenda.')+'</div>'}
  }
  function renderAppointments(){
    const list=document.getElementById('appointmentList');if(!list)return;
    const filter=document.getElementById('agendaFilterDate')?.value||'';
    const rows=appointments.filter(a=>!filter||a.date===filter);
    const active=appointments.filter(a=>a.status==='confirmed').length;
    const count=document.getElementById('navAppointmentCount');if(count)count.textContent=active;
    if(!rows.length){list.innerHTML='<div class="appt-empty">Nenhum agendamento para este filtro.</div>';return}
    list.innerHTML=rows.map(a=>'<article class="appointment-card"><div class="appointment-top"><div><h4>'+esc(a.customerName)+' • '+esc(a.serviceName)+'</h4><small>'+esc(a.code)+' • '+esc(statusLabel(a.status))+'</small></div><div class="appointment-time">'+esc(a.time)+'</div></div><div class="appointment-meta"><div><small>DATA</small><b>'+esc(String(a.date).split('-').reverse().join('/'))+'</b></div><div><small>PROFISSIONAL</small><b>'+esc(a.professionalName)+'</b></div><div><small>WHATSAPP</small><b>'+esc(a.phone)+'</b></div><div><small>DURAÇÃO</small><b>'+Number(a.duration||30)+' min</b></div><div><small>VALOR</small><b>'+(Number(a.servicePrice||0)>0?money(a.servicePrice):'A combinar')+'</b></div><div><small>PAGAMENTO</small><b class="'+(a.paymentStatus==='paid'?'appt-paid':'appt-pending')+'">'+(a.paymentStatus==='paid'?'PIX PAGO ✓':a.paymentStatus==='refunded'?'ESTORNADO':'PENDENTE')+'</b></div></div><div class="appointment-actions"><button class="wa" data-appt-wa="'+esc(a.id)+'">WhatsApp</button>'+(a.status==='confirmed'?'<button class="done" data-appt-status="'+esc(a.id)+'|completed">✓ Concluído</button><button class="noshow" data-appt-status="'+esc(a.id)+'|no_show">Não compareceu</button><button class="cancel" data-appt-status="'+esc(a.id)+'|cancelled">Cancelar</button>':'')+'</div></article>').join('');
    document.querySelectorAll('[data-appt-status]').forEach(b=>b.onclick=async()=>{
      const [aid,status]=b.dataset.apptStatus.split('|');
      try{await window.at360Api('/api/appointments/'+encodeURIComponent(aid),{method:'PATCH',body:JSON.stringify({status})});await loadAppointments();showToast('Agendamento atualizado')}catch(e){showToast(e.message||'Não foi possível atualizar')}
    });
    document.querySelectorAll('[data-appt-wa]').forEach(b=>b.onclick=()=>{
      const a=appointments.find(x=>String(x.id)===String(b.dataset.apptWa));if(!a)return;
      const phone=String(a.phone||'').replace(/\D/g,'');if(!phone)return showToast('WhatsApp não informado');
      const msg=encodeURIComponent('Olá, '+a.customerName+'! Sobre seu agendamento '+a.code+' de '+a.serviceName+' em '+String(a.date).split('-').reverse().join('/')+' às '+a.time+'.');
      window.open('https://wa.me/55'+phone.replace(/^55/,'')+'?text='+msg,'_blank');
    });
  }
  function urlBase64ToUint8Array(base64String){
    const padding='='.repeat((4-base64String.length%4)%4);
    const base64=(base64String+padding).replace(/-/g,'+').replace(/_/g,'/');
    const raw=atob(base64);return Uint8Array.from([...raw].map(c=>c.charCodeAt(0)));
  }
  async function refreshNotifyStatus(){
    const box=document.getElementById('notifyStatus');if(!box)return;
    if(!('serviceWorker' in navigator)||!('PushManager' in window)){box.textContent='Este navegador não oferece Web Push.';return}
    try{
      if(!window.at360Api){box.textContent='Entre na conta para configurar as notificações.';return}
      const data=await window.at360Api('/api/push/public-key');
      if(!data.configured){box.textContent='Push preparado no sistema; faltam as chaves VAPID no servidor.';return}
      const reg=await navigator.serviceWorker.register('/sw.js');
      const sub=await reg.pushManager.getSubscription();
      box.textContent=sub?'✅ Notificações ativas neste aparelho.':'Notificações disponíveis. Ative para receber novos agendamentos.';
    }catch(e){box.textContent='Não foi possível verificar as notificações agora.'}
  }
  async function enableNotifications(){
    const box=document.getElementById('notifyStatus');
    try{
      if(!window.isSecureContext)throw new Error('Notificações exigem HTTPS.');
      if(Notification.permission==='denied')throw new Error('As notificações estão bloqueadas nas configurações do navegador.');
      const perm=await Notification.requestPermission();
      if(perm!=='granted')throw new Error('Permissão de notificação não concedida.');
      const data=await window.at360Api('/api/push/public-key');
      if(!data.configured||!data.publicKey)throw new Error('O servidor ainda precisa das chaves VAPID.');
      const reg=await navigator.serviceWorker.register('/sw.js');
      let sub=await reg.pushManager.getSubscription();
      if(!sub)sub=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array(data.publicKey)});
      await window.at360Api('/api/push/subscribe',{method:'POST',body:JSON.stringify({subscription:sub.toJSON()})});
      box.textContent='✅ Notificações ativas neste aparelho.';
      showToast('Notificações ativadas');
    }catch(e){box.textContent=e.message||'Não foi possível ativar notificações.';showToast(e.message||'Falha ao ativar notificações')}
  }
  async function testNotification(){
    try{
      const r=await window.at360Api('/api/push/test',{method:'POST',body:'{}'});
      showToast(r.sent?'Notificação enviada':'Nenhum aparelho inscrito ou Push ainda não configurado');
    }catch(e){showToast(e.message||'Não foi possível enviar o teste')}
  }
  function bind(){
    document.getElementById('agendaSaveTop').onclick=save;
    document.getElementById('agendaAddPro').onclick=addPro;
    document.getElementById('agendaAddService').onclick=addService;
    document.getElementById('agendaOpenPublic').onclick=openPublic;
    document.getElementById('agendaRefresh').onclick=loadAppointments;
    document.getElementById('agendaFilterDate').onchange=renderAppointments;
    document.getElementById('notifyEnable').onclick=enableNotifications;
    document.getElementById('notifyTest').onclick=testNotification;
    ['agendaEnabled','agendaSlot','agendaAdvance'].forEach(x=>document.getElementById(x).addEventListener('change',readBase));
  }

  installNav();installView();
  if(typeof viewMeta!=='undefined')viewMeta.appointments=['Agenda 360','Agendamentos, profissionais e notificações'];
  bind();render();
  const originalFill=typeof fillForms==='function'?fillForms:null;
  if(originalFill)fillForms=function(){originalFill();render()};
  setTimeout(()=>{render();refreshNotifyStatus();loadAppointments()},1200);
  setInterval(()=>{if(document.getElementById('view-appointments')?.classList.contains('active'))loadAppointments()},15000);
})();