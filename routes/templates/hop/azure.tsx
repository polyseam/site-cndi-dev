import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import HopWhatAndWhoForSection from "components/sections/hop/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import HopOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";
import { Button } from "components/Button.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplateHopAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "azure/aks";
  const templateName = "hop";
  const title = "Hop";
  const type = "Visual Orchestration";

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
          heroImgAlt="Hop and Azure Connection Online"
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
              className="no-underline"
              pathname="/gh"
              utm_content="hop_azure_get_started"
              utm_source={utm_source}
              utm_id={8033}
              contentVersion={pageVersion}
            >
              <Button>Get Started with</Button>
            </LinkOut>
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <HopOnAzureSection>
        Deploying Apache Hop on Azure with CNDI gives you a cloud hosted visual
        data integration engine accessible securely through the browser. Thanks
        to GitOps, changing your cluster infrastructure or config is as simple
        as making a Pull Request.
      </HopOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
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
