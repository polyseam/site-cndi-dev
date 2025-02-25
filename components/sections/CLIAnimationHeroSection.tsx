import TerminalView from "components/TerminalView.tsx";
import { StandardSection } from "components/Section.tsx";

const HeroCopy = () => (
  <div class="flex flex-col mx-10 text-bff items-center lg:items-start">
    <div class="flex-start text-base pb-2">Introducing CNDI</div>
    <div class="flex text-4xl leading-tight font-bold text-white text-center lg:text-left">
      Cloud-Native<br />
      Infrastructure and<br />
      Applications in Minutes
    </div>
    <div class="flex text-base py-5">
      a framework for self-hosting<br />
      open-source applications
    </div>
    <div>
      <a
        href="https://cndi.run/gh?utm_content=home_deploy&amp;utm_campaign=cndi_dev&amp;utm_source=https://cndi.dev/&amp;utm_medium=website&amp;utm_id=8001"
        target="_blank"
        class="inline-block bg-lightpurp rounded-md text-white no-underline py-3 px-6 my-2 hover:bg-[#9981b280]"
      >
        Deploy!
      </a>
    </div>
  </div>
);

const Jumbotron = () => (
  <div class="hidden lg:flex lg:flex-start">
    <TerminalView src="/images/vhs-animations/cndi-create.gif" />
  </div>
);

export default function CLIAnimationHeroSection() {
  return (
    <StandardSection>
      <div class="block mx-auto max-w-screen-lg">
        <div class="flex flex-col justify-between lg:flex-row">
          <HeroCopy />
          <Jumbotron />
        </div>
      </div>
    </StandardSection>
  );
}
