"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  treasureTypes,
  treasureContents,
  treasureDetails,
} from "@/data/treasures";
import { randomItem } from "@/lib/generators";

function generateMundaneTreasure() {
  const container = randomItem(treasureTypes);
  const contents = randomItem(treasureContents);
  const detail = randomItem(treasureDetails);

  return `${capitalize(container)} containing ${contents}. ${detail}`;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function MundaneTreasureGenerator() {
  return (
    <GeneratorPage
      title="Mundane Treasure"
      generate={generateMundaneTreasure}
    />
  );
}