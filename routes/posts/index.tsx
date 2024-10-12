import { Handlers } from "$fresh/server.ts";
import { extract } from "$std/front_matter/any.ts";
import { join } from "$std/path/mod.ts";
import PostCard from "components/PostCard.tsx";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  authorName: string;
  authorImgSrc: string;
}

interface PostAttrs {
  title: string;
  published_at: string;
  snippet: string;
  author_name: string;
}

function getAuthorImgSrc(authorName: string) {
  const authorSegment = authorName.toLowerCase().replace(" ", "_");
  return `/images/headshots/${authorSegment}.png`;
}

export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join("./posts", `${slug}.md`));
  const post = extract(text);
  const attrs = post.attrs as unknown as PostAttrs;
  const content = post.body as string;
  return {
    slug,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    content,
    snippet: attrs.snippet,
    authorName: attrs.author_name,
    authorImgSrc: getAuthorImgSrc(attrs.author_name),
  };
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
    <main class="max-w-screen-md px-4 pt-16 mx-auto">
      <h1 class="text-5xl font-bold">Blog</h1>
      <div class="mt-8">
        {posts.map((post) => <PostCard post={post} />)}
      </div>
    </main>
  );
}

// function PostCard(props: { post: Post }) {
//   const { post } = props;
//   return (

//     <div class="py-8 border(t gray-200)">
//       <a class="sm:col-span-2" href={`/${post.slug}`}>
//         <h3 class="text(3xl gray-900) font-bold">{post.title}</h3>
//         <time class="text-gray-500">
//           {new Date(post.publishedAt).toLocaleDateString("en-us", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </time>
//         <div class="mt-4 text-gray-900">{post.snippet}</div>
//       </a>
//     </div>
//   );
// }
