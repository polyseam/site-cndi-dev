import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Neo4jWhoAndWhatForSection from "components/sections/neo4j/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";

export default function TemplateNeo4jPage(_props: PageProps) {
  const templateName = "neo4j";
  const title = "Neo4j";
  const type = "Database";

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Neo4j Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>
            Deploy Neo4j
            <br />
            with CNDI
          </Heading>
          <Subheading>
            Easily deploy Neo4j on any of our supported template targets in
            minutes with CNDI. Get started by choosing your deployment target
            below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <Neo4jWhoAndWhatForSection />
    </>
  );
}
