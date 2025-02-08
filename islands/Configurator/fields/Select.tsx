import { useEffect } from "preact/hooks";
import {
  ConfiguratorPromptFieldLabel,
  type ConfiguratorPromptFieldProps,
  deriveInputAttribute,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

export const Select = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;
  const defaultValue = deriveInputAttribute(spec.default);
  const multiple = spec.type === "Checkbox";

  useEffect(() => {
    onChange(name, defaultValue);
  }, []);

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <select
        id={name}
        name={name}
        class="p-2 m-2 rounded text-gray-200 placeholder:text-gray-400 bg-[--dark-purp] border-r-8 border-transparent text-lg"
        onChange={(e) => {
          onChange(e.currentTarget.name, e.currentTarget.value);
        }}
        placeholder={name}
        defaultValue={defaultValue}
        multiple={multiple}
      >
        {spec?.options?.map((o) => (
          <option value={deriveInputAttribute(o)}>{o}</option>
        ))}
      </select>
    </ConfiguratorPromptFieldLabel>
  );
};
