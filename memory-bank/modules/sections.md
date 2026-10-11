# Module — Page sections

**Sources:** `src/components/sections/*`, composed in `src/app/page.tsx`

| Component | Anchor | Highlights |
| --- | --- | --- |
| `Hero` | `#top` | Availability chip, headline, tagline, 2 CTAs, initials avatar card with floating icon bubbles, keyword chips |
| `Stats` | — | 4 clay stat tiles |
| `About` | `#about` | Narrative card + 3 principle cards |
| `Competencies` | `#competencies` | 12 competencies split into two opposing marquee rows |
| `Experience` | `#experience` | Left-rail timeline, accent dot per role, highlights + tags |
| `Programmes` | `#programmes` | 8 programme cards in the moving carousel |
| `FocusAreas` | `#leadership` | 6 focus-area cards |
| `TrainingResearch` | `#training` | Master Trainer chips, facilitated trainings, research studies |
| `Education` | `#education` | Degree cards + certifications list |
| `Contact` | `#contact` | mailto + copy email, location, optional phone |

## Adding a section
1. Add data to `profile.ts`. 2. Create `sections/NewSection.tsx` using `Section` + `SectionHeading`.
3. Export from `sections/index.ts`, place in `page.tsx`. 4. Add to `navLinks` if it needs a nav item.
5. Update this file, PRD §4 and CHANGELOG.

## Profile photo
The hero shows "SR" initials. To use a photo, add `public/profile.jpg` and replace the initials `<span>` in `Hero.tsx`
with `next/image` (`rounded-full`, `clay-sm`).
