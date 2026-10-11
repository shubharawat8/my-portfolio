# DESIGNS — Claymorphism Design System

## Concept
*Soft, tactile, friendly — but professional.* Claymorphism = inflated pastel surfaces with a large outer drop
shadow, a light top-left highlight, and **inner** highlight/shade that make elements look moulded from clay.
The warmth suits a career devoted to mothers and children; the restrained violet primary keeps it credible.

## Colour tokens (`src/app/globals.css`)
| Token | Light | Dark | Tailwind |
| --- | --- | --- | --- |
| `--bg` | `#eef0fb` | `#17152a` | `bg-bg` |
| `--surface` | `#f6f7ff` | `#23203d` | `bg-surface` |
| `--surface-sunken` | `#e6e8f6` | `#1b1932` | `bg-sunken` |
| `--text` | `#24213a` | `#f1effc` | `text-ink` |
| `--muted` | `#625e7c` | `#aaa5c9` | `text-muted` |
| `--primary` | `#6d4dff` | `#9b85ff` | `bg-primary` / `text-primary` |

### Accent pairs (fill + ink)
`violet`, `mint`, `peach`, `sky`, `rose`, `lemon` — each has a pastel fill (`bg-mint`) and a high-contrast ink
(`text-mint-ink`) re-tuned for dark mode. Use them via `accentBg[accent]` from `components/ui/accent.ts`.

## Clay shadow utilities
| Utility | Use |
| --- | --- |
| `clay` | Cards, nav bar (big drop + inner highlight/shade + 1px soft border) |
| `clay-sm` | Buttons, chips, icon bubbles |
| `clay-inset` | Sunken wells inside cards (lists, certificate rows) |
| `clay-pressed` | Active/pressed state for buttons |

Shadow colours are tokenised (`--clay-drop`, `--clay-light`, `--clay-inner-dark`, `--clay-inner-light`) so dark mode
swaps to deep drop shadows with faint violet highlights.

## Radius
`rounded-clay` (2rem) for cards, `rounded-clay-sm` (1.25rem) for wells, `rounded-full` for pills, `rounded-[3rem]` hero card.

## Typography
- Display: **Fredoka** (rounded, matches clay) — `font-display`, weight 600.
- Body: **Plus Jakarta Sans** — `font-sans`.
- Headings use `text-balance`; paragraphs `text-pretty`.

## Components
ClayCard · ClayButton (primary / surface; md / lg / icon) · Chip · IconBubble (sm/md/lg) · SectionHeading (eyebrow pill +
title + lede) · Section · Reveal · Marquee · Carousel · ThemeToggle · CopyEmailButton. See `modules/ui-kit.md`.

## Motion
| Motion | Where | Reduced-motion |
| --- | --- | --- |
| `animate-blob` (18s drift) | Background blobs | Disabled |
| `animate-float` (6s) | Hero icon bubbles | Disabled |
| `animate-marquee(-reverse)` | Competencies | Static |
| Embla AutoScroll | Programmes carousel | Starts paused; play button available |
| `.reveal` fade-up | Cards on scroll | Shown immediately |
| hover lift `-translate-y-1.5` | Interactive cards/buttons | Instant |

## Layout
Max content width `max-w-6xl`, gutters `px-4 sm:px-6`, section rhythm `py-20 md:py-28`. Experience timeline is a single
left rail (`max-w-4xl`) at all breakpoints for readability.

## Imagery
- Portrait: transparent cut-out, soft drop-shadow, on a clay card filled with violet/peach radial gradients from tokens.
- Logos: always on a white `OrgLogo` tile so brand colours are faithful in dark mode. Never recolour or distort the UNICEF emblem.

## Accessibility
Focus ring = 3px primary outline. Skip-to-content link. Carousel has `aria-roledescription`, slide labels, pause control.
Marquee duplicate is `aria-hidden`. Contrast of ink-on-pastel ≥ 4.5:1 in both themes.
