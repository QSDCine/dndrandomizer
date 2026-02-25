export const DEFAULT_LANG = "es";
export const DEFAULT_THEME = "dark";

export function getLang() {
  return localStorage.getItem("lang") || DEFAULT_LANG;
}
export function setLang(lang) {
  localStorage.setItem("lang", lang);
}

export function getTheme() {
  return localStorage.getItem("theme") || DEFAULT_THEME;
}
export function setTheme(theme) {
  localStorage.setItem("theme", theme);
}

export function applyThemeToBody() {
  const theme = getTheme();
  document.body.classList.toggle("dark", theme === "dark");
  document.body.classList.toggle("light", theme === "light");
}

export const DEFAULT_MODE = "simple"; // o "full" si prefieres

export function getMode() {
  return localStorage.getItem("mode") || DEFAULT_MODE;
}
export function setMode(mode) {
  localStorage.setItem("mode", mode);
}
