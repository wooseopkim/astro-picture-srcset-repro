import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://wooseopkim.github.io/repro",
  base: "/astro-picture-srcset-repro",
  integrations: [image()]
});
