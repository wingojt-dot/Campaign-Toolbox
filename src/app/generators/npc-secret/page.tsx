"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { npcSecrets } from "@/data/npcSecrets";
import { randomItem } from "@/lib/generators";

function generateNPCSecret() {
  return randomItem(npcSecrets);
}

export default function NPCSecretGenerator() {
  return (
    <GeneratorPage
      title="NPC Secret"
      generate={generateNPCSecret}
    />
  );
}