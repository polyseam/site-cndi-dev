import { PageProps } from "$fresh/server.ts";
import KafkaWhatAndWhoForSection from "components/sections/kafka/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateKafkaPage(_props: PageProps) {
  const templateName = "kafka";
  const title = "Kafka";
  const type = "Messaging";

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Kafka Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>
            Deploy Kafka
            <br />
            with CNDI
          </Heading>
          <Subheading>
            Easily deploy Cloud-Native Kafka with Strimzi on any of our
            supported template targets in minutes with CNDI. Get started by
            choosing your deployment target below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <KafkaWhatAndWhoForSection />
    </>
  );
}
