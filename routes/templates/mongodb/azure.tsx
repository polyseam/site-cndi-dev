import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "components/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import MongoDBWhatAndWhoForSection from "components/sections/mongodb/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import MongoDBOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

export default function TemplateMongodbAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const templateName = "mongodb";
  const title = "Mongodb";
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
          heroImgAlt="Mongodb and Azure Connection Online"
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
              utm_content="mongodb_azure_get_started"
              utm_source={utm_source}
              utm_id={8045}
              contentVersion={pageVersion}
            >
              Get Started
            </LinkOut>
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <MongoDBOnAzureSection>
        Deploying MongoDB on Azure with CNDI offers a streamlined and efficient
        process to set up and manage your MongoDB database. With CNDI's
        automated infrastructure provisioning, you can quickly deploy scalable
        MongoDB clusters that cater to your data storage needs. Running MongoDB
        clusters with CNDI on AKS is more cost-effective than Azure Cosmos and
        MongoDB Atlas while also being more flexible. Thanks to GitOps, changing
        your cluster infrastructure or config is as simple as making a Pull
        Request.
      </MongoDBOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
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
