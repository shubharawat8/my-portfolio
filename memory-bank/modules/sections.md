# Module — Page sections

**Sources:** `src/components/sections/*`, composed in `src/app/page.tsx`

| Component | Anchor | Highlights |
| --- | --- | --- |
| `Hero` | `#top` | Availability chip, headline, tagline, 2 CTAs, cut-out portrait over a clay card, floating icon bubbles, UNICEF current-role badge, keyword chips |
| `Stats` | — | 4 clay stat tiles |
| `About` | `#about` | Narrative card + 3 principle cards |
| `Competencies` | `#competencies` | 12 competencies split into two opposing marquee rows |
| `Experience` | `#experience` | Left-rail timeline, accent dot per role, org logo (UNICEF), highlights + tags |
| `Programmes` | `#programmes` | 8 programme cards in the moving carousel; "Supported with UNICEF" badge where applicable |
| `FocusAreas` | `#leadership` | 6 focus-area cards |
| `TrainingResearch` | `#training` | Master Trainer chips, facilitated trainings, research studies |
| `Education` | `#education` | Degree cards + certifications list |
| `Contact` | `#contact` | mailto + copy email, location, optional phone |

## Adding a section
1. Add data to `profile.ts`. 2. Create `sections/NewSection.tsx` using `Section` + `SectionHeading`.
3. Export from `sections/index.ts`, place in `page.tsx`. 4. Add to `navLinks` if it needs a nav item.
5. Update this file, PRD §4 and CHANGELOG.

## Profile photo
`Hero.tsx` renders `profile.photo` with `next/image` (`fill`, `object-contain object-bottom`, `priority`) over a clay card
that starts 18% down, so the head pops out above the card. A `clip-path` with rounded bottom corners keeps the cut-out
inside the card's bottom edge. Swap the image file to update the portrait — keep it a transparent, tightly-trimmed cut-out.
