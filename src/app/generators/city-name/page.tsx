"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  cityNameFirstParts,
  cityNameSecondParts,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateCityName() {
  const firstPart = randomItem(cityNameFirstParts);
  const secondPart = randomItem(cityNameSecondParts);

  return `${firstPart}${secondPart}`;
}

export default function CityNameGenerator() {
  return (
    <GeneratorPage
      title="City Name"
      generate={generateCityName}
    />
  );
}