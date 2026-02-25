const CACHE = "dnd-randomizer-v3";
const ASSETS = [
  "./",
  "./index.html",
  "./game.html",
  "./css/index.css",
  "./css/game.css",
  "./js/index.js",
  "./js/game.js",
  "./js/i18n.js",
  "./js/data.js",
  "./js/storage.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((r) => r || fetch(e.request))
  );
});
