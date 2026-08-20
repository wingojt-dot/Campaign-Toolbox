export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight">
        🎲 Campaign Toolbox 🐉
      </h1>

      <p className="mt-3 text-zinc-500">
        Random inspiration for your next adventure.
      </p>

      <button className="mt-8 rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800">
        Generate
      </button>
    </main>
  );
}