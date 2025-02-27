import TerminalView from "components/TerminalView.tsx";
import { StandardSection } from "components/Section.tsx";
import { ComponentChild, ComponentChildren } from "preact";
import { P } from "elements";
import { PrimaryButton } from "components/Button.tsx";

const Intro = ({ children }: { children: ComponentChild }) => (
  <div class="flex-start pb-2">{children}</div>
);

const HeroHeading = ({ children }: { children: ComponentChildren }) => (
  <div class="flex text-4xl leading-tight font-bold text-white text-center lg:text-left">
    {children}
  </div>
);

const HeroCopy = () => (
  <div class="flex flex-col mx-10 text-bff items-center lg:items-start">
    <Intro>Introducing CNDI</Intro>
    <HeroHeading>
      Cloud-Native
      <br />
      Infrastructure and
      <br />
      Applications in Minutes
    </HeroHeading>
    <br />
    <P>
      a framework for self-hosting
      <br />
      open-source applications
    </P>
    <div>
      <a href="/configurator">
        <PrimaryButton>Deploy!</PrimaryButton>
      </a>
    </div>
  </div>
);

const Jumbotron = () => (
  <div class="hidden lg:flex lg:flex-start">
    <TerminalView src="/images/vhs-animations/cndi-create.gif" />
  </div>
);

export default function CLIAnimationHeroSection() {
  return (
    <StandardSection>
      <div class="block mx-auto max-w-screen-lg">
        <div class="flex flex-col justify-between lg:flex-row">
          <HeroCopy />
          <Jumbotron />
        </div>
      </div>
    </StandardSection>
  );
}
