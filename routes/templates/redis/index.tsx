import { PageProps } from "$fresh/server.ts";
import RedisWhoAndWhatForSection from "components/sections/redis/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateRedisPage(_props: PageProps) {
  const templateName = "redis";
  const title = "Redis";
  const type = "Cache";

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Redis Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>Deploy Redis with CNDI</Heading>
          <Subheading>
            Easily deploy Redis on any of our supported Template targets in
            minutes with CNDI. Get started by choosing your deployment target
            below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <RedisWhoAndWhatForSection />
    </>
  );
}
