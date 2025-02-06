// Initially thoguht to share code with `jsr:@cndi/use-template` but the UI is asynchronous and that limits overlap
// instead this Gizmo is built from scratch with shared principals
// remember: make it work, then make it pretty

import { useContext, useEffect, useState } from "preact/hooks";

import SourceShower from "islands/SourceShower.tsx";

import { processMacrosInValue } from "islands/Configurator/macros.ts";

import type {
  CNDIBlockSpec,
  CNDIPrompt,
  CNDIState,
  CNDITemplateObject,
  CNDITemplatePromptResponsePrimitive,
  JSONObject,
} from "islands/Configurator/shared.ts";

import { YAML } from "islands/Configurator/shared.ts";

import { ConfiguratorGizmoContext } from "islands/Configurator/ConfiguratorGizmoContext.tsx";
import { ConfiguratorGizmoProvider } from "islands/Configurator/ConfiguratorContextProvider.tsx";

import { ConfiguratorPromptField } from "islands/Configurator/ConfiguratorPromptField.tsx";

import { type CNDITemplateConditonSpec } from "islands/Configurator/conditionals.ts";
import { evaluateCNDITemplateCondition } from "islands/Configurator/conditionals.ts";
import { FormPanel } from "islands/Configurator/FormPanel.tsx";

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

  const [prompts, setPrompts] = useState(new Map<string, CNDIPrompt>());

  const [blocks, setBlocks] = useState(new Map<string, CNDIBlockSpec>());
  const [_errors, _setErrors] = useState<CNDIGUIErrors>([]);

  const [responses, setResponses] = useState(
    new Map<string, CNDITemplatePromptResponsePrimitive>(),
  );

  const setters = {
    prompts: {
      insert: (key: string, value: CNDIPrompt) => {
        if (prompts.has(key)) return;
        setPrompts((prev) => {
          const newMap = new Map(prev);
          newMap.set(key, value);
          return newMap;
        });
      },
      remove: (key: string) => {
        if (!prompts.has(key)) return;
        setPrompts((prev) => {
          const newMap = new Map(prev);
          newMap.delete(key);
          return newMap;
        });
      },
    },
    responses: {
      update: (key: string, value: CNDITemplatePromptResponsePrimitive) => {
        setResponses((prev) => {
          const newMap = new Map(prev);
          newMap.set(key, value);
          return newMap;
        });
      },
    },
    blocks: {
      insert: (key: string, value: CNDIBlockSpec) => {
        if (prompts.has(key)) return;
        setBlocks((prev) => {
          const newMap = new Map(prev);
          newMap.set(key, value);
          return newMap;
        });
      },
    },
  };

  const $cndi: CNDIState = {
    values: {
      blocks,
      prompts,
      responses,
    },
    setters,
  };

  useEffect(() => {
    console.log("processing macros");
    const processTemplateObject = async () => {
      const processed = (await processMacrosInValue(
        ctx.templateObjectSource as JSONObject,
        $cndi,
      )) as CNDITemplateObject;
      let index = 0;
      for (const [name, spec] of Object.entries(processed.prompts)) {
        console.log("inserting prompt", name);
        setters.prompts.insert(name, { ...spec, index });
        index++;
      }
    };
    processTemplateObject();
  }, []);

  useEffect(() => {
    const prompts = Array.from($cndi.values.prompts.values());
    let index = 0;
    for (const prompt of prompts) {
      let shouldPresentPrompt = true;
      if (Object.keys(prompt).includes("condition")) {
        console.log("evaluating condition", prompt.condition);
        shouldPresentPrompt = evaluateCNDITemplateCondition(
          prompt?.condition!,
          $cndi,
        );
      }
      if (shouldPresentPrompt) {
        console.log("presenting prompt", prompt.name);
        $cndi.setters.prompts.insert(prompt.name, { ...prompt, index });
      } else {
        console.log("removing prompt", prompt);
        $cndi.setters.prompts.remove(prompt.name);
      }
      index++;
    }
  }, [$cndi.values.responses]);

  const promptArray = Array.from($cndi.values.prompts.values());
  const responseRecord = Object.fromEntries(
    Array.from($cndi.values.responses.entries()),
  );

  return (
    <>
      <SourceShower
        source={YAML.stringify(promptArray)}
        name="Prompts Source"
      />
      <FormPanel>
        <form>
          {promptArray.map((p) => (
            <ConfiguratorPromptField
              spec={p}
              value={$cndi.values.responses.get(p.name)}
              onChange={(responseName, newResponseValue) => {
                $cndi.setters.responses.update(responseName, newResponseValue);
              }}
            />
          ))}
        </form>
      </FormPanel>
      <SourceShower
        source={YAML.stringify(responseRecord)}
        name="Response Record"
      />
    </>
  );
};

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
