"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  potionAppearances,
  potionEffects,
  potionQuirks,
} from "@/data/potions";
import { randomItem } from "@/lib/generators";

function generatePotion() {
  const appearance = randomItem(potionAppearances);
  const effect = randomItem(potionEffects);
  const quirk = randomItem(potionQuirks);

  return `A bottle containing ${appearance}. When consumed, it ${effect}. ${capitalize(
    quirk
  )}`;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function PotionGenerator() {
  return (
    <GeneratorPage
      title="Potion"
      generate={generatePotion}
    />
  );
}