"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  questObjectives,
  questTargets,
  questLocations,
  questComplications,
} from "@/data/quests";
import { randomItem } from "@/lib/generators";

function generateQuest() {
  const objective = randomItem(questObjectives);
  const target = randomItem(questTargets);
  const location = randomItem(questLocations);
  const complication = randomItem(questComplications);

  return `${objective.charAt(0).toUpperCase() + objective.slice(1)} ${target} at ${location}, ${complication}.`;
}

export default function QuestGenerator() {
  return (
    <GeneratorPage
      title="Quest Generator"
      generate={generateQuest}
    />
  );
}