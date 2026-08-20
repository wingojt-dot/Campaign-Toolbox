"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  regionDescriptors,
  regionLandforms,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateRegionName() {
  return `The ${randomItem(regionDescriptors)} ${randomItem(
    regionLandforms
  )}`;
}

export default function RegionNameGenerator() {
  return (
    <GeneratorPage
      title="Region Name"
      generate={generateRegionName}
    />
  );
}