import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import RedisWhatAndWhoForSection from "components/sections/redis/WhatAndWhoForSection.tsx";
import RedisOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";

import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateRedisGCPPage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "redis";
  const title = "Redis";
  const type = "Cache";

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="GCP"
      />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/gcp/connected.png`}
          heroImgAlt="Redis and GCP Connection Online"
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
            <GetStartedWithConfiguratorButton templateName={templateName} />
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <RedisOnGCPSection>
        Running a production Redis cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to Redis Cloud.
        Thanks to GitOps, changing your cluster infrastructure or config is as
        simple as making a Pull Request.
      </RedisOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
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
