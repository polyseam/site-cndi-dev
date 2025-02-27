import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import HRule from "components/HRule.tsx";
import AirflowWhatAndWhoForSection from "components/sections/airflow/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import AirflowOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import OfficialDeploymentMethod from "components/OfficialDeploymentMethod.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";
import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateAirflowAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "azure/aks";
  const templateName = "airflow";
  const title = "Airflow";
  const type = "Orchestration";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="Azure"
      />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/azure/connected.png`}
          heroImgAlt="Airflow and Azure Connection Online"
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
            on Azure
          </Heading>
          <Subheading>
            Easily Deploy {title} on Microsoft Azure using CNDI.
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
      <AirflowOnAzureSection>
        Running a production Airflow cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to Azure Data
        Factory Managed Airflow and Astronomer. Running your own cluster is a
        breeze. Thanks to GitOps, changing your cluster infrastructure or config
        is as simple as making a Pull Request.
      </AirflowOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
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
