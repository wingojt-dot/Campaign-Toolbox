"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  magicItemTypes,
  magicItemAppearances,
  magicItemPowers,
  magicItemLimitations,
} from "@/data/magicItems";
import { randomItem } from "@/lib/generators";

function generateMagicItem() {
  const type = randomItem(magicItemTypes);
  const appearance = randomItem(magicItemAppearances);
  const power = randomItem(magicItemPowers);
  const limitation = randomItem(magicItemLimitations);

  return `A ${type} ${appearance}. ${capitalize(power)}. ${capitalize(
    limitation
  )}`;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function MagicItemGenerator() {
  return (
    <GeneratorPage
      title="Magic Item"
      generate={generateMagicItem}
    />
  );
}