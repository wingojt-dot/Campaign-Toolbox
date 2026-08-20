"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { npcOccupations } from "@/data/npcOccupations";
import { randomItem } from "@/lib/generators";

function generateNPCOccupation() {
  return randomItem(npcOccupations);
}

export default function NPCOccupationGenerator() {
  return (
    <GeneratorPage
      title="NPC Occupation"
      generate={generateNPCOccupation}
    />
  );
}