import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import MySQLWhatAndWhoForSection from "components/sections/mysql/WhatAndWhoForSection.tsx";
import MySQLOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
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
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateMySQLGCPPage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "mysql";
  const title = "MySQL";
  const type = "Database";

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="GCP"
      />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/gcp/connected.png`}
          heroImgAlt="MySQL and GCP Connection Online"
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
            <GetStartedWithConfiguratorButton templateName={templateName} />
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MySQLOnGCPSection>
        Deploying MySQL on GCP with CNDI offers a seamless and efficient
        solution for managing your MySQL database in the cloud. Tune your MySQL
        cluster for your performance and reliability requirements. With
        infrastructure and configuration as code, CNDI brings a free alternative
        to GCP’s CloudSQL for MySQL. Thanks to GitOps, changing your cluster
        infrastructure or config is as simple as making a Pull Request.
      </MySQLOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Cost effective",
          "Performant and Easily Scaled",
          "Infrastructure and Config as Code",
        ]}
      />
      <MySQLWhatAndWhoForSection />
    </>
  );
}
