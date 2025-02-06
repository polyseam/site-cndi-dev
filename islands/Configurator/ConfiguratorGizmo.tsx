// Initially thoguht to share code with `jsr:@cndi/use-template` but the UI is asynchronous and that limits overlap
// instead this Gizmo is built from scratch with shared principals
// remember: make it work, then make it pretty

import { useContext, useEffect, useState } from "preact/hooks";

import SourceShower from "islands/SourceShower.tsx";

import { processMacrosInCNDITemplateObject } from "islands/Configurator/macros.ts";

import type {
  CNDIBlockSpec,
  CNDIPrompt,
  CNDIState,
  CNDITemplateObject,
  CNDITemplatePromptResponsePrimitive,
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

const processTemplateObject = async (
  obj: CNDITemplateObject,
  $cndi: CNDIState
): Promise<void> => {
  const processed = (await processMacrosInCNDITemplateObject(
    obj,
    $cndi
  )) as CNDITemplateObject;

  const promises = processed.prompts.map(async (spec, index) => {
    if (!spec?.name) {
      console.warn("Prompt spec missing name", spec);
      return null;
    }

    const conditionMet = Array.isArray(spec?.condition)
      ? await evaluateCNDITemplateCondition(spec.condition, $cndi)
      : true;

    return {
      ...spec,
      index,
      conditionMet,
    };
  })

  const newPrompts = (await Promise.all(promises)).filter(Boolean);
  
  $cndi.setters.prompts.set(newPrompts as CNDIPrompt[]);
};

const ConfiguratorGizmoForm = () => {
  const ctx = useContext(ConfiguratorGizmoContext);

  const [prompts, setPrompts] = useState([] as CNDIPrompt[]);

  const [blocks, _setBlocks] = useState(new Map<string, CNDIBlockSpec>());
  const [_errors, _setErrors] = useState<CNDIGUIErrors>([]);

  const [responses, setResponses] = useState(
    new Map<string, CNDITemplatePromptResponsePrimitive>()
  );
  
  const $cndi: CNDIState = {
    values: {
      blocks,
      prompts,
      responses,
    },
    setters:{
      responses: {
        upsert: (key: string, value: CNDITemplatePromptResponsePrimitive) => {
          setResponses((prev) => {
            const newMap = new Map(prev);
            newMap.set(key, value);
            return newMap;
          });
        },
      },
      prompts: {
        set: (prompts: CNDIPrompt[]) => {
          setPrompts((_prev) => {
            return [...prompts];
          });
        },
      },
    },
  };

  const responseRecord = Object.fromEntries(Array.from(responses.entries()));

  useEffect(() => {
    processTemplateObject(
      ctx.templateObjectSource as CNDITemplateObject,
      $cndi
    );
  }, [responses]);

  const promptArray = Array.from($cndi.values.prompts.values()).filter(
    ({ conditionMet }) => conditionMet
  );

  return (
    <>
      <FormPanel>
        <form>
          {promptArray.map((p) => (
            <ConfiguratorPromptField
              spec={p}
              value={$cndi.values.responses.get(p.name)}
              onChange={(responseName, newResponseValue) => {
                setResponses((prev) => {
                  const newMap = new Map(prev);
                  newMap.set(responseName, newResponseValue);
                  return newMap;
                });
              }}
            />
          ))}
        </form>
      </FormPanel>
      <SourceShower
        source={YAML.stringify(promptArray)}
        name="Prompts Source"
      />
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
