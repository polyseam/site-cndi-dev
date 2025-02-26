import { StandardSection } from "components/Section.tsx";
import { ComponentChild } from "preact";

export default function TemplateOnTargetParagraphSection(props: {
  children: ComponentChild;
}) {
  return (
    <StandardSection>
      <div class="mx-auto max-w-screen-lg">
        <p>{props.children}</p>
      </div>
    </StandardSection>
  );
}
