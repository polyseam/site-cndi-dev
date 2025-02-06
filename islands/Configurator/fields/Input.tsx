import {
  type ConfiguratorPromptFieldProps,
  ConfiguratorPromptFieldLabel,
  deriveInputAttribute,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

const INPUT_TYPE_MAP = {
  Secret: "password",
  Input: "text",
  Number: "number",
} as const;

export const Input = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;
  const placeholder = deriveInputAttribute(spec.default);
  const value = deriveInputAttribute(props.value);

  // assume that type is one of the keys of INPUT_TYPE_MAP
  const tSpec = spec.type as keyof typeof INPUT_TYPE_MAP;

  const type = INPUT_TYPE_MAP?.[tSpec] ?? "text";

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <input
        class="p-2 m-2 rounded text-gray-200  placeholder:text-gray-400 bg-[--dark-purp]"
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onInput={(e) => {
          console.debug(
            "updating",
            tSpec,
            e.currentTarget.name,
            "to",
            e.currentTarget.value
          );
          onChange(e.currentTarget.name, e.currentTarget.value);
        }}
      />
    </ConfiguratorPromptFieldLabel>
  );
};
