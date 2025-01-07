import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import AirflowWhatAndWhoForSection from "components/sections/airflow/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import AirflowOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import OfficialDeploymentMethod from "components/OfficialDeploymentMethod.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

import TemplateHead from "../../../components/TemplateHead.tsx";
import YoutubeVideoDemoEmbedSection from "components/sections/YoutubeVideoDemoEmbedSection.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplateAirflowAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "aws/eks";
  const templateName = "airflow";
  const title = "Airflow";
  const type = "Orchestration";

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
          heroImgAlt="Airflow and AWS Connection Online"
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
              utm_content="airflow_aws_get_started"
              utm_source={utm_source}
              utm_id={8023}
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
      <YoutubeVideoDemoEmbedSection
        videoId="a8kk4gTJrPU"
        title="How to Deploy Apache Airflow on AWS with CNDI"
      />
      <AirflowOnAWSSection>
        Running a production Airflow cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to MWAA and
        Astronomer. Running your own cluster is a breeze. Thanks to GitOps,
        changing your cluster infrastructure or config is as simple as making a
        Pull Request.
      </AirflowOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
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
