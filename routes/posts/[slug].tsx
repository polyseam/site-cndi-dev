import { PageProps } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "./index.tsx";
import { CSS, render } from "$gfm";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await getPost(ctx.params.slug);
    if (post === null) return ctx.renderNotFound();
    return ctx.render(post);
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <style>{".octicon {display: none}"}</style>
        <style>
          {`
            code {
              background-color: #101010;
              border-radius: 3px;
              font-size: 85%;
              margin: 0;
              padding: .2em .4em;
            }
            ul {
              list-style-type: disc;        /* Ensures bullet points are displayed */
              list-style-position: outside; /* Positions bullets outside the text block */
              margin-left: 20px;            /* Adjust as needed for indentation */
              padding-left: 0;              /* Removes default padding */
            }

            li {
              margin: 0;
              padding: 0;
            }`}
        </style>
      </Head>
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
        <div
          class="text-base rich-text-block-2-copy leading-loose bg-[#180f1e]"
          data-color-mode="dark"
          data-dark-theme="dark"
          style={{
            fontFamily: "Roboto, sans-serif",
            color: "silver",
            backgroundColor: "#180f1e",
          }}
          dangerouslySetInnerHTML={{
            __html: render(post.content.replaceAll("\n\n", "\n\n<br/>\n\n")),
          }}
        />
      </div>
    </>
  );
}
