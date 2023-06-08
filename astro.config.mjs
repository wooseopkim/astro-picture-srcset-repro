import { defineConfig } from 'astro/config';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? 'https://wooseopkim.github.io/repro' : undefined,
  base: import.meta.env.PROD ? '/astro-picture-srcset-repro' : undefined,
  integrations: [image()],
});
