(function(){
  if(window.__AT360_VERTICALS__)return;
  window.__AT360_VERTICALS__=true;
  const commerce=new Set(['marmitex','restaurante','acai','loja']);
  const schedule=new Set(['barbearia','estetica','clinica','oficina','imobiliaria']);
  function apply(){
    const t=config?.template||'barbearia';
    const orders=document.querySelector('[data-view="orders"]');
    const menu=document.querySelector('[data-view="menu"]');
    const agenda=document.querySelector('[data-view="appointments"]');
    if(orders)orders.style.display=commerce.has(t)?'flex':'none';
    if(menu)menu.style.display=commerce.has(t)?'flex':'none';
    if(agenda)agenda.style.display=schedule.has(t)?'flex':'none';
    const model=document.getElementById('sideModel');
    if(model&&typeof templates!=='undefined'&&templates[t])model.textContent='Modelo '+templates[t].label;
  }
  const original=typeof updateUI==='function'?updateUI:null;
  if(original)updateUI=function(){original();apply()};
  apply();
  setTimeout(apply,1200);
})();