// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://phrasebrew.github.io',
  base: '/policy',
  build: {
    assets: 'assets'
  }
});
