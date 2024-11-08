import { defineConfig } from "$fresh/server.ts";
import tailwind from "$fresh/plugins/tailwind.ts";
import { SitemapPlugin } from "./Sitemap.ts";

export default defineConfig({
  plugins: [
    tailwind(),
    SitemapPlugin({
      origin: "https://cndi.dev",
      headlessCMSConfig: {
        filenameParam: "slug",
        contentDirectory: "./posts",
        extension: ".md",
        pattern: "/blog/[slug]",
      },
    }),
  ],
});
