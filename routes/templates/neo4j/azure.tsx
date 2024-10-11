import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import Neo4jWhatAndWhoForSection from "components/sections/neo4j/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import Neo4jOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateNeo4jAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "neo4j";
  const title = "Neo4j";
  const type = "Database";

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
          heroImgAlt="Neo4j and Azure Connection Online"
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
              utm_content="neo4j_azure_get_started"
              utm_source={utm_source}
              utm_id={8037}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <Neo4jOnAzureSection>
        Deploying Neo4j on Azure with CNDI provides a powerful and efficient
        solution for managing your Neo4j graph database in your AWS cloud.
        Scaling and maintaining your own graph database has never been easier.
        CNDI is the best alternative to Neo4j Aura and there's no license fees.
        Thanks to GitOps, changing your cluster infrastructure or config is as
        simple as making a Pull Request.
      </Neo4jOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
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
