import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import PostgresWhatAndWhoForSection from "components/sections/postgres/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import PostgresOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "../../../islands/CLISnippet.tsx";

export default function TemplatePostgresAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "aws/eks";
  const templateName = "postgres";
  const title = "Postgres";
  const type = "Database";

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
          heroImgAlt="Postgres and AWS Connection Online"
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
              className="button w-button"
              pathname="/gh"
              utm_content="postgres_aws_get_started"
              utm_source={utm_source}
              utm_id={8027}
              contentVersion={pageVersion}
            >
              Get Started with
            </LinkOut>
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName="cnpg"
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <PostgresOnAWSSection>
        CNDI provides the simplest and most affordable alternative to PostgreSQL
        on RDS. Built with the CloudNativePG project, CNDI enables you to run
        your PostgreSQL cluster more easily than ever before. Thanks to GitOps,
        changing your cluster infrastructure or config is as simple as making a
        Pull Request.
      </PostgresOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
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
