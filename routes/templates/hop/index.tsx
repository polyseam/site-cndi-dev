import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import HopWhoAndWhatForSection from "components/sections/hop/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";

export default function TemplateHopPage(_props: PageProps) {
  const templateName = "hop";
  const title = "Hop";
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
          heroImgAlt="Hop Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>
            Deploy Hop
            <br />
            with CNDI
          </Heading>
          <Subheading>
            Easily deploy Cloud-Native Hop on any of our supported template
            targets in minutes with CNDI. Get started by choosing your
            deployment target below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <HopWhoAndWhatForSection />
    </>
  );
}
