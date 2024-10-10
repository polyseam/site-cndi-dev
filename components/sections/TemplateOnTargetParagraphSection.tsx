import { ComponentChild } from "preact";
export default function TemplateOnTargetParagraphSection(props: {
  children: ComponentChild;
}) {
  return (
    <section class="section_cloudservice_airflow">
      <div class="w-layout-blockcontainer tab_container_content w-container">
        <p class="paragraph-33">
          {props.children}
        </p>
      </div>
    </section>
  );
}
