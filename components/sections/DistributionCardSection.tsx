import { StandardSection } from "components/Section.tsx";
import { ComponentChild } from "preact";

export default function DistributionCardSection(props: {
  children: ComponentChild;
}) {
  return (
    <StandardSection>
      {props.children}
    </StandardSection>
  );
}
