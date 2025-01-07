import { PageProps } from "$fresh/server.ts";
import WordpressWhoAndWhatForSection from "components/sections/wordpress/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateWordpressPage(_props: PageProps) {
  const templateName = "wordpress";
  const title = "Wordpress";
  const type = "CMS";

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Wordpress Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>Deploy Wordpress with CNDI</Heading>
          <Subheading>
            Easily deploy Wordpress on any of our supported Template targets in
            minutes with CNDI. Get started by choosing your deployment target
            below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <WordpressWhoAndWhatForSection />
    </>
  );
}
