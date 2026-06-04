// Minimal placeholder service worker.
// This exists so dev requests to /sw.js do not 404 during local Jekyll serve.
self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});
