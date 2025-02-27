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
    <div class="flex-col justify-start items-start flex border border-stroke rounded p-5">
      <h1 class="text-4xl bold mb-10">{heading}</h1>
      <p class="text-lg text-bff px-0 mb-0">{children}</p>
      {cta
        ? (
          <a
            href={cta.link}
            target="_blank"
            class="flex items-center no-underline mt-8 max-w-full"
          >
            <div class="text-white no-underline">{cta.text}</div>
            <img
              src="/images/system/link_out_icon.png"
              loading="lazy"
              width="16"
              alt="outbound link icon"
              class="ml-2"
            />
          </a>
        )
        : <div class="max-w-full inline-block" />}
    </div>
  );
}
