import Anthropic from '@anthropic-ai/sdk';

/**
 * Pinned model IDs. Keep these in one place so swaps happen here.
 */
export const MODELS = {
  opus: 'claude-opus-4-7',
  sonnet: 'claude-sonnet-4-6',
  haiku: 'claude-haiku-4-5-20251001',
} as const;

let _client: Anthropic | undefined;

/**
 * Library-layer Anthropic client. Use for algorithmic / non-streaming work
 * (extraction, reranking, structured generation, evals).
 *
 * For user-facing chat / streaming surfaces, use the Vercel AI SDK with the
 * Anthropic provider (`ai` + `@ai-sdk/anthropic`) instead.
 *
 * Lazily constructed so importing this module is side-effect-free.
 */
export function claude(): Anthropic {
  if (!_client) {
    _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _client;
}
