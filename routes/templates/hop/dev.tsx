import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Microk8sDistributionCard from "components/templates/distributions/dev/Microk8sDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HopWhatAndWhoForSection from "components/sections/hop/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import HopOnDevSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateHopDevPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "hop";
  const title = "Hop";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on Dev</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/dev/connected.png`}
          heroImgAlt="Hop and Laptop Connection Online"
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
              utm_content="hop_dev_get_started"
              utm_source={utm_source}
              utm_id={8030}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <HopOnDevSection>
        Running a development Hop cluster is made simple using CNDI. Begin
        experimenting with data integration in minutes right in your web the
        browser. Building data pipelines is a drag-and-drop style experience
        with support for nearly every source and target.
      </HopOnDevSection>
      <DistributionCardSection>
        <Microk8sDistributionCard>
          Deploying {title}{" "}
          on your local development environment is easy with CNDI's intuitive
          workflow. CNDI leverages Multipass to provide a seamless experience
          similar to deploying in the cloud, right on your Mac, Linux, or
          Windows machine.
        </Microk8sDistributionCard>
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Up and running in minutes",
          "Drag and drop editing experience",
          "Deep integration with nearly every source and target",
        ]}
      />
      <HopWhatAndWhoForSection />
    </>
  );
}
