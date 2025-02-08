import {
  ConfiguratorPromptFieldLabel,
  type ConfiguratorPromptFieldProps,
} from "islands/Configurator/ConfiguratorPromptField.tsx";

export const File = (props: ConfiguratorPromptFieldProps) => {
  const { spec, onChange } = props;
  const { name, message } = spec;

  return (
    <ConfiguratorPromptFieldLabel message={message}>
      <input
        name={name}
        type="file"
        class="m-2 p-2 text-lg block text-gray-200 placeholder:text-gray-400 bg-[--dark-purp] rounded cursor-pointer focus:outline-none"
        id={name}
        onChange={async (e) => {
          const files = e.currentTarget.files;

          if (!files) {
            onChange(name, "");
            return;
          }

          try {
            const objectURL = URL.createObjectURL(files[0]);
            const d = await fetch(objectURL);
            const text = await d.text();

            onChange(name, text);
          } catch (e) {
            console.error(e);
            onChange(name, "");
          }
        }}
      />
    </ConfiguratorPromptFieldLabel>
  );
};
