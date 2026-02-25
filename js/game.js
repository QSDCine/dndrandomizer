import { getLang, getMode, applyThemeToBody } from "./storage.js";
import { t } from "./i18n.js";
import { DATA, SECTIONS } from "./data.js";

const $ = (id) => document.getElementById(id);

const OMIT_IN_SIMPLE = new Set(["traits", "ideals", "bonds", "flaws"]);
let lastCopyText = "";

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

  // 1) Clase (objeto)
  const clsObj = pick(pool.classes);
  const classId = clsObj.id;

  // 2) Subclase depende de classId
  const subclassList = pool.subclassesByClass[classId] || [];
  const subclassName = subclassList.length ? pick(subclassList) : "—";

  // 3) Resto normal
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

  return res;
}

function renderUI() {
  const lang = getLang();
  document.documentElement.lang = lang;
  applyThemeToBody();

  $("title").textContent = t(lang, "titleGame");
  $("btnBack").textContent = t(lang, "btnBack");
  $("btnGenerate").textContent = t(lang, "btnReroll");
  $("btnCopy").textContent = t(lang, "btnCopy");
  $("resultTitle").textContent = t(lang, "resultTitle");
}

function renderResult(res) {
  const lang = getLang();
  const activeSections = getActiveSections();

  const lines = [];
  const resultsEl = $("results");
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

  $("allBox").innerHTML = lines.map(l => `<div>${escapeHtml(l)}</div>`).join("");
  lastCopyText = lines.join("\n");
}

function generate() {
  const res = generateResult();
  renderResult(res);
}

$("btnBack").addEventListener("click", () => (window.location.href = "index.html"));
$("btnGenerate").addEventListener("click", generate);

$("btnCopy").addEventListener("click", async () => {
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
