import {
  getLang, setLang,
  getTheme, setTheme,
  applyThemeToBody,
  getMode, setMode
} from "./storage.js";
import { t } from "./i18n.js";

const $ = (id) => document.getElementById(id);

function setActiveLangButton(lang) {
  $("btnLangEs").classList.toggle("active", lang === "es");
  $("btnLangEn").classList.toggle("active", lang === "en");
}

function render() {
  const lang = getLang();
  const theme = getTheme();
  const mode = getMode();

  document.documentElement.lang = lang;
  applyThemeToBody();

  // Textos UI
  $("btnInstructions").textContent = t(lang, "btnInstructions");
  $("btnGo").textContent = t(lang, "goToGame");
  $("themeLabel").textContent = t(lang, "themeLabel");
  $("btnTheme").textContent = theme === "dark" ? t(lang, "dark") : t(lang, "light");

  $("modeLegend").textContent = t(lang, "modeLegend");
  $("modeSimpleText").textContent = t(lang, "modeSimple");
  $("modeFullText").textContent = t(lang, "modeFull");

  // Estado seleccionado
  $("modeSimple").checked = mode === "simple";
  $("modeFull").checked = mode === "full";

  setActiveLangButton(lang);

  // Dialog
  $("insTitle").textContent = t(lang, "instructionsTitle");
  $("insBody").textContent = t(lang, "instructionsBody");
}

$("btnLangEs").addEventListener("click", () => {
  setLang("es");
  render();
});

$("btnLangEn").addEventListener("click", () => {
  setLang("en");
  render();
});

document.querySelectorAll('input[name="mode"]').forEach((input) => {
  input.addEventListener("change", (e) => {
    setMode(e.target.value);
    // no hace falta rerender, pero lo dejamos por si cambias textos/ayuda
    render();
  });
});

$("btnTheme").addEventListener("click", () => {
  const next = getTheme() === "dark" ? "light" : "dark";
  setTheme(next);
  render();
});

$("btnInstructions").addEventListener("click", () => $("dlg").showModal());

$("btnGo").addEventListener("click", () => {
  window.location.href = "game.html";
});

render();

// SW register (si quieres solo aquí)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./service-worker.js");
}
