# Module — UI kit

**Source:** `src/components/ui/` (barrel: `index.ts`)

| Component | Kind | Props | Notes |
| --- | --- | --- | --- |
| `ClayCard` | server | `as?`, `interactive?`, ...element props | Polymorphic clay surface |
| `ClayButton` | server | `variant` primary/surface, `size` md/lg/icon, `href?` | `<a>` when `href`, else `<button>` |
| `Chip` | server | `accent?` (or `neutral`), `icon?` | Pills for tags |
| `IconBubble` | server | `icon`, `accent`, `size` sm/md/lg | Pastel icon tile |
| `Section` | server | section props | Padding + `max-w-6xl` |
| `SectionHeading` | server | `eyebrow`, `title`, `description?`, `icon?`, `align?` | |
| `Reveal` | client | `delay?` | IntersectionObserver fade-up, once |
| `Marquee` | server | `label`, `reverse?`, `duration?` | CSS infinite ticker |
| `Carousel` | client | `label`, `speed?`, `slideClassName?` | Embla + AutoScroll |
| `OrgLogo` | server | `src`, `name`, `size` xs/sm/md | Logo on a white clay tile (white in both themes) |
| `ThemeToggle` | client | `className?` | next-themes |
| `CopyEmailButton` | client | `email` | Clipboard + live region |
| `accentBg` / `accentText` | util | — | Static accent class maps |

## Rules
- Add any pattern used twice here, export it from `index.ts`, and document it in this table.
- Merge classes with `cn()` so callers can override.
