import { StandardSection } from "components/Section.tsx";
import { ComponentChild } from "preact";
import { P } from "elements";

export default function TemplateOnTargetParagraphSection(props: {
  children: ComponentChild;
}) {
  return (
    <StandardSection>
      <div class="mx-auto max-w-screen-lg">
        <P size="lg">{props.children}</P>
      </div>
    </StandardSection>
  );
}
