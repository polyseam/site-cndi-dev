import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HopWhatAndWhoForSection from "components/sections/hop/WhatAndWhoForSection.tsx";
import HopOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateHopGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "hop";
  const title = "Hop";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on GCP</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/gcp/connected.png`}
          heroImgAlt="Hop and GCP Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on GCP
          </Heading>
          <Subheading>
            Easily Deploy {title} on Google Cloud Platform (GCP) using CNDI.
          </Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="hop_gcp_get_started"
              utm_source={utm_source}
              utm_id={8032}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <HopOnGCPSection>
        Deploying Apache Hop on GCP with CNDI gives you a cloud hosted visual
        data integration engine accessible securely through the browser. Thanks
        to GitOps, changing your cluster infrastructure or config is as simple
        as making a Pull Request.
      </HopOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Up and running in minutes",
          "Drag and drop editing experience",
          "Deep integration with nearly every source and target",
        ]}
      />
      <HopWhatAndWhoForSection />
    </>
  );
}
