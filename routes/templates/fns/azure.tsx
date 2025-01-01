import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import FnsWhatAndWhoForSection from "components/sections/fns/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import FnsOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateFnsAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "fns";
  const title = "Functions";
  const type = "Serverless";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="Azure"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/azure/connected.png`}
          heroImgAlt="Fns and Azure Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on Azure
          </Heading>
          <Subheading>
            Easily Deploy {title} on Microsoft Azure using CNDI.
          </Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="functions_azure_get_started"
              utm_source={utm_source}
              utm_id={8077}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <FnsOnAzureSection>
        Writing functions that respond to web requests should be accessible to
        everyone. You don't need to be locked into a per-request pricing model
        or API with Azure Functions. CNDI Functions are built on web standards
        and Deno - all you need to do is push your code to git and they'll
        scale, forever!
      </FnsOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Write your Typescript functions using web standards",
          "Just push your code - we do the rest",
          "Infinite scale, simple cluster pricing, and no cold starts",
        ]}
      />
      <FnsWhatAndWhoForSection />
    </>
  );
}
