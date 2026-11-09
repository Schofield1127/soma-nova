# Scripts

## Texture generator (`src/generate-texture.ts`)

Makes **texture and pattern images only** with the OpenAI Images API: print grain,
rubber floor, chalk dust, barbell knurling, halftone, canvas weave, in the Soma Nova palette.

It never makes people, faces, bodies, or anything that stands in for Emily or a client,
and no logos or text. Prompts that mention those are refused. Real photos (Emily, clients,
the studio, and the `pattern-hero` dumbbell photo) stay real; see `src/content/photos.ts`.

Images land in `generated-artifacts/textures/` (git-ignored) with a `.txt` file holding the prompt.
**Nothing is wired into the site.** Using a generated texture anywhere needs the owner's OK.

### Setup

1. Create a separate OpenAI API key for Soma Nova (not The Wheel Guys' key).
2. In this Replit project, open Secrets and add `OPENAI_API_KEY` with that key.
   Never paste a key into code, chat or a commit.
3. Optional: `OPENAI_IMAGE_MODEL` (default `gpt-image-1`).

### Use

```bash
pnpm --filter @workspace/scripts run texture -- --list
pnpm --filter @workspace/scripts run texture -- --preset orchid-grain --dry-run
pnpm --filter @workspace/scripts run texture -- --preset orchid-grain
pnpm --filter @workspace/scripts run texture -- --prompt "chalk dust on black rubber" --quality medium
```

Options: `--quality low|medium|high` (default `low`), `--size 1024x1024|1536x1024|1024x1536`,
`--n 1..4` (max 4 per run), `--name <file prefix>`, `--dry-run` (prints the prompt and cost, sends nothing).

Cost: roughly 1 to 2 cents per image at `low`, 4 to 6 cents at `medium`, 17 to 25 cents at `high`
(gpt-image-1 list prices; check OpenAI's pricing page). The script prints an estimate before each call.
