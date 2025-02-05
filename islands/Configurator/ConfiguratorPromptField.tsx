import { CNDITemplatePromptResponsePrimitive } from "islands/Configurator/shared.ts";
import { CNDIPromptSpec } from "islands/Configurator/shared.ts";

type UpdatePromptResponse = (
  responseName: string,
  newResponseValue: CNDITemplatePromptResponsePrimitive,
) => void;

type PromptFieldArgs = {
  spec: CNDIPromptSpec;
  onChange: UpdatePromptResponse;
  value?: CNDITemplatePromptResponsePrimitive;
};

export const ConfiguratorPromptField = ({
  spec,
  onChange,
  value,
}: PromptFieldArgs) => {
  const message = (<span class="mx-2">{spec.message}</span>)

  switch (spec.type) {
    case "Input":
      return (
        <label name={spec.name} class="text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <input
            class="text-gray-200 p-2 m-2 rounded placeholder:text-gray-900 placeholder-opacity-75 bg-gray-700"
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
        <label name={spec.name} class="text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <input
            class="text-gray-200 p-2 m-2 rounded placeholder-opacity-60 bg-gray-700"
            type="password"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={`${value}` !== "undefined" ? `${value}` : ""}
            onInput={(e) =>
              onChange(e.currentTarget.name, e.currentTarget.value)}
          />
        </label>
      );
    case "Confirm":
      return (
        <label name={spec.name} class="items-center me-5 cursor-pointer text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <input
            class="sr-only peer"
            type="checkbox"
            id={spec.name}
            name={spec.name}
            defaultChecked={!!spec.default}
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.checked);
            }}
          />
          <div class="m-2 p-2 relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:[#180f1e]  dark:peer-focus:[#180f1e] dark:bg-[#180f1e] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#7c6991] dark:peer-checked:bg-[#7c6991]"></div>
        </label>
      );
    case "Select":
      return (
        <label name={spec.name} class="text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <select
            id={spec.name}
            name={spec.name}
            class="text-gray-200 p-2 m-2 rounded bg-gray-700 border-r-8 border-transparent text-lg"
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.value);
            }}
          >
            <option value={spec.default}>{spec.default}</option>
            {spec?.options?.map((o) => <option value={o}>{o}</option>)}
          </select>
        </label>
      );
    case "List": // comma separated
      return (
        <label name={spec.name} class="text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <input
            class="text-gray-200 p-2 m-2 rounded placeholder-opacity-60 bg-gray-700"
            type="text"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={`${value}` !== "undefined" ? `${value}` : ""}
            onInput={(e) =>
              onChange(
                e.currentTarget.name,
                e.currentTarget.value.split(",").map((s) => s.trim()),
              )}
          />
        </label>
      );
    case "Checkbox":
      return (
        <label name={spec.name} class="text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <select
            id={spec.name}
            name={spec.name}
            multiple
            class="text-gray-200 p-2 m-2 rounded bg-gray-700"
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.value);
            }}
          >
            <option value={spec.default}>{spec.default}</option>
            {spec?.options?.map((o) => <option value={o}>{o}</option>)}
          </select>
        </label>
      );
    case "Number":
      return (
        <label name={spec.name} class="text-white grid grid-cols-1 mb-2 text-lg">
          {message}
          <input
            class="text-gray-200 p-2 m-2 rounded placeholder-opacity-60 border-gray-300 bg-gray-700"
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
        <label class="text-lg mb-2 font-medium text-gray-900 dark:text-white grid grid-cols-1" for="file_input">
          {message}
          <input name={spec.name} type="file" class="m-2 p-2 text-lg block text-gray-900 rounded cursor-pointer bg-gray-50 dark:text-gray-200 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={spec.name}/>
        </label>
      );
  }
};
