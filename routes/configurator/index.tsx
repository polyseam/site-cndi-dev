import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { fetchYaml } from "./yaml.ts";

import SourceShower from "islands/SourceShower.tsx";
import TemplateSelector from "islands/TemplateSelector.tsx";
import ConfiguratorGizmo from "islands/ConfiguratorGizmo.tsx";

const TEMPLATE_IDENTIFIER_BASIC =
  "https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/basic.yaml";

type CNDITemplateData = Record<string, unknown>;

export const handler: Handlers<CNDITemplateData> = {
  async GET(req, ctx) {
    const requestUrl = new URL(req.url);
    const templateIdentifier = requestUrl.searchParams.get("t") ||
      TEMPLATE_IDENTIFIER_BASIC;
    let templateIdentifierURL: URL;
    try {
      templateIdentifierURL = new URL(templateIdentifier);
    } catch {
      // template identifier is not a valid URL
      return ctx.render({
        error: { message: "Template Identifier myst be a URL", code: 400 },
      });
    }
    const result = await fetchYaml<Record<string, unknown>>(
      templateIdentifierURL.href,
    );

    if (result.success) {
      return ctx.render(result.data);
    }
    const status = result?.error?.code || 500;
    return ctx.render(result.error, { status });
  },
};

export default function ConfiguratorPage(props: PageProps<CNDITemplateData>) {
  const templateIdentifier = props.url.searchParams.get("t");
  return (
    <>
      <Head>
        <title>CNDI Configurator</title>
      </Head>

      <div class="p-4 m-4">
        <h1>CNDI Configurator</h1>
        {templateIdentifier && (
          <a class="font-mono text-sm" href={templateIdentifier}>
            {templateIdentifier}
          </a>
        )}
        <TemplateSelector />
        <SourceShower source={JSON.stringify(props.data, null, 2)} />
        <ConfiguratorGizmo
          templateObject={props.data}
          templateIdentifier={templateIdentifier}
        />
      </div>
    </>
  );
}
