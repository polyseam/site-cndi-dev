import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Microk8sDistributionCard from "components/templates/distributions/dev/Microk8sDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import Neo4jWhatAndWhoForSection from "components/sections/neo4j/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import Neo4jOnDevSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateNeo4jDevPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "neo4j";
  const title = "Neo4j";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on Dev</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/dev/connected.png`}
          heroImgAlt="Neo4j and Laptop Connection Online"
          templateName={templateName}
        >
          <Heading>
            Easily Run {title} in your dev environment with CNDI
          </Heading>
          <Subheading>Quickly deploy {title} on your local machine.</Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="neo4j_dev_get_started"
              utm_source={utm_source}
              utm_id={8023}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <Neo4jOnDevSection>
        Simplify Neo4j deployment on your local development environment with
        CNDI. Our efficient process and robust tools make setting up and
        managing Neo4j databases a breeze, allowing you to focus on your
        development tasks without the complexities. CNDI provides seamless
        support for Neo4j deployment, and its intuitive CLI and templates ensure
        a smooth experience. Experience the flexibility of running Neo4j locally
        and harness the power of graph databases in your development workflow
        with CNDI.
      </Neo4jOnDevSection>
      <DistributionCardSection>
        <Microk8sDistributionCard>
          Deploying {title}{" "}
          on your local development environment is easy with CNDI's intuitive
          workflow. CNDI leverages Multipass to provide a seamless experience
          similar to deploying in the cloud, right on your Mac, Linux, or
          Windows machine.
        </Microk8sDistributionCard>
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Experiment and evolve your graph model",
          "Prepare for production deployment",
          "Explore your data safely locally",
        ]}
      />
      <Neo4jWhatAndWhoForSection />
    </>
  );
}
