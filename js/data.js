// data.js
export const DATA = {
  es: {
    classes: [
      { id: "barbarian", name: "Bárbaro" },
      { id: "bard", name: "Bardo" },
      { id: "cleric", name: "Clérigo" },
      { id: "druid", name: "Druida" },
      { id: "fighter", name: "Guerrero" },
      { id: "monk", name: "Monje" },
      { id: "paladin", name: "Paladín" },
      { id: "ranger", name: "Explorador" },
      { id: "rogue", name: "Pícaro" },
      { id: "sorcerer", name: "Hechicero" },
      { id: "warlock", name: "Brujo" },
      { id: "wizard", name: "Mago" }
    ],

    subclassesByClass: {
      barbarian: ["Senda del Berserker", "Senda del Guerrero Totémico"],
      bard: ["Colegio del Saber", "Colegio del Valor"],
      cleric: ["Dominio de la Vida", "Dominio de la Luz", "Dominio de la Guerra"],
      druid: ["Círculo de la Tierra", "Círculo de la Luna"],
      fighter: ["Campeón", "Maestro de Batalla", "Caballero Arcano"],
      monk: ["Camino de la Mano Abierta", "Camino de las Sombras", "Camino de los Cuatro Elementos"],
      paladin: ["Juramento de Devoción", "Juramento de los Ancestros", "Juramento de Venganza"],
      ranger: ["Cazador", "Señor de las Bestias"],
      rogue: ["Ladrón", "Asesino", "Tramposo Arcano"],
      sorcerer: ["Linaje Dracónico", "Magia Salvaje"],
      warlock: ["El Archifey", "El Infernal", "El Gran Antiguo"],
      wizard: ["Abjuración", "Conjuración", "Adivinación", "Encantamiento", "Evocación", "Ilusión", "Nigromancia", "Transmutación"]
    },

    origin: ["Soldado", "Erudito", "Forastero", "Noble", "Charlatán"],
    species: ["Humano", "Elfo", "Enano", "Mediano", "Tiefling"],
    traits: ["Humor como escudo", "Observador silencioso", "Directo y brusco"],
    ideals: ["Justicia", "Libertad", "Tradición"],
    bonds: ["Una promesa", "Una reliquia familiar", "Una deuda"],
    flaws: ["Orgullo", "Impulsividad", "Obsesión"]
  },

  en: {
    classes: [
      { id: "barbarian", name: "Barbarian" },
      { id: "bard", name: "Bard" },
      { id: "cleric", name: "Cleric" },
      { id: "druid", name: "Druid" },
      { id: "fighter", name: "Fighter" },
      { id: "monk", name: "Monk" },
      { id: "paladin", name: "Paladin" },
      { id: "ranger", name: "Ranger" },
      { id: "rogue", name: "Rogue" },
      { id: "sorcerer", name: "Sorcerer" },
      { id: "warlock", name: "Warlock" },
      { id: "wizard", name: "Wizard" }
    ],

    subclassesByClass: {
      barbarian: ["Path of the Berserker", "Path of the Totem Warrior"],
      bard: ["College of Lore", "College of Valor"],
      cleric: ["Life Domain", "Light Domain", "War Domain"],
      druid: ["Circle of the Land", "Circle of the Moon"],
      fighter: ["Champion", "Battle Master", "Eldritch Knight"],
      monk: ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements"],
      paladin: ["Oath of Devotion", "Oath of the Ancients", "Oath of Vengeance"],
      ranger: ["Hunter", "Beast Master"],
      rogue: ["Thief", "Assassin", "Arcane Trickster"],
      sorcerer: ["Draconic Bloodline", "Wild Magic"],
      warlock: ["The Archfey", "The Fiend", "The Great Old One"],
      wizard: ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"]
    },

    origin: ["Soldier", "Sage", "Outlander", "Noble", "Charlatan"],
    species: ["Human", "Elf", "Dwarf", "Halfling", "Tiefling"],
    traits: ["Uses humor as a shield", "Quiet observer", "Blunt honesty"],
    ideals: ["Justice", "Freedom", "Tradition"],
    bonds: ["A promise", "A family relic", "A debt"],
    flaws: ["Pride", "Impulsiveness", "Obsession"]
  }
};

export const SECTIONS = [
  { key: "class", label_es: "Clase", label_en: "Class" },
  { key: "subclass", label_es: "Subclase", label_en: "Subclass" },
  { key: "origin", label_es: "Trasfondo/Origen", label_en: "Background/Origin" },
  { key: "species", label_es: "Raza/Especie", label_en: "Species" },
  { key: "traits", label_es: "Rasgos de personalidad", label_en: "Personality traits" },
  { key: "ideals", label_es: "Ideales", label_en: "Ideals" },
  { key: "bonds", label_es: "Vínculos", label_en: "Bonds" },
  { key: "flaws", label_es: "Defectos", label_en: "Flaws" }
];
