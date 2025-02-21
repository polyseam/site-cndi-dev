import { ComponentChild } from "preact";
export default function DistributionCardSection(props: {
  children: ComponentChild;
}) {
  return (
    <section class="w-layout-blockcontainer tab_container_content mx-auto max-w-screen-lg">
      {props.children}
    </section>
  );
}
