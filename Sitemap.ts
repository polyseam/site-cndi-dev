import type { Manifest } from "$fresh/server.ts";
import { extract } from "$std/front_matter/any.ts";
import * as path from "$std/path/mod.ts";

import type { PostAttrs } from "./routes/blog/index.tsx";

interface GetLocListForHeadlessCMSOptions {
  filenameParam: string;
  contentDirectory: string;
  originalLoc: string;
  extension: string;
}

type SitemapPluginConfig = {
  origin: string;
  headlessCMSConfig: {
    filenameParam: string;
    contentDirectory: string;
    extension: string;
    pattern: string; // must have a pattern with a param that matches filenameParam
  };
};

export interface SitemapHints {
  changefreq?: string; // always, hourly, daily, weekly, monthly, yearly, never
  priority?: string; // 0.0 to 1.0
  lastmod?: string; // ISO 8601 date eg. "2024-11-07"
}

interface SitemapEntry extends SitemapHints {
  loc: string;
}

const time = {
  isLessThanAMonthOld(dateString: string): boolean {
    // Parse the input date string
    const inputDate = new Date(dateString);

    // Check if the date is valid
    if (isNaN(inputDate.getTime())) {
      throw new Error("Invalid date format");
    }

    // Get the current date
    const currentDate = new Date();

    // Subtract approximately one month (30 days) in milliseconds
    const oneMonthAgo = new Date(
      currentDate.getTime() - 30 * 24 * 60 * 60 * 1000,
    );

    // Compare dates
    return inputDate >= oneMonthAgo;
  },
  simpleDateString(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  },
};

export const SitemapPlugin = (
  { origin, headlessCMSConfig }: SitemapPluginConfig,
) => {
  return {
    name: "sitemap",
    getSitemapEntriesForHeadlessCMS: async (
      opt: GetLocListForHeadlessCMSOptions,
    ): Promise<Array<SitemapEntry>> => {
      const cmsSiteMapEntries: Array<SitemapEntry> = [];

      for await (const file of Deno.readDir(opt.contentDirectory)) {
        if (file.isFile && file.name.endsWith(opt.extension)) {
          const content = Deno.readTextFileSync(
            path.join(opt.contentDirectory, file.name),
          );

          const filename = file.name.replace(opt.extension, "");
          const loc = opt.originalLoc.replace(
            `[${opt.filenameParam}]`,
            filename,
          );

          const { attrs } = extract(content) as { attrs: PostAttrs };

          let lastmod = "";
          let changefreq = "";

          if (attrs?.published_at) {
            lastmod = time.simpleDateString(attrs.published_at);
            if (time.isLessThanAMonthOld(attrs.published_at)) {
              // new blog posts are edited frequently
              changefreq = "daily";
            } else {
              // then they cool down to monthly
              changefreq = "monthly";
            }

            cmsSiteMapEntries.push({ loc, lastmod, changefreq });
          } else {
            cmsSiteMapEntries.push({ loc });
          }
        }
      }
      return cmsSiteMapEntries;
    },
    async buildEnd() {
      console.log("Building sitemap");
      const freshGen = await import("./fresh.gen.ts");
      const manifest = freshGen.default satisfies Manifest;

      const entries: Array<SitemapEntry> = [];
      // manifest.routes is generally of the form "./routes/foo.tsx" so we replace the dot with the origin
      for (
        const route of Object.keys(manifest.routes) as Array<
          keyof typeof manifest.routes
        >
      ) {
        // ignore routes with handlers
        if (!("default" in manifest.routes[route]!)) {
          continue;
        }
        let changefreq: string | undefined;
        let lastmod: string | undefined;
        let priority: string | undefined;

        if ("sitemapHints" in manifest.routes[route]!) {
          const hints = manifest.routes[route]!.sitemapHints as SitemapHints;
          changefreq = hints?.changefreq;
          lastmod = hints?.lastmod;
          priority = hints?.priority;
        }
        // clean up source artifacts
        let loc = route.replace("./routes", origin)
          .replace("index", "")
          .replace(".tsx", "");

        // no trailing slashes
        if (loc.endsWith("/")) {
          loc = loc.slice(0, -1);
        }

        // no leading underscores
        if (loc.startsWith(`${origin}/_`)) { // special routes
          continue;
        }
        // eg. "https://cndi.dev/routes/blog/[slug]"
        const cmsPatternLoc = `${origin}${headlessCMSConfig.pattern}`;

        // if the registered CMS pattern is found,
        // we replace it with the actual CMS posts
        if (cmsPatternLoc === loc) {
          const cmsSiteMapEntries = await this
            .getSitemapEntriesForHeadlessCMS({
              originalLoc: loc,
              filenameParam: headlessCMSConfig.filenameParam,
              contentDirectory: headlessCMSConfig.contentDirectory,
              extension: headlessCMSConfig.extension,
            });
          entries.push(...cmsSiteMapEntries);
        }
        // exclude dynamic routes, including 'cmsPatternLoc'
        if (loc.includes("[") && loc.includes("]")) { // dynamic routes
          continue;
        }
        entries.push({ loc, changefreq, lastmod, priority });
      }

      const sitemap = `
          <?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${
        entries.map((entry) => {
          const loc = `<loc>${entry.loc}</loc>`;
          const lastmod = entry?.lastmod
            ? `<lastmod>${entry.lastmod}</lastmod>`
            : "";
          const changefreq = entry?.changefreq
            ? `<changefreq>${entry.changefreq}</changefreq>`
            : "";
          const priority = entry?.priority
            ? `<priority>${entry.priority}</priority>`
            : "";
          return `<url>${loc}${lastmod}${changefreq}${priority}</url>`;
        })
      }
          </urlset>`.trim();
      await Deno.writeTextFile("./static/sitemap.xml", sitemap);
    },
  };
};
