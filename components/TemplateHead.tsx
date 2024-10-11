import { Head } from "$fresh/runtime.ts";
import { ComponentChildren } from "preact";

type TemplateHeadProps = {
  templateName: string;
  templateTitle: string;
  provider?: string;
  children?: ComponentChildren;
};

export default function TemplateHead(props: TemplateHeadProps) {
  if (!props.provider) {
    const pageTitle = `Templates | ${props.templateTitle}`;
    const description = `Easily Self-Host ${props.templateTitle} using CNDI.`;
    return (
      <Head>
        <title>{pageTitle}</title>
        <meta content={description} name="description" />
        <meta content={pageTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta
          content={`https://cndi.dev/images/meta/meta_${props.templateName}.jpg`}
          property="og:image"
        />
        <meta content={pageTitle} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta
          content={`https://cndi.dev/images/meta/meta_${props.templateName}.jpg`}
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        {props?.children || null}
      </Head>
    );
  }
  const pageTitle = `Templates | ${props.templateTitle} on ${props.provider}`;
  const providerName = props.provider.toLowerCase();
  const description = providerName === "dev"
    ? `Running ${props.templateTitle} on Kubernetes Locally using CNDI.`
    : `Easily Self-Host ${props.templateTitle} on ${props.provider} using CNDI.`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta content={description} name="description" />
      <meta content={pageTitle} property="og:title" />
      <meta content={description} property="og:description" />
      <meta
        content={`https://cndi.dev/images/meta/meta_${props.templateName}_${providerName}.jpg`}
        property="og:image"
      />
      <meta content={pageTitle} property="twitter:title" />
      <meta content={description} property="twitter:description" />
      <meta
        content={`https://cndi.dev/images/meta/meta_${props.templateName}_${providerName}.jpg`}
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      {props?.children || null}
    </Head>
  );
}
