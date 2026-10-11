# Changelog

All notable changes to this project are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) · Versioning: [SemVer](https://semver.org/).

## [1.1.0] — 2026-10-11

### Added
- Profile photo with background removed (`public/images/shubha-rawat.webp`, transparent WebP) shown as a cut-out portrait in the Hero — head rises above the clay card.
- UNICEF logo (`public/logos/unicef.png`) and reusable `OrgLogo` UI component (white clay tile, stays white in dark mode).
- Hero "current role" badge with UNICEF logo.
- Organisation logo on UNICEF roles in the Experience timeline (`Experience.logo`).
- "Supported with UNICEF" partner badge on UNICEF-supported programme cards (`Programme.partner`).
- `profile.photo`, `profile.currentRole`, `profile.currentOrg`; `UNICEF_LOGO` / `PROFILE_PHOTO` constants; photo in JSON-LD `Person.image`.

### Changed
- Hero initials avatar replaced by the portrait.

## [1.0.0] — 2026-10-11

### Added
- Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 project scaffold, ESLint flat config.
- Claymorphism design system (tokens, `clay` / `clay-sm` / `clay-inset` / `clay-pressed` utilities) with full light & dark themes via `next-themes`.
- Reusable UI kit: `ClayCard`, `ClayButton`, `Chip`, `IconBubble`, `Section`, `SectionHeading`, `Reveal`, `Marquee`, `Carousel`, `ThemeToggle`, `CopyEmailButton`.
- Sections: Hero, Stats, About, Core Competencies (dual marquee), Experience timeline, Flagship Programmes (auto-scrolling Embla carousel), Programme & Technical Leadership, Training & Research, Education & Certifications, Contact, Footer.
- All CV content in `src/data/profile.ts`, enhanced into outcome-oriented copy.
- SEO: metadata, Open Graph, JSON-LD `Person`, `robots.txt`, `sitemap.xml`, SVG favicon, custom 404.
- Memory bank (INDEX, PRD, TRD, DESIGNS, CHANGELOG, modules/), root `AGENT.md` and `README.md`.
