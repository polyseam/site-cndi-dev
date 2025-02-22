import { ComponentChildren } from "preact";

export default function HeroSection({
  children,
}: {
  children: ComponentChildren;
}) {
  return (
    <section class="section_template_deploy_hero">
      <div class="w-layout-blockcontainer px-10 m-w-[1080px] mx-auto max-w-screen-lg">
        {children}
      </div>
    </section>
  );
}
