"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  kingdomNamePrefixes,
  kingdomNameSuffixes,
  kingdomDescriptors,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateKingdomName() {
  const pattern = randomItem(["name", "descriptor"]);

  if (pattern === "descriptor") {
    return `${randomItem(kingdomDescriptors)} of ${randomItem(
      kingdomNamePrefixes
    )}${randomItem(kingdomNameSuffixes)}`;
  }

  return `${randomItem(kingdomNamePrefixes)}${randomItem(
    kingdomNameSuffixes
  )}`;
}

export default function KingdomNameGenerator() {
  return (
    <GeneratorPage
      title="Kingdom Name"
      generate={generateKingdomName}
    />
  );
}