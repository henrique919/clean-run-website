import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  // Canonical public domain.
  site: 'https://cleanruniq.com',
  integrations: [
    tailwind(),
    mdx(),
  ],
  output: 'static',
  // Ensures /features/ not /features — consistent canonical URLs.
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
