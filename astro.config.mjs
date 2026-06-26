import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://cleanruniq.com',
  integrations: [
    tailwind(),
    mdx(),
  ],
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});

// https://astro.build/config
export default defineConfig({
  // Canonical public domain — drives sitemap + canonical URLs.
  site: 'https://cleanruniq.com',
  integrations: [
    tailwind(),
    sitemap({
      // Keep app/internal routes out of the sitemap.
      filter: (page) => !page.includes('/api/'),
    }),
    mdx(),
  ],
  output: 'static',
  // Ensures /features/ not /features — consistent canonical URLs.
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
