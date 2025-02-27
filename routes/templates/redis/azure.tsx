import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import HRule from "components/HRule.tsx";
import RedisWhatAndWhoForSection from "components/sections/redis/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import RedisOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateRedisAzurePage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "azure/aks";
  const templateName = "redis";
  const title = "Redis";
  const type = "Cache";

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="Azure"
      />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/azure/connected.png`}
          heroImgAlt="Redis and Azure Connection Online"
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
            <GetStartedWithConfiguratorButton templateName={templateName} />
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <RedisOnAzureSection>
        Running a production Redis cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to Redis Cloud.
        Thanks to GitOps, changing your cluster infrastructure or config is as
        simple as making a Pull Request.
      </RedisOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Manage confiuration and infrastructure with GitOps",
          "Durable and Scalable",
          "Built-in monitoring and logging",
        ]}
      />
      <RedisWhatAndWhoForSection />
    </>
  );
}
