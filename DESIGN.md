# DESIGN.md — `__PROJECT_NAME__`

> The aesthetic and experience covenant. Decide the *feel* before the build, so every component, page, and interaction can be checked against it.

> Machine-readable form: `design-tokens.json` at the repo root (see `design-tokens.example.json` for the canonical 5-group schema: `type`, `palette`, `space`, `motion`, `surface`). `/mili:fork` operates on this file; blends merge named groups across variants. Keep prose and tokens in sync — the prose explains the *why*, the tokens encode the *what*.

## One-line thesis

This product feels like ___ .

(Examples: "a darkroom developer's notebook" / "a carefully edited magazine" / "a precision tool you trust at 3am" / "a friendly co-pilot that never shouts".)

## Voice & POV

- **Tone:** <terse / wry / earnest / reverent / playful>
- **Person:** <first person? second? none?>
- **Vocabulary:** <preferred words and phrases — and forbidden ones>

Examples of on-voice copy:
- ✓ <a real example>
- ✗ <something it would never say>

## Typography

- **Type stack:** `<sans>`, `<serif>`, `<mono>` — name the families and where each is used.
- **Scale:** `<base>` rem; ratio `<value>`. List actual sizes (`14px / 16px / 20px / 28px / 40px`).
- **Tracking:** display `<value>`, body `<value>`.
- **Weight pairings:** `<e.g. 500 display + 400 body>`.

## Color

Define tokens with intent, not "primary/secondary":

- `ink` — primary text. `<hex>` light, `<hex>` dark.
- `paper` — surface. `<hex>` light, `<hex>` dark.
- `muted` — secondary text. `<hex>` light, `<hex>` dark.
- `accent` — for `<specific purpose>`. `<hex>`.
- `signal` — error / alert. `<hex>`.

State explicitly: which tokens never appear together; what's reserved for what state.

## Spacing & density

- **Base unit:** `<4px / 8px>`.
- **Rhythm:** how vertical space breathes — paragraph spacing, section gutters.
- **Density:** does the product breathe (lots of white) or compress (info-dense)?

## Motion

- **Easing:** `<cubic-bezier(...)>` for entrances; `<...>` for exits.
- **Durations:** instant `<ms>` / quick `<ms>` / deliberate `<ms>`.
- **What never animates:** type, color, anything that should feel rock-solid.

## Component vocabulary

The 6–10 primitives this product is built from:

- `Button` — <intent>
- `Field` — <intent>
- `Card` — <intent>
- `Modal` — *or* explicit "we don't build modals — we route to a new page"
- `Toast` — *or* explicit "we don't surface async feedback this way"
- `<your component>` — <intent>

Things *not* in the vocabulary:

- <thing we won't build>
- <thing we won't build>

## Reference shots

Paste images or links to products that nail the target aesthetic. Faster shown than told.

- <link or image>
- <link or image>

## Anti-patterns

What this product never looks like:

- <concrete anti-pattern>
- <concrete anti-pattern>
