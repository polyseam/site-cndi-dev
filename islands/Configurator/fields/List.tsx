import {
  ConfiguratorPromptFieldLabel,
  type ConfiguratorPromptFieldProps,
  deriveInputAttribute,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

export const List = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;
  const placeholder = deriveInputAttribute(spec.default);
  const value = deriveInputAttribute(props.value);

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <input
        class="text-gray-200 p-2 m-2 rounded placeholder:text-gray-900 placeholder-opacity-75 bg-gray-700"
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onInput={(e) =>
          onChange(
            e.currentTarget.name,
            e.currentTarget.value.split(",").map((s) => s.trim()),
          )}
      />
    </ConfiguratorPromptFieldLabel>
  );
};
