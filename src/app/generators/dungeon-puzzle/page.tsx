"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  puzzleMechanisms,
  puzzleRequirements,
  puzzleConsequences,
} from "@/data/dungeonPuzzles";
import { randomItem } from "@/lib/generators";

function generateDungeonPuzzle() {
  const mechanism = randomItem(puzzleMechanisms);
  const requirement = randomItem(puzzleRequirements);
  const consequence = randomItem(puzzleConsequences);

  return `${mechanism}. ${requirement} ${consequence}`;
}

export default function DungeonPuzzleGenerator() {
  return (
    <GeneratorPage
      title="Dungeon Puzzle"
      generate={generateDungeonPuzzle}
    />
  );
}