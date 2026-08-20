"use client";

import { useState } from "react";

type GeneratorProps = {
  title: string;
  generate: () => string;
};

export default function Generator({ title, generate }: GeneratorProps) {
  const [result, setResult] = useState("");

  function handleGenerate() {
    setResult(generate());
  }

  return (
    <section className="text-center">
      <button
        onClick={handleGenerate}
        className="text-sm uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-900"
      >
        {title}
      </button>

      <h2 className="mt-4 text-4xl font-semibold">
        {result || "Click the title to generate"}
      </h2>
    </section>
  );
}