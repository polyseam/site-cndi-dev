import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import AKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
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

export default function TemplatePostgresAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "postgres";
  const title = "Postgres";
  const type = "Database";

  const utm_source = props.url.toString();

  return (
    <>
      <Head>
        <title>Templates | {title} on AWS</title>
      </Head>
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
          <Subheading>Easily Deploy {title} on using CNDI.</Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="postgres_aws_get_started"
              utm_source={utm_source}
              utm_id={8025}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <PostgresOnAWSSection>
        CNDI provides the simplest and most affordable alternative to PostgreSQL
        on RDS. Running your own PostgresQL cluster couldn’t be easier thanks to
        the CloudNativePG project. CNDI Clusters are managed from Git, all you
        need to do is initialize a new cluster repo and push it up to trigger
        your automation!
      </PostgresOnAWSSection>
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
