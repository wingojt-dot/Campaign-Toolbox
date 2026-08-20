"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { npcPersonalities } from "@/data/npcPersonalities";
import { randomItem } from "@/lib/generators";

function generateNPCPersonality() {
  return randomItem(npcPersonalities);
}

export default function NPCPersonalityGenerator() {
  return (
    <GeneratorPage
      title="NPC Personality"
      generate={generateNPCPersonality}
    />
  );
}