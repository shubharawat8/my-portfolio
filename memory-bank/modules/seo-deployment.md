# Module — SEO & deployment

## SEO
- `layout.tsx` `metadata`: title template, description, keywords, Open Graph (`type: profile`, `en_IN`), Twitter card, canonical.
- `page.tsx`: JSON-LD `Person` schema.
- `robots.ts`, `sitemap.ts` read `NEXT_PUBLIC_SITE_URL`.
- `icon.svg` favicon (SR monogram).

## Vercel
1. vercel.com → **Add New… → Project** → import `shubharawat8/my-portfolio`.
2. Framework preset: Next.js (auto). Build `next build`, output auto.
3. (Optional) Env var `NEXT_PUBLIC_SITE_URL=https://<your-domain>`. Redeploy after adding a custom domain.
4. Every push to `main` deploys production; other branches get preview URLs.
