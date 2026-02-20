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

This version is intentionally higher-contrast and more cinematic while remaining token-safe:

- Deep trust surfaces: `bg-brand-primary` blocks for strategic narrative sections.
- Premium glow field: layered radial overlays using alpha blends of brand-primary and brand-accent.
- Executive hierarchy: gradient-emphasized headline focus for high-signal messaging moments.
- Dense proof layout: image-supported architecture + metrics cards to reduce perceived marketing fluff.

## 3) Motion system (calm but visible)

All motion remains restrained and premium:

- Duration: `0.18s` to `0.20s`
- Easing: `easeOut`
- No spring, no bounce
- Behaviors used:
  - section fade-up on scroll
  - subtle card hover lift (`y: -3` to `-4`)
  - soft ambient background pulse

## 4) Communication architecture (investor-facing)

Landing copy sequence is intentionally structured:

1. Category statement (investor-grade chat commerce infrastructure)
2. Core value proposition (verified paid orders from chat)
3. Problem / Solution / Outcome strip
4. “What Trolipay is” explanation pillars
5. Mechanism proof (features + workflow)
6. Trust evidence (testimonials + FAQ)
7. Conversion CTAs (waitlist + demo)

## 5) Asset set used

- `/images/hero-dashboard.svg`
- `/images/commerce-flow.svg`
- `/images/investor-metrics.svg`
- `/images/trust-architecture.svg`

## 6) Brand usage map

- Confidence surfaces: `bg-brand-primary`, `text-white`
- Emphasis highlights: `text-brand-accent`, `ring-brand-accent`
- Premium cards: `bg-card-bg border-border shadow-sm`
- Readability hierarchy: `text-brand-primary` for titles, `text-text-muted` for support copy
