# Trolipay Landing Redesign Decisions (Mobile-First)

## Goals
- Rebuild the landing experience from a mobile-first perspective while preserving current functionality (waitlist + demo forms, section navigation, animations).
- Elevate visual quality toward a more premium enterprise SaaS presentation.
- Improve information hierarchy so value proposition, trust, and conversion paths are obvious in the first screenful on mobile.

## Key UX and Structural Decisions

### 1) Mobile-first content architecture
- Prioritized a **single clear hero message** with concise supporting copy and two CTAs: `Join waitlist` and `See live demo`.
- Added compact trust metrics directly under hero CTA to reduce uncertainty early.
- Ordered sections to match user decision flow:
  1. Value proposition
  2. Product proof (live demo + receipt proof)
  3. Capabilities
  4. How it works
  5. Social proof
  6. Waitlist conversion
  7. FAQ + demo booking

### 2) Premium visual system without introducing fragile complexity
- Kept existing design tokens and component primitives for stability.
- Applied subtle radial background accents and card depth (`depth-3d-soft`) to improve polish.
- Increased consistency in card rhythm, spacing, and typography scales for stronger visual coherence.

### 3) Conversion clarity improvements
- Promoted conversion actions into multiple intentional points:
  - Primary hero CTA
  - Dedicated onboarding section with contextual message
  - Final demo booking section
- Reframed copy to focus on concrete operational outcomes (payment truth, deterministic totals, trusted receipts).

### 4) Functional safety decisions
- Preserved existing data flow and forms:
  - `WaitlistForm` API behavior unchanged.
  - Section IDs for smooth scrolling retained (`demo`, `waitlist`).
  - `LiveChatPreview` component preserved and positioned as key proof element.
- Limited scope to layout/content architecture and visual hierarchy (no backend/service changes).

### 5) Footer cleanup
- Updated footer branding and messaging to align with Trolipay identity.
- Kept legal links while improving responsive readability.

## Files Updated
- `src/pages/public/WaitlistLanding.jsx`
- `src/components/domain/LandingFooter.jsx`
- `docs/REDESIGN_DECISIONS.md`

## Validation Performed
- Production build to ensure compile/runtime integrity.
- Manual browser pass on mobile viewport to verify hierarchy, spacing, and responsiveness.

## Notes for future iteration
- Introduce a shared typographic scale utility to reduce repeated class-level typography declarations.
- Add nav anchor links for Features/FAQ to reduce scroll effort on long devices.
- Consider dedicated dark-mode palette once brand direction is finalized.
