"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { trinkets } from "@/data/trinkets";
import { randomItem } from "@/lib/generators";

function generateTrinket() {
  return randomItem(trinkets);
}

export default function TrinketGenerator() {
  return (
    <GeneratorPage
      title="Trinket"
      generate={generateTrinket}
    />
  );
}