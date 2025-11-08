const CACHE_NAME = "offline-cache-v1";
const ASSETS_TO_CACHE = [
  "/",           // your homepage
  "/index.html",
  "/index.css",
  "/script.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install event: Cache everything listed above
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Fetch event: Serve from cache if offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
