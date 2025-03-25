import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import SourceShower from "islands/SourceShower.tsx";
import TemplateSelector from "islands/TemplateSelector.tsx";
import ConfiguratorGizmo from "islands/Configurator/ConfiguratorGizmo.tsx";
import { type CNDITemplateObject, YAML } from "islands/Configurator/shared.ts";
import { H3 } from "elements";
import { KNOWN_TEMPLATES } from "@cndi/known-templates";
import { STATUS_CODE } from "@std/http";

type CNDITemplateData = { template: CNDITemplateObject };
type CNDITemplateDataError = { error: { message: string; code: number } };

const dataIsCNDITemplateObject = (
  maybeTemplate: unknown,
): maybeTemplate is CNDITemplateObject => {
  if (typeof maybeTemplate !== "object") return false;

  return (
    Object.keys(maybeTemplate as CNDITemplateObject).includes("outputs") &&
    Object.keys(maybeTemplate as CNDITemplateObject).includes("prompts")
  );
};

export const handler: Handlers<CNDITemplateData | CNDITemplateDataError> = {
  // TODO: what are the chances that processing a remote file on the server could result in a security vulnerability?
  // It seems that if the user provides a URL which points to a file that is not a YAML file
  // The server will simply fail to parse it, but maybe it could be exploited?
  async GET(req, ctx) {
    const requestUrl = new URL(req.url);

    const templateIdentifier = decodeURIComponent(
      requestUrl.searchParams.get("t") || "",
    );

    // no template query parameter
    if (!templateIdentifier) {
      // "basic" Template is the default configurator Template
      const defaultTemplateIdentifier = KNOWN_TEMPLATES.find(
        ({ name }) => name === "basic",
      )!.url; // assume that "basic" is always in KNOWN_TEMPLATES

      // update URL with default template: ?t=...
      requestUrl.searchParams.set("t", defaultTemplateIdentifier);

      return new Response(null, {
        // redirect to default template, avoid caching
        status: STATUS_CODE.TemporaryRedirect,
        headers: {
          Location: requestUrl.toString(),
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      });
    }

    let templateIdentifierURL: URL;

    try {
      templateIdentifierURL = new URL(templateIdentifier);
    } catch {
      // template identifier is not a valid URL

      return ctx.render(
        {
          error: { message: "Template Identifier must be a URL", code: 400 },
        },
        {
          status: STATUS_CODE.BadRequest,
        },
      );
    }

    if (
      templateIdentifierURL.protocol !== "http:" &&
      templateIdentifierURL.protocol !== "https:"
    ) {
      return ctx.render(
        {
          error: {
            message:
              "Template Identifier URL protocol must be 'http' or 'https'",
            code: STATUS_CODE.BadRequest,
          },
        },
        {
          status: STATUS_CODE.BadRequest,
        },
      );
    }

    const result = await YAML.fetch<CNDITemplateData>(
      templateIdentifierURL.href,
    );

    if (result.success) {
      if (dataIsCNDITemplateObject(result.data)) {
        return ctx.render({ template: result.data });
      } else {
        return ctx.render(
          {
            error: {
              message: "Template is not a valid CNDI Template",
              code: STATUS_CODE.BadRequest,
            },
          },
          {
            status: STATUS_CODE.BadRequest,
          },
        );
      }
    }
    const error = result.error as CNDITemplateDataError["error"];
    const status = error.code || 500;
    return ctx.render({ error }, { status });
  },
};

export default function ConfiguratorPage(
  props: PageProps<CNDITemplateData | CNDITemplateDataError>,
) {
  const templateIdentifier = props.url.searchParams.get("t");

  const templateObject = (props.data as CNDITemplateData)?.template;
  const templateError = (props.data as CNDITemplateDataError)?.error;

  const templateActive = !!templateObject && !!templateIdentifier;

  const t = encodeURIComponent(templateIdentifier ?? "");

  return (
    <>
      <Head>
        <title>CNDI Configurator</title>
        <link
          rel="canonical"
          href={`https://cndi.dev/configurator?t=${t}`}
        />
        <meta
          content="Initialize CNDI Projects from the Browser."
          name="description"
        />
      </Head>
      <div class="p-4 mx-4 mb-4">
        <H3>CNDI Configurator</H3>
        {/* show link if templateIdentifier is valid */}
        {templateActive
          ? (
            <a
              class={`font-mono text-[clamp(4px,1.9vw,12px)] sm:text-xs md:text-sm ${
                templateError ? " text-red-400" : ""
              }`}
              href={t}
            >
              {templateIdentifier}
            </a>
          )
          : null}

        {/* show error message if error is returned from server */}
        {templateError && (
          <>
            <div class="text-red-400 font-mono">{templateError.code}</div>
            <div class="text-red-400 font-mono">{templateError.message}</div>
          </>
        )}

        {/* always show template selector */}
        <TemplateSelector />

        {/* show template source code drawer and configurator if Template is valid */}
        {templateActive && !templateError
          ? (
            <>
              <SourceShower
                name="Template Source"
                source={YAML.stringify(templateObject)}
              />
              <ConfiguratorGizmo
                templateObject={templateObject}
                templateIdentifier={templateIdentifier}
              />
            </>
          )
          : null}
      </div>
    </>
  );
}
