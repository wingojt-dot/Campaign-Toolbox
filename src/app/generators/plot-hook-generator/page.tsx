"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  hookSituations,
  
} from "@/data/plotHooks";
import { randomItem } from "@/lib/generators";

function generatePlotHook() {
  const situation = randomItem(hookSituations);

  return `${situation}`;
}

export default function PlotHookGenerator() {
  return (
    <GeneratorPage
      title="Plot Hook Generator"
      generate={generatePlotHook}
    />
  );
}