export const I18N = {
  es: {
    titleIndex: "Generador D&D",
    btnInstructions: "Instrucciones",
    btnGenerate: "GENERAR",
    themeLabel: "Tema",
    light: "Claro",
    dark: "Oscuro",
    langLabel: "Idioma",
    goToGame: "Ir al generador",
    instructionsTitle: "Instrucciones",
    instructionsBody:
      "Elige idioma y tema. Pulsa GENERAR para crear un personaje aleatorio por secciones.",
    titleGame: "Generador",
    btnBack: "Volver",
    btnReroll: "Generar",
    btnCopy: "Copiar todo",
    resultTitle: "Resultado",
modeLegend: "Modo",
modeSimple: "Simple (sin roleo)",
modeFull: "Completo (con roleo)",
  },
  en: {
    titleIndex: "D&D Generator",
    btnInstructions: "Instructions",
    btnGenerate: "GENERATE",
    themeLabel: "Theme",
    light: "Light",
    dark: "Dark",
    langLabel: "Language",
    goToGame: "Go to generator",
    instructionsTitle: "Instructions",
    instructionsBody:
      "Choose language and theme. Press GENERATE to create a random character by sections.",
    titleGame: "Generator",
    btnBack: "Back",
    btnReroll: "Generate",
    btnCopy: "Copy all",
    resultTitle: "Result",
modeLegend: "Mode",
modeSimple: "Simple (no roleplay traits)",
modeFull: "Full (with roleplay traits)",
  },
};

export function t(lang, key) {
  return I18N[lang]?.[key] ?? I18N.es[key] ?? key;
}
