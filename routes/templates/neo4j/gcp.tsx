import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import Neo4jWhatAndWhoForSection from "components/sections/neo4j/WhatAndWhoForSection.tsx";
import Neo4jOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
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

export default function TemplateNeo4jGCPPage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "neo4j";
  const title = "Neo4j";
  const type = "Database";

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
          heroImgAlt="Neo4j and GCP Connection Online"
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
      <Neo4jOnGCPSection>
        Deploying Neo4j on GCP with CNDI provides a powerful and efficient
        solution for managing your Neo4j graph database in your AWS cloud.
        Scaling and maintaining your own graph database has never been easier.
        CNDI is the best alternative to Neo4j Aura and there's no license fees.
        Thanks to GitOps, changing your cluster infrastructure or config is as
        simple as making a Pull Request.
      </Neo4jOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Intuitive schema and queries",
          "Performant graph traversals and analysis",
          "Secured admin panel secure in browser",
        ]}
      />
      <Neo4jWhatAndWhoForSection />
    </>
  );
}
