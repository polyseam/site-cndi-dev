import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import PostgresWhatAndWhoForSection from "components/sections/postgres/WhatAndWhoForSection.tsx";
import PostgresOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";
import { Button } from "components/Button.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplatePostgresGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "gcp/gke";
  const templateName = "postgres";
  const title = "Postgres";
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
          heroImgAlt="Postgres and GCP Connection Online"
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
              utm_content="postgres_gcp_get_started"
              utm_source={utm_source}
              utm_id={8028}
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
      <PostgresOnGCPSection>
        CNDI provides the simplest and most affordable alternative to PostgreSQL
        on CloudSQL. Built with the CloudNativePG project, CNDI enables you to
        run your PostgreSQL cluster more easily than ever before. Thanks to
        GitOps, changing your cluster infrastructure or config is as simple as
        making a Pull Request.
      </PostgresOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
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
