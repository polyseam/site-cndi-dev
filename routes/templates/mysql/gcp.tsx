import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import MysqlWhatAndWhoForSection from "components/sections/mysql/WhatAndWhoForSection.tsx";
import MysqlOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateMysqlGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mysql";
  const title = "Mysql";
  const type = "Database";

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
          heroImgAlt="Mysql and GCP Connection Online"
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
              utm_content="mysql_gcp_get_started"
              utm_source={utm_source}
              utm_id={8040}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MysqlOnGCPSection>
        CNDI provides the simplest and most affordable alternative to MysqlQL on
        CloudSQL. Running your own database cluster couldn’t be easier thanks to
        the CloudNativePG project. CNDI Clusters are managed from Git, all you
        need to do is initialize a new cluster repo and push it up to trigger
        your automation!
      </MysqlOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Cost effective",
          "Performant and Easily Scaled",
          "Infrastructure and Config as Code",
        ]}
      />
      <MysqlWhatAndWhoForSection />
    </>
  );
}
