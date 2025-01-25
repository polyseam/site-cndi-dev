type CNDIPromptType =
  | "Input"
  | "Secret"
  | "Confirm"
  // | "Toggle" TODO: wtf is that
  | "Select"
  | "List"
  | "Checkbox"
  | "Number"
  | "File";

type CNDIConfigYaml = unknown;

type CNDIPromptSpec = {
  name: string;
  type: CNDIPromptType;
  message: string;
  default?: string;
  options?: (string | number)[];
};

type CNDITemplateObject = {
  // version: string; TODO
  blocks: {
    name: string;
    content?: Record<string, unknown>;
    content_path?: string;
    content_url?: string;
  }[];
  prompts: CNDIPromptSpec[];
  outputs: {
    cndi_config: CNDIConfigYaml;
    env: Record<string, string>;
    readme: Record<string, string>;
  };
};

type ConfiguratorGizmoProps = {
  templateIdentifier: string;
  templateObject: CNDITemplateObject;
};

const PromptElement = (prompt: CNDIPromptSpec) => {
  switch (prompt.type) {
    case "Input":
      return (
        <input
          type="text"
          id={prompt.name}
          name={prompt.name}
          placeholder={prompt.default}
        />
      );

    case "Secret":
      return (
        <input
          type="password"
          id={prompt.name}
          name={prompt.name}
          placeholder={prompt.default}
        />
      );
    case "Confirm":
      return <input type="checkbox" id={prompt.name} name={prompt.name} />;
    case "Select":
      return (
        <select id={prompt.name} name={prompt.name}>
          <option value={prompt.default}>{prompt.default}</option>
          {prompt?.options?.map((o) => <option value={o}>{o}</option>)}
        </select>
      );
    case "List": // comma separated
      return <input type="input" id={prompt.name} name={prompt.name} />;
    case "Checkbox":
      return (
        <select id={prompt.name} name={prompt.name} multiple>
          <option value={prompt.default}>{prompt.default}</option>
          {prompt?.options?.map((o) => <option value={o}>{o}</option>)}
        </select>
      );
    case "Number":
      return (
        <input
          type="number"
          id={prompt.name}
          name={prompt.name}
          placeholder={prompt.default}
        />
      );
    case "File":
      return <input type="file" id={prompt.name} name={prompt.name} />;
  }
};

const PromptList = (props: { prompts: CNDIPromptSpec[] }) => {
  const { prompts } = props;
  return (
    <form>
      {prompts.map((prompt) => (
        <div>
          <label for={prompt.name}>{prompt.message}</label>
          {PromptElement(prompt)}
        </div>
      ))}
    </form>
  );
};

export default function ConfiguratorGizmo(props: ConfiguratorGizmoProps) {
  return (
    <PromptList
      prompts={(props?.templateObject?.prompts || []) as CNDIPromptSpec[]}
    />
  );
}
