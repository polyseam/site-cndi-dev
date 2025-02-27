import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import HRule from "components/HRule.tsx";
import RedisWhatAndWhoForSection from "components/sections/redis/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import RedisOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateRedisAWSPage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "aws/eks";
  const templateName = "redis";
  const title = "Redis";
  const type = "Cache";

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="AWS"
      />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/aws/connected.png`}
          heroImgAlt="Redis and AWS Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on AWS
          </Heading>
          <Subheading>
            Easily Deploy {title} on Amazon Web
            <br />
            Services (AWS) using CNDI.
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
      <RedisOnAWSSection>
        Running a production Redis cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to Redis Cloud.
        Thanks to GitOps, changing your cluster infrastructure or config is as
        simple as making a Pull Request.
      </RedisOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
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
