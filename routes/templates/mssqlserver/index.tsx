import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import MSSQLServerWhoAndWhatForSection from "components/sections/mssqlserver/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";

export default function TemplateMSSQLServerPage(_props: PageProps) {
  const templateName = "mssqlserver";
  const title = "MS SQL Server";
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
