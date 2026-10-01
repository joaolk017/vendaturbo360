(function(){
  const style=document.createElement('style');
  style.textContent=
    '.booking{display:none;margin-top:18px;border:1px solid var(--line);border-radius:20px;overflow:hidden}.booking.show{display:block}.booking-head{padding:16px 18px;background:linear-gradient(135deg,#0f172a,#1e293b);color:#fff}.booking-head b{display:block}.booking-head span{display:block;color:#cbd5e1;font-size:10px;margin-top:3px}.booking-body{padding:18px}.booking-grid{display:grid;grid-template-columns:1fr 1fr;gap:11px}.booking-field{display:block;font-size:10px;font-weight:900;color:#334155}.booking-field input,.booking-field select,.booking-field textarea{width:100%;margin-top:6px;border:1px solid #dbe3ee;border-radius:11px;padding:11px 12px;background:#fff;outline:none}.booking-field textarea{min-height:70px;resize:vertical}.booking-wide{grid-column:1/-1}.slot-title{font-size:11px;font-weight:900;margin:16px 0 8px}.slots{display:flex;gap:7px;flex-wrap:wrap}.slot{border:1px solid #c7d2fe;background:#eef2ff;color:#4338ca;border-radius:10px;padding:9px 11px;font-size:10px;font-weight:900}.slot.active{background:var(--brand);border-color:var(--brand);color:#fff}.slot-empty{padding:13px;border:1px dashed #cbd5e1;border-radius:11px;color:#64748b;font-size:10px;width:100%}.booking-summary{margin-top:15px;background:#f8fafc;border:1px solid var(--line);border-radius:14px;padding:12px}.booking-summary div{display:flex;justify-content:space-between;gap:10px;font-size:10px;padding:4px 0}.booking-summary b{font-size:10px}.booking-submit{width:100%;margin-top:12px;border:0;border-radius:13px;padding:13px;background:linear-gradient(135deg,var(--brand),var(--brand2));color:#fff;font-weight:900}.booking-error{min-height:18px;margin-top:8px;color:#be123c;font-size:10px;font-weight:800}.booking-success{display:none;margin-top:18px;padding:23px;border-radius:20px;background:#ecfdf5;border:1px solid #bbf7d0;text-align:center}.booking-success.show{display:block}.booking-success .check{width:58px;height:58px;border-radius:18px;background:#16a34a;color:#fff;display:grid;place-items:center;font-size:28px;margin:0 auto 12px}.booking-success h3{margin:0}.booking-success p{color:#475569;font-size:12px;line-height:1.55}.booking-code{font-size:23px;font-weight:900;margin:8px 0}.booking-price{font-weight:900;color:#0f172a}'+
    '@media(max-width:760px){.booking-grid{grid-template-columns:1fr}.booking-wide{grid-column:auto}.slots{display:grid;grid-template-columns:repeat(3,1fr)}.slot{width:100%}}';
  document.head.appendChild(style);

  let selectedTime='';
  function e(id){return document.getElementById(id)}
  function safeText(s){return String(s==null?'':s)}
  function activeAppointments(){return (bot?.appointments?.enabled&&Array.isArray(bot.appointments.services)&&bot.appointments.services.some(x=>x.active!==false)&&Array.isArray(bot.appointments.professionals)&&bot.appointments.professionals.some(x=>x.active!==false))}
  function datePlus(days){const d=new Date();d.setDate(d.getDate()+days);return d.toISOString().slice(0,10)}
  function money(v){return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}
  function mount(){
    if(!activeAppointments()||e('booking360'))return;
    const btn=document.createElement('button');
    btn.className='cta ghost';btn.id='bookingBtn';btn.textContent='📅 Agendar horário';
    document.querySelector('.hero-actions')?.appendChild(btn);

    const section=document.createElement('section');
    section.className='booking';section.id='booking360';
    section.innerHTML='<div class="booking-head"><b>📅 Agendar horário</b><span>Escolha serviço, profissional e um horário realmente disponível.</span></div><div class="booking-body">'+
      '<div class="booking-grid">'+
        '<label class="booking-field">Serviço<select id="bookingService"></select></label>'+
        '<label class="booking-field">Profissional<select id="bookingPro"></select></label>'+
        '<label class="booking-field booking-wide">Data<input type="date" id="bookingDate"></label>'+
      '</div>'+
      '<div class="slot-title">Horários disponíveis</div><div class="slots" id="bookingSlots"><div class="slot-empty">Escolha uma data para consultar horários.</div></div>'+
      '<div class="booking-grid" style="margin-top:15px">'+
        '<label class="booking-field">Seu nome *<input id="bookingName" placeholder="Ex.: João"></label>'+
        '<label class="booking-field">WhatsApp com DDD *<input id="bookingPhone" inputmode="tel" placeholder="(17) 99999-9999"></label>'+
        '<label class="booking-field booking-wide">Observação<textarea id="bookingNotes" placeholder="Opcional"></textarea></label>'+
      '</div>'+
      '<div class="booking-summary" id="bookingSummary"></div>'+
      '<button class="booking-submit" id="bookingSubmit">Confirmar agendamento</button><div class="booking-error" id="bookingError"></div>'+
    '</div>';

    const success=document.createElement('section');
    success.className='booking-success';success.id='bookingSuccess';
    success.innerHTML='<div class="check">✓</div><h3>Horário marcado!</h3><p>Seu agendamento foi registrado e o estabelecimento já pode receber a notificação.</p><div class="booking-code" id="bookingCode"></div><p id="bookingSuccessText"></p><div class="booking-pix" id="bookingPix"><img id="bookingPixQr"><div><b style="font-size:11px">⚡ Pague com PIX</b><p style="margin:4px 0 6px;font-size:9px">A confirmação será automática.</p><div class="booking-pix-code" id="bookingPixCode"></div><button id="bookingPixCopy">Copiar PIX</button><div class="booking-pix-paid" id="bookingPixPaid">✓ Pagamento confirmado</div></div></div>';

    const chat=e('chat');
    if(chat){chat.parentNode.insertBefore(section,chat);chat.parentNode.insertBefore(success,chat)}
    else document.querySelector('.content')?.append(section,success);

    const a=bot.appointments;
    const services=a.services.filter(x=>x.active!==false);
    const pros=a.professionals.filter(x=>x.active!==false);
    e('bookingService').innerHTML=services.map(s=>'<option value="'+String(s.id).replace(/"/g,'&quot;')+'">'+String(s.name).replace(/</g,'&lt;')+(Number(s.price||0)>0?' • '+money(s.price):'')+'</option>').join('');
    e('bookingPro').innerHTML=pros.map(p=>'<option value="'+String(p.id).replace(/"/g,'&quot;')+'">'+String(p.name).replace(/</g,'&lt;')+'</option>').join('');
    e('bookingDate').min=datePlus(0);e('bookingDate').max=datePlus(Number(a.advanceDays||30));e('bookingDate').value=datePlus(0);
    btn.onclick=openBooking;
    e('bookingService').onchange=()=>{selectedTime='';loadSlots()};
    e('bookingPro').onchange=()=>{selectedTime='';loadSlots()};
    e('bookingDate').onchange=()=>{selectedTime='';loadSlots()};
    e('bookingSubmit').onclick=submitBooking;
    renderSummary();
    loadSlots();
  }
  function openBooking(){
    e('booking360')?.classList.add('show');
    e('bookingSuccess')?.classList.remove('show');
    e('orderFlow')?.classList.remove('show');
    e('chat')?.classList.remove('show');
    e('success')?.classList.remove('show');
    e('booking360')?.scrollIntoView({behavior:'smooth',block:'start'});
    loadSlots();
  }
  async function loadSlots(){
    if(!e('bookingSlots')||!botId)return;
    e('bookingSlots').innerHTML='<div class="slot-empty">Consultando horários...</div>';
    e('bookingError').textContent='';
    const params=new URLSearchParams({date:e('bookingDate').value,professional:e('bookingPro').value,service:e('bookingService').value});
    try{
      const r=await fetch('/api/public/bot/'+encodeURIComponent(botId)+'/availability?'+params.toString());
      const data=await r.json().catch(()=>({}));
      if(!r.ok)throw new Error(data.error||'Não foi possível consultar horários.');
      const slots=Array.isArray(data.slots)?data.slots:[];
      e('bookingSlots').innerHTML=slots.length?slots.map(t=>'<button type="button" class="slot" data-time="'+t+'">'+t+'</button>').join(''):'<div class="slot-empty">Não há horários livres nesta data. Escolha outro dia.</div>';
      document.querySelectorAll('#bookingSlots .slot').forEach(b=>b.onclick=()=>{
        selectedTime=b.dataset.time;
        document.querySelectorAll('#bookingSlots .slot').forEach(x=>x.classList.toggle('active',x===b));
        renderSummary();
      });
    }catch(err){e('bookingSlots').innerHTML='<div class="slot-empty">'+safeText(err.message)+'</div>'}
    renderSummary();
  }
  function currentService(){return (bot?.appointments?.services||[]).find(x=>String(x.id)===e('bookingService')?.value)}
  function currentPro(){return (bot?.appointments?.professionals||[]).find(x=>String(x.id)===e('bookingPro')?.value)}
  function renderSummary(){
    if(!e('bookingSummary'))return;
    const s=currentService(),p=currentPro(),date=e('bookingDate')?.value||'';
    e('bookingSummary').innerHTML=
      '<div><span>Serviço</span><b>'+safeText(s?.name||'—')+'</b></div>'+
      '<div><span>Profissional</span><b>'+safeText(p?.name||'—')+'</b></div>'+
      '<div><span>Data</span><b>'+(date?date.split('-').reverse().join('/'):'—')+'</b></div>'+
      '<div><span>Horário</span><b>'+(selectedTime||'Escolha acima')+'</b></div>'+
      '<div><span>Duração</span><b>'+Number(s?.duration||30)+' min</b></div>'+
      '<div><span>Valor</span><b class="booking-price">'+(Number(s?.price||0)>0?money(s.price):'Consulte o estabelecimento')+'</b></div>';
  }
  let bookingPaymentPoll=null;
  function showBookingPix(a){
    if(!a?.pix?.brCode)return;
    e('bookingPixCode').textContent=a.pix.brCode;
    e('bookingPixQr').src='/api/qr?data='+encodeURIComponent(a.pix.brCode);
    e('bookingPix').classList.add('show');
    e('bookingPixCopy').onclick=async()=>{try{await navigator.clipboard.writeText(a.pix.brCode);e('bookingPixCopy').textContent='PIX copiado ✓';setTimeout(()=>e('bookingPixCopy').textContent='Copiar PIX',1600)}catch{}};
    clearInterval(bookingPaymentPoll);let n=0;
    bookingPaymentPoll=setInterval(async()=>{
      n++;
      try{
        const r=await fetch('/api/public/bot/'+encodeURIComponent(botId)+'/appointments/'+encodeURIComponent(a.id)+'/status');
        const d=await r.json().catch(()=>({}));
        if(r.ok&&d.paymentStatus==='paid'){clearInterval(bookingPaymentPoll);e('bookingPixPaid').classList.add('show')}
      }catch{}
      if(n>=200)clearInterval(bookingPaymentPoll);
    },3000);
  }
  async function submitBooking(){
    const err=e('bookingError');err.textContent='';
    if(!selectedTime){err.textContent='Escolha um horário disponível.';return}
    const payload={
      professionalId:e('bookingPro').value,
      serviceId:e('bookingService').value,
      date:e('bookingDate').value,
      time:selectedTime,
      customerName:e('bookingName').value.trim(),
      phone:e('bookingPhone').value,
      notes:e('bookingNotes').value.trim()
    };
    const b=e('bookingSubmit');b.disabled=true;b.textContent='Confirmando...';
    try{
      const r=await fetch('/api/public/bot/'+encodeURIComponent(botId)+'/appointments',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
      const data=await r.json().catch(()=>({}));
      if(!r.ok)throw new Error(data.error||'Não foi possível confirmar o horário.');
      const a=data.appointment;
      e('bookingCode').textContent=a.code;
      e('bookingSuccessText').textContent=a.serviceName+' • '+String(a.date).split('-').reverse().join('/')+' às '+a.time+' • '+a.professionalName;
      if(a.pix?.brCode)showBookingPix(a);
      e('booking360').classList.remove('show');e('bookingSuccess').classList.add('show');e('bookingSuccess').scrollIntoView({behavior:'smooth'});
      selectedTime='';
    }catch(ex){err.textContent=ex.message;loadSlots()}
    finally{b.disabled=false;b.textContent='Confirmar agendamento'}
  }

  let attempts=0;
  const timer=setInterval(()=>{
    attempts++;
    try{if(typeof bot!=='undefined'&&bot){clearInterval(timer);mount()}}
    catch(e){}
    if(attempts>100)clearInterval(timer);
  },100);
})();