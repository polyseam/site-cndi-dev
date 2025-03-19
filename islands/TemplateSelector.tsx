import { type Signal, useComputed, useSignal } from "@preact/signals";
import { abbreviateTemplateIdentifier } from "islands/Configurator/shared.ts";

import { KNOWN_TEMPLATES } from "@cndi/known-templates";

type Template = {
  name: string; // name as presented to user
};

const templates: Template[] =
  // if the template is generally available, or if it's the basic template, show it
  KNOWN_TEMPLATES.filter(({ ga, name }) => ga || name === "basic").map(
    ({ name }) => ({
      name,
    }),
  );

const InactiveTemplateLink = ({ name }: Template) => (
  <a
    class="text-purple-200"
    href={`?t=${
      encodeURIComponent(
        `https://raw.githubusercontent.com/polyseam/cndi/main/templates/${name}.yaml`,
      )
    }`}
  >
    <button
      type="button"
      class="p-2 m-2 bg-darkpurp focus:ring rounded w-auto font-mono text-lg underline"
    >
      {name}
    </button>
  </a>
);

const ActiveTemplateLink = ({ name }: Template) => {
  return (
    <a
      href={`?t=${
        encodeURIComponent(
          `https://raw.githubusercontent.com/polyseam/cndi/main/templates/${name}.yaml`,
        )
      }`}
    >
      <button
        type="button"
        class="p-2 m-2 bg-darkpurp focus:ring rounded w-auto font-mono text-lg text-white"
      >
        {name}
      </button>
    </a>
  );
};

const TemplateLinks = () => {
  let templateParam = null;
  try {
    templateParam = new URL(location.href).searchParams.get("t");
  } catch (_e) {
    // no location object
  }
  return (
    <div class="pl-1 flex-col">
      {templates.map(({ name }, i) => {
        const isActive = templateParam
          ? abbreviateTemplateIdentifier(templateParam) === name
          : false;

        return isActive
          ? <ActiveTemplateLink key={i} name={name} />
          : <InactiveTemplateLink key={i} name={name} />;
      })}
    </div>
  );
};

export default function TemplateSelector() {
  const templateIdentifier: Signal<string> = useSignal("");
  const shouldShake = useSignal(false); // controls the shake animation
  const isValidTemplateIdentifier = useComputed(() => {
    if (!templateIdentifier.value) return false;
    try {
      new URL(templateIdentifier.value);
      return true;
    } catch {
      return false;
    }
  });
  const placeholder = "https://example.com/template.yaml";
  return (
    <>
      <div class="my-4 p-4 text-purple-200 bg-softgrey rounded">
        <div class="font-bold">Choose A Template:</div>

        <TemplateLinks />

        <div class="m-2 inline-block">OR</div>
        <div class="grid grid-cols-1 space-y-1">
          <label for="template-identifier-field" class="font-bold">
            Enter Your Template URL
          </label>
          <input
            type="text"
            className={`text-black p-2 rounded ${
              shouldShake.value ? "animate-wiggle ring ring-red-500" : ""
            }`}
            name="template-identifier-field"
            aria-invalid={!isValidTemplateIdentifier.value}
            placeholder={placeholder}
            size={placeholder.length}
            onInput={(e) => {
              templateIdentifier.value = e.currentTarget.value;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                // Prevent form submission if needed
                e.preventDefault();
                if (!isValidTemplateIdentifier.value) {
                  shouldShake.value = true;
                  // Reset the shake flag after the animation (e.g., 500ms)
                  setTimeout(() => {
                    shouldShake.value = false;
                  }, 500);
                  return;
                }
                location.href = `?t=${
                  encodeURIComponent(
                    templateIdentifier.value,
                  )
                }`;
              }
            }}
          />
        </div>
        {isValidTemplateIdentifier.value
          ? (
            <div class="text-cyan-400 mt-2 underline">
              <a href={`?t=${encodeURIComponent(templateIdentifier.value)}`}>
                cndi.dev/configurator?t={templateIdentifier.value}
              </a>
            </div>
          )
          : null}
      </div>
    </>
  );
}
