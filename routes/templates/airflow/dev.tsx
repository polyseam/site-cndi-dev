import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Microk8sDistributionCard from "components/templates/distributions/dev/Microk8sDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import AirflowWhatAndWhoForSection from "components/sections/airflow/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import AirflowOnDevSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import OfficialDeploymentMethod from "components/OfficialDeploymentMethod.tsx";
import HRule from "components/HRule.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateAirflowDevPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "airflow";
  const title = "Airflow";
  const type = "Orchestration";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on Dev</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/dev/connected.png`}
          heroImgAlt="Airflow and Laptop Connection Online"
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
            Easily Run {title} in your dev environment with CNDI
          </Heading>
          <Subheading>Quickly deploy {title} on your local machine.</Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="airflow_dev_get_started"
              utm_source={utm_source}
              utm_id={8023}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <AirflowOnDevSection>
        Deploying Airflow on your local development environment offers a
        convenient and efficient way to experiment with this powerful workflow
        automation platform. Whether you&#x27;re a data engineer, data
        scientist, or developer, running Airflow locally allows you to test and
        iterate on DAGs (Directed Acyclic Graphs) before deploying them to
        production. It also helps you develop and debug workflows with ease,
        ensuring everything works flawlessly. Gain a deeper understanding of
        Airflow&#x27;s functionalities in a controlled environment, while
        minimizing risks associated with deploying untested workflows to
        production.
      </AirflowOnDevSection>
      <DistributionCardSection>
        <Microk8sDistributionCard>
          Deploying {title}{" "}
          on your local development environment is easy with CNDI's intuitive
          workflow. CNDI leverages Multipass to provide a seamless experience
          similar to deploying in the cloud, right on your Mac, Linux, or
          Windows machine.
        </Microk8sDistributionCard>
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Automatically Synchronize your DAGs from Git",
          "Experiment with your Kubernetes cluster using GitOps",
          "Test your workloads with the Kubernetes Executor",
        ]}
      />
      <AirflowWhatAndWhoForSection />
    </>
  );
}
