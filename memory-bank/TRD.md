# TRD — Technical Requirements & Architecture

## Stack
| Concern | Choice | Notes |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router, Turbopack) | Fully static output (`○` routes) |
| UI runtime | React 19 | Server Components by default; `"use client"` only where needed |
| Language | TypeScript 5 (strict) | Path alias `@/*` → `src/*` |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`) | CSS-first config in `globals.css` (`@theme`, `@utility`, `@custom-variant`) |
| Theming | `next-themes` | `attribute="class"`, `defaultTheme="system"` |
| Icons | **lucide-react** | Tree-shaken named imports only |
| Carousel | **embla-carousel-react** + `embla-carousel-auto-scroll` | Continuous "moving" carousel |
| Class utils | `clsx` + `tailwind-merge` via `cn()` | `src/lib/utils.ts` |
| Fonts | `next/font/google` — Plus Jakarta Sans (body), Fredoka (display) | Self-hosted at build, CSS vars `--font-jakarta`, `--font-fredoka` |
| Lint | ESLint 9 flat config + `eslint-config-next` | `npm run lint` |

## Folder structure
```
src/
  app/
    layout.tsx        # <html>, fonts, metadata, ThemeProvider, Navbar/Footer
    page.tsx          # composes sections + JSON-LD Person schema
    globals.css       # design tokens, clay utilities, keyframes
    icon.svg          # favicon
    robots.ts, sitemap.ts, not-found.tsx
  components/
    ui/               # reusable primitives (ClayCard, ClayButton, Chip, IconBubble, Carousel, Marquee, Reveal…)
    layout/           # Navbar, Footer, ThemeProvider, BackgroundBlobs
    sections/         # one file per page section
  data/profile.ts     # ALL content
  lib/utils.ts        # cn()
memory-bank/          # project docs (this folder)
```

## Architectural rules
1. **Content/data separation** — components never contain CV copy; they read from `src/data/profile.ts`.
2. **Server-first** — sections are Server Components. Client components: `Navbar`, `ThemeToggle`, `Carousel`, `Reveal`,
   `CopyEmailButton`, `ThemeProvider`. Pass JSX children into client components rather than icon functions as props
   across the server→client boundary.
3. **Reusable primitives** — any visual pattern used twice belongs in `components/ui` and is exported from `ui/index.ts`.
4. **Tokens, not hex** — colours come from CSS variables surfaced as Tailwind colours (`bg-surface`, `text-muted`,
   `bg-mint text-mint-ink`…). Accent classes are mapped statically in `ui/accent.ts` so Tailwind can see them.
5. **Accessibility** — every icon-only control has `aria-label`; decorative icons `aria-hidden`.

## Quality gates (run before every commit)
```bash
npm run typecheck && npm run lint && npm run build
```

## Environment variables
| Name | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | optional | Canonical URL for metadata, sitemap, robots. Defaults to `https://my-portfolio.vercel.app` |

## Deployment
Vercel auto-detects Next.js. Import the GitHub repo, framework preset *Next.js*, no build overrides needed.
Node ≥ 20.9 (`engines` in `package.json`).
