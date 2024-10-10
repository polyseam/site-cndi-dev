import { ComponentChildren } from "preact";

type Props = {
  children: ComponentChildren;
  heading: string;
  cta?: {
    text: string;
    link: string;
  };
};

export default function InfoCard(props: Props) {
  const { children, heading, cta } = props;

  return (
    <div
      id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad5-02e921a5"
      class="w-layout-cell templates_cell"
    >
      <h1 class="heading-63">{heading}</h1>
      <p class="paragraph-28">{children}</p>
      {cta
        ? (
          <a
            href={cta.link}
            target="_blank"
            class="link_block_view_project w-inline-block"
          >
            <div class="text-block-73">{cta.text}</div>
            <img
              src="/images/system/link-out-icon.png"
              loading="lazy"
              width="16"
              alt="outbound link icon"
              class="image-58"
            />
          </a>
        )
        : null}
    </div>
  );
}
