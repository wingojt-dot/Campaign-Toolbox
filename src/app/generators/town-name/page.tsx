"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  townNameFirstParts,
  townNameSecondParts,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateTownName() {
  const firstPart = randomItem(townNameFirstParts);
  const secondPart = randomItem(townNameSecondParts);

  return `${firstPart}${secondPart}`;
}

export default function TownNameGenerator() {
  return (
    <GeneratorPage
      title="Town Name"
      generate={generateTownName}
    />
  );
}