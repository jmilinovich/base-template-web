# base-template-web

An opinionated Next.js + Vercel starter for web apps and AI-powered surfaces.

This is a [GitHub template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template). Use it as the starting point for new web projects that should ship Vercel-native.

## What's in it

- **Spec quartet** at the root: `CLAUDE.md` (agent covenant), `GOAL.md` (success criteria), `PLAN.md` (executable steps), `DESIGN.md` (voice + aesthetic).
- **Next.js 16** with the App Router, Turbopack, and React 19.
- **TypeScript strict**, ES2022 target.
- **Tailwind CSS v4** with PostCSS preset.
- **Vercel AI SDK + Anthropic SDK** both wired in `package.json`. Use the AI SDK for user-facing AI (chat, streaming, tool calling) and the Anthropic SDK directly for library work in `lib/`.
- **Vitest** with one passing smoke test.
- **CI** that runs `tsc --noEmit`, `eslint`, `vitest run`, and a `scripts/check.sh` smoke test.
- **`.env.example`** listing the env vars Vercel-native projects typically need (Marketplace-provisioned and otherwise).

## Use

Create a new repo from this template:

```bash
gh repo create my-thing --template jmilinovich/base-template-web --private --clone
cd my-thing
pnpm install
pnpm dev
```

Then:
1. Replace `__PROJECT_NAME__` placeholders in `package.json` and the spec quartet.
2. Fill in `DESIGN.md` with the project's aesthetic thesis — voice, type, color, motion.
3. Populate `GOAL.md` with what success looks like.
4. Use `PLAN.md` to break the work into agent-executable steps.
5. Wire up Vercel resources via `vercel link` + `vercel env pull` (or use the `vercel:bootstrap` skill).

## The statelessness ladder

Before adding a database, walk this ladder. Stop at the first "yes":

1. Can the state live in the **URL**?
2. Can it live in a **cookie or JWT**?
3. Can it live in **Edge Config**?
4. Does it need a **database**? → Neon Postgres via Vercel Marketplace.
5. Does it need **KV / cache / vector**? → Upstash Redis or Postgres `pgvector`.
6. Does it need **blobs**? → Vercel Blob.

## Layout

```
.
├── CLAUDE.md           # agent covenant
├── GOAL.md             # success criteria
├── PLAN.md             # agent-executable steps
├── DESIGN.md           # voice, type, color, motion
├── README.md           # this file (rewrite for your project)
├── app/                # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/
│       └── health/
│           └── route.ts
├── components/
│   └── ui/             # shadcn primitives baseline
├── lib/                # library code (Anthropic SDK helpers, etc.)
├── tests/              # vitest tests
├── scripts/            # check.sh and shell helpers
├── public/             # static assets
├── .github/workflows/  # CI
├── package.json
├── tsconfig.json       # strict, ES2022
├── next.config.ts
├── postcss.config.mjs
├── eslint.config.mjs
├── vitest.config.ts
├── .env.example        # env schema (no values)
└── .gitignore
```

## License

MIT — see [LICENSE](LICENSE).
