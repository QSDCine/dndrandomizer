export const I18N = {
  es: {
    titleIndex: "Generador D&D",
    btnInstructions: "Instrucciones",
    btnGenerate: "GENERAR",
    themeLabel: "Tema",
    light: "Claro",
    dark: "Oscuro",
    langLabel: "Idioma",
    goToGame: "Generar",
    instructionsTitle: "Instrucciones",
    instructionsBody:
      "Elige idioma y tema. Pulsa GENERAR para crear un personaje aleatorio por secciones.",
    titleGame: "Generador",
    btnBack: "Volver",
    btnReroll: "Generar",
    btnCopy: "Copiar todo",
    resultTitle: "Resultado",
modeLegend: "Modo",
modeSimple: "Estándar",
modeFull: "Avanzado",
  },
  en: {
    titleIndex: "D&D Generator",
    btnInstructions: "Instructions",
    btnGenerate: "GENERATE",
    themeLabel: "Theme",
    light: "Light",
    dark: "Dark",
    langLabel: "Language",
    goToGame: "Generate",
    instructionsTitle: "Instructions",
    instructionsBody:
      "Choose language and theme. Press GENERATE to create a random character by sections.",
    titleGame: "Generator",
    btnBack: "Back",
    btnReroll: "Generate",
    btnCopy: "Copy all",
    resultTitle: "Result",
modeLegend: "Mode",
modeSimple: "Standard",
modeFull: "Advanced",
  },
};

export function t(lang, key) {
  return I18N[lang]?.[key] ?? I18N.es[key] ?? key;
}
