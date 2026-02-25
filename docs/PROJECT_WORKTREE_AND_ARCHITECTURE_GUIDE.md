# Trolipay Frontend — Working Tree & Architecture Guide (Beginner Friendly)

This guide explains **how the project is organized**, **how files are connected**, and **how to safely maintain it** going forward.

---

## 1) What “working tree” means (in simple words)

In Git, your **working tree** is the set of files you currently have checked out on disk.

Think of it as:
- the project files you can see and edit right now,
- plus any local changes not yet committed.

### Common working tree states
- **Clean working tree**: no uncommitted changes.
- **Dirty working tree**: some files were changed/added/deleted locally.

Useful command:

```bash
git status --short
```

- No output => clean.
- Output lines (`M`, `A`, `D`, `??`) => changed files.

---

## 2) High-level project map

At the root:

- `package.json` / `package-lock.json`: dependencies + npm scripts.
- `vite.config.js`: Vite bundler config.
- `index.html`: root HTML shell used by Vite.
- `src/`: application source code.
- `public/`: static files (images, etc.) served directly.
- `docs/`: project docs, design notes, architecture notes.

---

## 3) Runtime flow: from browser load to UI

When user opens the app:

1. `index.html` loads the Vite React bundle.
2. `src/main.jsx` bootstraps React.
3. `src/App.jsx` mounts router + global UI (like toasts).
4. `src/app/routes.jsx` decides which page component to render.
5. Page components under `src/pages/public/*` render domain components.

So the chain is:

`index.html -> main.jsx -> App.jsx -> routes.jsx -> page -> components`

---

## 4) Source folders and what they do

## `src/app/`
- Routing layer (`routes.jsx`).
- Controls URL-path-to-page mapping.

## `src/pages/`
- Top-level screens/routes.
- Public pages are in `src/pages/public/` (Landing, FAQ, About, Privacy, Terms).

## `src/components/`
- Reusable UI pieces.

### `src/components/domain/`
Business-specific components, for example:
- `LandingNavbar`
- `LandingFooter`
- `WaitlistForm`
- `LiveChatPreview`
- `FaqAccordion`
- `Section`

### `src/components/ui/`
Generic UI primitives:
- `Button`, `Card`
- `Toast`, `toastStore`

## `src/services/`
- API/business communication logic.
- `waitlist.js` builds payloads and sends waitlist form data.

## `src/styles/`
- Global theme tokens and utility CSS (`index.css`).
- Contains light/dark color tokens and helper classes.

## `src/utils/`
- Small utility helpers used across features.

---

## 5) Navigation/routing connections

`src/app/routes.jsx` is the source of truth for app routes.

If you add a new page:
1. Create page component in `src/pages/public/`.
2. Import it into `routes.jsx`.
3. Add a `<Route path="..." element={<... />} />`.
4. Add nav links (`Link` from `react-router-dom`) in navbar if needed.

**Important:**
- Use `Link` for internal page routes (`/faq`, `/about`) to avoid full page reloads.
- Use anchor links (`/#waitlist`, `/#demo`) for in-page section jumps on landing.

---

## 6) Waitlist form data flow (end-to-end)

How submission works:

1. User fills `WaitlistForm` (`src/components/domain/WaitlistForm.jsx`).
2. Form validates input with `zod` + `react-hook-form`.
3. Form calls service in `src/services/waitlist.js`.
4. Service reads env var `VITE_WAITLIST_WEBAPP_URL`.
   - If URL exists: sends `FormData` POST to Apps Script `/exec`.
   - If missing/fails: stores data in localStorage fallback key `waitlist_submissions_v1`.
5. UI displays toasts for success/warning states.

This means the UI is resilient even when network/script is unavailable.

---

## 7) Theme and branding system

Theme lives in `src/styles/index.css`.

- Light mode tokens: Trolipay brand colors.
- Dark mode tokens: Oneline-inspired contrast accent.
- Navbar toggles theme by adding/removing `dark` class on `<html>`.

Any component using token classes (`bg-app-bg`, `text-text`, `border-border`, etc.) updates automatically with theme toggle.

---

## 8) How core components depend on each other

- `WaitlistLanding.jsx`
  - uses `LandingNavbar`, `Section`, `Card`, `LiveChatPreview`, `WaitlistForm`, `LandingFooter`.
- `WaitlistForm.jsx`
  - uses `Button`, `toastStore`, and `waitlist` service.
- `Toast.jsx`
  - reads messages from `toastStore`.
- `LandingNavbar.jsx`
  - uses router `Link` + theme state.

If one of these core components changes, multiple pages may be affected.

---

## 9) Safe maintenance workflow for novices

### Step 1 — Understand impact
- Check where component is used:

```bash
rg "ComponentName" src
```

### Step 2 — Make small focused change
- Avoid touching many files for one bug unless necessary.

### Step 3 — Run checks

```bash
npm run build
npm run dev -- --host 0.0.0.0 --port 4173
```

### Step 4 — Verify visually
- Check mobile + dark mode + key routes:
  - `/`
  - `/faq`
  - `/about`

### Step 5 — Commit clearly
Use commit message pattern:
- `fix(navbar): make FAQ route use Link`
- `feat(about): add beginner-friendly product explanation page`

---

## 10) “If this breaks, check here first” cheat sheet

- **FAQ 404** -> check `routes.jsx` and navbar route links.
- **Waitlist not reaching sheet** -> check `.env` + `VITE_WAITLIST_WEBAPP_URL` and Apps Script deploy permissions.
- **Dark mode weird colors** -> check token values in `src/styles/index.css`.
- **Form submits but nothing visible** -> check `Toast` mounted in `App.jsx` and console errors.
- **Section spacing issues on mobile** -> check `Section.jsx` padding + per-page gap classes.

---

## 11) Suggested docs to keep updated after each major change

When architecture/UI changes, update:
- `docs/PROJECT_WORKTREE_AND_ARCHITECTURE_GUIDE.md` (this file)
- `docs/REDESIGN_DECISIONS.md`
- `README_FRONTEND.md` (setup/env/run changes)

Keeping docs synced prevents maintenance confusion later.

---

## 12) Quick newcomer checklist (first day)

1. Run:
   ```bash
   npm install
   npm run dev -- --host 0.0.0.0 --port 4173
   ```
2. Read:
   - `README_FRONTEND.md`
   - this architecture guide
3. Open and inspect:
   - `src/app/routes.jsx`
   - `src/pages/public/WaitlistLanding.jsx`
   - `src/components/domain/WaitlistForm.jsx`
   - `src/services/waitlist.js`
4. Make one tiny UI change and verify build/dev.

If you can do that successfully, you are ready to maintain this project.
