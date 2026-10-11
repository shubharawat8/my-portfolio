# Module — Carousel & marquee

## Carousel (`src/components/ui/Carousel.tsx`)
- Embla (`loop`, `dragFree`, `align: "start"`) + `AutoScroll` plugin (`speed` px/frame, `stopOnMouseEnter`,
  `stopOnFocusIn`, `stopOnInteraction: false` → resumes after hover).
- Controls: Previous / Play-Pause / Next. Prev/Next stop auto-scroll (user took control); Play resumes.
- `prefers-reduced-motion` → auto-scroll stopped on mount.
- Edge fade via CSS `mask-image`. Viewport has `py-10 -my-10` so clay shadows aren't clipped.
- Slide width via `slideClassName` (default `basis-[85%] sm:basis-1/2 lg:basis-1/3`).
- a11y: region with `aria-roledescription="carousel"`, each slide `role="group"` + "n of N" label.

## Marquee (`src/components/ui/Marquee.tsx`)
- Pure CSS: track contains content twice; `@keyframes marquee` translates by `-50% - gap/2`.
- `--marquee-duration` and `--marquee-gap` CSS vars; `reverse` flips direction.
- Pauses on hover / focus-within. Duplicate copy is `aria-hidden`.
