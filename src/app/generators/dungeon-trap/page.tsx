"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  trapTriggers,
  trapEffects,
  trapClues,
} from "@/data/dungeonTraps";
import { randomItem } from "@/lib/generators";

function generateDungeonTrap() {
  const trigger = randomItem(trapTriggers);
  const effect = randomItem(trapEffects);
  const clue = randomItem(trapClues);

  return `Trigger: ${trigger}. 
  Effect: ${effect}. 
  Clue: ${clue}`;
}

export default function DungeonTrapGenerator() {
  return (
    <GeneratorPage
      title="Dungeon Trap"
      generate={generateDungeonTrap}
    />
  );
}