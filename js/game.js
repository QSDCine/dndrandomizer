import { getLang, getMode, applyThemeToBody } from "./storage.js";
import { t } from "./i18n.js";
import { DATA, SECTIONS } from "./data.js";

const el = (id) => document.getElementById(id);

const OMIT_IN_SIMPLE = new Set(["traits", "ideals", "bonds", "flaws"]);
let lastCopyText = "";

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let lastSignature = ""; // para evitar repetición inmediata

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function signatureFor(res) {
  // Lo mínimo “identidad” del PJ para evitar repetición inmediata:
  return `${res.class}|${res.subclass}|${res.species}|${res.origin}`;
}

function sectionLabel(lang, section) {
  return lang === "en" ? section.label_en : section.label_es;
}

function getActiveSections() {
  const mode = getMode();
  if (mode === "simple") return SECTIONS.filter(s => !OMIT_IN_SIMPLE.has(s.key));
  return SECTIONS;
}

function escapeHtml(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function generateResult() {
  const lang = getLang();
  const pool = DATA[lang] || DATA.es;

  // Reintentos para evitar repetir EXACTAMENTE el mismo combo seguido
  for (let attempt = 0; attempt < 12; attempt++) {
    const clsObj = pick(pool.classes);
    const classId = clsObj.id;

    const subclassList = pool.subclassesByClass[classId] || [];
    const subclassName = subclassList.length ? pick(subclassList) : "—";

    const res = {
      class: clsObj.name,
      subclass: subclassName,
      origin: (pool.origin?.length ? pick(pool.origin) : "—"),
      species: (pool.species?.length ? pick(pool.species) : "—"),
      traits: (pool.traits?.length ? pick(pool.traits) : "—"),
      ideals: (pool.ideals?.length ? pick(pool.ideals) : "—"),
      bonds: (pool.bonds?.length ? pick(pool.bonds) : "—"),
      flaws: (pool.flaws?.length ? pick(pool.flaws) : "—"),
    };

    const sig = signatureFor(res);
    if (sig !== lastSignature) {
      lastSignature = sig;
      return res;
    }
  }

  // Si por lo que sea no puede (listas pequeñas), devolvemos lo último
  const fallback = {
    class: "—", subclass: "—", origin: "—", species: "—",
    traits: "—", ideals: "—", bonds: "—", flaws: "—"
  };
  return fallback;
}

function renderUI() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyThemeToBody();

  el("title").textContent = t(lang, "titleGame");
  el("btnBack").textContent = t(lang, "btnBack");
  el("btnGenerate").textContent = t(lang, "btnReroll");
  el("btnCopy").textContent = t(lang, "btnCopy");
  el("resultTitle").textContent = t(lang, "resultTitle");
}

function renderResult(res) {
  const lang = getLang();
  const activeSections = getActiveSections();

  const lines = [];
  const resultsEl = el("results");
  resultsEl.innerHTML = "";

  for (const s of activeSections) {
    const label = sectionLabel(lang, s);
    const value = res[s.key] ?? "—";

    lines.push(`${label}: ${value}`);

    const row = document.createElement("div");
    row.className = "result-row";
    row.innerHTML = `<strong>${escapeHtml(label)}:</strong> <span>${escapeHtml(value)}</span>`;
    resultsEl.appendChild(row);
  }


   // Texto para copiar (etiquetado)
  lastCopyText = lines.join("\n");

  // allBox: 1 línea compacta + (modo full) roleo en líneas separadas
  const modeNow = getMode();

  const compactLine = [
    res.class,
    res.subclass,
    res.species,
    res.origin,
  ].filter(Boolean).join(" ");

  let html = `<div class="allbox-main">${escapeHtml(compactLine)}</div>`;

  if (modeNow === "full") {
    // Etiquetas localizadas usando SECTIONS
    const labelTraits = sectionLabel(lang, SECTIONS.find(s => s.key === "traits"));
    const labelIdeals = sectionLabel(lang, SECTIONS.find(s => s.key === "ideals"));
    const labelBonds  = sectionLabel(lang, SECTIONS.find(s => s.key === "bonds"));
    const labelFlaws  = sectionLabel(lang, SECTIONS.find(s => s.key === "flaws"));

    html += `
      <div class="allbox-extra"><strong>${escapeHtml(labelTraits)}:</strong> ${escapeHtml(res.traits ?? "—")}</div>
      <div class="allbox-extra"><strong>${escapeHtml(labelIdeals)}:</strong> ${escapeHtml(res.ideals ?? "—")}</div>
      <div class="allbox-extra"><strong>${escapeHtml(labelBonds)}:</strong> ${escapeHtml(res.bonds ?? "—")}</div>
      <div class="allbox-extra"><strong>${escapeHtml(labelFlaws)}:</strong> ${escapeHtml(res.flaws ?? "—")}</div>
    `;
  }

  el("allBox").innerHTML = html;
}

function generate() {
  const res = generateResult();
  renderResult(res);
}

let isRolling = false;

async function rollAnimation() {
  if (isRolling) return;
  isRolling = true;

  const btn = el("btnGenerate");
  btn.disabled = true;

  const lang = getLang();
  const pool = DATA[lang] || DATA.es;
  const mode = getMode();

  const ticks = 12;      // “frames”
  const tickMs = 50;     // velocidad
  for (let i = 0; i < ticks; i++) {
    // Resultado “fake” rápido (no aplica anti-repetición, es solo visual)
    const clsObj = pick(pool.classes);
    const classId = clsObj.id;
    const subclassList = pool.subclassesByClass[classId] || [];
    const fake = {
      class: clsObj.name,
      subclass: subclassList.length ? pick(subclassList) : "—",
      origin: pool.origin?.length ? pick(pool.origin) : "—",
      species: pool.species?.length ? pick(pool.species) : "—",
      traits: pool.traits?.length ? pick(pool.traits) : "—",
      ideals: pool.ideals?.length ? pick(pool.ideals) : "—",
      bonds: pool.bonds?.length ? pick(pool.bonds) : "—",
      flaws: pool.flaws?.length ? pick(pool.flaws) : "—",
    };

    // Pintamos con tu render normal, pero sin cambiar lastSignature:
    renderResult(fake);

    await sleep(tickMs);
  }

  // Resultado final “real” con anti-repetición
  const res = generateResult();
  renderResult(res);

  btn.disabled = false;
  isRolling = false;
}

el("btnBack").addEventListener("click", () => (window.location.href = "index.html"));
el("btnGenerate").addEventListener("click", rollAnimation);

el("btnCopy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(lastCopyText || "");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = lastCopyText || "";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
});

renderUI();
generate();
