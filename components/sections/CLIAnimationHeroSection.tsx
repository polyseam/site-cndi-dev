import TerminalView from "components/TerminalView.tsx";
export default function CLIAnimationHeroSection() {
  return (
    <section class="home_hero">
      <div class="w-layout-blockcontainer container-1265 w-container">
        <div
          id="w-node-_278051a2-1495-6037-4a17-b5871d195bcd-f6848bac"
          class="w-layout-layout quick-stack-5 wf-layout-layout"
        >
          <div
            id="w-node-_278051a2-1495-6037-4a17-b5871d195bce-f6848bac"
            class="w-layout-cell cell-3"
          >
            <div class="text-block-18">Introducing CNDI</div>
            <h1 class="heading-26">
              Cloud-Native <br />
              Infrastructure and <br />
              Applications in Minutes
            </h1>
            <div class="text-block-74">
              An open-source framework for self-serve <br />
              cluster deployment and maintenance
            </div>
            <div>
              <a
                href="https://cndi.run/gh?utm_content=home_deploy&amp;utm_campaign=cndi_dev&amp;utm_source=https://www.cndi.dev/&amp;utm_medium=website&amp;utm_id=8001"
                target="_blank"
                class="hero_button w-button"
              >
                Deploy!
              </a>
            </div>
          </div>
          <div
            id="w-node-_278051a2-1495-6037-4a17-b5871d195bcf-f6848bac"
            class="w-layout-cell cell-2"
          >
            <TerminalView src="/images/vhs-animations/cndi-init-i.gif" />
          </div>
        </div>
      </div>
    </section>
  );
}
