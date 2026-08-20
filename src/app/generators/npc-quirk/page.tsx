"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { npcQuirks } from "@/data/npcQuirks";
import { randomItem } from "@/lib/generators";

function generateNPCQuirk() {
  return randomItem(npcQuirks);
}

export default function NPCQuirkGenerator() {
  return (
    <GeneratorPage
      title="NPC Quirk"
      generate={generateNPCQuirk}
    />
  );
}