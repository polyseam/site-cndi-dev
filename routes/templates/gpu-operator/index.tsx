import { PageProps } from "$fresh/server.ts";
import GPUOperatorWhoAndWhatForSection from "components/sections/gpu-operator/WhatAndWhoForSection.tsx";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "../../../islands/CLISnippet.tsx";

export default function TemplateGPUOperatorPage(_props: PageProps) {
  const templateName = "gpu-operator";
  const title = "GPU Operator";
  const type = "Hardware Acceleration";

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="GPU Operator Logo alongside Azure, GCP, and AWS Logos"
          templateName={templateName}
        >
          <Heading>Deploy GPU Operator with CNDI</Heading>
          <Subheading>
            Easily deploy GPU Operator on any of our supported Template targets
            in minutes with CNDI. Get started by choosing your deployment target
            below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <GPUOperatorWhoAndWhatForSection />
    </>
  );
}
