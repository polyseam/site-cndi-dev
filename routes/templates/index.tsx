import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { StandardSection } from "components/Section.tsx";
import TemplateCardListSection from "components/sections/TemplateCardListSection.tsx";
import { SitemapHints } from "../../Sitemap.ts";

export const sitemapHints: SitemapHints = {
  changefreq: "weekly",
  lastmod: "2024-11-07",
};

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
          <div class="w-layout-blockcontainer container-14691 mx-auto max-w-screen-lg">
            <div
              id="w-node-_17bc0eca-4dea-51d8-5c0e-0950303fe0dc-a5d56d94"
              class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 grid"
            >
              <div
                id="w-node-_17bc0eca-4dea-51d8-5c0e-0950303fe0dd-a5d56d94"
                class="flex-col justify-start items-start flex cell-20"
              >
                <h1 class="heading-59">
                  CNDI Deployment
                  <br />
                  Templates
                </h1>
                <div class="text-block-56">
                  Deploy infrastructure and data applications to the <br />
                  cloud by filling out one easy template.
                </div>
              </div>
              <div
                id="w-node-_17bc0eca-4dea-51d8-5c0e-0950303fe0de-a5d56d94"
                class="flex-col justify-start items-start flex cell-21"
              >
                <div class="cli_gif_templates">
                  <div class="div-block-101">
                    <div class="div-block-100"></div>
                    <div class="div-block-100-copy"></div>
                    <div class="x"></div>
                  </div>
                  <img
                    src="/images/vhs-animations/cndi-create.gif"
                    loading="lazy"
                    width="727"
                    alt="CNDI Templates Gif"
                    class="image-49"
                  />
                </div>
              </div>
            </div>
          </div>
        </StandardSection>
        <StandardSection>
          <div class="w-layout-blockcontainer container-1458 mx-auto max-w-screen-lg">
            <h1 class="heading-60">What are CNDI Deployment Templates?</h1>
            <div class="text-block-57">
              CNDI Templates are fill-in-the-blanks style blueprints that define
              an entire stack for a cloud-native application or service. These
              templates serve as a starting point for deploying components
              consistently, reliably, and efficiently. CNDI Templates combine
              GitOps application and cluster configuration with Infrastructure
              as Code. You select a Template for your new service and CNDI will
              provide the cluster and the repo to manage it from. You can even
              create your own Templates to accelerate your team!
            </div>
            <img
              src="/images/content/templates/workflow.png"
              loading="lazy"
              width="741"
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 85vw, (max-width: 991px) 688px, 741px"
              alt=""
              srcset="/images/content/templates/workflow-p-500.png 500w, /images/content/templates/workflow-p-800.png 800w, /images/content/templates/workflow-p-1080.png 1080w, /images/content/templates/workflow.png 1480w"
              class="image-48"
            />
          </div>
        </StandardSection>
        <TemplateCardListSection pageVersion={pageVersion} url={props.url} />
        <StandardSection>
          <div class="w-layout-blockcontainer container-14698 mx-auto max-w-screen-lg">
            <h1 class="heading-101">Supported Deployment Targets</h1>
            <p class="paragraph-43">
              CNDI supports cloud deployments to all three major vendors - AWS,
              Azure, and Google Cloud. You can also make deployments with CNDI
              to your local dev environment to test workflows before production.
              With CNDI <a href="#cndi-templates">Templates</a>{" "}
              deploying your applications to these cloud environments is
              streamlined and efficient, ensuring compatibility and reliability
              across platforms.
            </p>
            <div
              id="w-node-a4f6043d-ad6c-ceea-17c2-afca7ae0d445-a5d56d94"
              class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-18 grid"
            >
              <div
                id="w-node-a4f6043d-ad6c-ceea-17c2-afca7ae0d446-a5d56d94"
                class="flex-col justify-start items-start flex cell-36"
              >
                <img
                  src="/images/provider-icons/aws.png"
                  loading="lazy"
                  width="75"
                  sizes="75px"
                  alt="Amazon Web Services Logo"
                  // srcset="/images/AWS-2-p-500.png 500w, images/AWS-2.png 782w"
                />
              </div>
              <div
                id="w-node-a4f6043d-ad6c-ceea-17c2-afca7ae0d447-a5d56d94"
                class="flex-col justify-start items-start flex cell-35"
              >
                <div class="div-block-104"></div>
              </div>
              <div
                id="w-node-_5148367d-70d4-4857-3696-788abd2ee4a2-a5d56d94"
                class="flex-col justify-start items-start flex cell-37"
              >
                <img
                  src="/images/provider-icons/gcp.webp"
                  loading="lazy"
                  width="75"
                  alt="GCP Logo"
                />
              </div>
              <div
                id="w-node-_43b19b2c-b658-382a-437d-1eab77f93ac3-a5d56d94"
                class="flex-col justify-start items-start flex cell-35"
              >
                <div class="div-block-104"></div>
              </div>
              <div
                id="w-node-d4a437b5-1f25-2513-2d78-62d1f3ea7136-a5d56d94"
                class="flex-col justify-start items-start flex cell-38"
              >
                <img
                  src="/images/provider-icons/azure.png"
                  loading="lazy"
                  width="75"
                  sizes="75px"
                  alt="Microsoft Azure Logo"
                  // srcset="/images/provider-icons/azure-p-500.png 500w, /images/provider-icons/azure-p-800.png 800w, /images/provider-icons/azure-p-1080.png 1080w, /images/provider-icons/azure.png 1200w"
                />
              </div>
              <div
                id="w-node-e40b6f01-39e7-2733-45df-9e36d0b94b3f-a5d56d94"
                class="flex-col justify-start items-start flex cell-39"
              >
                <div class="div-block-104"></div>
              </div>
              <div
                id="w-node-_60ee67e0-6689-2177-34a7-820bcc3eff8b-a5d56d94"
                class="flex-col justify-start items-start flex cell-40"
              >
                <img
                  src="/images/provider-icons/dev.png"
                  loading="lazy"
                  width="75"
                  alt=""
                />
              </div>
            </div>
          </div>
        </StandardSection>
      </div>
    </>
  );
}
