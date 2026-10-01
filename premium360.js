(function(){
  if(window.__AT360_PREMIUM__) return;
  window.__AT360_PREMIUM__=true;

  const css=document.createElement('style');
  css.textContent=`
    .intel-badge{display:inline-flex;align-items:center;gap:6px;border:1px solid #c7d2fe;background:#eef2ff;color:#4338ca;border-radius:999px;padding:6px 9px;font-size:10px;font-weight:900}
    .intel-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:18px}
    .intel-card{background:#fff;border:1px solid var(--line);border-radius:20px;box-shadow:0 10px 28px rgba(15,23,42,.04);overflow:hidden}
    .intel-card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;border-bottom:1px solid var(--line)}
    .intel-card-head h3{margin:0;font-size:15px}.intel-card-head p{margin:4px 0 0;color:var(--muted);font-size:11px}
    .intel-body{padding:20px}.intel-form{display:grid;grid-template-columns:1fr 1fr;gap:14px}.intel-form .wide{grid-column:1/-1}
    .intel-field{display:block;font-size:11px;font-weight:900;color:#334155}.intel-field input,.intel-field textarea,.intel-field select{width:100%;margin-top:7px;border:1px solid #dbe3ee;border-radius:12px;padding:11px 12px;background:#fff;color:#0f172a;outline:none}.intel-field textarea{min-height:92px;resize:vertical}.intel-field input:focus,.intel-field textarea:focus,.intel-field select:focus{border-color:#818cf8;box-shadow:0 0 0 3px rgba(99,102,241,.1)}
    .brain-score{display:grid;place-items:center;text-align:center;padding:20px;border-radius:18px;background:linear-gradient(145deg,#0f172a,#1e293b);color:#fff}.brain-score strong{font-size:44px;letter-spacing:-.05em}.brain-score small{color:#94a3b8}.brain-meter{height:8px;background:#273449;border-radius:99px;overflow:hidden;width:100%;margin:13px 0}.brain-meter i{display:block;height:100%;background:linear-gradient(90deg,#6366f1,#22c55e);border-radius:99px}
    .feature-stack{display:grid;gap:10px;margin-top:14px}.feature-row{display:flex;gap:11px;align-items:flex-start;padding:12px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc}.feature-row i{font-style:normal;width:31px;height:31px;border-radius:10px;background:#eef2ff;display:grid;place-items:center}.feature-row b{display:block;font-size:12px}.feature-row span{display:block;color:#64748b;font-size:10px;line-height:1.45;margin-top:2px}
    .mode-switch{display:flex;gap:7px;background:#f1f5f9;padding:5px;border-radius:12px}.mode-switch button{flex:1;border:0;background:transparent;border-radius:9px;padding:9px;font-size:10px;font-weight:900;color:#64748b}.mode-switch button.active{background:#fff;color:#0f172a;box-shadow:0 3px 12px rgba(15,23,42,.08)}
    .sim-shell{display:grid;grid-template-columns:1.1fr .9fr;gap:18px}.sim-chat{height:560px;display:flex;flex-direction:column}.sim-messages{flex:1;overflow:auto;padding:18px;background:#f8fafc;display:flex;flex-direction:column;gap:9px}.sim-msg{max-width:82%;padding:10px 12px;border-radius:14px;font-size:12px;line-height:1.5}.sim-msg.bot{background:#fff;border:1px solid #e2e8f0;border-bottom-left-radius:5px}.sim-msg.user{margin-left:auto;background:linear-gradient(135deg,var(--brand),var(--brand2));color:#fff;border-bottom-right-radius:5px}.sim-form{display:flex;gap:8px;padding:12px;border-top:1px solid #e2e8f0}.sim-form input{flex:1;border:1px solid #dbe3ee;border-radius:11px;padding:10px 11px;min-width:0}.sim-form button{border:0;border-radius:11px;background:var(--brand);color:#fff;font-weight:900;padding:0 15px}
    .radar-score{display:flex;align-items:flex-end;gap:9px}.radar-score strong{font-size:45px;letter-spacing:-.06em}.radar-score span{padding-bottom:8px;color:#64748b;font-size:11px}.heat{display:inline-flex;border-radius:999px;padding:6px 9px;font-size:10px;font-weight:900}.heat.hot{background:#fff1f2;color:#be123c}.heat.warm{background:#fff7ed;color:#c2410c}.heat.cold{background:#f1f5f9;color:#475569}
    .reason-list{display:grid;gap:8px;margin-top:15px}.reason-item{display:flex;gap:8px;padding:9px 10px;border:1px solid #e2e8f0;border-radius:11px;font-size:10px;color:#475569}.reason-item:before{content:'✓';color:#059669;font-weight:900}
    .growth-kpis{display:grid;grid-template-columns:repeat(4,1fr);gap:13px;margin-bottom:18px}.growth-kpi{background:#fff;border:1px solid var(--line);border-radius:17px;padding:16px}.growth-kpi small{display:block;color:#64748b;font-size:10px;font-weight:800}.growth-kpi b{display:block;font-size:25px;margin-top:8px}
    .growth-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}.insight-list{display:grid;gap:10px}.insight{padding:14px;border:1px solid #e2e8f0;border-radius:14px;background:#fff}.insight-top{display:flex;justify-content:space-between;gap:12px;align-items:start}.insight b{font-size:12px}.insight p{font-size:11px;color:#64748b;line-height:1.5;margin:5px 0 0}.insight button{margin-top:10px;border:0;border-radius:9px;background:#eef2ff;color:#4338ca;padding:7px 9px;font-size:10px;font-weight:900}
    .mini-bar{height:7px;background:#eef2f7;border-radius:99px;overflow:hidden;margin-top:7px}.mini-bar i{display:block;height:100%;background:linear-gradient(90deg,#6366f1,#7c3aed)}
    .live-pill{display:inline-flex;align-items:center;gap:6px;border-radius:999px;padding:6px 9px;font-size:10px;font-weight:900}.live-pill.shadow{background:#fff7ed;color:#c2410c}.live-pill.live{background:#ecfdf5;color:#047857}
    @media(max-width:900px){.intel-grid,.sim-shell,.growth-grid{grid-template-columns:1fr}.growth-kpis{grid-template-columns:1fr 1fr}.sim-chat{height:480px}}
    @media(max-width:600px){.intel-form{grid-template-columns:1fr}.intel-form .wide{grid-column:auto}.growth-kpis{grid-template-columns:1fr 1fr}.intel-body{padding:15px}.sim-messages{padding:13px}.sim-msg{max-width:90%}}
  `;
  document.head.appendChild(css);

  if(typeof viewMeta!=='undefined'){
    viewMeta.brain=['Cérebro 360','Treine estratégia, conhecimento e comportamento do seu atendente'];
    viewMeta.simulator=['Simulador 360','Teste abordagem, intenção e score antes de publicar'];
    viewMeta.growth=['Growth 360','Descubra onde as conversas estão virando ou perdendo receita'];
  }

  function el(html){
    const t=document.createElement('template');t.innerHTML=html.trim();return t.content.firstElementChild;
  }
  function esc(s=''){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
  function brain(){
    if(!config.brain) config.brain={};
    return config.brain;
  }
  function defaults(){
    const b=brain();
    if(!b.objective)b.objective='sales';
    if(!b.tone)b.tone='consultivo';
    if(!b.mode)b.mode='shadow';
    if(typeof b.followupEnabled!=='boolean')b.followupEnabled=true;
    return b;
  }

  function installNavigation(){
    if(document.querySelector('[data-view="brain"]')) return;
    const leadsBtn=document.querySelector('.nav-btn[data-view="leads"]');
    if(!leadsBtn)return;
    const title=el('<div class="nav-title at-intel-title">Inteligência 360</div>');
    const brainBtn=el('<button class="nav-btn" data-view="brain"><span class="ico">🧠</span>Cérebro 360</button>');
    const simBtn=el('<button class="nav-btn" data-view="simulator"><span class="ico">◉</span>Simulador 360</button>');
    const growthBtn=el('<button class="nav-btn" data-view="growth"><span class="ico">↗</span>Growth 360</button>');
    leadsBtn.after(title,brainBtn,simBtn,growthBtn);
    [brainBtn,simBtn,growthBtn].forEach(btn=>btn.addEventListener('click',()=>goView(btn.dataset.view)));
    const plan=document.querySelector('.sidebar-foot .plan');
    if(plan){
      plan.querySelector('strong').textContent='AtendeBot 360 Intelligence';
      plan.querySelector('p').textContent='Cérebro de vendas, Radar de intenção, Growth e automação em um único produto.';
    }
  }

  function installViews(){
    const content=document.querySelector('.content');
    if(!content||document.getElementById('view-brain'))return;
    content.appendChild(el(`
      <section class="view" id="view-brain">
        <div class="heading"><div><div class="intel-badge">🧠 AtendeBot Intelligence</div><h1 style="margin-top:9px">Cérebro 360</h1><p>Ensine o bot a vender como o seu melhor atendente — sem perder o controle da operação.</p></div><div class="heading-actions"><span id="brainModePill" class="live-pill shadow">Modo Shadow</span><button class="btn primary" onclick="window.at360SaveBrain()">Salvar cérebro</button></div></div>
        <div class="intel-grid">
          <div class="intel-card">
            <div class="intel-card-head"><div><h3>Estratégia comercial</h3><p>Objetivo, tom, diferenciais e regras usadas durante a conversa.</p></div></div>
            <div class="intel-body">
              <div class="intel-form">
                <label class="intel-field">Objetivo principal<select id="brainObjective"><option value="sales">Vender mais</option><option value="quotes">Gerar orçamentos</option><option value="appointments">Gerar agendamentos</option><option value="support">Atender e direcionar</option></select></label>
                <label class="intel-field">Tom de voz<select id="brainTone"><option value="consultivo">Consultivo</option><option value="direto">Direto</option><option value="premium">Premium</option><option value="casual">Próximo e casual</option></select></label>
                <label class="intel-field wide">Meta que o atendente deve perseguir<input id="brainGoal" placeholder="Ex.: transformar dúvidas em pedidos de orçamento e levar oportunidades quentes ao WhatsApp"></label>
                <label class="intel-field wide">Diferenciais do negócio<textarea id="brainDifferentials" placeholder="Ex.: 12 anos de mercado, garantia, atendimento no mesmo dia, peças originais..."></textarea></label>
                <label class="intel-field">Formas de pagamento<textarea id="brainPayments" placeholder="Pix, cartão em até 6x..."></textarea></label>
                <label class="intel-field">Políticas importantes<textarea id="brainPolicies" placeholder="Trocas, prazos, garantias, cancelamento..."></textarea></label>
                <label class="intel-field wide">Base de conhecimento<textarea id="brainKnowledge" placeholder="Uma informação por linha. Ex.: Troca de óleo leva em média 40 minutos.\nRevisão precisa de agendamento."></textarea></label>
                <label class="intel-field wide">Perguntas de qualificação<textarea id="brainQualification" placeholder="Uma por linha. Ex.: Qual modelo e ano do veículo?\nVocê precisa do serviço ainda hoje?"></textarea></label>
                <label class="intel-field wide">Quando passar para um humano<textarea id="brainHandoff" placeholder="Ex.: reclamações, negociação fora da tabela, cliente pedindo desconto especial..."></textarea></label>
              </div>
              <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:16px;flex-wrap:wrap">
                <label style="display:flex;align-items:center;gap:8px;font-size:11px;font-weight:800;color:#334155"><input id="brainFollowup" type="checkbox"> Follow-up inteligente habilitado</label>
                <div class="mode-switch" style="min-width:260px"><button id="modeShadow" onclick="window.at360SetMode('shadow')">Shadow</button><button id="modeLive" onclick="window.at360SetMode('live')">Autopilot</button></div>
              </div>
            </div>
          </div>
          <div>
            <div class="brain-score"><small>Prontidão do Cérebro 360</small><strong id="brainScore">0%</strong><div class="brain-meter"><i id="brainMeter" style="width:0%"></i></div><span id="brainScoreText" style="font-size:11px;color:#cbd5e1">Complete os dados para melhorar o atendimento.</span></div>
            <div class="feature-stack">
              <div class="feature-row"><i>🎯</i><div><b>Meta 360</b><span>O atendente sabe qual resultado deve perseguir em cada conversa.</span></div></div>
              <div class="feature-row"><i>🔥</i><div><b>Radar 360</b><span>Identifica sinais de compra, urgência e pedido de orçamento.</span></div></div>
              <div class="feature-row"><i>🛡️</i><div><b>Shadow Mode</b><span>Teste o comportamento antes de deixar o motor atuar no atendimento publicado.</span></div></div>
              <div class="feature-row"><i>🔁</i><div><b>Evolução 360</b><span>As conversas alimentam insights para você corrigir lacunas e melhorar conversão.</span></div></div>
            </div>
          </div>
        </div>
      </section>
    `));
    content.appendChild(el(`
      <section class="view" id="view-simulator">
        <div class="heading"><div><div class="intel-badge">◉ Laboratório seguro</div><h1 style="margin-top:9px">Simulador 360</h1><p>Converse como se fosse um cliente e acompanhe o Radar 360 em tempo real.</p></div><div class="heading-actions"><button class="btn secondary" onclick="window.at360ResetSim()">Reiniciar teste</button><button class="btn primary" onclick="goView('brain')">Ajustar cérebro</button></div></div>
        <div class="sim-shell">
          <div class="intel-card sim-chat">
            <div class="intel-card-head"><div><h3 id="simBusiness">Seu negócio</h3><p>Ambiente de teste — não cria contato real no funil.</p></div><span class="intel-badge">Simulação</span></div>
            <div class="sim-messages" id="simMessages"></div>
            <form class="sim-form" id="simForm"><input id="simInput" autocomplete="off" placeholder="Ex.: Preciso fazer esse serviço hoje. Quanto fica?"><button>Enviar</button></form>
          </div>
          <div style="display:grid;gap:18px;align-content:start">
            <div class="intel-card"><div class="intel-card-head"><div><h3>Radar 360</h3><p>Leitura comercial da última mensagem.</p></div></div><div class="intel-body">
              <div class="radar-score"><strong id="radarScore">0</strong><span>/100</span></div>
              <span id="radarHeat" class="heat cold">Sem sinal ainda</span>
              <div style="margin-top:16px"><small style="font-size:10px;color:#64748b;font-weight:800">INTENÇÃO DETECTADA</small><div id="radarIntent" style="font-weight:900;margin-top:5px">—</div></div>
              <div class="reason-list" id="radarReasons"><div class="reason-item">Envie uma mensagem para iniciar a análise.</div></div>
            </div></div>
            <div class="intel-card"><div class="intel-card-head"><div><h3>Próxima melhor ação</h3><p>O que fazer com essa oportunidade.</p></div></div><div class="intel-body"><div id="nextAction" style="font-size:12px;line-height:1.6;color:#475569">O Radar mostrará a ação recomendada quando detectar intenção.</div></div></div>
          </div>
        </div>
      </section>
    `));
    content.appendChild(el(`
      <section class="view" id="view-growth">
        <div class="heading"><div><div class="intel-badge">↗ Inteligência de conversão</div><h1 style="margin-top:9px">Growth 360</h1><p>Entenda o que seus clientes procuram, onde travam e quais oportunidades merecem atenção.</p></div><button class="btn primary" onclick="window.at360LoadGrowth()">Atualizar análise</button></div>
        <div class="growth-kpis">
          <div class="growth-kpi"><small>Conversas analisadas</small><b id="growthConversations">0</b></div>
          <div class="growth-kpi"><small>Mensagens de clientes</small><b id="growthMessages">0</b></div>
          <div class="growth-kpi"><small>Oportunidades quentes</small><b id="growthHot">0</b></div>
          <div class="growth-kpi"><small>Receita registrada</small><b id="growthRevenue">R$ 0</b></div>
        </div>
        <div class="growth-grid">
          <div class="intel-card"><div class="intel-card-head"><div><h3>O que os clientes mais querem</h3><p>Intenções detectadas nas conversas reais do widget.</p></div></div><div class="intel-body"><div id="intentList" class="insight-list"><div class="insight"><b>Aguardando conversas</b><p>Quando clientes usarem o widget publicado, as intenções aparecerão aqui.</p></div></div></div></div>
          <div class="intel-card"><div class="intel-card-head"><div><h3>Evolução 360</h3><p>Sugestões práticas para melhorar o atendimento.</p></div></div><div class="intel-body"><div id="growthSuggestions" class="insight-list"></div></div></div>
        </div>
        <div class="intel-card" style="margin-top:18px"><div class="intel-card-head"><div><h3>Lacunas de conhecimento</h3><p>Perguntas que o motor ainda não conseguiu classificar bem.</p></div></div><div class="intel-body"><div id="gapList" class="insight-list"><div class="insight"><b>Nenhuma lacuna detectada ainda</b><p>Use o Simulador 360 ou publique o widget para começar a gerar dados.</p></div></div></div></div>
      </section>
    `));
  }

  function fillBrain(){
    const b=defaults();
    const map={brainObjective:'objective',brainTone:'tone',brainGoal:'goal',brainDifferentials:'differentiators',brainPayments:'payments',brainPolicies:'policies',brainKnowledge:'knowledge',brainQualification:'qualification',brainHandoff:'handoff'};
    Object.entries(map).forEach(([id,k])=>{const x=document.getElementById(id);if(x)x.value=b[k]||''});
    const f=document.getElementById('brainFollowup');if(f)f.checked=!!b.followupEnabled;
    refreshBrainVisuals();
  }
  function brainScore(){
    const b=defaults();
    const vals=[config.businessName,config.mainService,config.prices,config.services,b.goal,b.differentiators,b.payments,b.policies,b.knowledge,b.qualification,b.handoff];
    const weights=[8,8,8,8,12,10,7,7,12,12,8];
    let score=0;vals.forEach((v,i)=>{if(String(v||'').trim())score+=weights[i]});
    return Math.min(100,score);
  }
  function refreshBrainVisuals(){
    const b=defaults(),s=brainScore();
    const score=document.getElementById('brainScore'),meter=document.getElementById('brainMeter'),txt=document.getElementById('brainScoreText');
    if(score)score.textContent=s+'%';if(meter)meter.style.width=s+'%';
    if(txt)txt.textContent=s>=85?'Cérebro pronto para um atendimento consistente.':s>=60?'Boa base. Complete conhecimento e qualificação para ficar mais forte.':'Ainda faltam informações importantes para um atendimento premium.';
    document.getElementById('modeShadow')?.classList.toggle('active',b.mode!=='live');
    document.getElementById('modeLive')?.classList.toggle('active',b.mode==='live');
    const pill=document.getElementById('brainModePill');
    if(pill){pill.className='live-pill '+(b.mode==='live'?'live':'shadow');pill.textContent=b.mode==='live'?'Autopilot ativo':'Modo Shadow';}
  }
  window.at360SaveBrain=function(){
    const b=defaults();
    const read=id=>document.getElementById(id)?.value?.trim()||'';
    Object.assign(b,{
      objective:read('brainObjective')||'sales',tone:read('brainTone')||'consultivo',goal:read('brainGoal'),
      differentiators:read('brainDifferentials'),payments:read('brainPayments'),policies:read('brainPolicies'),
      knowledge:read('brainKnowledge'),qualification:read('brainQualification'),handoff:read('brainHandoff'),
      followupEnabled:!!document.getElementById('brainFollowup')?.checked
    });
    config.brain=b;saveAll();refreshBrainVisuals();showToast('Cérebro 360 salvo no banco');
  };
  window.at360SetMode=function(mode){
    defaults().mode=mode==='live'?'live':'shadow';config.brain=brain();saveAll();refreshBrainVisuals();
    showToast(mode==='live'?'Autopilot ativado':'Shadow Mode ativado');
  };

  let simHistory=[];
  function simAdd(text,type){
    const d=document.createElement('div');d.className='sim-msg '+type;d.textContent=text;document.getElementById('simMessages').appendChild(d);d.parentElement.scrollTop=d.parentElement.scrollHeight;
  }
  function startSim(){
    const box=document.getElementById('simMessages');if(!box)return;box.innerHTML='';simHistory=[];
    simAdd(config.greeting||('Olá! Sou o atendente virtual da '+config.businessName+'. Como posso ajudar?'),'bot');
  }
  window.at360ResetSim=startSim;
  function localIntent(t){
    t=t.toLowerCase();if(/orçamento|orcamento/.test(t))return'quote';if(/comprar|agendar|reservar|fechar/.test(t))return'buy';if(/preço|preco|valor|quanto/.test(t))return'price';if(/whats|atendente|humano/.test(t))return'human';if(/horário|horario|abre|fecha/.test(t))return'schedule';if(/serviço|servico|fazem/.test(t))return'services';return'other';
  }
  async function simulate(message){
    if(window.at360Api){
      try{return await window.at360Api('/api/brain/test',{method:'POST',body:JSON.stringify({message,history:simHistory})})}catch(e){}
    }
    const intent=localIntent(message);let score=intent==='buy'?75:intent==='quote'?62:intent==='price'?38:intent==='human'?30:12;
    return{reply:intent==='price'?config.prices:intent==='schedule'?'Nosso horário: '+config.hours:intent==='services'?'Trabalhamos com: '+config.services:intent==='buy'||intent==='quote'?'Ótimo. Me conte o que você precisa e, se quiser, envie nome e telefone para eu registrar a oportunidade.':config.fallback,intent,score,reasons:score>50?['sinal comercial relevante']:[]};
  }
  function radar(result){
    const score=Number(result.score||0),heat=document.getElementById('radarHeat');
    document.getElementById('radarScore').textContent=score;document.getElementById('radarIntent').textContent=(result.intent||'other').toUpperCase();
    heat.className='heat '+(score>=70?'hot':score>=40?'warm':'cold');heat.textContent=score>=70?'Oportunidade quente':score>=40?'Oportunidade morna':'Baixa intenção';
    const reasons=(result.reasons&&result.reasons.length?result.reasons:['Nenhum sinal comercial forte ainda']);
    document.getElementById('radarReasons').innerHTML=reasons.map(r=>'<div class="reason-item">'+esc(r)+'</div>').join('');
    const action=score>=70?'Priorize esse contato. Tente capturar telefone e levar a conversa para fechamento ou agendamento.':score>=40?'Continue qualificando. Descubra prazo, necessidade principal e objeção antes de encaminhar para vendas.':'Responda a dúvida com clareza e faça uma pergunta leve para entender a necessidade.';
    document.getElementById('nextAction').textContent=action;
  }

  async function loadGrowth(){
    let data={conversations:0,messages:0,hot:0,intents:[],gaps:[]};
    if(window.at360Api){try{data=await window.at360Api('/api/insights')}catch(e){}}
    document.getElementById('growthConversations').textContent=data.conversations||0;
    document.getElementById('growthMessages').textContent=data.messages||0;
    document.getElementById('growthHot').textContent=data.hot||0;
    document.getElementById('growthRevenue').textContent=typeof money==='function'?money(typeof revenue==='function'?revenue():0):'R$ 0';
    const intents=data.intents||[],max=Math.max(1,...intents.map(x=>Number(x.total||0)));
    document.getElementById('intentList').innerHTML=intents.length?intents.map(x=>'<div class="insight"><div class="insight-top"><b>'+esc(String(x.intent).toUpperCase())+'</b><span class="intel-badge">'+Number(x.total||0)+' interações</span></div><p>Score médio de intenção: '+Number(x.avg_score||0)+'/100</p><div class="mini-bar"><i style="width:'+Math.round(Number(x.total||0)/max*100)+'%"></i></div></div>').join(''):'<div class="insight"><b>Aguardando conversas reais</b><p>Publique o widget ou use o motor em produção para formar o mapa de intenção.</p></div>';
    const gaps=data.gaps||[];
    document.getElementById('gapList').innerHTML=gaps.length?gaps.map(x=>'<div class="insight"><div class="insight-top"><b>'+esc(x.content)+'</b><span class="intel-badge">'+Number(x.total||0)+'x</span></div><p>Adicione uma resposta ou informação sobre esse tema na Base de conhecimento do Cérebro 360.</p><button onclick="goView(\'brain\');document.getElementById(\'brainKnowledge\').focus()">Ensinar ao Cérebro 360</button></div>').join(''):'<div class="insight"><b>Nenhuma lacuna relevante ainda</b><p>Quando aparecerem perguntas não classificadas, elas serão agrupadas aqui.</p></div>';
    renderSuggestions(data);
  }
  window.at360LoadGrowth=loadGrowth;
  function renderSuggestions(data){
    const b=defaults(),items=[];
    if(!b.goal)items.push(['Defina uma Meta 360','Sem uma meta comercial explícita, o bot tende a responder em vez de conduzir.','brain']);
    if(!b.knowledge)items.push(['Alimente a base de conhecimento','Inclua respostas específicas do negócio para reduzir respostas genéricas.','brain']);
    if(!b.qualification)items.push(['Crie perguntas de qualificação','Perguntas certas ajudam o Radar a separar curiosos de compradores.','brain']);
    if((data.hot||0)>0)items.push(['Há oportunidades quentes','Você já tem conversas com score alto. Revise leads e priorize contato comercial.','leads']);
    if(!items.length)items.push(['Cérebro bem configurado','A estrutura principal está completa. Agora use dados reais para testar novas abordagens no Simulador 360.','simulator']);
    document.getElementById('growthSuggestions').innerHTML=items.map(([t,p,v])=>'<div class="insight"><b>'+esc(t)+'</b><p>'+esc(p)+'</p><button data-go="'+v+'">Abrir →</button></div>').join('');
    document.querySelectorAll('#growthSuggestions [data-go]').forEach(b=>b.onclick=()=>goView(b.dataset.go));
  }

  function enhanceInstall(){
    const id=config.botId||window.at360Account?.id;
    if(!id)return;
    config.botId=id;
    const code=document.getElementById('embedCode');
    const link=document.getElementById('shareLink');
    const src=location.origin+'/widget.js';
    if(code)code.textContent='<!-- AtendeBot 360 Intelligence -->\n<script src="'+src+'" data-bot-id="'+id+'"><\\/script>';
    if(link)link.textContent=location.origin+'/?bot='+encodeURIComponent(id);
  }
  function premiumRefresh(){
    defaults();fillBrain();enhanceInstall();
    const n=document.getElementById('simBusiness');if(n)n.textContent=config.businessName||'Seu negócio';
    const plan=document.querySelector('.sidebar-foot .plan strong');if(plan)plan.textContent='AtendeBot 360 Intelligence';
  }

  installNavigation();installViews();premiumRefresh();startSim();loadGrowth();
  const oldUpdate=typeof updateUI==='function'?updateUI:null;
  if(oldUpdate){updateUI=function(){oldUpdate();premiumRefresh();};}
  document.getElementById('simForm')?.addEventListener('submit',async e=>{
    e.preventDefault();const input=document.getElementById('simInput'),msg=input.value.trim();if(!msg)return;input.value='';simAdd(msg,'user');simHistory.push({role:'user',content:msg});
    const result=await simulate(msg);simAdd(result.reply||'Não consegui responder.','bot');simHistory.push({role:'bot',content:result.reply||''});radar(result);
  });
})();