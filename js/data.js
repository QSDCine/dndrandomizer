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
      { id: "wizard", name: "Mago" },
      { id: "artificer", name: "Artificiero" },
    ],

    subclassesByClass: {
      barbarian: ["Senda del Berserker", "Senda del Guerrero Totémico", "Senda de la Bestia", "Senda de la Magia Salvaje", "Senda del Guardián Ancestral", "Senda del Fanático", "Senda del Heraldo de la Tormenta", "Senda del Juggernaut", "Senda del Corazón Salvaje", "Senda del Árbol del Mundo", "Senda del Gigante"],
      bard: ["Colegio del Conocimiento", "Colegio del Valor", "Colegio de la Danza", "Colegio del Glamour", "Colegio de la Creación", "Colegio de la Elocuencia", "Colegio de las Espadas", "Colegio de los Susurros", "Colegio de los Espíritus", "Colegio de la Tragedia"],
      cleric: ["Dominio del Conocimiento", "Dominio del Engaño", "Dominio de la Guerra", "Dominio de la Luz", "Dominio de la Naturaleza", "Dominio de la Tempestad", "Dominio de la Vida", "Dominio de la Muerte", "Dominio de la Paz", "Dominio del Crepúsculo", "Dominio del Orden", "Dominio de la Forja", "Dominio de la Tumba", "Dominio de la Sangre", "Dominio de la Luna"],
      druid: ["Círculo de la Tierra", "Círculo de la Luna", "Círculo de las Esporas", "Círculo de las Estrellas", "Círculo del Fuego Salvaje", "Círculo de los Sueños", "Círculo del Pastor", "Círculo de los Marchitos", "Círculo del Mar"],
      fighter: ["Campeón", "Maestro del Combate", "Caballero Arcano", "Caballero Rúnico", "Guerrero Psiónico", "Arquero Arcano", "Caballero", "Samurai", "Caballero del Eco"],
      monk: ["Camino de la Mano Abierta", "Camino de la Sombra", "Camino de los Cuatro Elementos", "Camino de la Misericordia", "Camino del Yo Astral", "Camino del Maestro Borracho", "Camino del Kensei", "Camino del Alma Solar", "Camino del Alma de Cobalto"],
      paladin: ["Juramento de Entrega", "Juramento de los Antiguos", "Juramento de Venganza", "Rompejuramentos", "Juramento de Gloria", "Juramento de los Vigilantes", "Juramento de Conquista", "Juramento de Redención", "Juramento del Mar Abierto"],
      ranger: ["Cazador", "Señor de las Bestias", "Errante Feérico", "Guardaenjambres", "Acechador de la Penumbra", "Caminante del Horizonte", "Matamonstruos"],
      rogue: ["Ladrón", "Embaucador Arcano", "Asesino", "Fantasma", "Rebanaalmas", "Inquisitivo", "Mente Maestra", "Explorador", "Espadachín"],
      sorcerer: ["Linaje Dracónico", "Magia Salvaje", "Alma Mecánica", "Mente Aberrante", "Alma Divina", "Magia de las Sombras", "Hechicería de la Tormenta", "Runaestirpe"],
      warlock: ["El Infernal", "El Primigenio", "El Señor Feérico", "El Genio", "El Insondable", "El Celestial", "El Filo Maléfico", "El Muerto Viviente"],
      wizard: ["Escuela de Abjuración", "Escuela de Adivinación", "Escuela de Conjuración", "Escuela de Encantamiento", "Escuela de Evocación", "Escuela de Nigromancia", "Escuela de Ilusionismo", "Escuela de Transmutación", "Canto de la Hoja", "Orden de los Escribas", "Magia de Guerra", "Escuela de Graviturgia", "Escuela de Cronoturgia", "Magia de Sangre", "Dunamante"],
      artificer: ["Alquimista", "Armero", "Artillero", "Herrero de Batalla"]
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
      { id: "wizard", name: "Wizard" },
      { id: "artificer", name: "Artificer" }
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
  { key: "species", label_es: "Raza/Especie", label_en: "Race/Species" },
  { key: "traits", label_es: "Rasgos de personalidad", label_en: "Personality traits" },
  { key: "ideals", label_es: "Ideales", label_en: "Ideals" },
  { key: "bonds", label_es: "Vínculos", label_en: "Bonds" },
  { key: "flaws", label_es: "Defectos", label_en: "Flaws" }
];
