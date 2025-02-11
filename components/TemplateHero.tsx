import { ComponentChild, JSX } from "preact";

type Props = {
  officialDeploymentMethod?: ComponentChild;
  ctaComponent?: JSX.Element;
  templateName: string;
  children: [ComponentChild, ComponentChild, ComponentChild?, ComponentChild?];
  heroImgSrc: string;
  heroImgAlt: string;
};

export const Heading = ({ children }: { children: ComponentChild }) => (
  <h1 class="heading_template">{children}</h1>
);

export const Subheading = ({ children }: { children: ComponentChild }) => (
  <div class="subheading_template">{children}</div>
);

export const CallToAction = (props: {
  children: [ComponentChild, ComponentChild];
}) => {
  const button = props.children[0];
  const cliSnippet = props.children[1];
  return (
    <div class="flex flex-col space-y-0 sm:space-y-0 sm:flex-row sm:items-center">
      <div>{button}</div>
      <span class="p-3 text-purple-200">or</span>
      <div class="inline-flex">{cliSnippet}</div>
    </div>
  );
};

export default function TemplateHero(props: Props) {
  const { officialDeploymentMethod } = props;
  const heading = props.children[0];
  const subheading = props.children[1];
  const ctaComponent = props.children[2];

  return (
    <div
      id="w-node-_27cf9244-9e94-0f1b-85fa-d7eb3852acd4-00a367a8"
      class="w-layout-layout quick-stack-6 wf-layout-layout"
    >
      <div
        id="w-node-_27cf9244-9e94-0f1b-85fa-d7eb3852acd5-00a367a8"
        class="w-layout-cell cell-8"
      >
        {heading}
        {subheading}
        {officialDeploymentMethod}
        {ctaComponent}
      </div>
      <div
        id="w-node-_27cf9244-9e94-0f1b-85fa-d7eb3852ace1-00a367a8"
        class="w-layout-cell cell-4"
      >
        <img
          src={props.heroImgSrc}
          alt={props.heroImgAlt}
          loading="lazy"
          width="823"
          class="image-63"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 91vw, 823px"
        />
      </div>
    </div>
  );
}
