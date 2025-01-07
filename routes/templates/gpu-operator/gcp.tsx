import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import GPUOperatorWhatAndWhoForSection from "components/sections/gpu-operator/WhatAndWhoForSection.tsx";
import GPUOperatorOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
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

export default function TemplateGPUOperatorGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "gpu-operator";
  const title = "GPU Operator";
  const type = "Hardware Acceleration";

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
          heroImgAlt="GPU Operator and GCP Connection Online"
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
              utm_content="redis_gcp_get_started"
              utm_source={utm_source}
              utm_id={8068}
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
      <GPUOperatorOnGCPSection>
        The GPU Operator on GKE simplifies the management and deployment of GPU
        workloads by automating the installation and configuration of NVIDIA GPU
        drivers, Kubernetes device plugins, monitoring tools, and other required
        components. This Template also ensures that your cluster nodes will be
        deployed with the GPUs required to run accelerated workloads.
      </GPUOperatorOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
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
