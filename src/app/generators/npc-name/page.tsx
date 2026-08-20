"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { npcFirstNames, npcLastNames } from "@/data/npcNames";
import { randomItem } from "@/lib/generators";

function generateNPCName() {
  const firstName = randomItem(npcFirstNames);
  const lastName = randomItem(npcLastNames);

  return `${firstName} ${lastName}`;
}

export default function NPCNameGenerator() {
  return (
    <GeneratorPage
      title="NPC Name"
      generate={generateNPCName}
    />
  );
}