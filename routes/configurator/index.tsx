import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { fetchYaml } from "./yaml.ts";

import SourceShower from "islands/SourceShower.tsx";
import TemplateSelector from "islands/TemplateSelector.tsx";
import ConfiguratorGizmo from "../../islands/Configurator/ConfiguratorGizmo.tsx";
import type { CNDITemplateObject } from "islands/Configurator/shared.ts";

const TEMPLATE_IDENTIFIER_BASIC =
  "https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/basic.yaml";

type CNDITemplateData = Record<string, unknown>;

export const handler: Handlers<CNDITemplateData> = {
  // TODO: what are the chances that processing a remote file on the server could result in a security vulnerability?
  // It seems that if the user provides a URL which points to a file that is not a YAML file
  // The server will simply fail to parse it, but maybe it could be exploited?
  async GET(req, ctx) {
    const requestUrl = new URL(req.url);
    const templateIdentifier =
      requestUrl.searchParams.get("t") || TEMPLATE_IDENTIFIER_BASIC;
    let templateIdentifierURL: URL;
    try {
      templateIdentifierURL = new URL(templateIdentifier);
    } catch {
      // template identifier is not a valid URL
      return ctx.render({
        error: { message: "Template Identifier must be a URL", code: 400 },
      });
    }
    console.log("templateIdentifierURL", templateIdentifierURL);
    if (
      templateIdentifierURL.protocol !== "http:" &&
      templateIdentifierURL.protocol !== "https:"
    ) {
      return ctx.render({
        error: {
          message: "Template Identifier URL protocol must be 'http' or 'https'",
        },
      });
    }

    const result = await fetchYaml<CNDITemplateData>(
      templateIdentifierURL.href
    );

    if (result.success) {
      return ctx.render(result.data);
    }
    const status = result?.error?.code || 500;
    return ctx.render(result.error, { status });
  },
};

const normalizeTemplateData = (data: unknown): CNDITemplateObject | null => {
  if (!data) return null;
  
  const normalized = data as CNDITemplateObject;

  if (!Array.isArray(normalized?.prompts)) normalized.prompts = [];
  if (!Array.isArray(normalized?.blocks)) normalized.blocks = [];
  return normalized;
};

export default function ConfiguratorPage(props: PageProps<CNDITemplateData>) {
  const templateIdentifier = props.url.searchParams.get("t");
  const templateObject = normalizeTemplateData(props.data);

  const templateActive = !!templateObject && !!templateIdentifier;

  return (
    <>
      <Head>
        <title>CNDI Configurator</title>
        <link rel="canonical" href="https://cndi.dev/configurator" />

        <meta
          content="Initialize CNDI Projects from the Browser."
          name="description"
        ></meta>
      </Head>
      <div class="p-4 m-4">
        <h1>CNDI Configurator</h1>
        {templateActive ? (
          <a class="font-mono text-sm" href={templateIdentifier}>
            {templateIdentifier}
          </a>
        ) : null}
        <TemplateSelector />
        {templateActive && (
          <SourceShower source={JSON.stringify(props.data, null, 2)} />
        )}
        {templateActive ? (
          <ConfiguratorGizmo
            templateObject={templateObject}
            templateIdentifier={templateIdentifier}
          />
        ) : null}
      </div>
    </>
  );
}
