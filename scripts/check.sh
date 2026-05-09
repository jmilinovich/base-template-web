#!/usr/bin/env bash
# Smoke test — boots the Next.js dev server and asserts /api/health responds.
# Replace this with project-specific checks as routes are added.

set -euo pipefail

cd "$(dirname "$0")/.."

# Find a free port to avoid colliding with whatever's running on :3000.
PORT="${PORT:-3456}"

# Boot dev server in the background and tear it down on exit.
pnpm exec next dev --port "$PORT" --turbopack > /tmp/__PROJECT_NAME__-dev.log 2>&1 &
DEV_PID=$!
trap 'kill $DEV_PID 2>/dev/null || true' EXIT

# Wait up to 30s for the server to be ready.
for i in $(seq 1 30); do
  if curl -sf "http://localhost:$PORT/api/health" > /dev/null 2>&1; then
    break
  fi
  sleep 1
done

# Final assertion: /api/health returns ok=true.
response=$(curl -sf "http://localhost:$PORT/api/health" || echo "")
if ! printf '%s' "$response" | node -e "const r = JSON.parse(require('fs').readFileSync(0, 'utf-8')); if (!r.ok) process.exit(1)" 2>/dev/null; then
  echo "FAIL: /api/health did not return ok=true"
  echo "Got: $response"
  exit 1
fi

echo "OK: smoke test passed"
