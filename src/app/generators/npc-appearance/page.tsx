"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  npcBuilds,
  npcSkinDescriptions,
  npcHairDescriptions,
  npcEyeDescriptions,
  npcFeatures,
} from "@/data/npcAppearances";
import { randomItem } from "@/lib/generators";

function generateNPCAppearance() {
  const build = randomItem(npcBuilds);
  const skin = randomItem(npcSkinDescriptions);
  const hair = randomItem(npcHairDescriptions);
  const eyes = randomItem(npcEyeDescriptions);
  const feature = randomItem(npcFeatures);

  return `${build}, with ${skin}, ${hair}, ${eyes}, and ${feature}.`;
}

export default function NPCAppearanceGenerator() {
  return (
    <GeneratorPage
      title="NPC Appearance"
      generate={generateNPCAppearance}
    />
  );
}