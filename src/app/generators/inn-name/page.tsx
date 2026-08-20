"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  shopOwners,
  innPlaces,
  innAdjectives,
  tavernAnimals,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateInnName() {
  const pattern = randomItem(["adjective", "animal", "owner"]);

  if (pattern === "adjective") {
    return `The ${randomItem(innAdjectives)} ${randomItem(innPlaces)}`;
  }

  if (pattern === "animal") {
    return `The ${randomItem(tavernAnimals)} & ${randomItem(innPlaces)}`;
  }

  return `${randomItem(shopOwners)}'s ${randomItem(innPlaces)}`;
}

export default function InnNameGenerator() {
  return (
    <GeneratorPage
      title="Inn Name"
      generate={generateInnName}
    />
  );
}