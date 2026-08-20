"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  encounterSubjects,
  encounterSituations,
  encounterTwists,
} from "@/data/encounters";
import { randomItem } from "@/lib/generators";

function generateRandomEncounter() {
  const subject = randomItem(encounterSubjects);
  const situation = randomItem(encounterSituations);
  const twist = randomItem(encounterTwists);

  return `${subject.charAt(0).toUpperCase() + subject.slice(1)} is ${situation}. ${twist}`;
}

export default function RandomEncounterGenerator() {
  return (
    <GeneratorPage
      title="Random Encounter"
      generate={generateRandomEncounter}
    />
  );
}