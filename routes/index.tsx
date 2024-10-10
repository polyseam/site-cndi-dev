import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

// Home Page Sections
import CLIAnimationHeroSection from "components/sections/CLIAnimationHeroSection.tsx";
import LogoTickerSection from "components/sections/LogoTickerSection.tsx";
import WhatIsCNDISection from "components/sections/WhatIsCNDISection.tsx";
import YoutubeVideoDemoEmbedSection from "components/sections/YoutubeVideoDemoEmbedSection.tsx";
import SelfHostSection from "components/sections/SelfHostSection.tsx";
import CNDIBenefitCardsSection from "components/sections/CNDIBenifitCardsSection.tsx";
import UseInteractiveCNDITemplatesSection from "components/sections/UseInteractiveCNDITemplatesSection.tsx";
import CNDIFeaturesSection from "components/sections/CNDIFeaturesSection.tsx";
import TemplateCardListSection from "components/sections/TemplateCardListSection.tsx";

export default function HomePage(props: PageProps) {
  const homePageVersion = "v1.0.0";
  return (
    <>
      <Head>
        <title>CNDI | Home</title>
        <meta
          content="Open-source self-serve data Infrastructure deployment tool."
          name="description"
        />
        <meta content="CNDI | Home" property="og:title" />
        <meta
          content="Open-source self-serve data Infrastructure deployment tool."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/63068f0fdc776c637b848bab/64c2e12278167dd32eee75ac_open_graph_img.jpg"
          property="og:image"
        />
        <meta content="CNDI | Home" property="twitter:title" />
        <meta
          content="Open-source self-serve data Infrastructure deployment tool."
          property="twitter:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/63068f0fdc776c637b848bab/64c2e12278167dd32eee75ac_open_graph_img.jpg"
          property="twitter:image"
        />
      </Head>
      <div id="main">
        <CLIAnimationHeroSection />
        <LogoTickerSection />
        <WhatIsCNDISection />
        <YoutubeVideoDemoEmbedSection />
        <SelfHostSection />
        <UseInteractiveCNDITemplatesSection />
        <CNDIBenefitCardsSection />
        <CNDIFeaturesSection />
        <TemplateCardListSection
          url={props.url}
          pageVersion={homePageVersion}
        />

        <script src="/js/webflow.js" type="text/javascript"></script>
      </div>
    </>
  );
}
