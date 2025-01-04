import { PageProps } from "$fresh/server.ts";
import Microk8sDistributionCard from "components/templates/distributions/dev/Microk8sDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import KafkaWhatAndWhoForSection from "components/sections/kafka/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import KafkaOnDevSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "../../../islands/CLISnippet.tsx";

export default function TemplateKafkaDevPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "dev/microk8s";
  const templateName = "kafka";
  const title = "Kafka";
  const type = "Messaging";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="Dev"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/dev/connected.png`}
          heroImgAlt="Kafka and Laptop Connection Online"
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
              utm_content="kafka_dev_get_started"
              utm_source={utm_source}
              utm_id={8050}
              contentVersion={pageVersion}
            >
              Get Started with
            </LinkOut>
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <KafkaOnDevSection>
        Running Kafka on your local development environment offers a convenient
        and efficient way to experiment with your data and dial in your
        requirements. Run your Kafka cluster with CNDI and Strimzi locally and
        prove it’s ready to go live.
      </KafkaOnDevSection>
      <DistributionCardSection>
        <Microk8sDistributionCard>
          Deploying {title}
          on your local development environment is easy with CNDI's intuitive
          workflow. CNDI leverages Multipass to provide a seamless experience
          similar to deploying in the cloud, right on your Mac, Linux, or
          Windows machine.
        </Microk8sDistributionCard>
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Up and running in minutes",
          "Just like production",
          "Develop and debug with ease",
        ]}
      />
      <KafkaWhatAndWhoForSection />
    </>
  );
}
