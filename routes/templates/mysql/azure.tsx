import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import MysqlWhatAndWhoForSection from "components/sections/mysql/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import MysqlOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateMysqlAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mysql";
  const title = "Mysql";
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
          heroImgAlt="Mysql and Azure Connection Online"
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
              utm_content="mysql_azure_get_started"
              utm_source={utm_source}
              utm_id={8041}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MysqlOnAzureSection>
        Deploying MySQL on Azure with CNDI offers a seamless and efficient
        solution for managing your MySQL database in the cloud. Tune your MySQL
        cluster for your performance and reliability requirements. With
        infrastructure and configuration as code, CNDI brings a free alternative
        to Azure Database for MySQL. Changing your cluster infrastructure or
        config is as simple as making a Pull Request.
      </MysqlOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
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
