import Generator from "@/components/Generator";

type GeneratorPageProps = {
  title: string;
  generate: () => string;
};

export default function GeneratorPage({
  title,
  generate,
}: GeneratorPageProps) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight">
        🎲 Campaign Toolbox 🐉
      </h1>

      <p className="mt-3 text-zinc-500">
        Random inspiration for your next adventure.
      </p>

      <div className="mt-12 max-w-xl">
        <Generator title={title} generate={generate} />
      </div>
    </main>
  );
}