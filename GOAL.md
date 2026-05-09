# GOAL.md — `__PROJECT_NAME__`

> What does success look like? Write it so a fitness function or eval script could score against it.

## One-line thesis

`__PROJECT_NAME__` exists because: <fill in>.

## Success criteria

A v1 of this project is done when:

- [ ] <criterion 1 — concrete, scoreable>
- [ ] <criterion 2>
- [ ] <criterion 3>

Each criterion should be falsifiable. "Feels nice" is not a criterion. "First contentful paint < 1s on a mid-tier Android over 4G" is.

## Non-goals

What this project explicitly does *not* try to do. List things it would be tempting to add but shouldn't.

- <non-goal 1>
- <non-goal 2>

## How we'll know

Describe the check that proves the project is done — script, eval harness, manual procedure. Name the artifact.

```bash
# Example: a fitness function
./scripts/check.sh

# Example: a Lighthouse run against the deployed preview
npx lighthouse https://<preview-url> --quiet --output=json
```
