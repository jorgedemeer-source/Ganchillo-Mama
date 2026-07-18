/* Service worker v3 — "network-first" para el HTML (así siempre se ve la última
   versión cuando hay internet) y cache para funcionar sin conexión. */
var CACHE = 'taller-v3';
var ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-180.png'];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  var req = e.request;
  var accept = req.headers.get('accept') || '';
  var isHTML = req.mode === 'navigate' || accept.indexOf('text/html') >= 0;
  if (isHTML) {
    // network-first: pide la versión nueva; si no hay internet, usa la copia guardada
    e.respondWith(
      fetch(req).then(function (resp) {
        var cp = resp.clone();
        caches.open(CACHE).then(function (c) { c.put(req, cp); });
        return resp;
      }).catch(function () {
        return caches.match(req).then(function (r) { return r || caches.match('./index.html'); });
      })
    );
  } else {
    // el resto (iconos, manifest): cache-first, que no cambian
    e.respondWith(
      caches.match(req).then(function (r) {
        return r || fetch(req).then(function (resp) {
          var cp = resp.clone();
          caches.open(CACHE).then(function (c) { c.put(req, cp); });
          return resp;
        });
      })
    );
  }
});
