// Initially thoguht to share code with `jsr:@cndi/use-template` but the UI is asynchronous and that limits overlap
// instead this Gizmo is built from scratch with shared principals
// remember: make it work, then make it pretty

import { createContext, type ComponentChildren } from "preact";
import { useState, useContext, useEffect } from "preact/hooks";
import * as yaml from "jsr:@std/yaml";
import SourceShower from "islands/SourceShower.tsx";

const YAML = {
  ...yaml,
  // deno-lint-ignore no-explicit-any
  stringify: (obj: any, opt = {}) =>
    yaml.stringify(obj, { lineWidth: -1, ...opt }), // prevent auto line wrap
};

export type CNDITemplatePromptResponsePrimitive =
  | string
  | number
  | boolean
  | Array<string>
  | Array<number>
  | Array<boolean>;

type CNDIFileMap = {
  "README.md": string;
  ".env": string;
  "cndi_config.yaml": string;
  [filename: string]: string;
};

export type UseTemplateResult = {
  responses: Record<string, CNDITemplatePromptResponsePrimitive>;
  files: CNDIFileMap;
};

// ordered list
export type CNDIGUIError = { title: string; description: string; code: number };
export type CNDIGUIErrors = CNDIGUIError[];

// const $cndi = {
//   responses: new Map<string, CNDITemplatePromptResponsePrimitive>(),
//   getResponsesAsRecord: (skipUndefined = false) => {
//     const responses: Record<string, CNDITemplatePromptResponsePrimitive> = {};
//     $cndi.responses.forEach(
//       (val: CNDITemplatePromptResponsePrimitive, key: string) => {
//         if (skipUndefined && val === undefined) return;
//         responses[key] = val;
//       }
//     );
//     return responses;
//   },
//   blocks: new Map<string, unknown>(),
//   errors: []
// };

// const CNDIGizmoContext = createContext({
//   responses: new Map<string, CNDITemplatePromptResponsePrimitive>(),
//   blocks: new Map<string, unknown>(),
//   errors: [],
// });

type CNDIConfigYaml = unknown;
type CNDIPromptType =
  | "Input"
  | "Secret"
  | "Confirm"
  | "Select"
  | "List"
  | "Checkbox"
  | "Number"
  | "File";
// | "Toggle" ???;

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
  children: ComponentChildren;
};

interface CNDIPrompt extends CNDIPromptSpec {
  index: number;
}

type ConfiguratorGizmoContextValue = {
  templateObjectSource?: CNDITemplateObject;
  templateIdentifier?: string;
  children?: ComponentChildren;
};

const initialConfiguratorGizmoContextValue: ConfiguratorGizmoContextValue = {};

const ConfiguratorGizmoContext = createContext(
  initialConfiguratorGizmoContextValue
);

type ConfiguratorGizmoProviderProps = {
  templateObjectSource?: CNDITemplateObject;
  templateIdentifier?: string;
  children: ComponentChildren;
};

export function ConfiguratorGizmoProvider(
  props: ConfiguratorGizmoProviderProps
) {
  const { templateIdentifier, children } = props;
  const templateObjectSource = props.templateObjectSource!;

  const contextValue = {
    templateObjectSource,
    templateIdentifier,
  };

  return (
    <ConfiguratorGizmoContext.Provider value={contextValue}>
      {children}
    </ConfiguratorGizmoContext.Provider>
  );
}

type UpdatePromptResponse = (
  responseName: string,
  newResponseValue: CNDITemplatePromptResponsePrimitive
) => void;

type PromptFieldArgs = {
  spec: CNDIPromptSpec;
  onChange: UpdatePromptResponse;
  value?: CNDITemplatePromptResponsePrimitive;
};

const PromptField = ({ spec, onChange, value }: PromptFieldArgs) => {
  const message = " " + spec.message;
  switch (spec.type) {
    case "Input":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder:text-gray-900"
            type="text"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={String(value) || ""}
            onInput={(e) => {
              console.log('input')
              onChange(e.currentTarget.name, e.currentTarget.value)
            }}
          />
        </label>
      );

    case "Secret":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder:text-gray-900"
            type="password"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={String(value) || ""}
            onInput={(e) =>
              onChange(e.currentTarget.name, e.currentTarget.value)
            }
          />
        </label>
      );
    case "Confirm":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input type="checkbox" id={spec.name} name={spec.name} />
        </label>
      );
    case "Select":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <select
            id={spec.name}
            name={spec.name}
            class="text-black p-2 rounded"
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.value)
            }}
          >
            <option value={spec.default}>{spec.default}</option>
            {spec?.options?.map((o) => (
              <option value={o}>{o}</option>
            ))}
          </select>
        </label>
      );
    case "List": // comma separated
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded placeholder:text-gray-900"
            type="text"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            value={`${value}` || ""}
            onInput={(e) =>
              onChange(
                e.currentTarget.name,
                e.currentTarget.value.split(",").map((s) => s.trim())
              )
            }
          />
        </label>
      );
    case "Checkbox":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <select
            id={spec.name}
            name={spec.name}
            multiple
            class="text-black p-2 rounded"
            onChange={(e) => {
              onChange(e.currentTarget.name, e.currentTarget.value)
            }}
          >
            <option value={spec.default}>{spec.default}</option>
            {spec?.options?.map((o) => (
              <option value={o}>{o}</option>
            ))}
          </select>
        </label>
      );
    case "Number":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded"
            type="number"
            id={spec.name}
            name={spec.name}
            placeholder={spec.default}
            onChange={(e) =>{
              onChange(e.currentTarget.name, Number(e.currentTarget.value))
            }}
          />
        </label>
      );
    case "File":
      return (
        <label name={spec.name} class="text-white">
          {message}
          <input
            class="text-black p-2 rounded"
            type="file"
            id={spec.name}
            name={spec.name}
          />
        </label>
      );
  }
};

type CNDITemplateConditionComparator = "==" | "!=" | ">" | "<" | ">=" | "<=";

type CNDITemplateConditonSpec = [
  CNDITemplatePromptResponsePrimitive,
  CNDITemplateConditionComparator,
  CNDITemplatePromptResponsePrimitive
];

type CNDITemplateBlockSpec = {
  identifier: string;
  body: {
    args: Record<string, CNDITemplatePromptResponsePrimitive>;
    condition: CNDITemplateConditonSpec;
  };
};

const ConfiguratorGizmoForm = () => {
  const ctx = useContext(ConfiguratorGizmoContext);
  const promptSpecs = ctx.templateObjectSource?.prompts || [];
  const [version, setVersion] = useState(0);
  const [prompts, setPrompts] = useState(new Map<string, CNDIPrompt>());
  const [blocks, setBlocks] = useState(new Map<string, unknown>());
  const [errors, setErrors] = useState<CNDIGUIErrors>([]);

  const [responses, setResponses] = useState(
    new Map<string, CNDITemplatePromptResponsePrimitive>()
  );

  const insertBlock = (name: string, value: unknown) => {
    setBlocks((prev) => {
      prev.set(name, value);
      return prev;
    });
  };

  useEffect(() => {
    console.log("effect fired");
    promptSpecs.forEach(
      async (p: CNDIPromptSpec | CNDITemplateBlockSpec, specIndex: number) => {
        let identifier = null;

        if (!("type" in p)) {
          identifier = Object.keys(p)[0];

          if (!identifier || !identifier.startsWith("$cndi.get_block")) {
            throw new Error(
              `Invalid prompt:\n\n -- ${JSON.stringify(p, null, 2)}\n --`
            );
          }

          // @ts-ignore - we know the identifier is a key
          const body = p[identifier];

          const blockSpec = {
            identifier,
            body,
          };

          const blk = await getBlock(blockSpec, {
            responses,
            insertBlock,
            blocks,
          });

          if (Array.isArray(blk)) {
            blk.forEach((p, innerIndex) => {
              let shouldOutput = true;
              if ("condition" in p) {
                shouldOutput = evaluateCNDITemplateCondition(p.condition, {
                  responses,
                });
              }
              if (shouldOutput) {
                setPrompts((prev) => {
                  const newMap = new Map(prev);
                  newMap.set(p.name, { ...p, index: newMap.size + innerIndex });
                  return newMap;
                });
              } else if (prompts.has(p.name)) {
                console.log("deleting prompt from blk", p.name);
                setPrompts((prev) => {
                  const newMap = new Map(prev);
                  newMap.delete(p.name);
                  return newMap;
                });
              }
            });
          }
          return;
        }

        let shouldOutput = true;
        if ("condition" in p) {
          shouldOutput = evaluateCNDITemplateCondition(p.condition!, {
            responses,
          });
        }

        if (shouldOutput) {
          setPrompts((prev) => {
            const newMap = new Map(prev);
            newMap.set(p.name, { ...p, index: specIndex });
            return newMap;
          });
        } else if (prompts.has(p.name)) {
          console.log("deleting prompt from promptSpec", p.name);
          setPrompts((prev) => {
            const newMap = new Map(prev);
            newMap.delete(p.name);
            return newMap;
          });
        }
      }
    );
  }, [responses]);

  console.log("prompts!!!", prompts.size);
  const promptArray = Array.from(prompts.values());
  // .toSorted(
  //   (a, b) => a.index - b.index
  // );

  console.log("promptArrayLength", promptArray.length);
  const responseRecord = Object.fromEntries(Array.from(responses.entries()))
  return (
    <>
    <form>
      {promptArray.map((p) => (
        <PromptField
          spec={p}
          value={responses.get(p.name)}
          onChange={(responseName, newResponseValue) => {
            // setVersion((prev) => prev + 1);
            setResponses((prev) => {
              const newResponses = new Map(prev);
              newResponses.set(responseName, newResponseValue);
              console.log("setting response", responseName, newResponseValue);
              return newResponses;
            });
          }}
        />
      ))}
    </form>
    <SourceShower source={YAML.stringify(responseRecord)} name="Response Record" />
    </>
  );
};

function literalizeGetPromptResponseCalls(
  input: string,
  { responses }: { responses: Map<string, CNDITemplatePromptResponsePrimitive> }
): string {
  const macroRegex = /{{\s*\$cndi\.get_prompt_response\(([^)]+)\)\s*}}/g; // Matches {{ $cndi.get_prompt_response(foo) }}

  return input.replace(
    macroRegex,
    (match: string, promptName: string): string => {
      const cleanPromptName = promptName.trim();
      const response = responses.get(cleanPromptName);
      return response === undefined ? match : `${response}`;
    }
  );
}

function resolveGetBlockIdentifier(
  identifierSpec: string,
  { responses }: { responses: Map<string, CNDITemplatePromptResponsePrimitive> }
) {
  // 1. determine if the identifier depends on $cndi.get_prompt_response(foo);
  // 2. if so, consult state to see if that value is available
  // 3. if not, decide we might try later on -- not sure why this is the case, but CLI mode does this

  const identifier = identifierSpec.split("$cndi.get_block(")[1].slice(0, -1);

  return literalizeGetPromptResponseCalls(identifier, { responses });
}

const CNDITemplateComparators = {
  // comparators are generous with type coercion for better or worse
  "==": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive
  ) => response == standard,
  "!=": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive
  ) => response != standard,
  ">": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive
  ) => {
    if (typeof standard !== "number") {
      throw new Error("'>' can be used in comparisons only");
    }
    if (typeof response === "number") {
      return response > standard;
    }
    throw new Error("cannot compare non-number to number");
  },
  "<": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive
  ) => {
    if (typeof standard !== "number") {
      throw new Error("'<' can be used in comparisons only");
    }
    if (typeof response === "number") {
      return response < standard;
    }
    throw new Error("cannot compare non-number to number");
  },
  "<=": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive
  ) => {
    if (typeof standard !== "number") {
      throw new Error("'<=' can be used in comparisons only");
    }
    if (typeof response === "number") {
      return response <= standard;
    }
    throw new Error("cannot compare non-number to number");
  },
  ">=": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive
  ) => {
    if (typeof standard !== "number") {
      throw new Error("'>=' can be used in comparisons only");
    }
    if (typeof response === "number") {
      return response >= standard;
    }
    throw new Error("cannot compare non-number to number");
  },
} as const;

function evaluateCNDITemplateCondition(
  spec: CNDITemplateConditonSpec,
  { responses }: { responses: Map<string, CNDITemplatePromptResponsePrimitive> }
) {
  const left =
    typeof spec[0] === "string"
      ? literalizeGetPromptResponseCalls(spec[0], { responses })
      : spec[0];
  const right =
    typeof spec[2] === "string"
      ? literalizeGetPromptResponseCalls(spec[2], { responses })
      : spec[2];
  const comparator = spec[1];
  const result = CNDITemplateComparators[comparator](left, right);
  return result;
}

async function getBlock(
  spec: CNDITemplateBlockSpec,
  {
    responses,
    blocks,
    insertBlock,
  }: {
    responses: Map<string, CNDITemplatePromptResponsePrimitive>;
    blocks: Map<string, unknown>;
    insertBlock: (name: string, value: unknown) => void;
  }
) {
  let shouldIncludeBlock = true;
  const { args, condition } = spec.body;

  if (condition) {
    shouldIncludeBlock = evaluateCNDITemplateCondition(condition, {
      responses,
    });
  }

  if (!shouldIncludeBlock) return null;

  const identifier = resolveGetBlockIdentifier(spec.identifier, { responses });

  // TODO: use body
  try {
    const blockUrl = new URL(identifier);
    console.log("fetching block from URL", blockUrl);
    try {
      const blockResponse = await fetch(blockUrl);
      if (blockResponse.ok) {
        const blockText = await blockResponse.text();
        try {
          const blockData = YAML.parse(blockText);
          insertBlock(identifier, blockData);
          return blockData;
        } catch (e) {
          throw new Error(
            `Failed to parse block: ${blockResponse.status} - ${blockResponse.statusText}`
          );
        }
      } else {
        throw new Error(
          `Failed to fetch block: ${blockResponse.status} - ${blockResponse.statusText}`
        );
      }
    } catch (e) {
      throw new Error(
        `Failed to fetch block with identifier ${identifier} \n ${JSON.stringify(
          e,
          null,
          2
        )}`
      );
    }
  } catch (e) {
    // constructing a URL failed, identifier must be a block name
    // cannot be a relative path because we don't support that in a web UI
    // we could, but it would require file uploads and `/foo` would be relative to the browser, not the disk
    // so we would need to add a file upload mechanism
    // for now, we'll just throw an error

    const fileIntent = identifier.startsWith(".") || identifier.startsWith("/");
    if (fileIntent) {
      throw new Error(`Invalid block identifier: ${identifier}`);
    }
    return blocks.get(identifier);
  }
}

function getBlocks(templateObject: CNDITemplateObject) {}

function useTemplate() {
  // 1. process prompts
}

export default function ConfiguratorGizmo(props: ConfiguratorGizmoProps) {
  // const prompts = (props?.templateObject?.prompts || []).flatMap((p) => {
  //   let identifier = null;
  //   if (!p?.type) {
  //     identifier = Object.keys(p)[0];
  //     if (!identifier || !identifier.startsWith("$cndi.get_block")) {
  //       throw new Error(
  //         `Invalid prompt:\n\n -- ${JSON.stringify(p, null, 2)}\n --`
  //       );
  //     }
  //     return getBlock(identifier);
  //   }
  //   return p;
  // }) as CNDIPromptSpec[];

  return (
    <ConfiguratorGizmoProvider
      templateObjectSource={props.templateObject}
      templateIdentifier={props.templateIdentifier}
    >
      <ConfiguratorGizmoForm />
    </ConfiguratorGizmoProvider>
  );
}
