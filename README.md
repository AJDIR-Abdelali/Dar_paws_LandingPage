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

## Deploy (Vercel)

Live at **https://darpaws.vercel.app** — Vercel builds every push to `main` automatically
(framework preset: Astro, output: `dist`).

If you add a custom domain, set the environment variable `SITE_URL` (e.g. `https://darpaws.ma`)
in Vercel → Project → Settings → Environment Variables, then redeploy, so canonical links,
link previews and the sitemap use the new address.
