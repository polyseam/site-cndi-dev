import {
  ConfiguratorPromptFieldLabel,
  type ConfiguratorPromptFieldProps,
  deriveInputAttribute,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

export const Select = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange, value } = props;
  const { name, message } = spec;
  const selected = deriveInputAttribute(value);
  const multiple = spec.type === "Checkbox";
  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <select
        id={name}
        name={name}
        class="p-2 m-2 rounded text-gray-200 placeholder:text-gray-400 bg-[--dark-purp] border-r-8 border-transparent text-lg"
        onChange={(e) => {
          console.log(
            "selecting",
            e.currentTarget.value,
            "for",
            e.currentTarget.name,
          );
          onChange(e.currentTarget.name, e.currentTarget.value);
        }}
        value={selected}
        multiple={multiple}
      >
        {spec?.options?.map((o) => (
          <option value={deriveInputAttribute(o)}>{o}</option>
        ))}
      </select>
    </ConfiguratorPromptFieldLabel>
  );
};
