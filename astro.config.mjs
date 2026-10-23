// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Public URL of the site (Render gives one like https://<name>.onrender.com).
// Set SITE_URL in Render once you know it, or when you add a custom domain.
const site = process.env.SITE_URL || 'https://darpaws-website.onrender.com';

export default defineConfig({
  site,
  i18n: {
    locales: ['fr', 'en', 'ar'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'fr', locales: { fr: 'fr-MA', en: 'en', ar: 'ar-MA' } },
    }),
  ],
});
