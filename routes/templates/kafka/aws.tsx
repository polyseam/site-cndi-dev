import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import KafkaWhatAndWhoForSection from "components/sections/kafka/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import KafkaOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplateKafkaAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "aws/eks";
  const templateName = "kafka";
  const title = "Kafka";
  const type = "Messaging";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="AWS"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/aws/connected.png`}
          heroImgAlt="Kafka and AWS Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on AWS
          </Heading>
          <Subheading>
            Easily Deploy {title} on Amazon Web
            <br />
            Services (AWS) using CNDI.
          </Subheading>
          <CallToAction>
            <LinkOut
              className="no-underline"
              pathname="/gh"
              utm_content="kafka_aws_get_started"
              utm_source={utm_source}
              utm_id={8047}
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
      <KafkaOnAWSSection>
        Deploying Kafka with CNDI on AWS is the most flexible way to run your
        cluster. Managing your Kafka cluster through CNDI gives you more control
        over your system. With CNDI and Strimzi you won't be locked out of
        features of performance, unlike Confluent Cloud or Amazon Managed
        Streaming for Apache Kafka. Thanks to GitOps, changing your cluster
        infrastructure or config is as simple as making a Pull Request.
      </KafkaOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
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
