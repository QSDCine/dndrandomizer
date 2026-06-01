const CACHE = "dnd-randomizer-v26";

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
  "./lists.html",
"./css/lists.css",
"./js/lists.js",


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
  "lists.html",
"css/lists.css",
"js/lists.js",
];

self.addEventListener("install", (e) => {
  self.skipWaiting();

  const unique = Array.from(
    new Set(ASSETS.map((p) => new URL(p, self.location.href).href))
  ).map((href) => new Request(href, { cache: "reload" }));

  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(unique))
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


  if (req.mode === "navigate") {
    e.respondWith(
      fetch(req).catch(() => caches.match("./index.html"))
    );
    return;
  }


  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
   
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => {

          return new Response("", { status: 404, statusText: "Offline" });
        });
    })
  );
});
