import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
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

export default function TemplateNeo4jAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "neo4j";
  const title = "Neo4j";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on Azure</title>
      </Head>
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
              utm_id={8025}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <Neo4jOnAzureSection>
        CNDI provides the simplest and most affordable alternative to Azure
        Database for Neo4jQL. Running your own database cluster couldn’t be
        easier thanks to the CloudNativePG project. CNDI Clusters are managed
        from Git, all you need to do is initialize a new cluster repo and push
        it up to trigger your automation!
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
