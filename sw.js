// Service worker simples: só o necessário para o navegador considerar o site
// "instalável" como PWA. Deixa a rede seguir seu curso normal, sem cache
// agressivo (para não mostrar dados financeiros desatualizados offline).
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
