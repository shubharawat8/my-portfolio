# PRD — Shubha Rawat Portfolio

## 1. Overview
A single-page personal portfolio for **Shubha Rawat**, a Senior Public Health & Nutrition Professional with 15+ years
of experience supporting government maternal, newborn and child nutrition programmes through UNICEF, NHM and AIIMS
Bhopal. The site turns her CV into a warm, credible, memorable web presence, built with a claymorphism aesthetic.

## 2. Audience
| Persona | Needs |
| --- | --- |
| Hiring managers at UN agencies / INGOs / development partners | Quickly verify seniority, programme areas, government experience |
| Government counterparts & programme leads | Understand technical depth (IYCF, SAM/IMSAM, NRC, ICDS, Poshan Abhiyaan) |
| Recruiters / consultancies | Contact details, availability, keywords |
| Academic collaborators | Research, PhD, certifications |

## 3. Goals
1. Communicate *senior programme leadership* within 5 seconds of landing (hero + stats).
2. Present the full career history clearly (timeline) with enhanced, outcome-oriented wording.
3. Showcase flagship programmes in an engaging **moving carousel**.
4. Make contact effortless (mailto + copy-email).
5. Look polished in **light and dark** mode, on phone and desktop.
6. Deploy to Vercel with zero configuration.

### Non-goals
- No CMS, blog, or backend. No contact form (mailto only — no data handling).
- No fabricated metrics: every number must be derivable from the CV.

## 4. Scope — sections (in page order)
| # | Section | Anchor | Content source |
| --- | --- | --- | --- |
| 1 | Navbar (floating, sticky, theme toggle, mobile drawer) | — | `navLinks` |
| 2 | Hero — name, title, tagline, CTAs, availability, keywords | `#top` | `profile` |
| 3 | Stats — 15+ yrs, 3 states, 7 roles, 4 master-trainer areas | — | `stats` |
| 4 | About — 3-paragraph narrative + 3 working principles | `#about` | `profile.about`, `profile.principles` |
| 5 | Core competencies — two opposing marquee rows | `#competencies` | `competencies` |
| 6 | Experience — vertical timeline, 7 roles | `#experience` | `experience` |
| 7 | Flagship programmes — auto-scrolling carousel | `#programmes` | `programmes` |
| 8 | Programme & technical leadership — 6 focus cards | `#leadership` | `focusAreas` |
| 9 | Training & research | `#training` | `training`, `research` |
| 10 | Education & certifications | `#education` | `education`, `certifications` |
| 11 | Contact CTA | `#contact` | `profile` |
| 12 | Footer | — | `profile` |

## 5. Content rules
- Enhanced copy must stay faithful to the CV — rephrase for impact, never invent achievements, numbers or employers.
- Phone number is stored but **hidden by default** (`profile.showPhone = false`) to avoid spam on a public site.
- Acronyms (IYCF, SAM, NRC, ICDS…) are expanded at least once on the page.

## 6. Functional requirements
- FR1 Theme: light / dark / system, persisted, no flash on load.
- FR2 Carousel: continuous auto-scroll, loops, pauses on hover/focus, manual prev/next, visible play/pause, draggable.
- FR3 Marquee: infinite, seamless, pauses on hover, duplicate content hidden from screen readers.
- FR4 Scroll-reveal animations, disabled under `prefers-reduced-motion`.
- FR5 Responsive from 320px to wide desktop, no horizontal scroll.
- FR6 Copy-email button with feedback.

## 7. Non-functional requirements
- Lighthouse ≥ 95 for Performance, Accessibility, Best Practices, SEO.
- WCAG 2.2 AA: contrast, keyboard navigation, focus rings, skip-link, landmarks, motion controls.
- Fully static (SSG) — no runtime server needed.

## 8. Success criteria
- `npm run build`, `npm run lint`, `npm run typecheck` all pass.
- Deployed on Vercel from `main`.
