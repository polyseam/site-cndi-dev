import { useState } from "preact/hooks";
import {
  ConfiguratorPromptFieldError,
  ConfiguratorPromptFieldLabel,
  type ConfiguratorPromptFieldProps,
  deriveInputAttribute,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

import {
  validateFields,
  type ValidationError,
} from "islands/Configurator/responseValidators.ts";

export const List = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;
  const placeholder = deriveInputAttribute(spec.default);
  const value = deriveInputAttribute(props.value);

  const [errors, setErrors] = useState<ValidationError[]>([]);

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <ConfiguratorPromptFieldError errors={errors} responseName={name} />
      <input
        class="text-gray-200 p-2 m-2 rounded placeholder:text-gray-900 placeholder-opacity-75 bg-gray-700"
        type="text"
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
          }
          onChange(
            responseName,
            value.split(",").map((s) => s.trim()),
          );
        }}
      />
    </ConfiguratorPromptFieldLabel>
  );
};
