"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  dungeonAdjectives,
  dungeonPlaces,
  dungeonThings,
  dungeonThemes,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateDungeonName() {
  const pattern = randomItem([
    "adjectivePlace",
    "placeOfThing",
    "ruinsOfThing",
    "themePlace",
  ]);

  if (pattern === "adjectivePlace") {
    return `The ${randomItem(dungeonAdjectives)} ${randomItem(
      dungeonPlaces
    )}`;
  }

  if (pattern === "placeOfThing") {
    return `The ${randomItem(dungeonPlaces)} of ${randomItem(
      dungeonThings
    )}`;
  }

  if (pattern === "ruinsOfThing") {
    return `The Ruins of ${randomItem(dungeonThings)}`;
  }

  return `The ${randomItem(dungeonThemes)} ${randomItem(dungeonPlaces)}`;
}

export default function DungeonNameGenerator() {
  return (
    <GeneratorPage
      title="Dungeon Name"
      generate={generateDungeonName}
    />
  );
}