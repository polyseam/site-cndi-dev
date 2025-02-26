import { StandardSection } from "components/Section.tsx";
import { ComponentChildren } from "preact";

export default function HeroSection({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <StandardSection>
      <div class="px-10 m-w-[1080px] mx-auto max-w-screen-lg">
        {children}
      </div>
    </StandardSection>
  );
}
