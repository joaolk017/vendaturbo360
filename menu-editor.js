(function(){
  if(window.__AT360_MENU_EDITOR__) return;
  window.__AT360_MENU_EDITOR__=true;

  const css=document.createElement('style');
  css.textContent=
    '.menu-layout{display:grid;grid-template-columns:minmax(0,1.35fr) minmax(300px,.65fr);gap:18px}'+
    '.menu-stack{display:grid;gap:18px}.menu-settings{display:grid;grid-template-columns:repeat(2,1fr);gap:13px}'+
    '.menu-switch{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px;border:1px solid #e2e8f0;border-radius:14px;background:#f8fafc}'+
    '.menu-switch b{display:block;font-size:12px}.menu-switch small{display:block;color:#64748b;font-size:10px;margin-top:3px;line-height:1.4}'+
    '.menu-toggle{width:44px;height:24px;appearance:none;background:#cbd5e1;border-radius:999px;position:relative;transition:.2s;cursor:pointer;flex:0 0 auto}.menu-toggle:before{content:"";position:absolute;width:18px;height:18px;border-radius:50%;background:#fff;left:3px;top:3px;transition:.2s;box-shadow:0 2px 7px rgba(15,23,42,.2)}.menu-toggle:checked{background:#22c55e}.menu-toggle:checked:before{transform:translateX(20px)}'+
    '.menu-field{display:block;font-size:10px;font-weight:900;color:#334155}.menu-field input,.menu-field textarea{width:100%;margin-top:6px;border:1px solid #dbe3ee;border-radius:11px;padding:11px 12px;outline:none;background:#fff}.menu-field textarea{min-height:72px;resize:vertical}.menu-field input:focus,.menu-field textarea:focus{border-color:#818cf8;box-shadow:0 0 0 3px rgba(99,102,241,.08)}'+
    '.catalog-list{display:grid;gap:11px}.catalog-card{border:1px solid #e2e8f0;border-radius:16px;padding:13px;background:#fff}.catalog-top{display:grid;grid-template-columns:64px minmax(0,1fr) auto;gap:12px;align-items:start}.catalog-thumb{width:64px;height:64px;border-radius:13px;background:#f1f5f9;border:1px solid #e2e8f0;overflow:hidden;display:grid;place-items:center;font-size:25px}.catalog-thumb img{width:100%;height:100%;object-fit:cover}.catalog-fields{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(105px,.7fr);gap:9px}.catalog-fields .wide{grid-column:1/-1}.catalog-actions{display:flex;gap:6px;align-items:center}.catalog-delete{width:34px;height:34px;border:1px solid #fecdd3;background:#fff1f2;color:#be123c;border-radius:10px;font-weight:900}.catalog-availability{display:flex;align-items:center;gap:7px;margin-top:9px;font-size:10px;font-weight:800;color:#475569}.catalog-empty{padding:26px;border:1px dashed #cbd5e1;border-radius:15px;text-align:center;color:#64748b;font-size:11px}.menu-toolbar{display:flex;gap:8px;flex-wrap:wrap}.menu-preview{position:sticky;top:92px;background:linear-gradient(145deg,#0f172a,#1e293b);color:#fff;border-radius:20px;padding:18px}.menu-preview h3{margin:0 0 5px}.menu-preview>p{margin:0 0 15px;color:#cbd5e1;font-size:11px;line-height:1.5}.menu-preview-row{display:flex;justify-content:space-between;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.08);font-size:11px}.menu-preview-row span{color:#cbd5e1}.menu-preview-items{display:grid;gap:7px;margin-top:13px}.menu-preview-item{padding:9px 10px;border-radius:11px;background:rgba(255,255,255,.07);display:flex;justify-content:space-between;gap:8px;font-size:10px}.menu-preview-item b{font-size:10px}.menu-hint{margin-top:13px;padding:11px;border-radius:12px;background:#eef2ff;border:1px solid #c7d2fe;color:#4338ca;font-size:10px;line-height:1.5}'+
    '@media(max-width:980px){.menu-layout{grid-template-columns:1fr}.menu-preview{position:static}.menu-settings{grid-template-columns:1fr 1fr}}@media(max-width:620px){.menu-settings{grid-template-columns:1fr}.catalog-top{grid-template-columns:54px minmax(0,1fr) auto}.catalog-thumb{width:54px;height:54px}.catalog-fields{grid-template-columns:1fr}.catalog-fields .wide{grid-column:auto}.menu-toolbar{display:grid;grid-template-columns:1fr 1fr}.menu-toolbar .btn{width:100%}}';
  document.head.appendChild(css);
  const regulatedCss=document.createElement('style');
  regulatedCss.textContent='.regulated-banner{display:none;padding:12px 13px;border-radius:13px;background:#fff7ed;border:1px solid #fed7aa;color:#9a3412;font-size:10px;line-height:1.5;margin-bottom:14px}.regulated-banner.show{display:block}';
  document.head.appendChild(regulatedCss);

  function esc(s){
    return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]});
  }
  function id(prefix){
    return prefix+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,7);
  }
  function getDelivery(){
    if(!config.delivery || typeof config.delivery!=='object') config.delivery={};
    const d=config.delivery;
    if(typeof d.enabled!=='boolean') d.enabled=true;
    if(!d.open) d.open='11:00';
    if(!d.close) d.close='14:00';
    d.deliveryFee=Math.max(0,Number(d.deliveryFee||0));
    d.minimumOrder=Math.max(0,Number(d.minimumOrder||0));
    if(!Array.isArray(d.catalog)) d.catalog=[];
    d.catalog=d.catalog.map(function(p,i){
      return {
        id:String(p.id||id('item')),
        kind:p.kind==='addon'?'addon':'product',
        name:String(p.name||('Item '+(i+1))),
        description:String(p.description||''),
        price:Math.max(0,Number(p.price||0)),
        image:String(p.image||''),
        available:p.available!==false
      };
    });
    return d;
  }
  function money(v){
    return Number(v||0).toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
  }
  function installNav(){
    if(document.querySelector('[data-view="menu"]')) return;
    const orders=document.querySelector('.nav-btn[data-view="orders"]');
    if(!orders) return;
    const b=document.createElement('button');
    b.className='nav-btn';b.dataset.view='menu';
    b.innerHTML='<span class="ico">🍽</span><span id="menuNavLabel">Cardápio & Delivery</span>';
    orders.after(b);
    b.addEventListener('click',function(){goView('menu')});
  }
  function installView(){
    if(document.getElementById('view-menu')) return;
    const view=document.createElement('section');
    view.className='view';view.id='view-menu';
    view.innerHTML=
      '<div class="heading"><div><h1 id="menuPageTitle">Cardápio & Delivery</h1><p id="menuPageSubtitle">Edite produtos, adicionais, preços e regras do pedido sem mexer em código.</p></div><div class="heading-actions"><button class="btn secondary" id="menuOpenPublic">↗ Ver como cliente</button><button class="btn primary" id="menuSaveTop">Salvar catálogo</button></div></div>'+
      '<div class="regulated-banner" id="regulatedBanner"></div>'+
      '<div class="menu-layout"><div class="menu-stack">'+
        '<div class="panel"><div class="panel-head"><div><h3>Configuração do delivery</h3><span>Horário, taxa e pedido mínimo</span></div></div><div class="panel-body">'+
          '<div class="menu-switch"><div><b>Receber pedidos online</b><small>Quando desligado, o botão “Fazer pedido” some da página pública.</small></div><input class="menu-toggle" type="checkbox" id="menuEnabled"></div>'+
          '<div class="menu-settings" style="margin-top:14px"><label class="menu-field">Abre pedidos às<input type="time" id="menuOpen"></label><label class="menu-field">Encerra pedidos às<input type="time" id="menuClose"></label><label class="menu-field">Taxa de entrega (R$)<input type="number" min="0" step="0.01" id="menuFee"></label><label class="menu-field">Pedido mínimo (R$)<input type="number" min="0" step="0.01" id="menuMinimum"></label></div>'+
        '</div></div>'+
        '<div class="panel"><div class="panel-head"><div><h3 id="menuProductsTitle">Produtos</h3><span id="menuProductsSubtitle">Itens principais que o cliente pode escolher</span></div><button class="btn secondary" id="addProduct">＋ Adicionar produto</button></div><div class="panel-body"><div class="catalog-list" id="productList"></div></div></div>'+
        '<div class="panel"><div class="panel-head"><div><h3>Adicionais</h3><span>Extras como bebida, sobremesa, ovo ou complemento</span></div><button class="btn secondary" id="addAddon">＋ Adicionar adicional</button></div><div class="panel-body"><div class="catalog-list" id="addonList"></div><div class="menu-hint">Os adicionais aparecem separados na página do cliente, mas entram no mesmo resumo e no total do pedido.</div></div></div>'+
        '<div class="menu-toolbar"><button class="btn secondary" id="menuAddProductBottom">＋ Novo produto</button><button class="btn secondary" id="menuAddAddonBottom">＋ Novo adicional</button><button class="btn primary" id="menuSaveBottom">Salvar alterações</button></div>'+
      '</div><div><div class="menu-preview"><h3>Prévia do cardápio</h3><p>Resumo do que ficará disponível para o cliente.</p><div id="menuPreviewStats"></div><div class="menu-preview-items" id="menuPreviewItems"></div><button class="btn primary" style="width:100%;margin-top:14px" id="menuPreviewOpen">Abrir página do cliente</button></div></div></div>';
    const install=document.getElementById('view-install');
    const content=document.querySelector('.content');
    if(install&&content) content.insertBefore(view,install); else if(content) content.appendChild(view);
  }
  function cardHtml(p){
    const image=p.image?'<img src="'+esc(p.image)+'" alt="">':'🍽';
    return '<article class="catalog-card" data-menu-id="'+esc(p.id)+'">'+
      '<div class="catalog-top"><div class="catalog-thumb">'+image+'</div><div class="catalog-fields">'+
        '<label class="menu-field">Nome<input data-field="name" value="'+esc(p.name)+'" placeholder="'+(p.kind==='addon'?'Ex.: Coca-Cola lata':'Ex.: Marmitex M')+'"></label>'+
        '<label class="menu-field">Preço (R$)<input data-field="price" type="number" min="0" step="0.01" value="'+Number(p.price||0)+'"></label>'+
        '<label class="menu-field wide">Descrição<textarea data-field="description" placeholder="Descreva de forma curta e apetitosa">'+esc(p.description)+'</textarea></label>'+
        '<label class="menu-field wide">URL da foto<input data-field="image" value="'+esc(p.image)+'" placeholder="https://.../foto.jpg"></label>'+
      '</div><div class="catalog-actions"><button class="catalog-delete" data-delete="'+esc(p.id)+'" title="Excluir">×</button></div></div>'+
      '<label class="catalog-availability"><input type="checkbox" data-field="available" '+(p.available!==false?'checked':'')+'> Disponível para pedido agora</label>'+
    '</article>';
  }
  function render(){
    const d=getDelivery();
    const regulated=!!config.ageRestricted;
    const tobacco=config.regulatedCategory==='tobacco';
    const title=document.getElementById('menuPageTitle'),sub=document.getElementById('menuPageSubtitle'),nav=document.getElementById('menuNavLabel');
    const pTitle=document.getElementById('menuProductsTitle'),pSub=document.getElementById('menuProductsSubtitle'),banner=document.getElementById('regulatedBanner');
    if(title)title.textContent=tobacco?'Catálogo interno & Operação 18+':regulated?'Catálogo & Delivery 18+':'Cardápio & Delivery';
    if(sub)sub.textContent=tobacco?'Gerencie estoque e itens internos. A vitrine pública de fumígenos fica desativada por padrão.':regulated?'Gerencie itens, preços, entrega e regras de maioridade.':'Edite produtos, adicionais, preços e regras do pedido sem mexer em código.';
    if(nav)nav.textContent=tobacco?'Catálogo interno 18+':regulated?'Catálogo & Delivery 18+':'Cardápio & Delivery';
    if(pTitle)pTitle.textContent=tobacco?'Produtos internos':'Produtos do catálogo';
    if(pSub)pSub.textContent=tobacco?'Controle interno de itens permitidos no estabelecimento':'Itens principais que o cliente pode escolher';
    if(banner){
      if(regulated){
        banner.classList.add('show');
        banner.innerHTML=tobacco?'🔞 <b>Tabacaria:</b> venda somente para maiores de 18 anos. A vitrine pública de fumígenos fica bloqueada; vapes/pods não devem ser cadastrados para comercialização.':'🔞 <b>Adega:</b> venda e entrega somente para maiores de 18 anos. O cliente precisa confirmar maioridade e o estabelecimento deve conferir documento quando necessário.';
      }else banner.classList.remove('show');
    }
    const enabled=document.getElementById('menuEnabled');if(!enabled)return;
    if(tobacco){d.enabled=false;enabled.checked=false;enabled.disabled=true;}else{enabled.disabled=false;enabled.checked=!!d.enabled;}
    document.getElementById('menuOpen').value=d.open||'11:00';
    document.getElementById('menuClose').value=d.close||'14:00';
    document.getElementById('menuFee').value=Number(d.deliveryFee||0);
    document.getElementById('menuMinimum').value=Number(d.minimumOrder||0);
    const products=d.catalog.filter(function(p){return p.kind!=='addon'});
    const addons=d.catalog.filter(function(p){return p.kind==='addon'});
    document.getElementById('productList').innerHTML=products.length?products.map(cardHtml).join(''):'<div class="catalog-empty">Nenhum prato cadastrado. Clique em “Adicionar prato”.</div>';
    document.getElementById('addonList').innerHTML=addons.length?addons.map(cardHtml).join(''):'<div class="catalog-empty">Nenhum adicional cadastrado.</div>';
    bindCards();
    renderPreview();
  }
  function bindCards(){
    document.querySelectorAll('[data-menu-id]').forEach(function(card){
      const pid=card.dataset.menuId;
      card.querySelectorAll('[data-field]').forEach(function(input){
        const event=input.type==='checkbox'?'change':'input';
        input.addEventListener(event,function(){
          const p=getDelivery().catalog.find(function(x){return x.id===pid});if(!p)return;
          const field=input.dataset.field;
          if(field==='price') p.price=Math.max(0,Number(input.value||0));
          else if(field==='available') p.available=!!input.checked;
          else p[field]=input.value;
          if(field==='image'){
            const thumb=card.querySelector('.catalog-thumb');
            thumb.innerHTML=input.value.trim()?'<img src="'+esc(input.value.trim())+'" alt="">':'🍽';
          }
          renderPreview();
        });
      });
    });
    document.querySelectorAll('[data-delete]').forEach(function(b){
      b.onclick=function(){
        const d=getDelivery();
        const idx=d.catalog.findIndex(function(x){return x.id===b.dataset.delete});
        if(idx>-1)d.catalog.splice(idx,1);
        render();
      };
    });
  }
  function add(kind){
    const d=getDelivery();
    d.catalog.push({
      id:id(kind==='addon'?'extra':'item'),
      kind:kind,
      name:kind==='addon'?'Novo adicional':'Novo prato',
      description:'',
      price:0,
      image:'',
      available:true
    });
    render();
    setTimeout(function(){
      const cards=document.querySelectorAll('[data-menu-id]');
      const last=cards[cards.length-1];if(last)last.scrollIntoView({behavior:'smooth',block:'center'});
    },50);
  }
  function readSettings(){
    const d=getDelivery();
    d.enabled=!!document.getElementById('menuEnabled').checked;
    d.open=document.getElementById('menuOpen').value||'11:00';
    d.close=document.getElementById('menuClose').value||'14:00';
    d.deliveryFee=Math.max(0,Number(document.getElementById('menuFee').value||0));
    d.minimumOrder=Math.max(0,Number(document.getElementById('menuMinimum').value||0));
  }
  function syncChatKnowledge(){
    const d=getDelivery();
    const products=d.catalog.filter(function(p){return p.kind!=='addon'&&p.available!==false&&p.name});
    const addons=d.catalog.filter(function(p){return p.kind==='addon'&&p.available!==false&&p.name});
    if(products.length){
      config.prices=products.map(function(p){return p.name+' '+money(p.price)}).join(', ')+(addons.length?'. Adicionais: '+addons.map(function(p){return p.name+' '+money(p.price)}).join(', '):'.');
    }
  }
  function save(){
    readSettings();
    syncChatKnowledge();
    saveAll();
    render();
    if(typeof fillForms==='function') {
      const price=document.getElementById('panelPrices');if(price)price.value=config.prices||'';
    }
    if(typeof showToast==='function')showToast('Cardápio salvo e sincronizado');
  }
  function renderPreview(){
    const d=getDelivery();
    const active=d.catalog.filter(function(p){return p.available!==false});
    const products=active.filter(function(p){return p.kind!=='addon'});
    const addons=active.filter(function(p){return p.kind==='addon'});
    const stats=document.getElementById('menuPreviewStats');if(!stats)return;
    stats.innerHTML=
      '<div class="menu-preview-row"><span>Pedidos online</span><b>'+(d.enabled?'Ativado':'Desativado')+'</b></div>'+
      '<div class="menu-preview-row"><span>Horário</span><b>'+esc(d.open)+'–'+esc(d.close)+'</b></div>'+
      '<div class="menu-preview-row"><span>Taxa de entrega</span><b>'+money(d.deliveryFee)+'</b></div>'+
      '<div class="menu-preview-row"><span>Pedido mínimo</span><b>'+money(d.minimumOrder)+'</b></div>'+
      '<div class="menu-preview-row"><span>Itens disponíveis</span><b>'+products.length+' + '+addons.length+' extras</b></div>';
    const list=document.getElementById('menuPreviewItems');
    list.innerHTML=products.slice(0,6).map(function(p){return '<div class="menu-preview-item"><b>'+esc(p.name)+'</b><span>'+money(p.price)+'</span></div>'}).join('')+(products.length>6?'<div class="menu-preview-item"><span>+'+(products.length-6)+' outros itens</span><span></span></div>':'');
  }
  function openPublic(){
    if(typeof getPublicBotLink==='function') window.open(getPublicBotLink(),'_blank');
  }
  function bind(){
    document.getElementById('addProduct').onclick=function(){add('product')};
    document.getElementById('addAddon').onclick=function(){add('addon')};
    document.getElementById('menuAddProductBottom').onclick=function(){add('product')};
    document.getElementById('menuAddAddonBottom').onclick=function(){add('addon')};
    document.getElementById('menuSaveTop').onclick=save;
    document.getElementById('menuSaveBottom').onclick=save;
    document.getElementById('menuOpenPublic').onclick=openPublic;
    document.getElementById('menuPreviewOpen').onclick=openPublic;
    ['menuEnabled','menuOpen','menuClose','menuFee','menuMinimum'].forEach(function(x){
      document.getElementById(x).addEventListener('input',function(){readSettings();renderPreview()});
      document.getElementById(x).addEventListener('change',function(){readSettings();renderPreview()});
    });
  }

  installNav();
  installView();
  if(typeof viewMeta!=='undefined')viewMeta.menu=['Cardápio & Delivery','Produtos, adicionais, horários e regras de pedido'];
  bind();
  render();

  if(typeof fillForms==='function'){
    const originalFillForms=fillForms;
    fillForms=function(){originalFillForms();render()};
  }
  window.at360RenderMenuEditor=render;
})();