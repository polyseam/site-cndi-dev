import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import MssqlserverWhatAndWhoForSection from "components/sections/mssqlserver/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import MssqlserverOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateMSSQLServerAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mssqlserver";
  const title = "MS SQL Server";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on Azure</title>
      </Head>
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/azure/connected.png`}
          heroImgAlt="Mssqlserver and Azure Connection Online"
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
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="mssqlserver_azure_get_started"
              utm_source={utm_source}
              utm_id={8053}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MssqlserverOnAzureSection>
        Deploying MS SQL Server on GCP with CNDI gives you a cloud hosted
        database that is just as dependable and performant as Azure SQL Managed
        Instances, but portable, and without license fees. Thanks to GitOps,
        changing your cluster infrastructure or config is as simple as making a
        Pull Request.
      </MssqlserverOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Performant and Reliable",
          "Easily maintained with GitOps",
          "Flexible to your needs",
        ]}
      />
      <MssqlserverWhatAndWhoForSection />
    </>
  );
}
