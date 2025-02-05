import { CNDITemplatePromptResponsePrimitive } from "islands/Configurator/shared.ts";
import { CNDIPromptSpec } from "islands/Configurator/shared.ts";

type UpdatePromptResponse = (
    responseName: string,
    newResponseValue: CNDITemplatePromptResponsePrimitive
  ) => void;

type PromptFieldArgs = {
    spec: CNDIPromptSpec;
    onChange: UpdatePromptResponse;
    value?: CNDITemplatePromptResponsePrimitive;
  };
  

export const ConfiguratorPromptField = ({ spec, onChange, value }: PromptFieldArgs) => {
  const message = " " + spec.message;

  switch (spec.type) {
    case "Input":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder:text-gray-900 placeholder-opacity-75"
            type="text"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={`${value}` !== "undefined" ? `${value}` : ""}
            onInput={(e) => {
              console.log("input");
              onChange(e.currentTarget.name, e.currentTarget.value);
            }}
          />
        </label>
      );

    case "Secret":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder-opacity-60"
            type="password"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={`${value}` !== "undefined" ? `${value}` : ""}
            onInput={(e) =>
              onChange(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </label>
      );
    case "Confirm":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input type="checkbox" id={spec.name} name={spec.name} />
        </label>
      );
    case "Select":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <select
            id={spec.name}
            name={spec.name}
            class="text-black p-2 rounded"
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.value);
            }}
          >
            <option value={spec.default}>{spec.default}</option>
            {spec?.options?.map((o) => (
              <option value={o}>{o}</option>
            ))}
          </select>
        </label>
      );
    case "List": // comma separated
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder-opacity-60"
            type="text"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={`${value}` !== "undefined" ? `${value}` : ""}
            onInput={(e) =>
              onChange(
                e.currentTarget.name,
                e.currentTarget.value.split(",").map((s) => s.trim())
              )
            }
          />
        </label>
      );
    case "Checkbox":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <select
            id={spec.name}
            name={spec.name}
            multiple
            class="text-black p-2 rounded"
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.value);
            }}
          >
            <option value={spec.default}>{spec.default}</option>
            {spec?.options?.map((o) => (
              <option value={o}>{o}</option>
            ))}
          </select>
        </label>
      );
    case "Number":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder-opacity-60"
            type="number"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            onChange={(e) => {
              onChange(e.currentTarget.name, Number(e.currentTarget.value));
            }}
          />
        </label>
      );
    case "File":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded"
            type="file"
            id={spec.name}
            name={spec.name}
          />
        </label>
      );
  }
};