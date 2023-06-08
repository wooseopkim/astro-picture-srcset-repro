import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://wooseopkim.github.io/repro",
  base: "/repro",
  integrations: [image()]
});
