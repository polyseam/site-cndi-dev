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
  const title = "CNDI | Home";
  const homePageVersion = "v1.0.0";
  const description = "a framework for self-hosting open-source applications";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          content={description}
          name="description"
        />
        <meta content={title} property="og:title" />
        <meta
          content={description}
          property="og:description"
        />
        <meta
          content="https://cndi.dev/images/meta/meta_home.jpg"
          property="og:image"
        />
        <meta content={title} property="twitter:title" />
        <meta
          content={description}
          property="twitter:description"
        />
        <meta
          content="https://cndi.dev/images/meta/meta_home.jpg"
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
      </div>
    </>
  );
}
