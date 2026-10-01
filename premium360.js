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
    .ai-engine{margin-top:14px;padding:14px;border:1px solid #e2e8f0;border-radius:15px;background:#fff}.ai-engine-top{display:flex;justify-content:space-between;gap:10px;align-items:center}.ai-engine b{font-size:12px}.ai-engine p{font-size:10px;color:#64748b;line-height:1.45;margin:5px 0 0}.ai-state{display:inline-flex;border-radius:999px;padding:6px 9px;font-size:9px;font-weight:900}.ai-state.on{background:#ecfdf5;color:#047857}.ai-state.off{background:#fff7ed;color:#c2410c}.ai-usage{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin-top:11px}.ai-usage div{padding:9px;border-radius:10px;background:#f8fafc;border:1px solid #e2e8f0}.ai-usage small{display:block;color:#64748b;font-size:8px}.ai-usage strong{display:block;margin-top:3px;font-size:12px}.sim-engine-tag{display:block;margin-top:7px;padding-top:6px;border-top:1px solid rgba(148,163,184,.24);font-size:8px;font-weight:900;letter-spacing:.02em;opacity:.76}
    .sim-shell>*{min-width:0}.sim-chat,.sim-messages,.sim-form{min-width:0}#view-simulator{max-width:100%;overflow:hidden}
    @media(max-width:1180px){.sim-shell{grid-template-columns:minmax(0,1fr)!important}.sim-shell>div:last-child{grid-template-columns:1fr 1fr!important}.sim-chat{height:500px}}
    @media(max-width:900px){.intel-grid,.growth-grid{grid-template-columns:1fr}.growth-kpis{grid-template-columns:1fr 1fr}.sim-shell>div:last-child{grid-template-columns:1fr!important}.sim-chat{height:480px}.intel-card-head{align-items:flex-start;flex-wrap:wrap}.intel-card-head>div:last-child{max-width:100%}}
    @media(max-width:600px){.intel-form{grid-template-columns:1fr}.intel-form .wide{grid-column:auto}.growth-kpis{grid-template-columns:1fr 1fr}.intel-body{padding:15px}.sim-messages{padding:13px}.sim-msg{max-width:92%}.sim-chat{height:500px}.sim-form{padding:10px}.sim-form button{padding:0 12px}.ai-state{white-space:normal;text-align:center}.intel-card-head{padding:14px}.heading-actions{grid-template-columns:1fr!important}.heading-actions .btn{white-space:normal!important}}
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
            <div class="ai-engine">
              <div class="ai-engine-top"><div><b>IA Generativa 360</b><p id="aiEngineText">Verificando motor inteligente...</p></div><span id="aiEngineState" class="ai-state off">Verificando</span></div>
              <div class="ai-usage"><div><small>HOJE</small><strong id="aiToday">0</strong></div><div><small>MÊS</small><strong id="aiMonth">0</strong></div><div><small>LIMITE/DIA</small><strong id="aiLimit">—</strong></div></div>
            </div>
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
            <div class="intel-card-head"><div><h3 id="simBusiness">Seu negócio</h3><p>Ambiente de teste — não cria contato real no funil.</p></div><div style="display:flex;gap:7px;align-items:center;flex-wrap:wrap;justify-content:flex-end"><span class="intel-badge">Simulação</span><span id="simEngineState" class="ai-state off">Motor 360</span></div></div>
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
  function simAdd(text,type,engineText=''){
    const d=document.createElement('div');d.className='sim-msg '+type;
    const body=document.createElement('div');body.textContent=text;d.appendChild(body);
    if(engineText){const tag=document.createElement('small');tag.className='sim-engine-tag';tag.textContent=engineText;d.appendChild(tag);}
    document.getElementById('simMessages').appendChild(d);d.parentElement.scrollTop=d.parentElement.scrollHeight;
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
    loadAiStatus();
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


  function prettyProvider(provider){
    return provider==='groq'?'Groq':provider==='openai'?'OpenAI':'Motor 360';
  }
  function prettyModel(model){
    const m=String(model||'');
    if(/gpt-oss-20b/i.test(m))return'GPT-OSS 20B';
    if(/gpt-oss-120b/i.test(m))return'GPT-OSS 120B';
    return m.replace(/^openai\//i,'')||'IA';
  }
  function simEngineLabel(result){
    if(result?.engine==='generative'){
      return 'Resposta gerada por '+prettyProvider(result.provider)+' • '+prettyModel(result.model);
    }
    return 'Resposta gerada pelo Motor 360';
  }
  function updateSimEngine(result){
    const state=document.getElementById('simEngineState');if(!state)return;
    if(result?.engine==='generative'){
      state.className='ai-state on';
      state.textContent=prettyProvider(result.provider)+' • '+prettyModel(result.model);
      state.title='A última resposta foi gerada pela IA '+prettyProvider(result.provider)+'.';
    }else{
      state.className='ai-state off';
      state.textContent='Motor 360';
      state.title='A última resposta usou o motor de regras do AtendeBot 360.';
    }
  }

  async function loadAiStatus(){
    if(!window.at360Api)return;
    try{
      const s=await window.at360Api('/api/ai/status');
      const state=document.getElementById('aiEngineState'),text=document.getElementById('aiEngineText');
      const provider=prettyProvider(s.provider),model=prettyModel(s.model);
      if(state){state.className='ai-state '+(s.configured?'on':'off');state.textContent=s.configured?(provider+' ativa'):'Aguardando chave';}
      if(text)text.textContent=s.configured?('🟢 IA '+provider+' ativa — '+model+'. Pronta para Autopilot e Simulador.'):'A estrutura está pronta. Falta conectar a chave da IA no servidor.';
      if(document.getElementById('aiToday'))document.getElementById('aiToday').textContent=s.today||0;
      if(document.getElementById('aiMonth'))document.getElementById('aiMonth').textContent=s.month||0;
      if(document.getElementById('aiLimit'))document.getElementById('aiLimit').textContent=s.dailyLimit||'—';
      window.at360AiStatus=s;
    }catch(e){}
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
    if(typeof refreshPublishTools==='function')refreshPublishTools();
  }
  function premiumRefresh(){
    defaults();fillBrain();enhanceInstall();loadAiStatus();
    const n=document.getElementById('simBusiness');if(n)n.textContent=config.businessName||'Seu negócio';
    const plan=document.querySelector('.sidebar-foot .plan strong');if(plan)plan.textContent='AtendeBot 360 Intelligence';
  }

  installNavigation();installViews();premiumRefresh();startSim();loadGrowth();
  const oldUpdate=typeof updateUI==='function'?updateUI:null;
  if(oldUpdate){updateUI=function(){oldUpdate();premiumRefresh();};}
  document.getElementById('simForm')?.addEventListener('submit',async e=>{
    e.preventDefault();const input=document.getElementById('simInput'),msg=input.value.trim();if(!msg)return;input.value='';simAdd(msg,'user');
    const result=await simulate(msg);simHistory.push({role:'user',content:msg});updateSimEngine(result);simAdd(result.reply||'Não consegui responder.','bot',simEngineLabel(result));simHistory.push({role:'bot',content:result.reply||''});radar(result);
  });

  // === AtendeBot 360 Executive Visual System ===
  function installExecutiveVisualSystem(){
    if(document.getElementById('at360-executive-style'))return;
    const style=document.createElement('style');
    style.id='at360-executive-style';
    style.textContent=`
      :root{
        --bg:#f5f7fb;--surface:#ffffff;--ink:#0b1220;--muted:#667085;--line:#e7eaf0;
        --nav:#09111f;--brand:#4f46e5;--brand2:#7c3aed;--green:#12b76a;
        --shadow:0 12px 40px rgba(16,24,40,.07);--shadow-lg:0 24px 70px rgba(15,23,42,.13)
      }
      body{
        background:
          radial-gradient(circle at 78% 0%,rgba(99,102,241,.08),transparent 28%),
          radial-gradient(circle at 42% 12%,rgba(14,165,233,.045),transparent 24%),
          #f6f8fc;
        letter-spacing:-.005em
      }
      ::selection{background:#c7d2fe;color:#1e1b4b}
      .app{grid-template-columns:276px 1fr}
      .sidebar{
        padding:18px 14px 16px;
        background:
          radial-gradient(circle at 20% 0%,rgba(99,102,241,.22),transparent 30%),
          linear-gradient(180deg,#09111f 0%,#0b1425 55%,#0b1220 100%);
        border-right:1px solid rgba(255,255,255,.05);
        box-shadow:20px 0 55px rgba(15,23,42,.06)
      }
      .brand{padding:5px 8px 18px;gap:12px}
      .brand-mark,.mobile-brand-mark{
        background:linear-gradient(135deg,#6366f1 0%,#7c3aed 55%,#a855f7 100%);
        box-shadow:0 12px 32px rgba(99,102,241,.38),inset 0 1px 0 rgba(255,255,255,.25);
        position:relative;overflow:hidden
      }
      .brand-mark:after,.mobile-brand-mark:after{
        content:"";position:absolute;inset:-35%;background:linear-gradient(110deg,transparent 35%,rgba(255,255,255,.32),transparent 65%);transform:translateX(-70%) rotate(12deg);animation:at360shine 7s ease-in-out infinite
      }
      @keyframes at360shine{0%,72%,100%{transform:translateX(-90%) rotate(12deg)}84%{transform:translateX(95%) rotate(12deg)}}
      .brand strong{font-size:15px;letter-spacing:-.02em}
      .brand span{font-size:9.5px;color:#98a2b3}
      .at360-pro-badge{display:inline-flex;margin-left:6px;vertical-align:middle;padding:3px 6px;border-radius:999px;background:rgba(129,140,248,.16);border:1px solid rgba(165,180,252,.22);color:#c7d2fe;font-size:7px;font-weight:900;letter-spacing:.08em}
      .workspace{
        margin:0 3px 14px;padding:12px;border-radius:16px;
        background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.035));
        border:1px solid rgba(255,255,255,.075);box-shadow:inset 0 1px 0 rgba(255,255,255,.04)
      }
      .workspace .avatar{background:linear-gradient(135deg,#14b8a6,#22c55e);box-shadow:0 8px 20px rgba(16,185,129,.18)}
      .workspace b{font-size:12px}.workspace small{font-size:9px;color:#98a2b3}
      .create-side{
        margin:0 3px 11px;padding:12px 13px;border-radius:14px;
        background:linear-gradient(135deg,rgba(99,102,241,.30),rgba(124,58,237,.16));
        border:1px solid rgba(165,180,252,.24);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);
        transition:.18s ease
      }
      .create-side:hover{transform:translateY(-1px);border-color:rgba(199,210,254,.4)}
      .nav-title{font-size:8px;letter-spacing:.18em;color:#667085;padding:0 12px;margin:15px 0 7px}
      .nav-btn{
        min-height:42px;margin:2px 0;border-radius:12px;padding:8px 10px;color:#aeb9cc;font-size:11.5px;
        transition:.16s ease
      }
      .nav-btn .ico{
        width:28px;height:28px;border-radius:9px;display:grid;place-items:center;
        background:rgba(255,255,255,.045);border:1px solid rgba(255,255,255,.035);font-size:12px
      }
      .nav-btn:hover{background:rgba(255,255,255,.06);color:#fff;transform:translateX(2px)}
      .nav-btn.active{
        color:#fff;background:linear-gradient(90deg,rgba(99,102,241,.24),rgba(124,58,237,.08));
        box-shadow:inset 0 0 0 1px rgba(165,180,252,.10),0 8px 20px rgba(0,0,0,.08)
      }
      .nav-btn.active .ico{background:linear-gradient(135deg,#6366f1,#7c3aed);border-color:transparent;box-shadow:0 6px 14px rgba(99,102,241,.24)}
      .sidebar-foot .plan{
        border-radius:16px;background:linear-gradient(145deg,rgba(99,102,241,.16),rgba(255,255,255,.035));
        border-color:rgba(165,180,252,.16);padding:14px
      }
      .sidebar-foot .plan strong{font-size:11px}.sidebar-foot .plan p{font-size:9px;line-height:1.55;color:#98a2b3}
      .sidebar-foot .plan button{border-radius:10px;padding:9px 10px;font-size:9px;background:#f8fafc}
      .topbar{
        height:76px;padding:0 30px;background:rgba(255,255,255,.82);backdrop-filter:blur(22px) saturate(1.25);
        border-bottom:1px solid rgba(226,232,240,.82);box-shadow:0 6px 28px rgba(15,23,42,.025)
      }
      .page-title strong{font-size:14px;letter-spacing:-.015em}.page-title span{font-size:10px}
      .status-pill{
        padding:8px 11px;background:rgba(236,253,245,.8);border-color:#d1fadf;color:#027a48;font-size:10px;
        box-shadow:inset 0 1px 0 rgba(255,255,255,.8)
      }
      .status-pill .dot{box-shadow:0 0 0 4px rgba(34,197,94,.10)}
      .icon-btn{border-color:#eaecf0;border-radius:11px;background:rgba(255,255,255,.9);transition:.15s}
      .icon-btn:hover{transform:translateY(-1px);box-shadow:0 8px 18px rgba(15,23,42,.08)}
      .profile b{font-size:10.5px}.profile small{font-size:8.5px}
      .content{padding:30px 32px 52px;max-width:1540px}
      .heading{margin-bottom:22px;align-items:center}
      .heading h1{font-size:30px;letter-spacing:-.045em;color:#101828}
      .heading p{font-size:11px;line-height:1.55;color:#667085}
      .btn{
        border-radius:11px;padding:10px 14px;font-size:10px;letter-spacing:-.005em;transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease
      }
      .btn:hover{transform:translateY(-1px)}
      .btn.primary{background:linear-gradient(135deg,#4f46e5,#7c3aed);box-shadow:0 8px 20px rgba(79,70,229,.22),inset 0 1px 0 rgba(255,255,255,.18)}
      .btn.secondary{border-color:#e4e7ec;box-shadow:0 1px 2px rgba(16,24,40,.04)}
      .hero{
        position:relative;overflow:hidden;border-radius:26px;padding:30px;
        background:
          radial-gradient(circle at 86% 14%,rgba(129,140,248,.38),transparent 26%),
          radial-gradient(circle at 56% 120%,rgba(124,58,237,.34),transparent 36%),
          linear-gradient(135deg,#101828 0%,#162033 47%,#29255f 100%);
        box-shadow:0 24px 70px rgba(15,23,42,.17);border:1px solid rgba(255,255,255,.07)
      }
      .hero:after{content:"";position:absolute;width:360px;height:360px;border:1px solid rgba(255,255,255,.07);border-radius:50%;right:-150px;top:-175px;box-shadow:0 0 0 48px rgba(255,255,255,.018),0 0 0 96px rgba(255,255,255,.012)}
      .hero>div{position:relative;z-index:1}
      .hero small{font-size:8.5px;letter-spacing:.16em;color:#c7d2fe}
      .hero h2{font-size:34px;max-width:820px;line-height:1.03;letter-spacing:-.052em}
      .hero p{font-size:11.5px;max-width:750px;color:#cbd5e1}
      .hero-proof{gap:10px}
      .hero-proof div{
        padding:14px;border-radius:15px;background:rgba(255,255,255,.075);border:1px solid rgba(255,255,255,.09);
        backdrop-filter:blur(10px);box-shadow:inset 0 1px 0 rgba(255,255,255,.04)
      }
      .hero-proof b{font-size:21px}.hero-proof span{font-size:8.5px;color:#b8c2d4}
      .at360-system-strip{
        display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;margin:14px 0 18px
      }
      .at360-system-item{
        display:flex;align-items:center;gap:10px;padding:11px 12px;border-radius:14px;background:rgba(255,255,255,.86);
        border:1px solid #e7eaf0;box-shadow:0 5px 18px rgba(16,24,40,.035)
      }
      .at360-system-icon{width:31px;height:31px;border-radius:10px;display:grid;place-items:center;background:#eef2ff;color:#4338ca;font-size:13px}
      .at360-system-item b{display:block;font-size:9.5px;color:#344054}.at360-system-item span{display:block;font-size:7.8px;color:#98a2b3;margin-top:2px}
      .at360-system-item i{margin-left:auto;width:7px;height:7px;border-radius:50%;background:#12b76a;box-shadow:0 0 0 4px rgba(18,183,106,.09)}
      .kpis{gap:12px}
      .kpi{
        border:1px solid #e7eaf0;border-radius:19px;padding:16px;background:rgba(255,255,255,.90);
        box-shadow:0 8px 26px rgba(16,24,40,.045);position:relative;overflow:hidden;transition:.16s
      }
      .kpi:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(16,24,40,.075)}
      .kpi:after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:linear-gradient(90deg,#6366f1,#a855f7);opacity:.55}
      .kpi-icon{border-radius:11px}.kpi small{font-size:9px;color:#667085}.kpi strong{font-size:25px;color:#101828;letter-spacing:-.045em}.kpi .trend{font-size:7.5px}
      .panel,.intel-card,.mg-panel,.ops-panel{
        border-color:#e7eaf0!important;border-radius:20px!important;background:rgba(255,255,255,.92)!important;
        box-shadow:0 10px 30px rgba(16,24,40,.045)!important
      }
      .panel-head,.intel-card-head,.mg-head,.ops-panel-head{border-bottom-color:#eef1f5!important;padding:15px 17px!important}
      .panel-head h3,.intel-card-head h3,.mg-head h3,.ops-panel-head h3{font-size:12px!important;color:#101828}
      .panel-head span,.intel-card-head p,.mg-head p,.ops-panel-head p{font-size:9px!important;color:#98a2b3!important}
      .panel-body,.intel-body,.mg-body{padding:17px!important}
      input,textarea,select{
        border-color:#dfe3ea!important;border-radius:10px!important;box-shadow:0 1px 2px rgba(16,24,40,.025);
        transition:border-color .15s ease,box-shadow .15s ease
      }
      input:focus,textarea:focus,select:focus{border-color:#a5b4fc!important;box-shadow:0 0 0 3px rgba(99,102,241,.09)!important;outline:none}
      .field,.intel-field,.mg-field,.agenda-field{color:#475467!important;font-size:9px!important}
      .order-card,.appointment-card,.customer-card,.team-card,.stock-card,.catalog-card{
        border-color:#e7eaf0!important;border-radius:16px!important;box-shadow:0 4px 15px rgba(16,24,40,.025);
        transition:.16s ease
      }
      .order-card:hover,.appointment-card:hover,.customer-card:hover,.team-card:hover,.stock-card:hover{transform:translateY(-1px);box-shadow:0 10px 24px rgba(16,24,40,.06)}
      .order-status,.badge,.stock-badge,.ai-state,.heat,.live-pill{letter-spacing:.015em}
      .table th{background:#f9fafb;color:#667085;font-size:8px}.table td{font-size:10px;border-bottom-color:#f0f2f5}
      .toast{border-radius:12px!important;box-shadow:0 18px 45px rgba(15,23,42,.22)!important}
      .floating-chat .launcher{box-shadow:0 14px 35px rgba(79,70,229,.32)!important}
      .chatbox{border:1px solid #e4e7ec!important;box-shadow:0 26px 80px rgba(15,23,42,.20)!important}
      .ops-hero{
        background:radial-gradient(circle at 88% 10%,rgba(99,102,241,.34),transparent 28%),linear-gradient(135deg,#101828,#16213a 62%,#30266b)!important;
        border-radius:26px!important;box-shadow:0 24px 70px rgba(15,23,42,.15)!important
      }
      .ops-kpi,.growth-kpi,.mg-kpi{border-color:#e7eaf0!important;box-shadow:0 7px 24px rgba(16,24,40,.035)!important}
      .notify-card,.pix-box,.brain-score{
        background:radial-gradient(circle at 90% 0%,rgba(99,102,241,.26),transparent 30%),linear-gradient(145deg,#101828,#1d2939)!important
      }

      /* Login / first impression */
      .at-auth-overlay{
        background:
          radial-gradient(circle at 16% 18%,rgba(99,102,241,.26),transparent 27%),
          radial-gradient(circle at 88% 90%,rgba(124,58,237,.18),transparent 28%),
          linear-gradient(135deg,#080f1d,#111b2f 62%,#1f1a4b)!important
      }
      .at-auth-card{max-width:1040px!important;border-radius:30px!important;box-shadow:0 40px 120px rgba(0,0,0,.38)!important;border:1px solid rgba(255,255,255,.08)}
      .at-auth-brand{
        padding:44px!important;background:
          radial-gradient(circle at 86% 15%,rgba(99,102,241,.28),transparent 26%),
          linear-gradient(145deg,#0d1526,#18223a)!important
      }
      .at-auth-logo i{box-shadow:0 12px 28px rgba(99,102,241,.35)}
      .at-auth-brand h2{font-size:39px!important;line-height:1.01!important;letter-spacing:-.055em!important;max-width:470px}
      .at-auth-brand p{font-size:12px!important;max-width:470px;color:#b9c4d5!important}
      .at-auth-point{border:1px solid rgba(255,255,255,.07);background:rgba(255,255,255,.045);padding:10px 11px;border-radius:12px;font-size:10px!important}
      .at-auth-formwrap{padding:44px!important}
      .at-auth-pane h3{font-size:28px!important;letter-spacing:-.045em!important}
      .at-auth-submit{border-radius:11px!important;box-shadow:0 10px 24px rgba(79,70,229,.20)}
      .at-auth-demo{border-color:#e7eaf0!important;background:#f9fafb!important;border-radius:12px!important}

      @media(max-width:1100px){
        .app{grid-template-columns:238px 1fr}.content{padding:24px}.at360-system-strip{grid-template-columns:1fr 1fr}
        .hero h2{font-size:30px}.sidebar{padding-left:10px;padding-right:10px}
      }
      @media(max-width:820px){
        .app{display:block}.content{padding:18px 14px 40px}.topbar{height:64px;padding:0 14px}.heading{align-items:flex-start}.heading h1{font-size:24px}
        .hero{padding:20px;border-radius:20px}.hero h2{font-size:27px}.hero-proof{grid-template-columns:repeat(3,1fr)}
        .at360-system-strip{grid-template-columns:1fr 1fr;gap:7px}.at360-system-item{padding:9px}
        .kpis{grid-template-columns:1fr 1fr}.kpi{min-height:108px}
        .at-auth-formwrap{padding:26px!important}
      }
      @media(max-width:520px){
        .content{padding:14px 11px 38px}.heading{margin-bottom:16px}.heading h1{font-size:22px}.heading p{font-size:10px}
        .hero{padding:18px;border-radius:18px}.hero h2{font-size:24px}.hero p{font-size:10.5px}.hero-proof{grid-template-columns:1fr;gap:6px}
        .hero-proof div{padding:10px}.hero-proof b{font-size:17px}.at360-system-strip{grid-template-columns:1fr}
        .kpis{gap:8px}.kpi{padding:12px;border-radius:15px}.kpi strong{font-size:21px}
        .panel,.intel-card,.mg-panel,.ops-panel{border-radius:16px!important}
        .at-auth-brand{padding:24px!important}.at-auth-brand h2{font-size:29px!important}.at-auth-formwrap{padding:22px!important}
      }
    `;
    document.head.appendChild(style);
  }

  function enhanceExecutiveCopy(){
    const brand=document.querySelector('.brand');
    if(brand){
      const strong=brand.querySelector('strong');
      if(strong&&!strong.querySelector('.at360-pro-badge'))strong.insertAdjacentHTML('beforeend','<span class="at360-pro-badge">BUSINESS OS</span>');
      const sub=brand.querySelector('span:not(.at360-pro-badge)');
      if(sub)sub.textContent='Central operacional inteligente';
    }
    const topSub=document.getElementById('topSubtitle');
    if(topSub&&topSub.textContent==='Acompanhe clientes e conversões')topSub.textContent='Operação, atendimento e crescimento em tempo real';

    const dash=document.getElementById('view-dashboard');
    if(dash){
      const h=dash.querySelector('.heading h1'),p=dash.querySelector('.heading p');
      if(h)h.textContent='Central de comando';
      if(p)p.textContent='Tudo que precisa da sua atenção, do atendimento ao caixa.';
      const hero=dash.querySelector('.hero');
      if(hero){
        const small=hero.querySelector('small'),title=hero.querySelector('h2'),copy=hero.querySelector('p');
        if(small)small.textContent='ATENDEBOT 360 • OPERAÇÃO CONECTADA';
        if(title)title.textContent='Atendimento, vendas e operação funcionando como um único sistema.';
        if(copy)copy.textContent='Centralize conversas, clientes, pedidos, agenda, pagamentos, equipe e estoque sem perder o controle do que acontece no negócio.';
        if(!document.getElementById('at360SystemStrip')){
          const strip=document.createElement('div');strip.id='at360SystemStrip';strip.className='at360-system-strip';
          strip.innerHTML=
            '<div class="at360-system-item"><span class="at360-system-icon">◈</span><div><b>Assistente 360</b><span>Atendimento inteligente</span></div><i></i></div>'+
            '<div class="at360-system-item"><span class="at360-system-icon">⚡</span><div><b>Central Operacional</b><span>Fila em tempo real</span></div><i></i></div>'+
            '<div class="at360-system-item"><span class="at360-system-icon">R$</span><div><b>Financeiro 360</b><span>PIX e caixa integrados</span></div><i></i></div>'+
            '<div class="at360-system-item"><span class="at360-system-icon">◎</span><div><b>Clientes 360</b><span>Histórico centralizado</span></div><i></i></div>';
          hero.insertAdjacentElement('afterend',strip);
        }
      }
    }

    const plan=document.querySelector('.sidebar-foot .plan');
    if(plan){
      const title=plan.querySelector('strong'),copy=plan.querySelector('p'),button=plan.querySelector('button');
      if(title)title.textContent='AtendeBot 360 Pro';
      if(copy)copy.textContent='Central completa com automações, equipe, financeiro e operação integrada.';
      if(button)button.textContent='Ver estrutura do plano';
    }

    const authBrand=document.querySelector('.at-auth-brand');
    if(authBrand){
      const h=authBrand.querySelector('h2'),p=authBrand.querySelector('p');
      if(h)h.textContent='Seu negócio operando com padrão de empresa grande.';
      if(p)p.textContent='Atendimento, pedidos, agenda, clientes, equipe, financeiro e estoque conectados em uma única central.';
      const points=authBrand.querySelectorAll('.at-auth-point');
      const copy=[
        ['Central operacional','O que precisa de atenção aparece em uma única fila.'],
        ['Automação de vendas','Pedidos, agenda e PIX seguem o fluxo automaticamente.'],
        ['Gestão completa','Clientes, equipe, financeiro e estoque no mesmo sistema.']
      ];
      points.forEach((x,i)=>{if(copy[i])x.innerHTML='<span>✓</span><div><b>'+copy[i][0]+'</b><br>'+copy[i][1]+'</div>'});
      const small=authBrand.querySelector('small');
      if(small)small.textContent='AtendeBot 360 • Business Operating System';
    }
  }

  function addExecutiveInteractions(){
    document.querySelectorAll('.panel,.kpi,.ops-kpi,.mg-kpi,.growth-kpi').forEach(el=>{
      if(el.dataset.executiveReady)return;el.dataset.executiveReady='1';
    });
    document.querySelectorAll('.nav-btn').forEach(btn=>{
      if(btn.dataset.executiveReady)return;btn.dataset.executiveReady='1';
      btn.addEventListener('mouseenter',()=>{const ico=btn.querySelector('.ico');if(ico)ico.style.transform='scale(1.04)'});
      btn.addEventListener('mouseleave',()=>{const ico=btn.querySelector('.ico');if(ico)ico.style.transform=''});
    });
  }

  installExecutiveVisualSystem();
  enhanceExecutiveCopy();
  addExecutiveInteractions();
  setTimeout(()=>{enhanceExecutiveCopy();addExecutiveInteractions()},900);
  setTimeout(()=>{enhanceExecutiveCopy();addExecutiveInteractions()},2200);

})();