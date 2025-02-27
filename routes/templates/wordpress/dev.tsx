import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import Microk8sDistributionCard from "components/templates/distributions/dev/Microk8sDistributionCard.tsx";
import ThreePoints from "components/templates/ThreePoints.tsx";
import WordpressWhatAndWhoForSection from "components/sections/wordpress/WhatAndWhoForSection.tsx";
import DistributionCardSection from "components/sections/DistributionCardSection.tsx";
import WordpressOnDevSection from "components/sections/TemplateOnTargetParagraphSection.tsx";
import TemplateHero, {
  CallToAction,
  Heading,
  Subheading,
} from "components/TemplateHero.tsx";
import HRule from "components/HRule.tsx";
import HeroSection from "components/sections/HeroSection.tsx";

import CNDICreateCLISnippet from "islands/CLISnippet.tsx";
import { GetStartedWithConfiguratorButton } from "components/GetStartedWithConfiguratorButton.tsx";

export default function TemplateWordpressDevPage(_props: PageProps) {
  const _pageVersion = "v1.0.0";
  const deploymentTargetLabel = "dev/microk8s";
  const templateName = "wordpress";
  const title = "Wordpress";
  const type = "CMS";
  const pageTitle = `Templates | ${title} on Dev`;
  const description = `Running ${title} on Kubernetes Locally using CNDI.`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content={description} name="description" />
        <meta content={pageTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta
          content="https://cndi.dev/images/meta/meta_wordpress_dev.jpg"
          property="og:image"
        />
        <meta content={pageTitle} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta
          content="https://cndi.dev/images/meta/meta_wordpress_dev.jpg"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <HeroSection>
        <HRule pillContent={type} />
        <TemplateHero
          heroImgSrc={`/images/template-icons/${templateName}/dev/connected.png`}
          heroImgAlt="Wordpress and Laptop Connection Online"
          templateName={templateName}
        >
          <Heading>
            Easily Run {title} in your dev environment with CNDI
          </Heading>
          <Subheading>Quickly deploy {title} on your local machine.</Subheading>
          <CallToAction>
            <GetStartedWithConfiguratorButton templateName={templateName} />
            <CNDICreateCLISnippet
              deploymentTargetLabel={deploymentTargetLabel}
              templateName={templateName}
            />
          </CallToAction>
        </TemplateHero>
      </HeroSection>
      <WordpressOnDevSection>
        Deploying Wordpress on your local development environment offers a
        convenient and efficient way to experiment with this powerful and
        boundless distributed CMS.
      </WordpressOnDevSection>
      <DistributionCardSection>
        <Microk8sDistributionCard>
          Deploying {title}{" "}
          on your local development environment is easy with CNDI's intuitive
          workflow. CNDI leverages Multipass to provide a seamless experience
          similar to deploying in the cloud, right on your Mac, Linux, or
          Windows machine.
        </Microk8sDistributionCard>
      </DistributionCardSection>
      <ThreePoints
        statements={[
          "Modify your content with the Wordpress Admin Panel",
          "Leverage the plugin ecosystem to extend your site",
          "Experiment with configurations before deploying",
        ]}
      />
      <WordpressWhatAndWhoForSection />
    </>
  );
}
