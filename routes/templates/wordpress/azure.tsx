import { PageProps } from "$fresh/server.ts";
import AKSDistributionCard from "components/templates/distributions/azure/AKSDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import LinkOut from "islands/LinkOut.tsx";
import HRule from "components/HRule.tsx";
import WordpressWhatAndWhoForSection from "components/sections/wordpress/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import WordpressOnAzureSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HeroSection from "components/sections/HeroSection.tsx";
import TemplateHead from "components/TemplateHead.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";

export default function TemplateWordpressAzurePage(props: PageProps) {
  const pageVersion = "v1.0.0";
  const deploymentTargetLabel = "azure/aks";
  const templateName = "wordpress";
  const title = "Wordpress";
  const type = "CMS";

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
          heroImgAlt="Wordpress and Azure Connection Online"
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
              utm_content="wordpress_azure_get_started"
              utm_source={utm_source}
              utm_id={8065}
              contentVersion={pageVersion}
            >
              Get Started with
            </LinkOut>
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <WordpressOnAzureSection>
        Running a production Wordpress cluster doesn’t need to be expensive.
        CNDI provides the simplest and most affordable alternative to
        Wordpress.com and WP Engine. Thanks to GitOps, changing your cluster
        infrastructure or config is as simple as making a Pull Request.
      </WordpressOnAzureSection>
      <DistributionCardSection>
        <AKSDistributionCard title={title} />
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Modify your content with the Wordpress Admin Panel",
          "Leverage the plugin ecosystem to extend your site",
          "Manage confiuration and infrastructure with GitOps",
        ]}
      />
      <WordpressWhatAndWhoForSection />
    </>
  );
}
