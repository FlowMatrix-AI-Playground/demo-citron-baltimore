import { defineConfig } from 'astro/config';

// Static, image-optimized, view-transition-ready.
export default defineConfig({
  site: 'https://citronbaltimore.com',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
  image: {
    // sharp is bundled with Astro; emit modern formats
    responsiveStyles: true,
  },
  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
