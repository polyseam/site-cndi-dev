import { PageProps } from "$fresh/server.ts";
import EKSDistributionCard from "components/templates/distributions/aws/EKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import MongoDBWhatAndWhoForSection from "components/sections/mongodb/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import MongoDBOnAWSSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateMongoDBAWSPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mongodb";
  const title = "MongoDB";
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
          heroImgAlt="MongoDB and AWS Connection Online"
          templateName={templateName}
        >
          <Heading>
            Deploy {title}
            <br />
            on AWS
          </Heading>
          <Subheading>
            Easily Deploy {title} on Amazon Web<br />
            Services (AWS) using CNDI.
          </Subheading>
          <CallToAction>
            <LinkOut
              className="button w-button"
              pathname="/gh"
              utm_content="mongodb_aws_get_started"
              utm_source={utm_source}
              utm_id={8043}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MongoDBOnAWSSection>
        Deploying MongoDB on AWS with CNDI offers a streamlined and efficient
        process to set up and manage your MongoDB database. With CNDI's
        automated infrastructure provisioning, you can quickly deploy scalable
        MongoDB clusters that cater to your data storage needs. Running MongoDB
        clusters with CNDI on EKS is more cost-effective than AWS DocumentDB and
        MongoDB Atlas while also being more flexible. Thanks to GitOps, changing
        your cluster infrastructure or config is as simple as making a Pull
        Request.
      </MongoDBOnAWSSection>
      <DistributionCardSection>
        <EKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Scalable database cluster",
          "Manage infrastructure and configuration from git",
          "No license fee",
        ]}
      />
      <MongoDBWhatAndWhoForSection />
    </>
  );
}
