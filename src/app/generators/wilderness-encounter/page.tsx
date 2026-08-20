"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  wildernessSubjects,
  wildernessSituations,
  wildernessDevelopments,
} from "@/data/wildernessEncounters";
import { randomItem } from "@/lib/generators";

function generateWildernessEncounter() {
  const subject = randomItem(wildernessSubjects);
  const situation = randomItem(wildernessSituations);
  const development = randomItem(wildernessDevelopments);

  return `${subject.charAt(0).toUpperCase() + subject.slice(1)} is ${situation}. ${development}`;
}

export default function WildernessEncounterGenerator() {
  return (
    <GeneratorPage
      title="Wilderness Encounter"
      generate={generateWildernessEncounter}
    />
  );
}