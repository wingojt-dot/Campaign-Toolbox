"use client";

import GeneratorCard from "@/components/GeneratorCard";
import { generatorFunctions } from "@/lib/generatorRegistry";

type HomeGeneratorProps = {
  id: string;
  name: string;
};

export default function HomeGenerator({
  id,
  name,
}: HomeGeneratorProps) {
  const generate = generatorFunctions[id as keyof typeof generatorFunctions];

  if (!generate) {
    return (
      <div className="rounded-lg border border-border bg-surface px-5 py-4">
        <span className="font-display text-xl font-semibold text-foreground">
          {name}
        </span>
      </div>
    );
  }

  return <GeneratorCard name={name} generate={generate} />;
}