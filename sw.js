/* Luna: app instalable. Primero la red (así siempre llega la versión nueva); sin conexión, lo guardado.
   Sin avisos: si alguien los había activado, se quitan. */
const CACHE = 'luna-v7';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
  try { if (self.registration.periodicSync) await self.registration.periodicSync.unregister('luna-reminder'); } catch (e) { /* */ }
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
