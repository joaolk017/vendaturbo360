(function(){
  if(window.__ATENDEBOT360_LOADED__) return;
  window.__ATENDEBOT360_LOADED__=true;

  var script=document.currentScript;
  var d=script?script.dataset:{};
  var base=(function(){try{return new URL(script.src,location.href).origin}catch(e){return location.origin}})();
  var botId=d.botId||'';
  var cfg={
    businessName:d.business||'Atendimento',
    whatsappNumber:String(d.whatsapp||'').replace(/\D/g,''),
    primaryColor:d.color||'#5b5cf0',
    greeting:'Olá! 👋 Como posso ajudar você hoje?',
    fallback:'Posso ajudar com informações, orçamento ou encaminhar você para a equipe.',
    mainService:'atendimento'
  };
  var conversationId=(window.crypto&&crypto.randomUUID)?crypto.randomUUID():'c-'+Date.now()+'-'+Math.random().toString(36).slice(2);
  var history=[];
  var firstMessage=true;

  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  function fetchJson(url,options){return fetch(url,options).then(function(r){return r.json().then(function(j){if(!r.ok)throw new Error(j.error||'Falha no atendimento');return j})})}

  function loadConfig(){
    if(!botId)return Promise.resolve(cfg);
    return fetchJson(base+'/api/public/bot/'+encodeURIComponent(botId))
      .then(function(data){cfg=Object.assign(cfg,data.bot||{});return cfg})
      .catch(function(){return cfg});
  }

  function mount(){
    var color=cfg.primaryColor||'#5b5cf0';
    var host=document.createElement('div');
    host.id='at360-widget-host';
    host.innerHTML='<button id="at360-launch" aria-label="Abrir atendimento">💬</button>'+
      '<section id="at360-box" aria-live="polite">'+
      '<header><div><b>'+esc(cfg.businessName)+'</b><small>● AtendeBot Intelligence online</small></div><button id="at360-close" aria-label="Fechar">×</button></header>'+
      '<div class="at360-status"><span>🧠 Cérebro 360</span><span id="at360-radar">Radar ativo</span></div>'+
      '<main id="at360-body"></main>'+
      '<div class="at360-quick"><button data-action="info">Informações</button><button data-action="orcamento">Orçamento</button><button data-action="whatsapp">Humano</button></div>'+
      '<form id="at360-form"><input id="at360-input" placeholder="Digite sua mensagem..." autocomplete="off"><button>➜</button></form>'+
      '<footer>Atendimento inteligente com AtendeBot 360</footer></section>';

    var style=document.createElement('style');
    style.textContent=
      '#at360-widget-host{font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;position:fixed;right:20px;bottom:20px;z-index:2147483000}'+
      '#at360-launch{width:60px;height:60px;border:0;border-radius:19px;background:'+color+';color:#fff;font-size:23px;box-shadow:0 14px 38px rgba(15,23,42,.28);cursor:pointer}'+
      '#at360-box{position:absolute;right:0;bottom:72px;width:365px;max-width:calc(100vw - 28px);height:540px;max-height:calc(100vh - 105px);display:none;flex-direction:column;background:#fff;border:1px solid #e2e8f0;border-radius:22px;overflow:hidden;box-shadow:0 25px 80px rgba(15,23,42,.25);color:#0f172a}'+
      '#at360-box.open{display:flex}#at360-box header{padding:14px 15px;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff;display:flex;justify-content:space-between;align-items:center}'+
      '#at360-box header b{font-size:13px}#at360-box header small{display:block;color:#86efac;font-size:9px;margin-top:3px}#at360-close{border:0;background:#26344b;color:#fff;width:30px;height:30px;border-radius:8px;cursor:pointer}'+
      '.at360-status{display:flex;justify-content:space-between;gap:8px;padding:7px 12px;background:#eef2ff;color:#4338ca;font-size:9px;font-weight:900;border-bottom:1px solid #e0e7ff}'+
      '#at360-body{flex:1;padding:14px;background:#f8fafc;overflow:auto}.at360-msg{max-width:88%;padding:10px 11px;border-radius:13px;margin-bottom:9px;font-size:12px;line-height:1.48}.at360-msg.bot{background:#fff;border:1px solid #e2e8f0}.at360-msg.user{margin-left:auto;background:'+color+';color:#fff}.at360-meta{font-size:9px;color:#94a3b8;margin:-5px 0 9px 4px}'+
      '.at360-quick{display:flex;gap:6px;flex-wrap:wrap;padding:9px;border-top:1px solid #e2e8f0}.at360-quick button{border:1px solid #c7d2fe;background:#eef2ff;color:#4338ca;border-radius:999px;padding:7px 9px;font-size:10px;font-weight:800;cursor:pointer}'+
      '#at360-form{display:flex;gap:7px;padding:9px;border-top:1px solid #e2e8f0}#at360-input{flex:1;min-width:0;border:1px solid #e2e8f0;border-radius:10px;padding:10px;font:inherit;font-size:12px;outline:none}#at360-input:focus{border-color:'+color+'}#at360-form button{border:0;background:'+color+';color:#fff;border-radius:10px;padding:0 13px;font-weight:800;cursor:pointer}'+
      '#at360-box footer{text-align:center;padding:7px;color:#94a3b8;font-size:9px;background:#fff}@media(max-width:600px){#at360-widget-host{right:14px;bottom:14px}#at360-launch{width:54px;height:54px}#at360-box{height:72vh}}';
    document.head.appendChild(style);
    document.body.appendChild(host);

    var box=document.getElementById('at360-box');
    var body=document.getElementById('at360-body');
    var input=document.getElementById('at360-input');
    document.getElementById('at360-launch').onclick=function(){box.classList.toggle('open')};
    document.getElementById('at360-close').onclick=function(){box.classList.remove('open')};

    function add(text,type,meta){
      var el=document.createElement('div');el.className='at360-msg '+type;el.textContent=text;body.appendChild(el);
      if(meta){var m=document.createElement('div');m.className='at360-meta';m.textContent=meta;body.appendChild(m)}
      body.scrollTop=body.scrollHeight;
    }
    function openWA(source){
      if(!cfg.whatsappNumber){add('O WhatsApp ainda não foi configurado pelo estabelecimento.','bot');return}
      var msg=encodeURIComponent('Olá! Vim pelo AtendeBot 360 da '+cfg.businessName+' e gostaria de continuar meu atendimento'+(source?' sobre '+source:'')+'.');
      window.open('https://wa.me/'+cfg.whatsappNumber+'?text='+msg,'_blank');
    }
    function fallbackReply(t){
      var q=t.toLowerCase();
      if(q.indexOf('whats')>-1||q.indexOf('humano')>-1||q.indexOf('atendente')>-1){openWA('meu atendimento');return {reply:'Vou abrir o WhatsApp para você.',intent:'human',score:30,reasons:['solicitou atendimento humano']}}
      if(q.indexOf('orçamento')>-1||q.indexOf('orcamento')>-1||q.indexOf('preço')>-1||q.indexOf('preco')>-1||q.indexOf('valor')>-1){return {reply:'Posso registrar seu interesse. Envie seu nome e telefone para a equipe continuar.',intent:'quote',score:58,reasons:['interesse comercial']}}
      return {reply:cfg.fallback||'Posso ajudar com informações, orçamento ou encaminhar você para a equipe.',intent:'other',score:10,reasons:[]};
    }
    function send(text){
      add(text,'user');
      history.push({role:'user',content:text});
      var payload={message:text,conversationId:conversationId,history:history.slice(-10),isFirst:firstMessage};
      firstMessage=false;
      var p=botId?fetchJson(base+'/api/public/bot/'+encodeURIComponent(botId)+'/message',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}):Promise.resolve(fallbackReply(text));
      p.then(function(result){
        conversationId=result.conversationId||conversationId;
        var meta=result.score!=null?'Radar 360 • '+result.score+'/100 • '+String(result.intent||'other').toUpperCase():'';
        add(result.reply||cfg.fallback,'bot',meta);
        history.push({role:'bot',content:result.reply||''});
        var radar=document.getElementById('at360-radar');
        if(radar&&result.score!=null)radar.textContent=result.score>=70?'🔥 oportunidade quente':result.score>=40?'🟠 oportunidade morna':'Radar ativo';
        if(result.intent==='human')setTimeout(function(){openWA(cfg.mainService)},250);
      }).catch(function(){
        var r=fallbackReply(text);add(r.reply,'bot');history.push({role:'bot',content:r.reply});
      });
    }

    add(cfg.greeting||('Olá! Sou o assistente virtual da '+cfg.businessName+'. Como posso ajudar?'),'bot');

    host.querySelector('.at360-quick').onclick=function(e){
      var b=e.target.closest('button');if(!b)return;var a=b.dataset.action;
      if(a==='whatsapp'){send('Quero falar com um atendente humano');return}
      send(a==='orcamento'?'Quero um orçamento':'Quero informações sobre os serviços');
    };
    document.getElementById('at360-form').onsubmit=function(e){
      e.preventDefault();var t=input.value.trim();if(!t)return;input.value='';send(t);
    };
  }

  loadConfig().then(mount);
})();