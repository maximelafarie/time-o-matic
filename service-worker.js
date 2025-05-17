const CACHE_NAME = 'time-o-matic-v1.0';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/icons/icon-48x48.png',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-256x256.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => response || fetch(evt.request))
  );
});
