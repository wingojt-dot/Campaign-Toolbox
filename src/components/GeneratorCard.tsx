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
  const [rolling, setRolling] = useState(false);

  function handleGenerate() {
    if (rolling) return;

    setRolling(true);
    setResult(null);

    window.setTimeout(() => {
      setResult(generate());
      setRolling(false);
    }, 500);
  }

  return (
    <div>
      <button
  type="button"
  onClick={handleGenerate}
  disabled={rolling}
  className="group w-full rounded-lg border border-border bg-surface px-5 py-4 text-left shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-hover hover:shadow-[0_4px_10px_rgba(0,0,0,0.07)] disabled:cursor-wait"
>
        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
            {name}
          </span>

          <span
            className={`text-xl text-accent transition-transform duration-200 ${
              rolling ? "animate-spin" : "group-hover:rotate-12"
            }`}
          >
            ⚄
          </span>
        </div>
      </button>

      {result && (
        <div className="mt-2 px-5 py-3 text-center font-display text-lg text-foreground animate-in fade-in slide-in-from-top-1 duration-100">
          {result}
        </div>
      )}
    </div>
  );
}