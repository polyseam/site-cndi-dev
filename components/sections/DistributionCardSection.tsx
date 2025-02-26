import { StandardSection } from "components/Section.tsx";
import { ComponentChild } from "preact";

export default function DistributionCardSection(props: {
  children: ComponentChild;
}) {
  return (
    <StandardSection>
      <div class="mx-auto max-w-screen-lg">{props.children}</div>
    </StandardSection>
  );
}
