import { PageProps } from "$fresh/server.ts";
import ChooseYourDeploymentTargetSection from "components/sections/ChooseYourDeploymentTargetSection.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import HRule from "components/HRule.tsx";
import OfficialDeploymentMethod from "components/OfficialDeploymentMethod.tsx";
import TemplateHero, { Heading, Subheading } from "components/TemplateHero.tsx";
import TemplateHead from "components/TemplateHead.tsx";
import AirflowWhatAndWhoForSection from "components/sections/airflow/WhatAndWhoForSection.tsx";

export default function TemplateAirflowPage(props: PageProps) {
  const templateName = "airflow";
  const title = "Airflow";
  const type = "Orchestration";
  const pageVersion = "v1.0.0";
  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead templateTitle={title} templateName={templateName} />
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/constellation.png`}
          heroImgAlt="Airflow Logo alongside Azure, GCP, and AWS Logos"
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
          <Heading>Deploy Apache Airflow with CNDI</Heading>
          <Subheading>
            Easily deploy Apache Airflow on any of our supported Template
            targets in minutes with CNDI. Get started by choosing your
            deployment target below.
          </Subheading>
        </TemplateHero>
      </HeroSection>
      <ChooseYourDeploymentTargetSection templateName={templateName} />
      <AirflowWhatAndWhoForSection />
    </>
  );
}
