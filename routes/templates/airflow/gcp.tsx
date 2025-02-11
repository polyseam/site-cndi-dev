import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import AirflowWhatAndWhoForSection from "components/sections/airflow/WhatAndWhoForSection.tsx";
import AirflowOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";

import OfficialDeploymentMethod from "components/OfficialDeploymentMethod.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateAirflowGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "airflow";
  const title = "Airflow";
  const type = "Orchestration";

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
          heroImgAlt="Airflow and GCP Connection Online"
          templateName={templateName}
          officialDeploymentMethod={
            <OfficialDeploymentMethod
              title={title}
              templateName={templateName}
              utm_id={8055}
              utm_source={utm_source}
              pathname="/ae"
              contentVersion={pageVersion}
            />
          }
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
      <AirflowOnGCPSection>
        Running a production Airflow cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to Cloud Composer
        and Astronomer. Running your own cluster is a breeze. Thanks to GitOps,
        changing your cluster infrastructure or config is as simple as making a
        Pull Request.
      </AirflowOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Automatically Synchronize your DAGs from Git",
          "Manage your Kubernetes cluster with GitOps",
          "Scale your workloads with the Kubernetes Executor",
        ]}
      />
      <AirflowWhatAndWhoForSection />
    </>
  );
}
