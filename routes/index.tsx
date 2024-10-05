import { Head } from "$fresh/runtime.ts";

// home components
import CLIAnimationHero from "../components/home/CLIAnimationHero.tsx";
import LogoCarousel from "../components/home/LogoCarousel.tsx";
import WhatIsCNDI from "../components/home/WhatIsCNDI.tsx";
import YoutubeVideoDemoEmbed from "../components/home/YoutubeVideoDemoEmbed.tsx";
import SelfHostSection from "../components/home/SelfHostSection.tsx";
import UseInteractiveCNDITemplates from "../components/home/UseInteractiveCNDITemplates.tsx";
import CNDIFeatures from "../components/home/CNDIFeatures.tsx";

import CookieManager from "../components/CookieManager.tsx";

export default function Home() {
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
        <CLIAnimationHero />
        <LogoCarousel />
        <WhatIsCNDI />
        <YoutubeVideoDemoEmbed />
        <SelfHostSection />
        <UseInteractiveCNDITemplates />
        <CNDIFeatures />
        <CookieManager />
        <script src="js/webflow.js" type="text/javascript"></script>
      </div>
    </>
  );
}
