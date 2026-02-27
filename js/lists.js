import { getLang, applyThemeToBody } from "./storage.js";
import { t } from "./i18n.js";
import { DATA } from "./data.js";

const el = (id) => document.getElementById(id);

function fillUl(ulId, items) {
  const ul = el(ulId);
  ul.innerHTML = "";
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = String(item);
    ul.appendChild(li);
  }
}

function renderSubclasses(lang) {
  const data = DATA[lang];
  const classId = el("selectClass").value;

  // Si no hay clase seleccionada, no mostramos nada
  if (!classId) {
    fillUl("listSubclasses", []);
    return;
  }

  const subclasses = data.subclassesByClass?.[classId] || [];
  fillUl("listSubclasses", subclasses);
}

function render() {
  const lang = getLang();
  const data = DATA[lang];

  document.documentElement.lang = lang;
  applyThemeToBody();

  // Header
  el("title").textContent = t(lang, "titleLists");
  el("btnBack").textContent = t(lang, "btnBack");

  // Section titles
  el("secClasses").textContent = t(lang, "secClasses");
  el("secSubclasses").textContent = t(lang, "secSubclasses");
  el("lblChooseClass").textContent = t(lang, "chooseClass");
  el("secOrigins").textContent = t(lang, "secOrigins");
  el("secSpecies").textContent = t(lang, "secSpecies");
  el("secTraits").textContent = t(lang, "secTraits");
  el("secIdeals").textContent = t(lang, "secIdeals");
  el("secBonds").textContent = t(lang, "secBonds");
  el("secFlaws").textContent = t(lang, "secFlaws");

  // Classes list
  const classes = data.classes || [];
  fillUl("listClasses", classes.map(c => c.name));

  // Select for subclasses (UI-only placeholder)
  const select = el("selectClass");
  select.innerHTML = "";

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = t(lang, "chooseClass"); // "Elige una clase" / "Choose a class"
  placeholder.selected = true;
  placeholder.disabled = true; // opcional: evita que lo “elijan” una vez cambiaron
  select.appendChild(placeholder);

  for (const c of classes) {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name;
    select.appendChild(opt);
  }

  // Importante: al entrar, no mostramos subclases hasta elegir clase
  renderSubclasses(lang);

  // Other lists
  fillUl("listOrigins", data.origin || []);
  fillUl("listSpecies", data.species || []);
  fillUl("listTraits", data.traits || []);
  fillUl("listIdeals", data.ideals || []);
  fillUl("listBonds", data.bonds || []);
  fillUl("listFlaws", data.flaws || []);
}

el("btnBack").addEventListener("click", () => {
  window.location.href = "index.html";
});

el("selectClass").addEventListener("change", () => {
  renderSubclasses(getLang());
});

render();

window.addEventListener("pageshow", () => render());

// SW register (igual que index)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}
