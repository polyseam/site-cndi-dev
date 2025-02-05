// Initially thoguht to share code with `jsr:@cndi/use-template` but the UI is asynchronous and that limits overlap
// instead this Gizmo is built from scratch with shared principals
// remember: make it work, then make it pretty

import { useState, useContext, useEffect } from "preact/hooks";
import * as yaml from "jsr:@std/yaml";

import SourceShower from "islands/SourceShower.tsx";

import {
  processMacrosInObject,
  literalizeGetPromptResponseCalls,

} from "islands/Configurator/macros.ts";

import type {
  CNDITemplateObject,
  CNDIPromptSpec,
  CNDITemplatePromptResponsePrimitive,
  CNDIPrompt,
  JSONObject
} from "./shared.ts";

import { ConfiguratorGizmoContext } from "islands/Configurator/ConfiguratorGizmoContext.tsx";
import { ConfiguratorGizmoProvider } from "islands/Configurator/ConfiguratorContextProvider.tsx";

import { ConfiguratorPromptField } from "islands/Configurator/ConfiguratorPromptField.tsx";

import {
  type CNDITemplateConditonSpec,
  evaluateCNDITemplateCondition,
} from "islands/Configurator/conditionals.ts";

const YAML = {
  ...yaml,
  // deno-lint-ignore no-explicit-any
  stringify: (obj: any, opt = {}) =>
    yaml.stringify(obj, { lineWidth: -1, ...opt }), // prevent auto line wrap
};

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

type ConfiguratorGizmoProps = {
  templateIdentifier: string;
  templateObject: CNDITemplateObject;
};


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
  const [prompts, setPrompts] = useState(new Map<string, CNDIPrompt>());
  const [blocks, setBlocks] = useState(new Map<string, unknown>());
  const [_errors, _setErrors] = useState<CNDIGUIErrors>([]);

  const [responses, setResponses] = useState(
    new Map<string, CNDITemplatePromptResponsePrimitive>()
  );

  const insertBlock = (name: string, value: unknown) => {
    setBlocks((prev) => {
      const newBlocks = new Map(prev);
      const blk = processMacrosInObject(value as JSONObject);
      console.log(JSON.stringify(blk, null, 2));
      newBlocks.set(name, blk);
      return newBlocks;
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
            blk.forEach((p, _innerIndex) => {
              let shouldOutput = true;
              if ("condition" in p) {
                shouldOutput = evaluateCNDITemplateCondition(p.condition, {
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
          // @ts-ignore - we know the condition is there
          shouldOutput = evaluateCNDITemplateCondition(p.condition, {
            responses,
          });
        }

        if (shouldOutput) {
          setPrompts((prev) => {
            const newMap = new Map(prev);
            newMap.set(p.name, { ...p, index: prev.size + specIndex });
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


  const promptArray = Array.from(prompts.values());
  const responseRecord = Object.fromEntries(Array.from(responses.entries()));

  return (
    <>
      <form>
        {promptArray.map((p) => (
          <ConfiguratorPromptField
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
      <SourceShower
        source={YAML.stringify(responseRecord)}
        name="Response Record"
      />
    </>
  );
};



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
  const { condition } = spec.body;
  const _args = spec.body.args;

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
        } catch (_e) {
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
  } catch (_e) {
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


export default function ConfiguratorGizmo(props: ConfiguratorGizmoProps) {
  return (
    <ConfiguratorGizmoProvider
      templateObjectSource={props.templateObject}
      templateIdentifier={props.templateIdentifier}
    >
      <ConfiguratorGizmoForm />
    </ConfiguratorGizmoProvider>
  );
}
