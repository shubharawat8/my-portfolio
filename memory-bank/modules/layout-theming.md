# Module — Layout & theming

**Sources:** `src/app/layout.tsx`, `src/app/globals.css`, `src/components/layout/*`

- `layout.tsx` loads fonts (`next/font/google`), sets metadata/viewport, wraps everything in `ThemeProvider`
  (`attribute="class"`, `defaultTheme="system"`, `enableSystem`, `disableTransitionOnChange`), renders a skip link,
  `BackgroundBlobs`, `Navbar`, `<main id="main">` and `Footer`. `<html suppressHydrationWarning>` is required by next-themes.
- `globals.css` defines `:root` (light) and `.dark` tokens, maps them into Tailwind via `@theme inline`, declares
  `@custom-variant dark`, the clay `@utility` classes, keyframes and reduced-motion overrides.
- `Navbar` — fixed floating pill; becomes a `clay` surface after 12px scroll; mobile drawer with Escape-to-close.
- `ThemeToggle` — mount-guarded to avoid hydration mismatch.
- `BackgroundBlobs` — three blurred, drifting, token-coloured blobs (`--bg-blob-1..3`).

## Adding a theme colour
1. Add the variable to `:root` **and** `.dark`. 2. Map it in `@theme inline`. 3. Document in DESIGNS.md.
