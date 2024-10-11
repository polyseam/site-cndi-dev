import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

type TemplateHeadProps = {
  templateName: string;
  templateTitle: string;
  provider: string;
  children?: ComponentChildren;
};

export default function TemplateHead(props: TemplateHeadProps) {
  const pageTitle = `Templates | ${props.templateTitle} on ${props.provider}`;
  const description =
    `Easily Self-Host ${props.templateTitle} on ${props.provider} using CNDI.`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={description} name="description" />
      <meta content={pageTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta
        content={`https://cndi.dev/images/meta/meta_${templateName}_${props.provider.toLowerCase()}.jpg`}
        property="og:image"
      />
      <meta content={pageTitle} property="twitter:title" />
      <meta content={description} property="twitter:description" />
      <meta
        content="https://cndi.dev/images/meta/meta_airflow_aws.jpg"
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {props?.children || null}
    </Head>
  );
}
