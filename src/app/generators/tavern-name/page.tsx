"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  tavernAdjectives,
  tavernAnimals,
  tavernObjects,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateTavernName() {
  const pattern = randomItem(["animal", "object", "animalPossessive", "objectAndObject"]);

  if (pattern === "animal") {
    return `The ${randomItem(tavernAdjectives)} ${randomItem(tavernAnimals)}`;
  }

  if (pattern === "object") {
    return `The ${randomItem(tavernAdjectives)} ${randomItem(tavernObjects)}`;
  }

  if (pattern === "animalPossessive") {
    return `The ${randomItem(tavernAnimals)}'s ${randomItem(tavernObjects)}`;
  }

  return `The ${randomItem(tavernObjects)} & ${randomItem(tavernObjects)}`;
}

export default function TavernNameGenerator() {
  return (
    <GeneratorPage
      title="Tavern Name"
      generate={generateTavernName}
    />
  );
}