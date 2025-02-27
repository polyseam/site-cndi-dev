import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { StandardSection } from "components/Section.tsx";
import TemplateCardListSection from "components/sections/TemplateCardListSection.tsx";
import { SitemapHints } from "../../Sitemap.ts";
import { DEPLOYMENT_TARGET_PROVIDERS } from "app-data";
import { H1, H3, P } from "elements";
import TerminalView from "components/TerminalView.tsx";
import ResponsiveHero from "components/ResponsiveHero.tsx";

import {
  Bot as BotIcon,
  Check as CheckIcon,
  Rocket as RocketIcon,
} from "lucide-preact";

// deno-lint-ignore no-explicit-any
const Check = CheckIcon as any;
// deno-lint-ignore no-explicit-any
const Rocket = RocketIcon as any;
// deno-lint-ignore no-explicit-any
const Bot = BotIcon as any;

export const sitemapHints: SitemapHints = {
  changefreq: "weekly",
  lastmod: "2024-11-07",
};

type StepCardProps = {
  title: string;
  // deno-lint-ignore no-explicit-any
  icon: any;
  description: string;
  num: number;
};

const StepCard = ({ title, icon, description, num }: StepCardProps) => {
  return (
    <div class="bg-mutedpurp flex flex-col shadow-black shadow-lg text-bff m-8 p-8 rounded-xl">
      <div class="flex flex-row items-center pb-3">
        <h1 class="text-2xl bold pr-4">
          {num}. {title}
        </h1>
        <div class="text-2xl bold">{icon}</div>
      </div>
      <p class="text-xl pl-6">{description}</p>
    </div>
  );
};

const GetStartedSteps = () => {
  return (
    <div>
      <StepCard
        title="Select a Template"
        icon={<Check color="green" />}
        description="Browse and choose from our collection of pre-built Templates below"
        num={1}
      />
      <StepCard
        title="Follow the Prompts"
        icon={<Bot color="#7c6991" />}
        description="Answer a few questions to generate your custom repository"
        num={2}
      />
      <StepCard
        title="Push to Git"
        icon={<Rocket color="#0080FF" />}
        description="Commit your code and wait for your cluster to come online"
        num={3}
      />
    </div>
  );
};

const VerticalBar = () => <div class="bg-white w-[1px] h-[100px]" />;

const SupportedDeploymentTargets = () => {
  return (
    <div class="flex justify-around">
      {DEPLOYMENT_TARGET_PROVIDERS.map((provider, idx) => {
        const insertBar = idx !== DEPLOYMENT_TARGET_PROVIDERS.length - 1;
        return (
          <>
            <div class="flex flex-row items-center">
              <img
                src={provider.imgSrc}
                alt={`${provider.title} Logo`}
                class="max-w-20"
              />
            </div>
            <div>{insertBar ? <VerticalBar /> : null}</div>
          </>
        );
      })}
    </div>
  );
};

const CopyPane = () => (
  <div class="pr-8">
    <H1>
      CNDI Deployment
      <br />
      Templates
    </H1>
    <P>
      Deploy infrastructure and data applications to the <br />
      cloud by filling out one easy Template.
    </P>
  </div>
);

const VisualPane = () => (
  <div class="min-w-[490px]">
    <TerminalView src="/images/vhs-animations/cndi-create.gif" />
  </div>
);

export default function TemplatesPage(props: PageProps) {
  const pageTitle = "Templates | CNDI";
  const pageVersion = "v1.0.0";
  const description = "Self-Host Open-Source Applications with CNDI Templates";
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="canonical" href="https://cndi.dev/templates" />
        <meta content={description} name="description" />
        <meta content={pageTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta
          content={`https://cndi.dev/images/meta/meta_home.jpg`}
          property="og:image"
        />
        <meta content={pageTitle} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta
          content={`https://cndi.dev/images/meta/meta_home.jpg`}
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <div>
        <StandardSection>
          <div class="mx-auto max-w-screen-lg">
            <ResponsiveHero>
              <CopyPane />
              <VisualPane />
            </ResponsiveHero>
          </div>
        </StandardSection>
        <StandardSection>
          <div class="mx-auto max-w-screen-lg flex flex-col justify-center items-center text-center">
            <H3>What are CNDI Deployment Templates?</H3>
            <P size="lg">
              CNDI Templates are fill-in-the-blanks style blueprints that define
              an entire stack for a cloud-native application or service. CNDI
              Templates combine GitOps application and cluster configuration
              with Infrastructure-as-Code, so you can manage your entire stack
              form one repo!
            </P>
            <div class="bg-stroke h-[1px] my-3 w-4/5 self-center" />
          </div>
          <div class="mx-auto max-w-screen-lg flex flex-col justify-center items-center text-2xl">
            <H3>Getting Started with Templates</H3>
            <GetStartedSteps />
          </div>
        </StandardSection>
        <TemplateCardListSection pageVersion={pageVersion} url={props.url} />
        <StandardSection>
          <div class="mx-auto max-w-screen-lg text-center">
            <H1>Supported Deployment Targets</H1>
            <P>
              CNDI supports cloud deployments to all three major vendors - AWS,
              Azure, and Google Cloud. You can also make deployments with CNDI
              to your local dev environment to test workflows before production.
              With CNDI <a href="#cndi-templates">Templates</a>{" "}
              deploying your applications to these cloud environments is
              streamlined and efficient, ensuring compatibility and reliability
              across platforms.
            </P>
            <SupportedDeploymentTargets />
          </div>
        </StandardSection>
      </div>
    </>
  );
}
