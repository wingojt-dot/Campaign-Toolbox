import { generatorCategories } from "@/data/generators";
import HomeGenerator from "@/components/HomeGenerator";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <header className="text-center">
          

          <h1 className="font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Campaign Toolbox
          </h1>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-border-strong" />
            <span className="text-xs text-muted">✦ ROLL FOR INSPIRATION ✦</span>
            <span className="h-px w-12 bg-border-strong" />
          </div>


        </header>

        {/* Generators */}
        <div className="mt-16 space-y-14">
          {generatorCategories.map((category) => (
            <section key={category.name}>
              <div className="mb-5 flex items-center gap-4">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {category.name}
                </h2>

                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
  {category.generators.map((generator) => (
    <HomeGenerator
      key={generator.id}
      id={generator.id}
      name={generator.name}
    />
  ))}
</div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 border-t border-border pt-6 text-center">
          <p className="text-xs tracking-wide text-muted">
            
          </p>
        </footer>
      </div>
    </main>
  );
}