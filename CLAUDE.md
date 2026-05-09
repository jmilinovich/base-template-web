# CLAUDE.md — `__PROJECT_NAME__`

This file is the covenant for any Claude agent working in this repo. Read it at the start of every session.

## Philosophy

- Momentum over perfection
- Opinions over options
- Doing over discussing
- Simple until it needs to be complex

## Don't

- Summarize what you just did — the diff is enough
- Ask for confirmation when the direction is clear
- "Improve" code you weren't asked to touch — every changed line traces to the requested work
- Ship without a check that proves the change works
- Hand-roll AI primitives that the Vercel AI SDK provides (streaming, tool calling, persistence)

## Commits as units of work

- Default to committing. When a logical piece of work is done, commit it immediately.
- Imperative mood: "Add X", "Fix Y" — not "Added", "Fixes"
- One logical unit per commit
- Body explains *why*, not *what*
- End with `Co-Authored-By: Claude <model> <noreply@anthropic.com>`

## Before any change, name the check

Every commit should have a check you could run to know it's done:
- A vitest assertion
- `pnpm check` (typecheck) exits 0
- `pnpm test` exits 0
- `pnpm smoke` (scripts/check.sh) exits 0
- A page renders without errors at `localhost:3000`
- A screenshot that matches `DESIGN.md`

Name the check first, then write the code that makes it true.

## Stack

- Runtime: Node ≥22 (Vercel deploys to Node 22)
- Framework: Next.js 16 (App Router, Turbopack, React 19)
- Language: TypeScript strict, ES2022
- Styling: Tailwind CSS v4
- Tests: vitest
- Hosting: Vercel (preview URLs per branch, prod on `main`)

## AI integration

- **User-facing AI** (chat, streaming responses, tool calling) → Vercel AI SDK (`ai`, `@ai-sdk/anthropic`).
- **Library / algorithmic AI** (extraction, reranking, structured generation) → `@anthropic-ai/sdk` directly in `lib/`.
- Model IDs are pinned (`claude-opus-4-7`, `claude-sonnet-4-6`).
- Prompt caching is on by default.

## Statefulness ladder

Before adding storage, walk this ladder. Stop at the first "yes":

1. URL params
2. Cookie / JWT
3. Edge Config
4. Database — Neon Postgres via Vercel Marketplace
5. KV / cache / vector — Upstash Redis or Postgres `pgvector`
6. Blobs — Vercel Blob

If you find yourself reaching for a self-hosted Postgres or Redis, justify it: data sensitivity, GPU/local-compute, or genuine cost-at-scale. Default answer is no.

## Source-of-truth discipline

- One writer per data store
- Git is the ledger
- Secrets live in Vercel env (or `.env.local` for local dev), never in code
- `.env.example` is the canonical schema; commit changes to it whenever a new env var is added

## Workflow

1. Read `GOAL.md`, `PLAN.md`, and `DESIGN.md` before starting work.
2. Mark a `PLAN.md` step in-progress, do the work, mark it complete.
3. Each step ends with a green check + a commit.
4. If the work changes the spec, update the relevant file *before* committing the code change.
5. For UI changes, verify in the browser at `localhost:3000` against `DESIGN.md` before committing.
