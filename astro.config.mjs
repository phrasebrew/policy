// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://phrasebrew.github.io',
  base: '/policy',
  build: {
    assets: 'assets'
  },
  integrations: [mdx()]
});
