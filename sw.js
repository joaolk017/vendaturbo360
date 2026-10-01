self.addEventListener('push',event=>{
  let data={};
  try{data=event.data?event.data.json():{}}catch(e){data={body:event.data?event.data.text():'Nova atualização'}}
  const title=data.title||'AtendeBot 360';
  const options={
    body:data.body||'Você recebeu uma nova atualização.',
    icon:'/icon-192.png',
    badge:'/icon-192.png',
    tag:data.tag||'at360',
    renotify:true,
    data:{url:data.url||'/'}
  };
  event.waitUntil(self.registration.showNotification(title,options));
});
self.addEventListener('notificationclick',event=>{
  event.notification.close();
  const target=event.notification.data&&event.notification.data.url?event.notification.data.url:'/';
  event.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(list=>{
    for(const client of list){
      if('focus' in client){client.navigate(target);return client.focus()}
    }
    if(clients.openWindow)return clients.openWindow(target);
  }));
});