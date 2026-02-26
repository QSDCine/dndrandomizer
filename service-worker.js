const CACHE = "dnd-randomizer-v10";

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

  // Variantes sin "./"
  "index.html",
  "game.html",
  "css/index.css",
  "css/game.css",
  "js/index.js",
  "js/game.js",
  "js/i18n.js",
  "js/data.js",
  "js/storage.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
];

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(
        ASSETS.map((url) => new Request(url, { cache: "reload" }))
      )
    )
  );
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;

  // 1) Navegación (abrir index/game, refresh, etc.): app-shell offline
  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }

  // 2) Assets (JS/CSS/imagenes): cache-first, network fallback
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          // Opcional: cachea cosas nuevas si vienen bien
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => {
          // Sin red y no cacheado: devuelve un 404 en vez de index.html (evita romper JS)
          return new Response("", { status: 404, statusText: "Offline" });
        });
    })
  );
});
