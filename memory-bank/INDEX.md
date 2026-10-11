# Memory Bank — Index

The memory bank is the project's long-term context. **Read this file first**, then whichever docs your task touches.
Keep every file current: any change to behaviour, design or structure must be reflected here in the same commit.

| File | Purpose | Read when… |
| --- | --- | --- |
| [PRD.md](./PRD.md) | Product requirements — who the site is for, goals, scope, content, success criteria | Changing content, adding/removing sections |
| [TRD.md](./TRD.md) | Technical requirements — stack, architecture, folder layout, conventions, quality gates | Touching code, dependencies, build or deploy |
| [DESIGNS.md](./DESIGNS.md) | Claymorphism design system — tokens, shadows, typography, components, motion, a11y | Any visual / UI change |
| [CHANGELOG.md](./CHANGELOG.md) | Dated history of notable changes (Keep a Changelog format) | Always — append an entry for every change |
| [modules/](./modules/) | One doc per module (feature area) | Working inside that module |

## Modules

| Module | Doc | Source |
| --- | --- | --- |
| Content data | [modules/content-data.md](./modules/content-data.md) | `src/data/profile.ts` |
| UI kit | [modules/ui-kit.md](./modules/ui-kit.md) | `src/components/ui/*` |
| Layout & theming | [modules/layout-theming.md](./modules/layout-theming.md) | `src/components/layout/*`, `src/app/layout.tsx`, `src/app/globals.css` |
| Page sections | [modules/sections.md](./modules/sections.md) | `src/components/sections/*`, `src/app/page.tsx` |
| Carousel & marquee | [modules/carousel-marquee.md](./modules/carousel-marquee.md) | `src/components/ui/Carousel.tsx`, `src/components/ui/Marquee.tsx` |
| SEO & deployment | [modules/seo-deployment.md](./modules/seo-deployment.md) | `src/app/{layout,robots,sitemap}.ts(x)`, Vercel |

## Quick facts

- **Owner / subject:** Shubha Rawat — Senior Public Health & Nutrition Professional (UNICEF, Lucknow).
- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · next-themes · lucide-react · Embla Carousel.
- **Hosting:** Vercel (zero-config). Single static page.
- **Source of truth for content:** `src/data/profile.ts` (never hard-code copy in components).
