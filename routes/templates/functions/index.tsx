import { PageProps } from "$fresh/server.ts";
import FunctionsWhoAndWhatForSection from "components/sections/functions/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateFunctionsPage(_props: PageProps) {
  const templateName = "functions";
  const title = "Functions";
  const type = "Serverless";

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Functions Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>Deploy Functions with CNDI</Heading>
          <Subheading>
            Easily deploy Functions on any of our supported Template targets in
            minutes with CNDI. Get started by choosing your deployment target
            below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <FunctionsWhoAndWhatForSection />
    </>
  );
}
