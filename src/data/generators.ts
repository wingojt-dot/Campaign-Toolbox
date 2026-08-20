export type GeneratorDefinition = {
  id: string;
  name: string;
  path: string;
};

export type GeneratorCategory = {
  name: string;
  generators: GeneratorDefinition[];
};

export const generatorCategories: GeneratorCategory[] = [
  {
  name: "Characters",
  generators: [
    {
      id: "npc-name",
      name: "NPC Name",
      path: "/generators/npc-name",
    },
    {
      id: "npc-personality",
      name: "NPC Personality",
      path: "/generators/npc-personality",
    },
    {
      id: "npc-appearance",
      name: "NPC Appearance",
      path: "/generators/npc-appearance",
    },
    {
      id: "npc-quirk",
      name: "NPC Quirk",
      path: "/generators/npc-quirk",
    },
    {
      id: "npc-occupation",
      name: "NPC Occupation",
      path: "/generators/npc-occupation",
    },
    {
      id: "npc-secret",
      name: "NPC Secret",
      path: "/generators/npc-secret",
    },
    {
      id: "npc-motivation",
      name: "NPC Motivation",
      path: "/generators/npc-motivation",
    },
    {
      id: "npc-backstory",
      name: "NPC Backstory",
      path: "/generators/npc-backstory",
    },
  ],
},
  {
  name: "Worldbuilding",
  generators: [
    {
      id: "town-name",
      name: "Town Name",
      path: "/generators/town-name",
    },
    {
      id: "city-name",
  name: "City Name",
  path: "/generators/city-name",
},
{
      
  id: "tavern-name",
  name: "Tavern Name",
      path: "/generators/tavern-name",
    },
    {
      id: "shop-name",
      name: "Shop Name",
      path: "/generators/shop-name",
    },
    {
      id: "inn-name",
      name: "Inn Name",
      path: "/generators/inn-name",
    },
     {
      id: "kingdom-name",
      name: "Kingdom Name",
      path: "/generators/kingdom-name",
    },
    {
      id: "region-name",
      name: "Region Name",
      path: "/generators/region-name",
    },
    {
      id: "dungeon-name",
      name: "Dungeon Name",
      path: "/generators/dungeon-name",
    },
  ],
},
{
  name: "Adventure",
  generators: [
    {
      id: "quest-generator",
      name: "Quest Generator",
      path: "/generators/quest-generator",
    },
    {
      id: "plot-hook-generator",
      name: "Plot Hook Generator",
      path: "/generators/plot-hook-generator",
    },
    {
      id: "random-encounter",
      name: "Random Encounter",
      path: "/generators/random-encounter",
    },
    {
      id: "dungeon-room",
  name: "Dungeon Room",
  path: "/generators/dungeon-room",
},
  {
    id: "dungeon-trap",
      name: "Dungeon Trap",
      path: "/generators/dungeon-trap",
    },
    {
      id: "dungeon-puzzle",
      name: "Dungeon Puzzle",
      path: "/generators/dungeon-puzzle",
    },
    {
      id: "wilderness-encounter",
      name: "Wilderness Encounter",
      path: "/generators/wilderness-encounter",
    },
    {
      id: "urban-encounter",
      name: "Urban Encounter",
      path: "/generators/urban-encounter",
    },
  ],
},
{
  name: "Items",
  generators: [
    {
      id: "magic-item",
      name: "Magic Item",
      path: "/generators/magic-item",
    },
    {
      id: "mundane-treasure",
      name: "Mundane Treasure",
      path: "/generators/mundane-treasure",
    },
    {
      id: "potion",
      name: "Potion",
      path: "/generators/potion",
    },
    {
      id: "cursed-item",
      name: "Cursed Item",
      path: "/generators/cursed-item",
    },
    {
      id: "weapon",
      name: "Weapon",
      path: "/generators/weapon",
    },
    {
      id: "trinket",
      name: "Trinket",
      path: "/generators/trinket",
    },
  ],
},
];