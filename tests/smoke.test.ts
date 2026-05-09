import { describe, it, expect } from 'vitest';
import { MODELS } from '@/lib/claude';

describe('smoke', () => {
  it('exports pinned model IDs', () => {
    expect(MODELS.opus).toBe('claude-opus-4-7');
    expect(MODELS.sonnet).toBe('claude-sonnet-4-6');
  });
});
