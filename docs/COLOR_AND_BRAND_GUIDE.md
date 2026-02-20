# Trolipay Landing — Color, Motion, and Investor Communication Guide

## 1) Core Brand Palette (locked spec tokens)

- `brand-primary` — `#0F172A` (Infrastructure Slate)
- `brand-accent` — `#047857` (Muted Emerald)
- `app-bg` — `#F8FAFC`
- `card-bg` — `#FFFFFF`
- `border` — `#E5E7EB`
- `text` — `#111827`
- `text-muted` — `#6B7280`

## 2) Premium investor visual strategy

- Keep the page bright and premium (`bg-app-bg`) with a stable radial brand field in the background.
- Use dark confidence blocks (`bg-brand-primary`) only where strategic contrast is needed.
- Pair dashboard proof visuals with a dedicated chat-inbox visual so the value is explicit for busy SME chat operators.
- Use premium cards with clean spacing and restrained depth (`rounded-xl border border-border bg-card-bg shadow-sm`).

## 3) Motion system (working + calm)

- Duration: `0.20s`
- Easing: `easeOut`
- No spring, no bounce
- No flicker loops
- Motion patterns:
  - scroll reveal (`whileInView`) for sections
  - staggered card reveals for feature/testimonial grids
  - subtle hover-lift for feature/testimonial cards

## 4) Communication architecture (investor-facing)

1. Category statement (investor-grade chat commerce infrastructure)
2. Core value proposition (verified paid orders from chat)
3. Problem / Solution / Outcome strip
4. “What Trolipay is” explanatory pillars
5. Operational proof visuals (dashboard + live chat conversation + receipt proof)
6. Trust evidence (testimonials + FAQ)
7. Conversion CTAs (waitlist + demo)

## 5) Asset set used

- `/images/hero-dashboard.svg`
- `/images/chat-inbox.svg`
- `/images/commerce-flow.svg`
- `/images/investor-metrics.svg`
- `/images/trust-architecture.svg`
- `/images/chat-conversation-flow.svg`
- `/images/receipt-proof.svg`

## 6) Brand usage map

- Confidence surfaces: `bg-brand-primary`, `text-white`
- Emphasis highlights: `text-brand-accent`, `ring-brand-accent`
- Premium cards: `bg-card-bg border-border shadow-sm`
- Readability hierarchy: `text-brand-primary` for titles, `text-text-muted` for support copy
