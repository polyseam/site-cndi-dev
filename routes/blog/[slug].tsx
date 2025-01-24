import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "./index.tsx";
import { CSS, render } from "@deno/gfm";

import "prismjs/components/prism-yaml.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-typescript.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/components/prism-tsx.js";
import "./prism-cndi.js";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  const ogImgSrc = `https://cndi.dev${post.imgSrc}`;

  const __html = `
  ${
    render(post.content, {
      allowIframes: true,
      allowMath: true,
      allowedTags: ["code"],
    })
  }

  <style>
  ${CSS}
  .markdown-body {
    background-color: transparent;
  }

  .markdown-body img {
    background-color: transparent;
  }
  
  code {
    color: rgb(233 213 255);
    background-color: var(--bgColor-muted,var(--color-canvas-subtle)) !important;
  }
  </style>
  `;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta charSet={"utf-8"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`https://cndi.dev/blog/${post.slug}`} />
        {/* opengraph */}
        <meta property="description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:image" content={ogImgSrc} />

        {/* search */}
        <meta itemprop="image" content={ogImgSrc} />
        <meta itemprop="name" content={post.title} />
        <meta itemprop="description" content={post.description} />

        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <meta name="twitter:image" content={ogImgSrc} />

        <style>{".octicon {display: none}"}</style>
      </Head>

      <div className="py-8" />
      <div class="w-container">
        <div class="div-block-62">
          <div class="div-block-61">
            <div class="text-block-44">
              {new Date(post.publishedAt).toLocaleDateString("en-us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
          <h1 class="heading-53">{post.title}</h1>
          <div class="div-block-60">
            <div class="f-avatar-small">
              <img
                loading="lazy"
                alt={`${post.authorName} headshot`}
                src={post.authorImgSrc}
                sizes="(max-width: 1439px) 32px, (max-width: 1919px) 2vw, 32px"
                class="f-avatar-image"
              />
            </div>
            <div class="text-block-43">{post.authorName}</div>
          </div>
        </div>
        <div class="m-8">
          <main
            data-color-mode="dark"
            data-dark-theme="dark"
            class="markdown-body"
            dangerouslySetInnerHTML={{
              __html,
            }}
          />
        </div>
      </div>
    </>
  );
}
