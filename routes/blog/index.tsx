import { Handlers } from "$fresh/server.ts";
import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";
import PostCard from "components/PostCard.tsx";
import { Head } from "$fresh/runtime.ts";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  authorName: string;
  authorImgSrc: string;
  description: string;
  imgSrc: string;
}

export interface PostAttrs {
  title: string;
  published_at: string;
  description: string;
  author_name: string;
}

function getAuthorImgSrc(authorName: string) {
  const authorSegment = authorName.toLowerCase().replace(" ", "_");
  return `/images/headshots/${authorSegment}.png`;
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
    const post = extract(text);
    const attrs = post.attrs as unknown as PostAttrs;
    const content = post.body as string;
    const imgSrc = `/images/blog/${slug}/cover.png`;
    return {
      slug,
      title: attrs.title,
      publishedAt: new Date(attrs.published_at),
      content,
      description: attrs.description,
      authorName: attrs.author_name,
      authorImgSrc: getAuthorImgSrc(attrs.author_name),
      imgSrc,
    };
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      console.error(`Post not found: ${slug}`);
    } else {
      console.error(e);
    }
    return null;
  }
}

async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = (await Promise.all(promises)) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function PostsPage(props: { data: Post[] }) {
  const posts = props.data;
  return (
    <>
      <Head>
        <title>Blog | CNDI</title>
        <link rel="canonical" href="https://cndi.dev/blog" />
        <meta
          name="description"
          content="CNDI Blog Posts from the Polyseam Team"
        />
      </Head>
      <main class="max-w-screen-md px-4 pt-16 mx-auto">
        <h2 class="text-slate-50 p-6">Blog Posts from the CNDI Team</h2>
        <div className="bg-[#180f1e] p-6 min-h-screen">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {posts.map((post) => <PostCard post={post} />)}
          </div>
        </div>
      </main>
    </>
  );
}
