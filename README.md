# Shubha Rawat — Portfolio

A claymorphism portfolio for **Shubha Rawat**, Senior Public Health & Nutrition Professional
(UNICEF · NHM · AIIMS) — 15+ years strengthening maternal, newborn and child nutrition programmes across India.

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **lucide-react** icons and
**Embla Carousel**, with light & dark mode.

## ✨ Features
- Soft, tactile **claymorphism** design system (tokenised, themeable)
- **Light / dark / system** theme with no flash on load (`next-themes`)
- **Moving carousel** of flagship programmes (auto-scroll, drag, pause/play, prev/next)
- Infinite **marquee** of core competencies
- Animated experience **timeline**, scroll-reveal cards, floating clay icons
- Fully **responsive** and **accessible** (skip link, focus rings, ARIA, reduced-motion support)
- **SEO** ready: metadata, Open Graph, JSON-LD Person schema, sitemap, robots
- 100% **static** — fast and free to host on Vercel

## 🚀 Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## ✏️ Editing content
All text lives in **[`src/data/profile.ts`](./src/data/profile.ts)** — experience, programmes, competencies,
education, certifications and contact details. Edit it and the whole site updates.

- Show the phone number: set `showPhone: true` in `profile`.
- Add a photo: put `public/profile.jpg` in place and swap the "SR" initials in `src/components/sections/Hero.tsx` for `next/image`.

## ☁️ Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and import `shubharawat8/my-portfolio`.
2. Keep the detected **Next.js** preset — no settings required.
3. Optional: add env var `NEXT_PUBLIC_SITE_URL` with your final URL (used for canonical links & sitemap).
4. Deploy. Every push to `main` redeploys automatically.

## 🗂️ Project structure
```
src/
  app/          layout, page, global styles & tokens, SEO routes
  components/
    ui/         reusable clay primitives (ClayCard, ClayButton, Chip, Carousel, Marquee…)
    layout/     Navbar, Footer, ThemeProvider, BackgroundBlobs
    sections/   Hero, Stats, About, Competencies, Experience, Programmes, …
  data/         profile.ts — all content
  lib/          utilities
memory-bank/    PRD, TRD, DESIGNS, CHANGELOG, INDEX, modules/
AGENT.md        guide for AI coding agents
```

## 📚 Documentation
Project knowledge is kept in the [memory bank](./memory-bank/INDEX.md): product requirements, technical
architecture, design system, per-module docs and changelog.

## License
© Shubha Rawat. All rights reserved.
