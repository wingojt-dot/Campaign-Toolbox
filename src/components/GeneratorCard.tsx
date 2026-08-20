"use client";

import { useState } from "react";

type GeneratorCardProps = {
  name: string;
  generate: () => string;
};

export default function GeneratorCard({
  name,
  generate,
}: GeneratorCardProps) {
  const [result, setResult] = useState<string | null>(null);

  function handleGenerate() {
    setResult(generate());
  }

  return (
    <button
      type="button"
      onClick={handleGenerate}
      className="group w-full rounded-lg border border-border bg-surface px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:shadow-sm"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
          {name}
        </span>

        <span className="text-sm text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
          →
        </span>
      </div>

      {result && (
        <div className="mt-4 border-t border-border pt-4">
          <p className="font-display text-lg font-semibold text-accent">
            {result}
          </p>
        </div>
      )}
    </button>
  );
}