import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import HRule from "components/HRule.tsx";
import GPUOperatorWhatAndWhoForSection from "components/sections/gpu-operator/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import GPUOperatorOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateGPUOperatorAWSPage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "aws/eks";
  const templateName = "gpu-operator";
  const title = "GPU Operator";
  const type = "Hardware Acceleration";

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="AWS"
      />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/aws/connected.png`}
          heroImgAlt="GPU Operator and AWS Connection Online"
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
            <GetStartedWithConfiguratorButton templateName={templateName} />
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <GPUOperatorOnAWSSection>
        The GPU Operator on Amazon EKS simplifies the management and deployment
        of GPU workloads by automating the installation and configuration of
        NVIDIA GPU drivers, Kubernetes device plugins, monitoring tools, and
        other required components. This Template also ensures that your cluster
        nodes will be deployed with the GPUs required to run accelerated
        workloads.
      </GPUOperatorOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
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
