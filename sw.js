/* Luna: app instalable. Primero la red (así siempre llega la versión nueva); sin conexión, lo guardado.
   Con el juego instalado, un aviso suave si pasó un día sin jugar (sincronización periódica). */
const CACHE = 'luna-v5';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE && k !== 'luna-meta') await caches.delete(k);
  await self.clients.claim();
})()));
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok) { const c = await caches.open(CACHE); c.put(req, res.clone()); }
      return res;
    } catch (err) {
      const hit = await caches.match(req, { ignoreSearch: false }) || await caches.match(req, { ignoreSearch: true });
      if (hit) return hit;
      throw err;
    }
  })());
});
async function lastVisit() {
  try { const c = await caches.open('luna-meta'); const r = await c.match(self.registration.scope + '__last-visit'); return r ? Number(await r.text()) : 0; } catch (e) { return 0; }
}
self.addEventListener('periodicsync', e => {
  if (e.tag !== 'luna-reminder') return;
  e.waitUntil((async () => {
    const t = await lastVisit();
    if (t && Date.now() - t > 20 * 60 * 60 * 1000) {
      await self.registration.showNotification('🐶 ¡Luna te extraña!', { body: 'Hoy tiene un regalo esperándote. ¡Ven a jugar!', icon: self.registration.scope + 'icon.svg', badge: self.registration.scope + 'icon.svg', tag: 'luna' });
    }
  })());
});
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.openWindow(self.registration.scope + '3d/?v=3'));
});
