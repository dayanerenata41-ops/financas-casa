// Service worker mínimo, só o necessário para o navegador considerar o
// site "instalável" como PWA. Sem cache agressivo, para não mostrar dados
// financeiros desatualizados offline.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
