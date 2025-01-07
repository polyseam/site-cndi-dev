import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import FnsWhatAndWhoForSection from "components/sections/fns/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import FnsOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplateFnsAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "aws/eks";
  const templateName = "fns";
  const title = "Functions";
  const type = "Serverless";

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
          heroImgAlt="Fns and AWS Connection Online"
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
              utm_content="fns_aws_get_started"
              utm_source={utm_source}
              utm_id={8075}
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
      <FnsOnAWSSection>
        Writing functions that respond to web requests should be accessible to
        everyone. You don't need to be locked into a per-request pricing model
        or API with AWS Lambda. CNDI Functions are built on web standards and
        Deno - all you need to do is push your code to git and they'll scale,
        forever!
      </FnsOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Write your Typescript functions using web standards",
          "Just push your code - we do the rest",
          "Infinite scale, simple cluster pricing, and no cold starts",
        ]}
      />
      <FnsWhatAndWhoForSection />
    </>
  );
}
