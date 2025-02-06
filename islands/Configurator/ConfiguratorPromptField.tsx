import { CNDITemplatePromptResponsePrimitive } from "islands/Configurator/shared.ts";
import { CNDIPromptSpec } from "islands/Configurator/shared.ts";
import { ComponentChildren } from "preact";
import { Input } from "islands/Configurator/fields/Input.tsx";
import { Confirm } from "islands/Configurator/fields/Confirm.tsx";
import { Select } from "islands/Configurator/fields/Select.tsx";
import { List } from "islands/Configurator/fields/List.tsx";
import { File } from "islands/Configurator/fields/File.tsx";

export type UpdatePromptResponse = (
  responseName: string,
  newResponseValue: CNDITemplatePromptResponsePrimitive
) => void;

export type ConfiguratorPromptFieldProps = {
  spec: CNDIPromptSpec;
  onChange: UpdatePromptResponse;
  value?: CNDITemplatePromptResponsePrimitive;
};

type ConfiguratorPromptFieldLabelProps = {
  message: string;
  children: ComponentChildren;
};

export const ConfiguratorPromptFieldLabel = ({
  message,
  children,
}: ConfiguratorPromptFieldLabelProps) => {
  return (
    <label class="grid grid-cols-1 mb-2 text-lg text-purple-200">
      <span class="mx-2">{message}</span>
      {children}
    </label>
  );
};

export const deriveInputAttribute = (v?: CNDITemplatePromptResponsePrimitive) =>
  `${v}` === "undefined" ? "" : `${v}`;

export const ConfiguratorPromptField = ({
  spec,
  onChange,
  value,
}: ConfiguratorPromptFieldProps) => {
  switch (spec.type) {
    case "Input":
    case "Secret":
    case "Number":
      return <Input spec={spec} onChange={onChange} value={value} />;
    case "Confirm": // single checkbox
      return <Confirm spec={spec} onChange={onChange} value={value} />;
    case "Checkbox": // multiple select
    case "Select":
      return <Select spec={spec} onChange={onChange} value={value} />;
    case "List": // comma separated
      return <List spec={spec} onChange={onChange} value={value} />;
    case "File":
      return <File spec={spec} onChange={onChange} value={value} />;
  }
};
