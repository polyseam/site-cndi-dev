import { ComponentChildren } from "preact";

export default function HeroSection({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <section class="section_template_deploy_hero">
      <div class="w-layout-blockcontainer container-1461 w-container">
        {children}
      </div>
    </section>
  );
}
