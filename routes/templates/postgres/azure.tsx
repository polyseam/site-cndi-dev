import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import PostgresWhatAndWhoForSection from "components/sections/postgres/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import PostgresOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";
import { Button } from "components/Button.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplatePostgresAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "azure/aks";
  const templateName = "postgres";
  const title = "Postgres";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <TemplateHead
        templateTitle={title}
        templateName={templateName}
        provider="Azure"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/azure/connected.png`}
          heroImgAlt="Postgres and Azure Connection Online"
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
              className="no-underline"
              pathname="/gh"
              utm_content="postgres_azure_get_started"
              utm_source={utm_source}
              utm_id={8029}
              contentVersion={pageVersion}
            >
              <Button>Get Started with</Button>
            </LinkOut>
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName="cnpg"
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <PostgresOnAzureSection>
        CNDI provides the simplest and most affordable alternative to Azure
        Database for PostgreSQL. Built with the CloudNativePG project, CNDI
        enables you to run your PostgreSQL cluster more easily than ever before.
        Thanks to GitOps, changing your cluster infrastructure or config is as
        simple as making a Pull Request.
      </PostgresOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Reliable and fault tolerant",
          "Easily maintained with GitOps",
          "Flexible to your needs",
        ]}
      />
      <PostgresWhatAndWhoForSection />
    </>
  );
}
