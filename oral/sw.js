const CACHE='chinese-oral-v1';
const FILES=['./','./index.html','./app.js','./content.json','./manifest.webmanifest','../core.js','../style.css','../assets/leaf.svg'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('chinese-oral-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;event.respondWith(fetch(event.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(event.request,copy))}return r}).catch(()=>caches.match(event.request).then(r=>r||new Response('离线时这项内容尚未缓存，请联网后重试。',{status:503,headers:{'Content-Type':'text/plain;charset=UTF-8'}}))))});
