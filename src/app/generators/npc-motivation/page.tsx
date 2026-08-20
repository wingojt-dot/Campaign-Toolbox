"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { npcMotivations } from "@/data/npcMotivations";
import { randomItem } from "@/lib/generators";

function generateNPCMotivation() {
  return randomItem(npcMotivations);
}

export default function NPCMotivationGenerator() {
  return (
    <GeneratorPage
      title="NPC Motivation"
      generate={generateNPCMotivation}
    />
  );
}