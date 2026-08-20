"use client";

import GeneratorPage from "@/components/GeneratorPage";
import { generatorFunctions } from "@/lib/generatorRegistry";

export default function NPCNameGenerator() {
  return (
    <GeneratorPage
      title="NPC Name"
      generate={generatorFunctions["npc-name"]}
    />
  );
}