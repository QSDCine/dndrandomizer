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
      "Pulsa GENERAR para crear un personaje aleatorio. El modo ESTÁNDAR genera clase, subclase, trasfondo/origen y raza/especie. El modo AVANZADO genera además rasgos de personalidad, ideales, vínculos y defectos.",
    titleGame: "D&D Randomizer",
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
      "Press GENERATE to create a random character. STANDARD mode generates class, subclass, background/origin and race/species. ADVANCED mode also generates personality traits, ideals, bonds and flaws.",
    titleGame: "D&D Randomizer",
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
