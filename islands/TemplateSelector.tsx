import { type Signal, useComputed, useSignal } from "@preact/signals";

const templates = [
  "basic",
  "airflow",
  "cnpg",
  "fns",
  "mongodb",
  "redis",
  "kafka",
  "neo4j",
];

const TemplateLink = ({ template }: { template: string }) => (
  <button class="text-cyan-400 p-2 m-2 bg-[var(--dark-purp)] focus:ring rounded w-auto font-mono text-lg">
    <a
      href={`?t=https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/${template}.yaml`}
    >
      {template}
    </a>
  </button>
);

const TemplateLinks = () => (
  <div class="pl-1 flex-col">
    {templates.map((template) => <TemplateLink template={template} />)}
  </div>
);

export default function TemplateSelector() {
  const templateIdentifier: Signal<string> = useSignal("");
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

        <div class="m-2">OR</div>
        <label for="template-identifier-field">Enter Your Template URL</label>
        <input
          type="text"
          class="text-black p-2 rounded"
          name="template-identifier-field"
          placeholder={placeholder}
          size={placeholder.length}
          onInput={(e) => {
            templateIdentifier.value = e.currentTarget.value;
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
