const sarthakDasSite = "sarthak-das-site-v1";
const assets = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/main.js",
  "/assets/img",
  "/assets/vendor",
  "/portfolio-details.html",
  "/forms",
  "/image/favicon.ico",
  "/image/android-chrome-192x192.png",
  "/image/android-chrome-512x512.png",
  "/image/apple-touch-icon.png",
  "/image/site.webmanifest"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(sarthakDasSite).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});