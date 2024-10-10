import { ComponentChild } from "preact";
export default function DistributionCardSection(props: {
  children: ComponentChild;
}) {
  return (
    <section class="w-layout-blockcontainer tab_container_content w-container">
      {props.children}
    </section>
  );
}
