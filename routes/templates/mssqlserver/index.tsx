import { PageProps } from "$fresh/server.ts";
import MSSQLServerWhoAndWhatForSection from "components/sections/mssqlserver/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "../../../islands/CLISnippet.tsx";

export default function TemplateMSSQLServerPage(_props: PageProps) {
  const templateName = "mssqlserver";
  const title = "MS SQL Server";
  const type = "Database";

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Mssqlserver Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>
            Deploy Microsoft<br />SQL Server<br /> with CNDI
          </Heading>
          <Subheading>
            Easily deploy Cloud-Native Mssqlserver on any of our supported
            template targets in minutes with CNDI. Get started by choosing your
            deployment target below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <MSSQLServerWhoAndWhatForSection />
    </>
  );
}
