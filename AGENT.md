# AGENT.md — Instructions for AI coding agents

You are working on **Shubha Rawat's portfolio** — a single-page, statically generated Next.js 16 site with a
claymorphism design and light/dark themes, deployed on Vercel.

## 1. Before you change anything
1. Read [`memory-bank/INDEX.md`](./memory-bank/INDEX.md).
2. Read the module doc(s) in `memory-bank/modules/` for the area you'll touch.
3. For visual work read [`memory-bank/DESIGNS.md`](./memory-bank/DESIGNS.md); for code/deps read [`memory-bank/TRD.md`](./memory-bank/TRD.md).

## 2. Golden rules
- **Content lives in `src/data/profile.ts`.** Never hard-code CV copy in components.
- **Never fabricate** achievements, numbers, employers or dates. Enhanced wording must stay faithful to the CV.
- **Use design tokens** (`bg-surface`, `text-muted`, `bg-mint text-mint-ink`, `clay`, `clay-sm`, `rounded-clay`) — no raw hex in components.
- **Reuse UI primitives** from `@/components/ui`; add new shared patterns there and export them from `index.ts`.
- **Server Components by default**; add `"use client"` only for state, effects or browser APIs.
- **Icons:** `lucide-react` named imports. Decorative icons get `aria-hidden`, icon-only buttons get `aria-label`.
- **Both themes** must look right — check light and dark for every UI change.
- **Respect reduced motion** for any new animation.

## 3. Commands
```bash
npm install          # install deps
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run lint         # eslint
npm run build        # production build (must pass before commit)
```

## 4. Definition of done
- [ ] `npm run typecheck && npm run lint && npm run build` pass.
- [ ] Works at 360px and ≥1280px, light + dark, no horizontal scroll.
- [ ] `memory-bank/CHANGELOG.md` has a new entry; affected memory-bank docs updated.

## 5. Map
```
src/app/            layout, page, globals.css (tokens), robots, sitemap, icon, 404
src/components/ui/  reusable primitives
src/components/layout/  Navbar, Footer, ThemeProvider, BackgroundBlobs
src/components/sections/  one component per page section
src/data/profile.ts content
memory-bank/        PRD, TRD, DESIGNS, CHANGELOG, INDEX, modules/
```
