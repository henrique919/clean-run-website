import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Canonical public domain — drives sitemap + canonical URLs.
  site: 'https://www.cleanruniq.com',
  integrations: [
    tailwind(),
    sitemap({
      // Keep app/internal routes, and pages we've explicitly noindexed
      // (BaseLayout's noindex prop), out of the sitemap — submitting a
      // noindexed URL is a Search Console inconsistency.
      filter: (page) => !page.includes('/api/') && !page.includes('/privacy/') && !page.includes('/terms/'),
      customPages: [
        'https://www.cleanruniq.com/sep.html',
        'https://www.cleanruniq.com/henry-sestak.html',
      ],
    }),
    mdx(),
  ],
  output: 'static',
  // Ensures /features/ not /features — consistent canonical URLs.
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    server: {
      allowedHosts: ['devserver-main--clean-run-edit1.netlify.app'],
    },
  },
});
