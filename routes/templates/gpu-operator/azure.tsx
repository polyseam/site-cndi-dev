import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import HRule from "components/HRule.tsx";
import GPUOperatorWhatAndWhoForSection from "components/sections/gpu-operator/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import GPUOperatorOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateGPUOperatorAzurePage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "azure/aks";
  const templateName = "gpu-operator";
  const title = "GPU Operator";
  const type = "Hardware Acceleration";

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
          heroImgAlt="GPU Operator and Azure Connection Online"
          templateName={templateName}
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
      <GPUOperatorOnAzureSection>
        The GPU Operator on Azure AKS simplifies the management and deployment
        of GPU workloads by automating the installation and configuration of
        NVIDIA GPU drivers, Kubernetes device plugins, monitoring tools, and
        other required components. This Template also ensures that your cluster
        nodes will be deployed with the GPUs required to run accelerated
        workloads.
      </GPUOperatorOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "The simplest way to deploy GPU workloads on AWS",
          "Infrastructure as Code and GitOps including GPU hardware",
          "Built-in monitoring and logging",
        ]}
      />
      <GPUOperatorWhatAndWhoForSection />
    </>
  );
}
