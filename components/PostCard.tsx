import { Post } from "../routes/blog/index.tsx";

type Props = {
  post: Post;
};

const AuthorTag = (props: { authorName: string }) => {
  const authorPortraitSrc = `/images/headshots/${
    props.authorName
      .toLowerCase()
      .replace(" ", "_")
  }.png`;
  return (
    <div class="mt-2 inline-block align-middle">
      <img
        class="h-8 w-8 rounded-full mr-2 bg-slate-100"
        src={authorPortraitSrc}
        alt={`Portrait of ${props.authorName}`}
      />
      <span class="inline-block align-middle text-slate-300">
        {props.authorName}
      </span>
    </div>
  );
};

export default function BlogPostCard(props: Props) {
  const { post } = props;

  const date = new Date(post.publishedAt).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const authorName = post.authorName;
  const title = post.title;
  const thumbImgSrc = post.imgSrc;
  const href = `/blog/${post.slug}`;

  return (
    <div class="border border-transparent hover:border-white rounded-3xl">
      <a href={href}>
        <div class="h-48 w-full overflow-hidden rounded-t-3xl">
          <img
            src={thumbImgSrc}
            alt="Thumbnail"
            class="object-cover w-full h-full"
          />
        </div>
      </a>
      <div class="m-2 p-2">
        <div class="flex self-stretch text-slate-400">{date}</div>
        <a href={href} class="flex mt-2 line-clamp-3 no-underline h-[3lh]">
          <div class="self-center">{title}</div>
        </a>
        <AuthorTag authorName={authorName} />
      </div>
    </div>
  );
}
