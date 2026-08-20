import Link from "next/link";
import { generatorCategories } from "@/data/generators";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-md">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight">
            🎲 Campaign Toolbox 🐉
          </h1>

          <p className="mt-3 text-zinc-500">
            Random inspiration for your next adventure.
          </p>
        </header>

        <div className="mt-16 flex flex-col gap-12">
          {generatorCategories.map((category) => (
            <section key={category.name}>
              <h2 className="text-sm uppercase tracking-widest text-zinc-400">
                {category.name}
              </h2>

              <div className="mt-6 flex flex-col gap-4">
                {category.generators.map((generator) => (
                  <Link
                    key={generator.path}
                    href={generator.path}
                    className="text-xl font-medium transition-colors hover:text-zinc-500"
                  >
                    {generator.name}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}