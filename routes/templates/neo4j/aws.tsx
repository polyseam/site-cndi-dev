import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import AKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import Neo4jWhatAndWhoForSection from "components/sections/neo4j/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import Neo4jOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateNeo4jAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "neo4j";
  const title = "Neo4j";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on AWS</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/aws/connected.png`}
          heroImgAlt="Neo4j and AWS Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on AWS
          </Heading>
          <Subheading>Easily Deploy {title} on using CNDI.</Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="neo4j_aws_get_started"
              utm_source={utm_source}
              utm_id={8025}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <Neo4jOnAWSSection>
        Deploying Neo4j on AWS with CNDI provides a powerful and efficient
        solution for managing your Neo4j graph database in your AWS cloud. With
        CNDI the infrastructure running your cluster and the configuration of
        Neo4j is all managed through GitOps. Scaling and maintaining your own
        graph database has never been easier. CNDI is the best free alternative
        to Neo4j Aura, managed directly from Git.
      </Neo4jOnAWSSection>
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
