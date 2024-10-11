import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import MSSQLServerWhatAndWhoForSection from "components/sections/mssqlserver/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import MSSQLServerOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateMSSQLServerAWSPage(props: PageProps) {
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
        provider="AWS"
      />
      <HeroSection>
        <HRule topText={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/aws/connected.png`}
          heroImgAlt={`${title} and AWS Connection Online`}
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
              utm_content="mssqlserver_aws_get_started"
              utm_source={utm_source}
              utm_id={8051}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MSSQLServerOnAWSSection>
        Deploying MS SQL Server on AWS with CNDI gives you a cloud hosted
        database that is just as dependable and performant as SQL Server on RDS,
        but portable, and without license fees. Thanks to GitOps, changing your
        cluster infrastructure or config is as simple as making a Pull Request.
      </MSSQLServerOnAWSSection>
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
      <MSSQLServerWhatAndWhoForSection />
    </>
  );
}
