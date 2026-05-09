export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-8 px-6 py-24">
      <header className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          base-template-web
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          __PROJECT_NAME__
        </h1>
      </header>

      <p className="text-base leading-7 text-zinc-700 dark:text-zinc-300">
        Edit <code className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm dark:bg-zinc-800">app/page.tsx</code> to begin. The spec
        quartet at the root — <code className="font-mono text-sm">CLAUDE.md</code>, <code className="font-mono text-sm">GOAL.md</code>,{" "}
        <code className="font-mono text-sm">PLAN.md</code>, <code className="font-mono text-sm">DESIGN.md</code> — is where this project
        decides what it is before deciding what it does.
      </p>

      <ul className="list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
        <li>Next.js 16 (App Router) on Vercel</li>
        <li>TypeScript strict, Tailwind v4</li>
        <li>Vercel AI SDK + Anthropic SDK pre-wired</li>
        <li>Vitest + smoke test in CI</li>
      </ul>
    </main>
  );
}
