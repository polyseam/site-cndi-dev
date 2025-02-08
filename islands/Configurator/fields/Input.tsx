import { useEffect, useRef, useState } from "preact/hooks";

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
  List: "text",
} as const;

import {
  validateFields,
  type ValidationError,
} from "islands/Configurator/responseValidators.ts";

const DEBOUNCE_TIME = 500; // ms

export const Input = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;
  const defaultValue = deriveInputAttribute(spec.default);

  // assume that type is one of the keys of INPUT_TYPE_MAP
  const tSpec = spec.type as keyof typeof INPUT_TYPE_MAP;

  const type = INPUT_TYPE_MAP?.[tSpec] ?? "text";

  const [errors, setErrors] = useState<ValidationError[]>([]);
  const debounceTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    onChange(name, defaultValue);
  }, []);

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <ConfiguratorPromptFieldError errors={errors} responseName={name} />
      <input
        class="p-2 m-2 rounded text-gray-200  placeholder:text-gray-400 bg-[--dark-purp]"
        type={type}
        id={name}
        name={name}
        placeholder={name}
        defaultValue={defaultValue}
        onInput={(e) => {
          const responseName = e.currentTarget.name;
          const value = tSpec === "List"
            ? e.currentTarget.value.split(",")
            : e.currentTarget.value;

          // If a timer is already running, cancel it
          if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

          // Start a new debounce timer
          debounceTimerRef.current = setTimeout(() => {
            if (value !== "") {
              const errs: ValidationError[] = validateFields(value, spec);
              setErrors(() => errs);
            } else {
              setErrors(() => []);
            }
            onChange(responseName, value);
          }, DEBOUNCE_TIME);
        }}
      />
    </ConfiguratorPromptFieldLabel>
  );
};
