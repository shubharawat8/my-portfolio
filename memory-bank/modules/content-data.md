# Module — Content data

**Source:** `src/data/profile.ts`

Single source of truth for every word on the site. Components import named exports; they never hard-code copy.

| Export | Type | Used by |
| --- | --- | --- |
| `profile` | name, title, tagline, location, email, phone, `showPhone`, availability, keywords, about[], principles[] | Hero, About, Contact, Footer, layout metadata |
| `stats` | `Stat[]` | Stats |
| `competencies` | `Competency[]` | Competencies (marquee) |
| `experience` | `Experience[]` (newest first; `current` flag) | Experience |
| `programmes` | `Programme[]` | Programmes (carousel) |
| `focusAreas` | `FocusArea[]` | FocusAreas |
| `training` | `{ masterTrainer[], facilitated[] }` | TrainingResearch |
| `research` | list | TrainingResearch |
| `education`, `certifications`, `certificationIcon` | lists | Education |
| `UNICEF_LOGO`, `PROFILE_PHOTO` | `/public` asset paths | Hero, Experience, Programmes |
| `navLinks` | `{ href, label }[]` | Navbar |

## Conventions
- `accent` is one of `violet | mint | peach | sky | rose | lemon` (see DESIGNS.md).
- Icons are lucide components stored directly in data.
- Keep claims faithful to the CV. If you add a number, it must be verifiable.
- To show the phone number, set `profile.showPhone = true`.

## Images & logos
- Profile photo: `public/images/shubha-rawat.webp` — background removed (rembg `u2net_human_seg` + alpha matting), trimmed, 900px wide, transparent WebP. Replace the file to change the portrait.
- Organisation logos live in `public/logos/`. Set `logo` on an `Experience` or `partner: { name, logo }` on a `Programme` to show them.
- Only add logos for organisations Shubha actually worked with/for.

## Adding a new job
Prepend an object to `experience` (newest first); move `current: true` to it.
