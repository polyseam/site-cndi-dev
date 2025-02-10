import { type Signal, useComputed, useSignal } from "@preact/signals";
import { abbreviateTemplateIdentifier } from "islands/Configurator/shared.ts";

import { data } from "template-details";

const templateNames = ["basic", ...data.map((template) => template.name)];

const InactiveTemplateLink = ({ templateName }: { templateName: string }) => (
  <a
    class="text-purple-200"
    href={`?t=https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/${templateName}.yaml`}
  >
    <button class="p-2 m-2 bg-[var(--dark-purp)] focus:ring rounded w-auto font-mono text-lg underline">
      {templateName}
    </button>
  </a>
);

const ActiveTemplateLink = ({ templateName }: { templateName: string }) => {
  return (
    <a
      href={`?t=https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/${templateName}.yaml`}
    >
      <button class="p-2 m-2 bg-[var(--dark-purp)] focus:ring rounded w-auto font-mono text-lg">
        {templateName}
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
      {templateNames.map((templateName) => {
        const isActive = templateParam
          ? abbreviateTemplateIdentifier(templateParam) === templateName
          : false;
        return isActive
          ? <ActiveTemplateLink templateName={templateName} />
          : <InactiveTemplateLink templateName={templateName} />;
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
      <div class="my-4 p-4 text-purple-200 bg-[#333] rounded">
        <div>Choose A Template:</div>

        <TemplateLinks />

        <div class="m-2 inline-block">OR</div>
        <label for="template-identifier-field">Enter Your Template URL</label>

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
              location.href = `?t=${templateIdentifier.value}`;
            }
          }}
        />
        {isValidTemplateIdentifier.value
          ? (
            <div class={"text-cyan-400"}>
              <a href={`?t=${templateIdentifier.value}`}>
                cndi.dev/configurator?t={templateIdentifier.value}
              </a>
            </div>
          )
          : null}
      </div>
    </>
  );
}
