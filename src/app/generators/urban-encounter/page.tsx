"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  urbanSubjects,
  urbanSituations,
  urbanDevelopments,
} from "@/data/urbanEncounters";
import { randomItem } from "@/lib/generators";

function generateUrbanEncounter() {
  const subject = randomItem(urbanSubjects);
  const situation = randomItem(urbanSituations);
  const development = randomItem(urbanDevelopments);

  return `${subject.charAt(0).toUpperCase() + subject.slice(1)} is ${situation}. ${development}`;
}

export default function UrbanEncounterGenerator() {
  return (
    <GeneratorPage
      title="Urban Encounter"
      generate={generateUrbanEncounter}
    />
  );
}