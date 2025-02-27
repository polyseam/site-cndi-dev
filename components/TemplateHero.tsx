import { ComponentChild, JSX } from "preact";
import ShyHero from "components/ShyHero.tsx";
import { H1, P } from "elements";
type Props = {
  officialDeploymentMethod?: ComponentChild;
  ctaComponent?: JSX.Element;
  templateName: string;
  children: [ComponentChild, ComponentChild, ComponentChild?, ComponentChild?];
  heroImgSrc: string;
  heroImgAlt: string;
};

export const Heading = ({ children }: { children: ComponentChild }) => (
  <H1>{children}</H1>
);

export const Subheading = ({ children }: { children: ComponentChild }) => (
  <div class="lg:pr-8">
    <P size="lg">{children}</P>
  </div>
);

export const CallToAction = (props: {
  children: [ComponentChild, ComponentChild];
}) => {
  const button = props.children[0];
  const cliSnippet = props.children[1];
  return (
    <div class="flex flex-col space-y-0 lg:flex-row lg:items-center lg:pr-8">
      <div>{button}</div>
      <span class="p-3 text-purple-200">or</span>
      <div class="inline-flex self-center text-nowrap">{cliSnippet}</div>
    </div>
  );
};

export default function TemplateHero(props: Props) {
  const { officialDeploymentMethod } = props;
  const heading = props.children[0];
  const subheading = props.children[1];
  const ctaComponent = props.children[2];

  return (
    <div class="pt-8">
      <ShyHero>
        <div class="flex flex-col">
          {heading}
          {subheading}
          {officialDeploymentMethod}
          {ctaComponent}
        </div>
        <div>
          <img
            src={props.heroImgSrc}
            alt={props.heroImgAlt}
            loading="lazy"
            class="max-w-[400px]"
          />
        </div>
      </ShyHero>
    </div>
  );
}
