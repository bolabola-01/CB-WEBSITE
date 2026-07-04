# Design System

Extracted directly from `CALTIC BARU FULL CATALOGUE.pdf` (the master brand reference). All tokens live in `tailwind.config.ts` — update there, not by hardcoding hex values in components.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `paper` | `#F7F4EE` | Primary background (warm white) |
| `paper-warm` | `#F1ECE2` | Secondary section background |
| `navy-700` | `#12233F` | Headline type, dark panels, footer, header text |
| `navy-800` / `navy-900` | `#0D192E` / `#08111F` | Darkest panels (testimonial section) |
| `terracotta-500` | `#C1663F` | Accent — underlines, stat figures, links, primary hover state |
| `ink` | `#1E2530` | Body copy |
| `ink-soft` | `#4B5563` | Secondary/supporting body copy |
| `line` | `#DDD5C7` | Hairline dividers, card borders |

Do not introduce new brand colors without updating this file and re-checking against the catalogue.

## Typography

| Token | Font | Usage |
|---|---|---|
| `font-display` | Cormorant Garamond (italic) | Editorial headlines — always used in italic for the catalogue's signature look |
| `font-label` | Cinzel | Small-caps eyebrow labels, wordmark, section numbering (e.g. "01 — ABOUT US") |
| `font-sans` | Work Sans | Body copy, UI labels, buttons |

The catalogue itself uses licensed fonts (The Seasons, Avenir LT Pro, Garet) that aren't available via Google Fonts. Cormorant Garamond / Cinzel / Work Sans were chosen as the closest freely-licensed equivalents that preserve the same editorial, warm, slightly classic feel. If the client licenses the original fonts, swap them in `src/app/layout.tsx` (the `next/font` imports) — no other code changes needed since all usage goes through the `font-display` / `font-label` / `font-sans` Tailwind tokens.

## Recurring Patterns

- **Section eyebrow** — `01 — SECTION NAME` in small-caps Cinzel, terracotta, followed by a thin hairline. See `SectionEyebrow.tsx`.
- **Terracotta tick** — a short 2px terracotta underline (`.terracotta-tick`) used under card titles and section intros, mirroring the catalogue's divider marks.
- **Stat band** — a dark navy panel with large italic terracotta figures (e.g. "11+", "200+"). See `StatBand.tsx`.
- **Bordered card grid** — thin 1px bordered cards with generous padding, used for feature lists ("Why Choose Us") and process descriptions. See `.card-bordered` in `globals.css`.
- **Numbered process step** — large italic numeral beside a title/description pair, used for workflow and QA steps. See `ProcessStep.tsx`.
- **Full-bleed hero with dark gradient overlay** — used on the homepage and section dividers, matching the catalogue's editorial photography spreads.

## Buttons

Three button classes are defined in `globals.css`:

- `.btn-primary` — solid navy, terracotta on hover. Primary conversion actions ("Request a Quotation").
- `.btn-secondary` — outlined navy. Secondary actions on light backgrounds.
- `.btn-ghost-light` — outlined white/paper. Secondary actions on dark or photographic backgrounds.

## Spacing & Grid

- Max content width: `max-w-8xl` (1440px), matching the catalogue's 1440×810 slide canvas.
- Section vertical rhythm: `py-20` (5rem) for standard sections, `py-16` for denser content pages.
- Card grids default to `gap-6` at 3-column desktop / 2-column tablet / 1-column mobile.

## Motion

Framer Motion is included in `package.json` but not required for the current component set, which relies on CSS transitions (`transition-colors`, `transition-transform`) for hover states to keep the bundle lean. Add Framer Motion scroll/entrance animations only where they add clear value (e.g. staggered card reveals) — the catalogue's tone is calm and editorial, not flashy.
