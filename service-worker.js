const CACHE_NAME = 'metro-yab-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './words.json',
  './icon-192.svg',
  './icon-512.svg',
  './lib/leaflet/leaflet.js',
  './lib/leaflet/leaflet.css',
  './fonts/Vazirmatn.woff2'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return Promise.all(ASSETS.map(function(u) {
        return cache.add(u).catch(function() {});
      }));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
             .map(function(n) { return caches.delete(n); })
      );
    })
  );
  self.clients.claim();
});

// فقط فایل‌های خودِ برنامه: اول شبکه (تا آخرین نسخه بیاید)، اگر آفلاین بود از کش.
// درخواست‌های بیرونی (کاشی‌های نقشه و…) را دست نمی‌زنیم.
self.addEventListener('fetch', function(event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    fetch(req).then(function(res) {
      if (res && res.status === 200) {
        var copy = res.clone();
        caches.open(CACHE_NAME).then(function(c) { c.put(req, copy); });
      }
      return res;
    }).catch(function() {
      return caches.match(req).then(function(hit) {
        return hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error());
      });
    })
  );
});
