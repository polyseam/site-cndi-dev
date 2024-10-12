import { ComponentChildren } from "preact";
import { Post } from "../routes/posts/index.tsx";

type Props = {
  post: Post;
};

export default function InfoCard(props: Props) {
  const { post } = props;

  return (
    <a href={`/posts/${post.slug}`}>
      <div
        id="w-node-_8be5b367-0839-82c1-6d47-90ccd47724b9-f6848bac"
        class="w-layout-layout quick-stack-8 wf-layout-layout"
      >
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad5-02e921a5"
          class="w-layout-cell templates_cell"
        >
          <h3>{post.title}</h3>
          <p class="paragraph-28">{post.authorName}</p>
        </div>
      </div>
    </a>
  );
}
