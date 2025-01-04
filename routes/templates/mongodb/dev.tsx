import { PageProps } from "$fresh/server.ts";
import Microk8sDistributionCard from "components/templates/distributions/dev/Microk8sDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import MongoDBWhatAndWhoForSection from "components/sections/mongodb/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import MongoDBOnDevSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "../../../islands/CLISnippet.tsx";

export default function TemplateMongoDBDevPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "dev/microk8s";
  const templateName = "mongodb";
  const title = "MongoDB";
  const type = "Database";

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
          heroImgAlt="MongoDB and Laptop Connection Online"
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
              utm_content="mongodb_dev_get_started"
              utm_source={utm_source}
              utm_id={8046}
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
      <MongoDBOnDevSection>
        Experience seamless MongoDB deployment on your local development
        environment with CNDI. Our user-friendly process and powerful tools
        simplify setting up and managing MongoDB databases, allowing you to
        focus on development tasks without the hassle of complex configurations.
        CNDI provides effortless MongoDB support, and its intuitive CLI and
        Templates make deploying MongoDB a breeze. Enjoy the flexibility of
        running MongoDB locally and optimize your development workflow with
        CNDI.
      </MongoDBOnDevSection>
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
          "Experiment with local development",
          "Prepare for production deployment",
          "Determine optimal configurations",
        ]}
      />
      <MongoDBWhatAndWhoForSection />
    </>
  );
}
