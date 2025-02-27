import { ComponentChild } from "preact";

type ResponsiveHeroProps = {
  children: [ComponentChild, ComponentChild];
};

export default function ShyHero(props: ResponsiveHeroProps) {
  return (
    <div class="flex flex-col justify-between items-center lg:flex-row">
      <div class="text-center lg:text-left">{props.children[0]}</div>
      <div class="hidden lg:flex">{props.children[1]}</div>
    </div>
  );
}
