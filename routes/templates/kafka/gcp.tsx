import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import KafkaWhatAndWhoForSection from "components/sections/kafka/WhatAndWhoForSection.tsx";
import KafkaOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplateKafkaGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "kafka";
  const title = "Kafka";
  const type = "Messaging";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="GCP"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/gcp/connected.png`}
          heroImgAlt="Kafka and GCP Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on GCP
          </Heading>
          <Subheading>
            Easily Deploy {title} on Google Cloud Platform (GCP) using CNDI.
          </Subheading>
          <CallToAction>
            <LinkOut
              className="no-underline"
              pathname="/gh"
              utm_content="kafka_gcp_get_started"
              utm_source={utm_source}
              utm_id={8048}
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
      <KafkaOnGCPSection>
        Deploying Kafka with CNDI on GCP is the most flexible way to run your
        cluster. Managing your Kafka cluster through CNDI gives you more control
        over your system. With CNDI and Strimzi you won't be locked out of
        features of performance, unlike Confluent Cloud or Google Cloud Managed
        Service for Apache Kafka. Thanks to GitOps, changing your cluster
        infrastructure or config is as simple as making a Pull Request.
      </KafkaOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Radically simple to deploy",
          "Easily maintained with GitOps",
          "Flexible to your needs",
        ]}
      />
      <KafkaWhatAndWhoForSection />
    </>
  );
}
