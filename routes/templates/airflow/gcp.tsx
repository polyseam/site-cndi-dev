import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
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

export default function TemplateAirflowGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "airflow";
  const title = "Airflow";
  const type = "Orchestration";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on GCP</title>
      </Head>
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
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="airflow_gcp_get_started"
              utm_source={utm_source}
              utm_id={8023}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <AirflowOnGCPSection>
        Running a production Airflow cluster doesn’t need to be expensive. CNDI
        provides the simplest and most affordable alternative to Cloud Composer
        and Astronomer. Running your own cluster is a breeze. CNDI Clusters are
        managed from Git, all you need to do is initialize a new cluster repo
        and push it up to trigger your automation!
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
