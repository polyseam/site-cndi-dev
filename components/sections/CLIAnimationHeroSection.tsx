import TerminalView from "components/TerminalView.tsx";
export default function CLIAnimationHeroSection() {
  return (
    <section class="home_hero">
      <div class="w-layout-blockcontainer container-1265 mx-auto max-w-screen-lg">
        <div
          id="w-node-_278051a2-1495-6037-4a17-b5871d195bcd-f6848bac"
          class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-5 wf-layout-layout"
        >
          <div
            id="w-node-_278051a2-1495-6037-4a17-b5871d195bce-f6848bac"
            class="flex-col justify-start items-start flex cell-3"
          >
            <div class="text-block-18">Introducing CNDI</div>
            <h1 class="heading-26">
              Cloud-Native <br />
              Infrastructure and <br />
              Applications in Minutes
            </h1>
            <div class="text-block-74">
              a framework for self-hosting<br />
              open-source applications
            </div>
            <div>
              <a
                href="https://cndi.run/gh?utm_content=home_deploy&amp;utm_campaign=cndi_dev&amp;utm_source=https://cndi.dev/&amp;utm_medium=website&amp;utm_id=8001"
                target="_blank"
                class="hero_button w-button"
              >
                Deploy!
              </a>
            </div>
          </div>
          <div
            id="w-node-_278051a2-1495-6037-4a17-b5871d195bcf-f6848bac"
            class="flex-col justify-start items-start flex cell-2"
          >
            <TerminalView src="/images/vhs-animations/cndi-create.gif" />
          </div>
        </div>
      </div>
    </section>
  );
}
