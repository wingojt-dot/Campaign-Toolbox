import { npcFirstNames, npcLastNames } from "@/data/npcNames";
import { randomItem } from "@/lib/generators";


import { npcPersonalities } from "@/data/npcPersonalities";
import {
  npcBuilds,
  npcSkinDescriptions,
  npcHairDescriptions,
  npcEyeDescriptions,
  npcFeatures,
} from "@/data/npcAppearances";

import { npcQuirks } from "@/data/npcQuirks";
import { npcOccupations } from "@/data/npcOccupations";
import { npcSecrets } from "@/data/npcSecrets";
import { npcMotivations } from "@/data/npcMotivations";

import {
  townNameFirstParts,
  townNameSecondParts,
} from "@/data/locationNames";

import {
  cityNameFirstParts,
  cityNameSecondParts,
} from "@/data/locationNames";

import {
  tavernAdjectives,
  tavernAnimals,
  tavernObjects,
} from "@/data/locationNames";

import {
  shopOwners,
  shopAdjectives,
  shopGoods,
} from "@/data/locationNames";

import {
  innAdjectives,
  innPlaces,
} from "@/data/locationNames";

import {
  kingdomNamePrefixes,
  kingdomNameSuffixes,
  kingdomDescriptors,
} from "@/data/locationNames";

import {
  regionDescriptors,
  regionLandforms,
} from "@/data/locationNames";

import {
  dungeonAdjectives,
  dungeonPlaces,
  dungeonThings,
  dungeonThemes,
} from "@/data/locationNames";

import {
  questObjectives,
  questTargets,
  questLocations,
  questComplications,
} from "@/data/quests";

import {
  hookSituations,
} from "@/data/plotHooks";

import {
  encounterSubjects,
  encounterSituations,
  encounterTwists,
} from "@/data/encounters";

import {
  roomTypes,
  roomFeatures,
  roomOccupants,
} from "@/data/dungeonRooms";

import {
  trapTriggers,
  trapEffects,
  trapClues,
} from "@/data/dungeonTraps";

import {
  puzzleMechanisms,
  puzzleRequirements,
  puzzleConsequences,
} from "@/data/dungeonPuzzles";

import {
  wildernessSubjects,
  wildernessSituations,
  wildernessDevelopments,
} from "@/data/wildernessEncounters";

import {
  urbanSubjects,
  urbanSituations,
  urbanDevelopments,
} from "@/data/urbanEncounters";

import {
  npcOrigins,
  npcLifeEvents,
  npcTurningPoints,
  npcCurrentCircumstances,
} from "@/data/npcBackstories";

import {
  magicItemTypes,
  magicItemAppearances,
  magicItemPowers,
  magicItemLimitations,
} from "@/data/magicItems";

import {
  treasureTypes,
  treasureContents,
  treasureDetails,
} from "@/data/treasures";

import {
  potionAppearances,
  potionEffects,
  potionQuirks,
} from "@/data/potions";

import {
  cursedItemTypes,
  cursedItemBenefits,
  curses,
} from "@/data/cursedItems";

import {
  weaponTypes,
  weaponAppearances,
  weaponProperties,
} from "@/data/weapons";

import { trinkets } from "@/data/trinkets";

export const generatorFunctions: Record<string, () => string> = {

  "npc-name": () => {
    const firstName = randomItem(npcFirstNames);
    const lastName = randomItem(npcLastNames);

    return `${firstName} ${lastName}`;
  },

  "npc-personality": () => {
    return randomItem(npcPersonalities);
  },

  "npc-appearance": () => {
    return [
      randomItem(npcBuilds),
      randomItem(npcSkinDescriptions),
      randomItem(npcHairDescriptions),
      randomItem(npcEyeDescriptions),
      randomItem(npcFeatures),
    ].join(", ");
  },

  "npc-quirk": () => {
    return randomItem(npcQuirks);
  },

  "npc-occupation": () => {
    return randomItem(npcOccupations);
  },

  "npc-secret": () => {
    return randomItem(npcSecrets);
  },

  "npc-motivation": () => {
    return randomItem(npcMotivations);
  },

  "town-name": () => {
    return `${randomItem(townNameFirstParts)}${randomItem(townNameSecondParts)}`;
  },

  "city-name": () => {
    return `${randomItem(cityNameFirstParts)}${randomItem(cityNameSecondParts)}`;
  },

  "tavern-name": () => {
    const adjective = randomItem(tavernAdjectives);
    const animal = randomItem(tavernAnimals);
    const object = randomItem(tavernObjects);

    const patterns = [
      `The ${adjective} ${animal}`,
      `The ${adjective} ${object}`,
      `The ${animal} and ${object}`,
    ];

    return randomItem(patterns);
  },

  "shop-name": () => {
    const owner = randomItem(shopOwners);
    const adjective = randomItem(shopAdjectives);
    const goods = randomItem(shopGoods);

    const patterns = [
      `${owner}'s ${adjective} ${goods}`,
      `The ${adjective} ${goods}`,
      `${owner}'s ${goods}`,
    ];

    return randomItem(patterns);
  },

  "inn-name": () => {
    return `The ${randomItem(innAdjectives)} ${randomItem(innPlaces)}`;
  },

  "kingdom-name": () => {
    const name =
      `${randomItem(kingdomNamePrefixes)}${randomItem(kingdomNameSuffixes)}`;

    return `${name}, ${randomItem(kingdomDescriptors)}`;
  },

  "region-name": () => {
    return `The ${randomItem(regionDescriptors)} ${randomItem(regionLandforms)}`;
  },

  "dungeon-name": () => {
    const patterns = [
      `The ${randomItem(dungeonAdjectives)} ${randomItem(dungeonPlaces)}`,
      `The ${randomItem(dungeonPlaces)} of ${randomItem(dungeonThings)}`,
      `The ${randomItem(dungeonAdjectives)} ${randomItem(dungeonThemes)}`,
    ];

    return randomItem(patterns);
  },
  "quest-generator": () => {
  const objective = randomItem(questObjectives);
  const target = randomItem(questTargets);
  const location = randomItem(questLocations);
  const complication = randomItem(questComplications);

  return `${objective} ${target} at ${location}, ${complication}`;
},

"plot-hook-generator": () => {
  return randomItem(hookSituations);
},

"random-encounter": () => {
  const subject = randomItem(encounterSubjects);
  const situation = randomItem(encounterSituations);
  const twist = randomItem(encounterTwists);

  return `${subject} are ${situation}. ${twist}`;
},

"dungeon-room": () => {
  const type = randomItem(roomTypes);
  const feature = randomItem(roomFeatures);
  const occupant = randomItem(roomOccupants);

  return `${type} containing ${feature}. ${occupant}`;
},

"dungeon-trap": () => {
  const trigger = randomItem(trapTriggers);
  const effect = randomItem(trapEffects);
  const clue = randomItem(trapClues);

  return `${trigger}: ${effect}. Clue: ${clue}`;
},

"dungeon-puzzle": () => {
  const mechanism = randomItem(puzzleMechanisms);
  const requirement = randomItem(puzzleRequirements);
  const consequence = randomItem(puzzleConsequences);

  return `${mechanism}. ${requirement} ${consequence}`;
},

"wilderness-encounter": () => {
  const subject = randomItem(wildernessSubjects);
  const situation = randomItem(wildernessSituations);
  const development = randomItem(wildernessDevelopments);

  return `${subject} are ${situation}. ${development}`;
},

"urban-encounter": () => {
  const subject = randomItem(urbanSubjects);
  const situation = randomItem(urbanSituations);
  const development = randomItem(urbanDevelopments);

  return `${subject} are ${situation}. ${development}`;
},

"npc-backstory": () => {
  const origin = randomItem(npcOrigins);
  const lifeEvent = randomItem(npcLifeEvents);
  const turningPoint = randomItem(npcTurningPoints);
  const circumstance = randomItem(npcCurrentCircumstances);

  return `${origin}. ${lifeEvent} ${turningPoint} ${circumstance}`;
},

"magic-item": () => {
  const type = randomItem(magicItemTypes);
  const appearance = randomItem(magicItemAppearances);
  const power = randomItem(magicItemPowers);
  const limitation = randomItem(magicItemLimitations);

  return `A ${type} ${appearance}. ${power}. ${limitation}`;
},

"mundane-treasure": () => {
  const type = randomItem(treasureTypes);
  const contents = randomItem(treasureContents);
  const detail = randomItem(treasureDetails);

  return `${type} containing ${contents}. ${detail}`;
},

"potion": () => {
  const appearance = randomItem(potionAppearances);
  const effect = randomItem(potionEffects);
  const quirk = randomItem(potionQuirks);

  return `${appearance}. It ${effect}. ${quirk}`;
},

"cursed-item": () => {
  const type = randomItem(cursedItemTypes);
  const benefit = randomItem(cursedItemBenefits);
  const curse = randomItem(curses);

  return `A ${type} that ${benefit}, ${curse}`;
},

"weapon": () => {
  const type = randomItem(weaponTypes);
  const appearance = randomItem(weaponAppearances);
  const property = randomItem(weaponProperties);

  return `A ${type} ${appearance}; ${property}.`;
},

"trinket": () => {
  return randomItem(trinkets);
},
};