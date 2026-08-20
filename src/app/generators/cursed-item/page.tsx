"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  cursedItemTypes,
  cursedItemBenefits,
  curses,
} from "@/data/cursedItems";
import { randomItem } from "@/lib/generators";

function generateCursedItem() {
  const type = randomItem(cursedItemTypes);
  const benefit = randomItem(cursedItemBenefits);
  const curse = randomItem(curses);

  return `A ${type} that ${benefit}, ${curse}.`;
}

export default function CursedItemGenerator() {
  return (
    <GeneratorPage
      title="Cursed Item"
      generate={generateCursedItem}
    />
  );
}