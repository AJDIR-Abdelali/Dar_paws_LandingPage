// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Public URL of the site (Vercel). Used for canonical links, Open Graph images and
// the sitemap. Set SITE_URL in Vercel if you add a custom domain (e.g. https://darpaws.ma).
const site = process.env.SITE_URL || 'https://darpaws.vercel.app';

export default defineConfig({
  site,
  // Pages are static except the shared post and sitter pages (/p/<id>, /s/<id>),
  // which Vercel renders on request so link previews show the real photo and title.
  adapter: vercel(),
  i18n: {
    locales: ['fr', 'en', 'ar'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(p|s)\//.test(page),
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-MA', en: 'en', ar: 'ar-MA' } },
    }),
  ],
});
