import { StandardSection } from "components/Section.tsx";
import { ComponentChild } from "preact";

export default function TemplateOnTargetParagraphSection(props: {
  children: ComponentChild;
}) {
  return (
    <StandardSection>
      <div class="w-layout-blockcontainer tab_container_content mx-auto max-w-screen-lg">
        <p class="paragraph-33">{props.children}</p>
      </div>
    </StandardSection>
  );
}
