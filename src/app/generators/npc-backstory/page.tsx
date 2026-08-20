"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  npcOrigins,
  npcLifeEvents,
  npcTurningPoints,
  npcCurrentCircumstances,
} from "@/data/npcBackstories";
import { randomItem } from "@/lib/generators";

function generateNPCBackstory() {
  const origin = randomItem(npcOrigins);
  const lifeEvent = randomItem(npcLifeEvents);
  const turningPoint = randomItem(npcTurningPoints);
  const currentCircumstances = randomItem(npcCurrentCircumstances);

  return `${origin}. ${lifeEvent} ${turningPoint} ${currentCircumstances}`;
}

export default function NPCBackstoryGenerator() {
  return (
    <GeneratorPage
      title="NPC Backstory"
      generate={generateNPCBackstory}
    />
  );
}