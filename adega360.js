(function(){
  if(window.__AT360_ADEGA__)return;
  window.__AT360_ADEGA__=true;

  const css=document.createElement('style');
  css.textContent=`
    .adega-panel{display:none}.adega-panel.show{display:block}.adega-tabs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.adega-box{border:1px solid #e2e8f0;border-radius:15px;padding:13px;background:#f8fafc}.adega-box h4{margin:0 0 4px;font-size:12px}.adega-box>p{margin:0 0 10px;color:#64748b;font-size:9px;line-height:1.4}
    .adega-inline{display:flex;gap:7px;align-items:end}.adega-inline .menu-field{flex:1}.adega-inline button,.zone-row button,.adega-chip button{border:0;border-radius:8px;background:#eef2ff;color:#4338ca;padding:8px 9px;font-size:9px;font-weight:900}.adega-chips{display:flex;gap:6px;flex-wrap:wrap;margin-top:9px}.adega-chip{display:inline-flex;gap:5px;align-items:center;border:1px solid #c7d2fe;background:#eef2ff;color:#4338ca;border-radius:999px;padding:5px 7px;font-size:9px;font-weight:900}.adega-chip button{padding:0;background:transparent}
    .zone-list{display:grid;gap:7px;margin-top:8px}.zone-row{display:grid;grid-template-columns:minmax(0,1.4fr) .7fr .7fr auto;gap:6px;align-items:end}.zone-row.radius{grid-template-columns:1fr 1fr 1fr auto}.zone-row input,.zone-row select{width:100%;border:1px solid #dbe3ee;border-radius:9px;padding:8px;background:#fff}.origin-grid{display:grid;grid-template-columns:1fr 1fr auto;gap:7px;align-items:end}
    .adega-meta{grid-column:1/-1;margin-top:9px;padding:10px;border:1px solid #fed7aa;background:#fffaf0;border-radius:11px}.adega-meta-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:7px}.adega-meta label{font-size:8.5px;font-weight:900;color:#7c2d12}.adega-meta select,.adega-meta input{width:100%;margin-top:4px;border:1px solid #fed7aa;border-radius:8px;padding:7px;background:#fff}.combo-builder{display:none;margin-top:8px;padding-top:8px;border-top:1px solid #fed7aa}.combo-builder.show{display:block}.combo-item{display:grid;grid-template-columns:auto minmax(0,1fr) 72px;gap:7px;align-items:center;padding:5px 0;font-size:9px}.combo-item input[type=number]{margin:0}
    .adega-save{width:100%;margin-top:12px}.delivery-mode-note{margin-top:8px;padding:9px;border-radius:10px;background:#eff6ff;color:#1e40af;font-size:9px;line-height:1.45}
    @media(max-width:760px){.adega-tabs{grid-template-columns:1fr}.adega-meta-grid{grid-template-columns:1fr 1fr}.zone-row,.zone-row.radius{grid-template-columns:1fr 1fr}.zone-row button{grid-column:2}.origin-grid{grid-template-columns:1fr 1fr}.origin-grid button{grid-column:1/-1}}
  `;
  document.head.appendChild(css);

  const defaultCategories=['Cervejas','Destilados','Vinhos','Energéticos','Gelo','Não alcoólicos','Conveniência','Combos'];
  function delivery(){
    if(!config.delivery||typeof config.delivery!=='object')config.delivery={enabled:true,catalog:[]};
    const d=config.delivery;
    if(!Array.isArray(d.categories))d.categories=[];
    if(!d.categories.length&&config.template==='adega')d.categories=[...defaultCategories];
    if(!d.zones||typeof d.zones!=='object')d.zones={mode:'flat',neighborhoods:[],origin:{lat:0,lng:0},radiusBands:[]};
    if(!Array.isArray(d.zones.neighborhoods))d.zones.neighborhoods=[];
    if(!Array.isArray(d.zones.radiusBands))d.zones.radiusBands=[];
    if(!d.zones.origin)d.zones.origin={lat:0,lng:0};
    return d;
  }
  const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function install(){
    if(document.getElementById('adega360Panel'))return;
    const stack=document.querySelector('#view-menu .menu-stack');if(!stack)return;
    const p=document.createElement('div');p.className='panel adega-panel';p.id='adega360Panel';
    p.innerHTML='<div class="panel-head"><div><h3>🍷 Adega 360</h3><span>Categorias, combos, unidades e zonas de entrega</span></div></div><div class="panel-body">'+
      '<div class="adega-tabs">'+
        '<div class="adega-box"><h4>Categorias do catálogo</h4><p>Organize a vitrine por tipo de produto.</p><div class="adega-inline"><label class="menu-field">Nova categoria<input id="adegaCategoryInput" placeholder="Ex.: Cervejas"></label><button id="adegaAddCategory">Adicionar</button></div><div class="adega-chips" id="adegaCategories"></div></div>'+
        '<div class="adega-box"><h4>Regra de entrega</h4><p>Use taxa única, bairros ou faixas de distância.</p><label class="menu-field">Modo<select id="adegaZoneMode"><option value="flat">Taxa única</option><option value="neighborhood">Por bairro</option><option value="radius">Por raio em km</option></select></label><div class="delivery-mode-note" id="adegaModeNote"></div></div>'+
      '</div>'+
      '<div class="adega-box" id="adegaNeighborhoodBox" style="margin-top:12px"><h4>Entrega por bairro</h4><p>Cada bairro pode ter taxa e pedido mínimo próprios.</p><div class="zone-list" id="adegaNeighborhoods"></div><button class="btn secondary" id="adegaAddNeighborhood" style="margin-top:9px">＋ Adicionar bairro</button></div>'+
      '<div class="adega-box" id="adegaRadiusBox" style="margin-top:12px"><h4>Entrega por raio</h4><p>Defina o ponto da adega e as faixas de quilômetros. O cliente autoriza a localização para calcular a taxa.</p><div class="origin-grid"><label class="menu-field">Latitude<input id="adegaOriginLat" type="number" step="0.000001"></label><label class="menu-field">Longitude<input id="adegaOriginLng" type="number" step="0.000001"></label><button class="btn secondary" id="adegaUseLocation">Usar localização deste aparelho</button></div><div class="zone-list" id="adegaRadiusBands"></div><button class="btn secondary" id="adegaAddRadius" style="margin-top:9px">＋ Adicionar faixa</button></div>'+
      '<button class="btn primary adega-save" id="adegaSave">Salvar configurações da Adega</button>'+
    '</div>';
    const first=stack.children[0];if(first?.nextSibling)stack.insertBefore(p,first.nextSibling);else stack.appendChild(p);
    bind();
    render();
  }

  function renderCategories(){
    const d=delivery(),box=document.getElementById('adegaCategories');if(!box)return;
    box.innerHTML=d.categories.map((x,i)=>'<span class="adega-chip">'+esc(x)+'<button data-cat-remove="'+i+'">×</button></span>').join('');
    box.querySelectorAll('[data-cat-remove]').forEach(b=>b.onclick=()=>{d.categories.splice(Number(b.dataset.catRemove),1);renderCategories();enhanceCards()});
  }
  function renderZones(){
    const d=delivery(),mode=d.zones.mode||'flat';
    const modeEl=document.getElementById('adegaZoneMode');if(modeEl)modeEl.value=mode;
    const nb=document.getElementById('adegaNeighborhoodBox'),rb=document.getElementById('adegaRadiusBox');
    if(nb)nb.style.display=mode==='neighborhood'?'block':'none';
    if(rb)rb.style.display=mode==='radius'?'block':'none';
    const note=document.getElementById('adegaModeNote');
    if(note)note.textContent=mode==='flat'?'Usa a taxa padrão configurada acima.':mode==='neighborhood'?'A taxa é escolhida pelo bairro informado no endereço.':'A taxa é escolhida pela distância entre a adega e a localização autorizada pelo cliente.';
    const nbox=document.getElementById('adegaNeighborhoods');
    if(nbox){
      nbox.innerHTML=d.zones.neighborhoods.map((z,i)=>'<div class="zone-row" data-nb="'+i+'"><label> Bairro<input data-z="name" value="'+esc(z.name||'')+'" placeholder="Centro"></label><label> Taxa<input data-z="fee" type="number" min="0" step="0.01" value="'+Number(z.fee||0)+'"></label><label> Mínimo<input data-z="minOrder" type="number" min="0" step="0.01" value="'+Number(z.minOrder||0)+'"></label><button data-zone-remove="'+i+'">×</button></div>').join('');
      nbox.querySelectorAll('[data-nb]').forEach(row=>row.querySelectorAll('[data-z]').forEach(inp=>inp.oninput=()=>{const z=d.zones.neighborhoods[Number(row.dataset.nb)];z[inp.dataset.z]=inp.dataset.z==='name'?inp.value:Number(inp.value||0)}));
      nbox.querySelectorAll('[data-zone-remove]').forEach(b=>b.onclick=()=>{d.zones.neighborhoods.splice(Number(b.dataset.zoneRemove),1);renderZones()});
    }
    document.getElementById('adegaOriginLat').value=Number(d.zones.origin.lat||0)||'';
    document.getElementById('adegaOriginLng').value=Number(d.zones.origin.lng||0)||'';
    const rbox=document.getElementById('adegaRadiusBands');
    if(rbox){
      rbox.innerHTML=d.zones.radiusBands.map((z,i)=>'<div class="zone-row radius" data-rad="'+i+'"><label> Até km<input data-r="maxKm" type="number" min=".1" step=".1" value="'+Number(z.maxKm||0)+'"></label><label> Taxa<input data-r="fee" type="number" min="0" step="0.01" value="'+Number(z.fee||0)+'"></label><label> Mínimo<input data-r="minOrder" type="number" min="0" step="0.01" value="'+Number(z.minOrder||0)+'"></label><button data-radius-remove="'+i+'">×</button></div>').join('');
      rbox.querySelectorAll('[data-rad]').forEach(row=>row.querySelectorAll('[data-r]').forEach(inp=>inp.oninput=()=>{d.zones.radiusBands[Number(row.dataset.rad)][inp.dataset.r]=Number(inp.value||0)}));
      rbox.querySelectorAll('[data-radius-remove]').forEach(b=>b.onclick=()=>{d.zones.radiusBands.splice(Number(b.dataset.radiusRemove),1);renderZones()});
    }
  }

  function comboBuilder(p){
    const d=delivery(),candidates=d.catalog.filter(x=>x.id!==p.id&&x.kind!=='addon'&&x.kind!=='combo');
    const selected=new Map((p.comboItems||[]).map(x=>[String(x.id),Number(x.qty||1)]));
    return '<div class="combo-builder '+(p.kind==='combo'?'show':'')+'"><b style="font-size:9px;color:#7c2d12">Itens incluídos no combo</b>'+
      (candidates.length?candidates.map(x=>'<label class="combo-item"><input type="checkbox" data-combo-id="'+esc(x.id)+'" '+(selected.has(String(x.id))?'checked':'')+'><span>'+esc(x.name)+'</span><input type="number" data-combo-qty="'+esc(x.id)+'" min="1" max="99" value="'+(selected.get(String(x.id))||1)+'"></label>').join(''):'<div style="font-size:9px;color:#9a3412;margin-top:6px">Cadastre produtos individuais antes de montar o combo.</div>')+
    '</div>';
  }
  function enhanceCards(){
    if(config.template!=='adega')return;
    const d=delivery();
    document.querySelectorAll('#productList [data-menu-id]').forEach(card=>{
      const id=card.dataset.menuId,p=d.catalog.find(x=>x.id===id);if(!p)return;
      card.querySelector('.adega-meta')?.remove();
      const meta=document.createElement('div');meta.className='adega-meta';
      meta.innerHTML='<div class="adega-meta-grid">'+
        '<label>Tipo<select data-adega-field="kind"><option value="product">Produto</option><option value="combo">Combo</option></select></label>'+
        '<label>Categoria<select data-adega-field="category"><option value="">Sem categoria</option>'+d.categories.map(x=>'<option value="'+esc(x)+'">'+esc(x)+'</option>').join('')+'</select></label>'+
        '<label>Unidade<select data-adega-field="unit"><option value="un">Unidade</option><option value="pack">Pack</option><option value="fardo">Fardo</option><option value="caixa">Caixa</option><option value="kit">Kit</option></select></label>'+
        '<label>Qtd. no pacote<input data-adega-field="packQty" type="number" min="1" max="999" value="'+Number(p.packQty||1)+'"></label>'+
      '</div>'+comboBuilder(p);
      card.appendChild(meta);
      meta.querySelector('[data-adega-field="kind"]').value=p.kind==='combo'?'combo':'product';
      meta.querySelector('[data-adega-field="category"]').value=p.category||'';
      meta.querySelector('[data-adega-field="unit"]').value=p.unit||'un';
      meta.querySelectorAll('[data-adega-field]').forEach(inp=>inp.onchange=inp.oninput=()=>{
        const field=inp.dataset.adegaField;
        p[field]=field==='packQty'?Math.max(1,Number(inp.value||1)):inp.value;
        if(field==='kind'){p.comboItems=p.kind==='combo'?(p.comboItems||[]):[];enhanceCards()}
      });
      meta.querySelectorAll('[data-combo-id]').forEach(ch=>ch.onchange=()=>{
        const cid=ch.dataset.comboId,qtyInput=meta.querySelector('[data-combo-qty="'+CSS.escape(cid)+'"]');
        const arr=p.comboItems||[],idx=arr.findIndex(x=>String(x.id)===cid);
        if(ch.checked&&idx<0)arr.push({id:cid,qty:Math.max(1,Number(qtyInput?.value||1))});
        if(!ch.checked&&idx>=0)arr.splice(idx,1);
        p.comboItems=arr;
      });
      meta.querySelectorAll('[data-combo-qty]').forEach(inp=>inp.oninput=()=>{
        const x=(p.comboItems||[]).find(z=>String(z.id)===inp.dataset.comboQty);if(x)x.qty=Math.max(1,Number(inp.value||1));
      });
    });
  }
  function render(){
    const panel=document.getElementById('adega360Panel');if(!panel)return;
    const on=config.template==='adega';panel.classList.toggle('show',on);if(!on)return;
    delivery();renderCategories();renderZones();setTimeout(enhanceCards,0);
  }
  function bind(){
    document.getElementById('adegaAddCategory').onclick=()=>{const i=document.getElementById('adegaCategoryInput'),v=i.value.trim();if(!v)return;const d=delivery();if(!d.categories.includes(v))d.categories.push(v);i.value='';renderCategories();enhanceCards()};
    document.getElementById('adegaZoneMode').onchange=e=>{delivery().zones.mode=e.target.value;renderZones()};
    document.getElementById('adegaAddNeighborhood').onclick=()=>{delivery().zones.neighborhoods.push({name:'',fee:0,minOrder:0,active:true});renderZones()};
    document.getElementById('adegaAddRadius').onclick=()=>{delivery().zones.radiusBands.push({maxKm:3,fee:5,minOrder:0});renderZones()};
    document.getElementById('adegaOriginLat').oninput=e=>delivery().zones.origin.lat=Number(e.target.value||0);
    document.getElementById('adegaOriginLng').oninput=e=>delivery().zones.origin.lng=Number(e.target.value||0);
    document.getElementById('adegaUseLocation').onclick=()=>{if(!navigator.geolocation){showToast('Geolocalização indisponível');return}navigator.geolocation.getCurrentPosition(pos=>{delivery().zones.origin={lat:Number(pos.coords.latitude.toFixed(6)),lng:Number(pos.coords.longitude.toFixed(6))};renderZones();showToast('Localização da adega preenchida')},()=>showToast('Não foi possível obter a localização'),{enableHighAccuracy:true,timeout:10000})};
    document.getElementById('adegaSave').onclick=()=>{delivery().zones.radiusBands.sort((a,b)=>Number(a.maxKm)-Number(b.maxKm));saveAll();if(window.at360RenderMenuEditor)window.at360RenderMenuEditor();render();showToast('Adega 360 salva')};
    const list=document.getElementById('productList');if(list)new MutationObserver(()=>setTimeout(enhanceCards,0)).observe(list,{childList:true,subtree:true});
  }

  let tries=0;const timer=setInterval(()=>{tries++;if(document.getElementById('view-menu')){clearInterval(timer);install()}if(tries>80)clearInterval(timer)},100);
  const oldUpdate=typeof updateUI==='function'?updateUI:null;if(oldUpdate)updateUI=function(){oldUpdate();setTimeout(render,0)};
})();