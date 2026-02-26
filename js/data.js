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
      cleric: ["Dominio del Conocimiento", "Dominio del Engaño", "Dominio de la Guerra", "Dominio de la Luz", "Dominio de la Naturaleza", "Dominio de la Tempestad", "Dominio de la Vida", "Dominio de la Muerte", "Dominio de la Paz", "Dominio del Crepúsculo", "Dominio del Orden", "Dominio de la Forja", "Dominio de la Sepultura", "Dominio de la Sangre", "Dominio de la Luna"],
      druid: ["Círculo de la Tierra", "Círculo de la Luna", "Círculo de las Esporas", "Círculo de las Estrellas", "Círculo del Fuego Salvaje", "Círculo de los Sueños", "Círculo del Pastor", "Círculo de los Marchitos", "Círculo del Mar"],
      fighter: ["Campeón", "Maestro del Combate", "Caballero Arcano", "Caballero Rúnico", "Guerrero Psiónico", "Arquero Arcano", "Caballero", "Samurai", "Caballero del Eco"],
      monk: ["Camino de la Mano Abierta", "Camino de la Sombra", "Camino de los Cuatro Elementos", "Camino de la Misericordia", "Camino del Yo Astral", "Camino del Maestro Borracho", "Camino del Kensei", "Camino del Alma Solar", "Camino del Alma de Cobalto"],
      paladin: ["Juramento de Entrega", "Juramento de los Antiguos", "Juramento de Venganza", "Rompejuramentos", "Juramento de Gloria", "Juramento de los Vigilantes", "Juramento de Conquista", "Juramento de Redención", "Juramento del Mar Abierto"],
      ranger: ["Cazador", "Señor de las Bestias", "Errante Feérico", "Guardaenjambres", "Acechador de la Penumbra", "Caminante del Horizonte", "Cazador de Monstruos"],
      rogue: ["Ladrón", "Embaucador Arcano", "Asesino", "Fantasma", "Rebanaalmas", "Inquisitivo", "Mente Maestra", "Batidor", "Espadachín"],
      sorcerer: ["Linaje Dracónico", "Magia Salvaje", "Alma Mecánica", "Mente Aberrante", "Alma Divina", "Magia de las Sombras", "Hechicería de la Tormenta", "Runaestirpe"],
      warlock: ["El Infernal", "El Primigenio", "El Señor Feérico", "El Genio", "El Insondable", "El Celestial", "El Filo Maléfico", "El Muerto Viviente"],
      wizard: ["Escuela de Abjuración", "Escuela de Adivinación", "Escuela de Conjuración", "Escuela de Encantamiento", "Escuela de Evocación", "Escuela de Nigromancia", "Escuela de Ilusionismo", "Escuela de Transmutación", "Canto de la Hoja", "Orden de los Escribas", "Magia de Guerra", "Escuela de Graviturgia", "Escuela de Cronoturgia", "Magia de Sangre", "Dunamancia"],
      artificer: ["Alquimista", "Armero", "Artillero", "Herrero de Batalla"]
    },

    origin: ["Acólito", "Animador", "Gladiador", "Artesano Gremial", "Comerciante Gremial", "Charlatán", "Criminal", "Espía", "Ermitaño", "Erudito", "Héroe del Pueblo", "Huérfano", "Marinero", "Pirata", "Noble", "Caballero", "Salvaje", "Soldado", "Campesino", "Escriba", "Guardia", "Guía", "Vagabundo", "Atormentado", "Investigador", "Ashari", "Agente de la Garra", "Erudito del Liceo", "Sectario reformado", "Cuerpo de Rifles de Piedrablanca", "Sonriente", "Agente Volstrucker", "Cartomante", "Recompensado", "Arruinado"],
    species: ["Enano de las colinas", "Enano de las montañas", "Alto elfo", "Elfo de los bosques (Silvano)", "Elfo oscuro (Drow)", "Elfo Shadar-Kai", "Mediano piesligeros", "Mediano fornido", "Humano", "Humano variante", "Dracónido azul", "Dracónido blanco", "Dracónido bronce", "Dracónido cobre", "Dracónido negro", "Dracónido oro", "Dracónido oropel", "Dracónido plata", "Dracónido rojo", "Dracónido verde", "Gnomo de los bosques", "Gnomo de las rocas", "Semielfo", "Semiorco", "Orco", "Tiefling de Asmodeus", "Tiefling de Baalzebul", "Tiefling de Dispater", "Tiefling de Fierna", "Tiefling de Glasya", "Tiefling de Levistus", "Tiefling de Mammon", "Tiefling de Mephistopheles", "Tiefling de Zariel", "Tiefling", "Protector Aasimar", "Azote Aasimar", "Aasimar Caído", "Kobold", "Goblin", "Firbolg", "Goliat", "Hombre lagarto", "Kenku", "Tabaxi", "Tritón", "Aarakocra", "Cambiante", "Centauro", "Duergar", "Eladrín", "Elfo marino", "Genasí de agua", "Genasí de aire", "Genasí de fuego", "Genasí de tierra", "Githyanki", "Githzerai", "Gnomo de las profundidades", "Hada", "Hobgoblin", "Liebrén", "Minotauro", "Osgo", "Replicante", "Sátiro", "Tortoga", "Yuan-ti", "Dhampiro", "Renacido", "Sangre Maléfica", "Vacío"],
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
      barbarian: ["Path of the Berserker", "Path of the Totem Warrior", "Path of the Beast", "Path of the Wild Magic", "Path of the Ancestral Guardian", "Path of the Zealot", "Path of the Storm Herald", "Path of the Juggernaut", "Path of the Wild Heart", "Path of the World Tree", "Path of the Giant"],
      bard: ["College of Lore", "College of Valor", "College of Dance", "College of Glamour", "College of Creation", "College of Eloquence", "College of Swords", "College of Whispers", "College of Spirits", "College of Tragedy"],
      cleric: ["Knowledge Domain", "Trickery Domain", "War Domain", "Light Domain", "Nature Domain", "Tempest Domain", "Life Domain", "Death Domain", "Peace Domain", "Twilight Domain", "Order Domain", "Forge Domain", "Grave Domain", "Blood Domain", "Moon Domain"],
      druid: ["Circle of the Land", "Circle of the Moon", "Circle of Spores", "Circle of the Stars", "Circle of Wildfire", "Circle of Dreams", "Circle of the Shepherd", "Circle of the Blighted", "Circle of the Sea"],
      fighter: ["Champion", "Battle Master", "Eldritch Knight", "Rune Knight", "Psi Warrior", "Arcane Archer", "Cavalier", "Samurai", "Echo Knight"],
      monk: ["Way of the Open Hand", "Way of Shadow", "Way of the Four Elements", "Way of Mercy", "Way of the Astral Self", "Way of the Drunken Master", "Way of the Kensei", "Way of the Sun Soul", "Way of the Cobalt Soul"],
      paladin: ["Oath of Devotion", "Oath of the Ancients", "Oath of Vengeance", "Oathbreaker", "Oath of Glory", "Oath of the Watchers", "Oath of Conquest", "Oath of Redemption", "Oath of the Open Sea"],
      ranger: ["Hunter", "Beast Master", "Fey Wanderer", "Swarmkeeper", "Gloom Stalker", "Horizon Walker", "Monster Slayer"],
      rogue: ["Thief", "Arcane Trickster", "Assassin", "Phantom", "Soulknife", "Inquisitive", "Mastermind", "Scout", "Swashbuckler"],
      sorcerer: ["Draconic Bloodline", "Wild Magic", "Clockwork Soul", "Aberrant Mind", "Divine Soul", "Shadow Magic", "Storm Sorcery", "Runechild"],
      warlock: ["The Fiend", "The Great Old One", "The Archfey", "The Genie", "The Fathomless", "The Celestial", "The Hexblade", "The Undead"],
      wizard: ["School of Abjuration", "School of Divination", "School of Conjuration", "School of Enchantment", "School of Evocation", "School of Necromancy", "School of Illusion", "School of Transmutation", "Bladesinging", "Order of Scribes", "War Magic", "Graviturgy Magic", "Chronurgy Magic", "Blood Magic", "Dunamancy"],
      artificer: ["Alchemist", "Armorer", "Artillerist", "Battle Smith"]
    },

    origin: ["Acolyte", "Entertainer", "Gladiator", "Guild Artisan", "Guild Merchant", "Charlatan", "Criminal", "Spy", "Hermit", "Sage", "Folk Hero", "Urchin", "Sailor", "Pirate", "Noble", "Knight", "Outlander", "Soldier", "Farmer", "Scribe", "Guard", "Guide", "Wayfarer", "Haunted One", "Investigator", "Ashari", "Clasp Agent", "Lyceum Scholar", "Reformed Cultist", "Whitestone Rifle Corps", "Grinner", "Volstrucker Agent", "Cartomancer", "Rewarded", "Ruined"],
    species: ["Hill Dwarf", "Mountain Dwarf", "High Elf", "Wood Elf (Sylvan)", "Dark Elf (Drow)", "Shadar-Kai Elf", "Lightfoot Halfling", "Stout Halfling", "Human", "Variant Human", "Blue Dragonborn", "White Dragonborn", "Bronze Dragonborn", "Copper Dragonborn", "Black Dragonborn", "Gold Dragonborn", "Brass Dragonborn", "Silver Dragonborn", "Red Dragonborn", "Green Dragonborn", "Forest Gnome", "Rock Gnome", "Half-Elf", "Half-Orc", "Orc", "Asmodeus Tiefling", "Baalzebul Tiefling", "Dispater Tiefling", "Fierna Tiefling", "Glasya Tiefling", "Levistus Tiefling", "Mammon Tiefling", "Mephistopheles Tiefling", "Zariel Tiefling", "Tiefling", "Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar", "Kobold", "Goblin", "Firbolg", "Goliath", "Lizardfolk", "Kenku", "Tabaxi", "Triton", "Aarakocra", "Shifter", "Centaur", "Duergar", "Eladrin", "Sea Elf", "Water Genasi", "Air Genasi", "Fire Genasi", "Earth Genasi", "Githyanki", "Githzerai", "Deep Gnome", "Fairy", "Hobgoblin", "Harengon", "Minotaur", "Bugbear", "Changeling", "Satyr", "Tortle", "Yuan-ti", "Dhampir", "Reborn", "Hexblood", "Hollow One"],
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
