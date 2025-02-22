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
    <div class="flex-col justify-start items-start flex templates_cell">
      <h1 class="heading-63">{heading}</h1>
      <p class="paragraph-28">{children}</p>
      {cta
        ? (
          <a
            href={cta.link}
            target="_blank"
            class="link_block_view_project max-w-full inline-block"
          >
            <div class="text-block-73">{cta.text}</div>
            <img
              src="/images/system/link_out_icon.png"
              loading="lazy"
              width="16"
              alt="outbound link icon"
              class="image-58"
            />
          </a>
        )
        : <div class="link_block_view_project max-w-full inline-block" />}
    </div>
  );
}
