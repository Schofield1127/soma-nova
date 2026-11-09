/*
  Generate textures, patterns and small gym-weight accents with the OpenAI Images API.

  Allowed: textures and patterns, and (owner-approved 2026-11-09) small flat
  silhouettes of gym weights used as accents (dumbbell, kettlebell, weight plate).
  Never: people, faces, bodies, hands, anything that stands in for Emily or a
  client, logos or text. Real photos of Emily, clients, the studio and the
  dumbbell pattern (`pattern-hero`) stay real.

  Output goes to generated-artifacts/ (git-ignored) for review. Copy an image
  into the site only with the owner's OK (see replit.md).

  Key: OPENAI_API_KEY in Replit Secrets (the Soma Nova key, not The Wheel Guys').

  Usage:
    pnpm --filter @workspace/scripts run texture -- --list
    pnpm --filter @workspace/scripts run texture -- --preset orchid-grain --dry-run
    pnpm --filter @workspace/scripts run texture -- --accent dumbbell --quality medium
    pnpm --filter @workspace/scripts run texture -- --prompt "chalk dust on black rubber" --quality medium
  Without pnpm (Node 23.6+ runs TypeScript directly):
    node scripts/src/generate-texture.ts --accent dumbbell
*/
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const API_URL = 'https://api.openai.com/v1/images/generations';
const MODEL = process.env.OPENAI_IMAGE_MODEL || 'gpt-image-1.5';
const MAX_IMAGES_PER_RUN = 4;

type Quality = 'low' | 'medium' | 'high';
type Size = '1024x1024' | '1536x1024' | '1024x1536';

// Rough gpt-image-1 list prices, used as a ballpark for newer models in USD per image (check OpenAI's pricing page; they change).
const APPROX_COST: Record<Quality, Record<Size, number>> = {
  low: { '1024x1024': 0.011, '1536x1024': 0.016, '1024x1536': 0.016 },
  medium: { '1024x1024': 0.042, '1536x1024': 0.063, '1024x1536': 0.063 },
  high: { '1024x1024': 0.167, '1536x1024': 0.25, '1024x1536': 0.25 },
};

const PALETTE =
  'Use only these colors: orchid pink #E37CD2, plum #5F3857, deep plum #3A1F36, charcoal #1C1A1F, blush #FBF4FA.';

const NO_PEOPLE =
  'No people, no faces, no hands, no bodies, no silhouettes of people, no animals, no text, no letters, ' +
  'no numbers, no logos, no watermarks.';

const TEXTURE_GUARD =
  'Flat, seamless, tileable texture filling the whole frame. Abstract surface or material only. ' +
  `${NO_PEOPLE} No gradients, no glow, no bokeh, no 3D render look.`;

const ACCENT_GUARD =
  'Flat vector-style silhouette in ONE solid color, charcoal #1C1A1F, centered and filling about 80% of the frame, ' +
  'on a fully transparent background. Bold simple geometric shapes, crisp edges, no outline-only strokes, ' +
  `no shading, no highlights, no gradients, no shadow, no floor, no background. ${NO_PEOPLE}`;

export const PRESETS: Record<string, { prompt: string; size: Size }> = {
  'orchid-grain': {
    prompt: `Fine risograph-style print grain on solid orchid pink paper, subtle plum speckles. ${PALETTE}`,
    size: '1024x1024',
  },
  'rubber-floor': {
    prompt: `Top-down macro of a black rubber gym floor tile with tiny flecks, even flat lighting, duotone charcoal and plum. ${PALETTE}`,
    size: '1024x1024',
  },
  'chalk-dust': {
    prompt: `Faint chalk dust smudges on a charcoal surface, very subtle, mostly empty, printed in plum and blush. ${PALETTE}`,
    size: '1536x1024',
  },
  'knurling': {
    prompt: `Extreme close-up of diamond knurling pattern on a steel barbell grip, flat and graphic, duotone plum shadows and orchid highlights. ${PALETTE}`,
    size: '1536x1024',
  },
  'halftone-dots': {
    prompt: `Coarse halftone dot pattern in deep plum on orchid pink, like a screen-printed gym poster, uneven ink. ${PALETTE}`,
    size: '1024x1024',
  },
  'canvas-weave': {
    prompt: `Heavy cotton canvas weave texture, like a lifting strap or gym bag fabric, flat light, charcoal with plum tint. ${PALETTE}`,
    size: '1024x1024',
  },
};

// Small accents. The site recolors them with CSS masks, so only the shape matters.
export const ACCENTS: Record<string, { prompt: string; size: Size }> = {
  dumbbell: {
    prompt: 'A single hex dumbbell seen exactly from the side, horizontal, two chunky hexagonal heads and a short straight handle.',
    size: '1536x1024',
  },
  kettlebell: {
    prompt: 'A single kettlebell seen exactly from the front, round bell with a thick arched handle on top, upright.',
    size: '1024x1024',
  },
  plate: {
    prompt: 'A single round barbell weight plate seen exactly from the front, flat disc with a small center hole and one inner ring.',
    size: '1024x1024',
  },
};

// Whole words only, so "texture" or "handle" are fine but "text" or "hand" are not.
const BLOCKED = [
  'person', 'people', 'woman', 'women', 'man', 'men', 'girl', 'boy', 'lady', 'guy', 'face', 'portrait',
  'selfie', 'body', 'bodies', 'hand', 'arm', 'leg', 'athlete', 'trainer', 'client', 'model', 'emily',
  'human', 'figure', 'silhouette', 'her', 'him', 'she', 'he', 'logo', 'text', 'lettering', 'word',
];
const BLOCKED_RE = new RegExp(`\\b(${BLOCKED.join('|')})(s|es)?\\b`, 'i');

export function checkPrompt(prompt: string): string | null {
  const hit = prompt.match(BLOCKED_RE);
  return hit ? `Refusing: prompt mentions "${hit[0]}". This script makes textures, patterns and weight accents only.` : null;
}

type Args = {
  preset?: string; accent?: string; prompt?: string; quality: Quality; size?: Size;
  n: number; dryRun: boolean; list: boolean; name?: string;
};

function parseArgs(argv: string[]): Args {
  const a: Args = { quality: 'low', n: 1, dryRun: false, list: false };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i];
    const v = () => {
      const val = argv[++i];
      if (val === undefined) throw new Error(`Missing value for ${k}`);
      return val;
    };
    if (k === '--preset') a.preset = v();
    else if (k === '--accent') a.accent = v();
    else if (k === '--prompt') a.prompt = v();
    else if (k === '--quality') a.quality = v() as Quality;
    else if (k === '--size') a.size = v() as Size;
    else if (k === '--n') a.n = Number(v());
    else if (k === '--name') a.name = v();
    else if (k === '--dry-run') a.dryRun = true;
    else if (k === '--list') a.list = true;
    else if (k === '--') continue;
    else throw new Error(`Unknown argument: ${k}`);
  }
  if ([a.preset, a.accent, a.prompt].filter(Boolean).length > 1) throw new Error('Use only one of --preset, --accent or --prompt');
  if (!['low', 'medium', 'high'].includes(a.quality)) throw new Error('--quality must be low, medium or high');
  if (a.size && !['1024x1024', '1536x1024', '1024x1536'].includes(a.size)) throw new Error('--size must be 1024x1024, 1536x1024 or 1024x1536');
  if (!Number.isInteger(a.n) || a.n < 1 || a.n > MAX_IMAGES_PER_RUN) throw new Error(`--n must be 1 to ${MAX_IMAGES_PER_RUN}`);
  return a;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.list || (!args.preset && !args.prompt && !args.accent)) {
    console.log('Texture presets (--preset):');
    for (const [k, p] of Object.entries(PRESETS)) console.log(`  ${k.padEnd(14)} ${p.size}  ${p.prompt.split('.')[0]}`);
    console.log('\nAccents (--accent), transparent PNG silhouettes:');
    for (const [k, p] of Object.entries(ACCENTS)) console.log(`  ${k.padEnd(14)} ${p.size}  ${p.prompt.split(',')[0]}`);
    console.log('\nOr --prompt "<texture description>". Add --dry-run to see the request and cost first.');
    return;
  }

  const preset = args.preset ? PRESETS[args.preset] : undefined;
  if (args.preset && !preset) throw new Error(`Unknown preset "${args.preset}". Run with --list.`);
  const accent = args.accent ? ACCENTS[args.accent] : undefined;
  if (args.accent && !accent) throw new Error(`Unknown accent "${args.accent}". Run with --list.`);
  const refusal = checkPrompt(args.prompt ?? '');
  if (refusal) throw new Error(refusal);

  const prompt = accent
    ? `${accent.prompt} ${ACCENT_GUARD}`
    : `${preset ? preset.prompt : `${args.prompt}. ${PALETTE}`} ${TEXTURE_GUARD}`;
  const size: Size = args.size ?? accent?.size ?? preset?.size ?? '1024x1024';
  const estimate = APPROX_COST[args.quality][size] * args.n;

  console.log(`Model:    ${MODEL}`);
  console.log(`Size:     ${size}, quality ${args.quality}, ${args.n} image(s)${accent ? ', transparent background' : ''}`);
  console.log(`Estimate: about $${estimate.toFixed(3)}`);
  console.log(`Prompt:   ${prompt}`);
  if (args.dryRun) { console.log('\nDry run: nothing sent.'); return; }

  const key = process.env.OPENAI_API_KEY;
  if (!key) throw new Error('OPENAI_API_KEY is not set. Add it in Replit Secrets (never in code).');

  const request: Record<string, unknown> = { model: MODEL, prompt, size, quality: args.quality, n: args.n, output_format: 'png' };
  if (accent) request.background = 'transparent';

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(request),
  });
  const body = (await res.json().catch(() => ({}))) as {
    data?: { b64_json?: string; url?: string }[];
    error?: { message?: string };
  };
  if (!res.ok) throw new Error(`OpenAI error ${res.status}: ${body.error?.message ?? 'unknown error'}`);

  const here = path.dirname(fileURLToPath(import.meta.url));
  const outDir = path.resolve(here, '..', '..', 'generated-artifacts', accent ? 'accents' : 'textures');
  await mkdir(outDir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const slug = (args.name ?? args.accent ?? args.preset ?? 'custom').replace(/[^a-z0-9-]/gi, '-').toLowerCase();

  let saved = 0;
  for (const [i, img] of (body.data ?? []).entries()) {
    const file = path.join(outDir, `${slug}-${stamp}-${i + 1}.png`);
    if (img.b64_json) {
      await writeFile(file, Buffer.from(img.b64_json, 'base64'));
    } else if (img.url) {
      const r = await fetch(img.url);
      await writeFile(file, Buffer.from(await r.arrayBuffer()));
    } else continue;
    await writeFile(file.replace(/\.png$/, '.txt'), `${prompt}\nmodel=${MODEL} size=${size} quality=${args.quality}\n`);
    console.log(`Saved ${path.relative(process.cwd(), file)}`);
    saved++;
  }
  if (!saved) throw new Error('The API returned no images.');
  console.log('\nFor review only. Get the owner\'s OK before using any of these on the site.');
}

main().catch((e: unknown) => {
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
});
