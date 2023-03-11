import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";

export default defineConfig({
  output: "server",
  integrations: [tailwind(), image(), sitemap(), solidJs()],
  adapter: vercel(),
});
