import { useState } from "preact/hooks";

import {
  ConfiguratorPromptFieldError,
  ConfiguratorPromptFieldLabel,
  type ConfiguratorPromptFieldProps,
  deriveInputAttribute,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

const INPUT_TYPE_MAP = {
  Secret: "password",
  Input: "text",
  Number: "number",
} as const;

import {
  validateFields,
  type ValidationError,
} from "islands/Configurator/responseValidators.ts";
// import { CNDITemplatePromptResponsePrimitive } from "islands/Configurator/shared.ts";

export const Input = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;
  const placeholder = deriveInputAttribute(spec.default);
  const value = deriveInputAttribute(props.value);

  // assume that type is one of the keys of INPUT_TYPE_MAP
  const tSpec = spec.type as keyof typeof INPUT_TYPE_MAP;

  const type = INPUT_TYPE_MAP?.[tSpec] ?? "text";

  const [errors, setErrors] = useState<ValidationError[]>([]);

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <ConfiguratorPromptFieldError errors={errors} responseName={name} />
      <input
        class="p-2 m-2 rounded text-gray-200  placeholder:text-gray-400 bg-[--dark-purp]"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onInput={(e) => {
          const value = e.currentTarget.value;
          const responseName = e.currentTarget.name;
          if (value !== "") {
            const errs: ValidationError[] = validateFields(value, spec);
            setErrors(() => errs);
          } else {
            setErrors(() => []);
          }
          console.debug("updating", tSpec, responseName, "to", value);
          onChange(responseName, value);
        }}
      />
    </ConfiguratorPromptFieldLabel>
  );
};
