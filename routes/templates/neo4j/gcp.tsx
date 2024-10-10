import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
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

export default function TemplateNeo4jGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "neo4j";
  const title = "Neo4j";
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
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="neo4j_gcp_get_started"
              utm_source={utm_source}
              utm_id={8023}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <Neo4jOnGCPSection>
        CNDI provides the simplest and most affordable alternative to Neo4jQL on
        CloudSQL. Running your own database cluster couldn’t be easier thanks to
        the CloudNativePG project. CNDI Clusters are managed from Git, all you
        need to do is initialize a new cluster repo and push it up to trigger
        your automation!
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
