export type GeneratorDefinition = {
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
        name: "NPC Name",
        path: "/generators/npc-name",
      },
      {
        name: "NPC Personality",
        path: "/generators/npc-personality",
      },
      {
        name: "NPC Appearance",
        path: "/generators/npc-appearance",
      },
      {
        name: "NPC Quirk",
        path: "/generators/npc-quirk",
      },
      {
        name: "NPC Occupation",
        path: "/generators/npc-occupation",
      },
      {
        name: "NPC Secret",
        path: "/generators/npc-secret",
      },
      {
        name: "NPC Motivation",
        path: "/generators/npc-motivation",
      },
      {
        name: "NPC Backstory",
        path: "/generators/npc-backstory",
      },
    ],
    
  },
  {
  name: "Worldbuilding",
  generators: [
    {
      name: "Town Name",
      path: "/generators/town-name",
    },
    {
  name: "City Name",
  path: "/generators/city-name",
},
{
      name: "Tavern Name",
      path: "/generators/tavern-name",
    },
    {
      name: "Shop Name",
      path: "/generators/shop-name",
    },
    {
      name: "Inn Name",
      path: "/generators/inn-name",
    },
     {
      name: "Kingdom Name",
      path: "/generators/kingdom-name",
    },
    {
      name: "Region Name",
      path: "/generators/region-name",
    },
    {
      name: "Dungeon Name",
      path: "/generators/dungeon-name",
    },
  ],
},
];