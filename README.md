# DarPaws website

Landing page and blog for the DarPaws app (French · English · Arabic), built with [Astro](https://astro.build).
It is a static site — separate from the app (`pet-care-frontend`) and the API (`pet-care-backend`).

| URL | Page |
|---|---|
| `/` · `/en` · `/ar` | Landing page (FR default, EN, AR right-to-left) |
| `/blog` · `/en/blog` · `/ar/blog` | Blog list |
| `/blog/<slug>` … | Article |

## Run locally

Requires Node.js ≥ 22.23.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static files in dist/
```

## Edit content

- **Texts** (all languages): `src/i18n/ui.ts`
- **Blog articles**: Markdown files in `src/content/blog/<fr|en|ar>/` — see `src/content/blog/README.md`
- **App screenshots**: `src/assets/screens/` (optimized automatically at build time)

## Deploy (Render Static Site)

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Environment variable `SITE_URL` = the site's public URL (used for canonical links and the sitemap)

Every push to `main` redeploys the site.
