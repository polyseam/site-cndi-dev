import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import MSSQLServerWhatAndWhoForSection from "components/sections/mssqlserver/WhatAndWhoForSection.tsx";
import MSSQLServerOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateMSSQLServerGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mssqlserver";
  const title = "MS SQL Server";
  const type = "Database";

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
          heroImgAlt="Mssqlserver and GCP Connection Online"
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
              className="button w-button"
              pathname="/gh"
              utm_content="mssqlserver_gcp_get_started"
              utm_source={utm_source}
              utm_id={8052}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MSSQLServerOnGCPSection>
        Deploying MS SQL Server on GCP with CNDI gives you a cloud hosted
        database that is just as dependable and performantas as SQL Server on
        GCP Cloud SQL, but portable, and without license fees. Thanks to GitOps,
        changing your cluster infrastructure or config is as simple as making a
        Pull Request.
      </MSSQLServerOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Performant and Reliable",
          "Easily maintained with GitOps",
          "Flexible to your needs",
        ]}
      />
      <MSSQLServerWhatAndWhoForSection />
    </>
  );
}
