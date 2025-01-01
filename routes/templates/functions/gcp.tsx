import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import FunctionsWhatAndWhoForSection from "components/sections/functions/WhatAndWhoForSection.tsx";
import FunctionsOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";

import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateFunctionsGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "functions";
  const title = "Functions";
  const type = "Serverless";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="GCP"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/gcp/connected.png`}
          heroImgAlt="Functions and GCP Connection Online"
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
              utm_content="functions_gcp_get_started"
              utm_source={utm_source}
              utm_id={8076}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <FunctionsOnGCPSection>
        Writing functions that respond to web requests should be accessible to
        everyone. You don't need to be locked into a per-request pricing model
        or API with Cloud functions or Firebase functions. CNDI Functions are
        built on web standards and Deno - all you need to do is push your code
        to git and they'll scale, forever!
      </FunctionsOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Write your Typescript functions using web standards",
          "Just push your code - we do the rest",
          "Infinite scale, simple cluster pricing, and no cold starts",
        ]}
      />
      <FunctionsWhatAndWhoForSection />
    </>
  );
}
