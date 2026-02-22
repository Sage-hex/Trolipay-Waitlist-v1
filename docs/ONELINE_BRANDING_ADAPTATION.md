# Oneline-inspired branding adaptation for Trolipay waitlist

## What I analyzed
I reviewed `https://oneline.live` end-to-end (hero, cards, typography contrast, buttons, border usage, and dark surfaces) and extracted the dominant visible palette from computed styles.

Primary values observed:
- Background/base dark: `rgb(9, 9, 11)`
- Surface border dark: `rgb(48, 48, 54)`
- Main text light: `rgb(255, 255, 255)`
- Muted text: `rgb(215, 215, 219)`
- Accent green: `rgb(126, 200, 139)`

## How I mapped this into Trolipay
I adapted our tokens to mirror that contrast system while preserving Trolipay product semantics:

- `--color-brand-accent: #7ec88b` (Oneline green accent)
- Dark mode:
  - `--color-app-bg: #09090b`
  - `--color-card-bg: #111113`
  - `--color-border: #303036`
  - `--color-text: #ffffff`
  - `--color-text-muted: #d7d7db`
- Light mode kept minimal neutral surfaces for readability and investor scanning.

## UX/layout simplification done
Following the investor brutal review (proof-first, less noise, less copy bloat):

1. Reduced landing structure to high-signal sections only:
   - Hero + clear product sentence
   - Proof snapshot + “what this solves” bullets
   - Workflow demo + trust statement
   - Pilot application block + qualification form
2. Removed busy/clogged sections that were repetitive.
3. Kept mobile-first spacing, clearer hierarchy, and restrained animation.
4. Preserved user flow with two direct CTAs: `Apply for pilot` and `See workflow`.

## Why this is better for investors and SMEs
- Faster comprehension in under 10 seconds.
- Less visual clutter, stronger signal density.
- Cleaner contrast in dark mode and light mode.
- Better conversion focus around qualification and onboarding timeline.


## Follow-up adjustment based on feedback
- Retained original Trolipay brand colors in **light mode** (`#0f172a` primary, `#047857` accent).
- Kept Oneline-inspired palette for **dark mode** (dark surfaces + `#7ec88b` accent) for better night contrast.
- Added a top navigation **Join waitlist** CTA button and moved FAQ into a dedicated page (`/faq`).
