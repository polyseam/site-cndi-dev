import { PageProps } from "$fresh/server.ts";
import GKEDistributionCard from "components/templates/distributions/gcp/GKEDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import MongodbWhatAndWhoForSection from "components/sections/mongodb/WhatAndWhoForSection.tsx";
import MongodbOnGCPSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";

import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

export default function TemplateMongodbGCPPage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mongodb";
  const title = "Mongodb";
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
          heroImgAlt="Mongodb and GCP Connection Online"
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
              utm_content="mongodb_gcp_get_started"
              utm_source={utm_source}
              utm_id={8044}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MongodbOnGCPSection>
        Deploying MongoDB on GCP with CNDI offers a streamlined and efficient
        process to set up and manage your MongoDB database. With CNDI's
        automated infrastructure provisioning, you can quickly deploy scalable
        MongoDB clusters that cater to your data storage needs. Running MongoDB
        clusters with CNDI on GCP is more cost-effective than MongoDB Atlas
        while also being more flexible. Thanks to GitOps, changing your cluster
        infrastructure or config is as simple as making a Pull Request.
      </MongodbOnGCPSection>
      <DistributionCardSection>
        <GKEDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Scalable database cluster",
          "Manage infrastructure and configuration from git",
          "No license fee",
        ]}
      />
      <MongodbWhatAndWhoForSection />
    </>
  );
}
