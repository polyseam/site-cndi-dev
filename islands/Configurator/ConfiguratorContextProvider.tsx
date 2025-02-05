import { ConfiguratorGizmoContext } from "./ConfiguratorGizmoContext.tsx";
import { CNDITemplateObject } from "./shared.ts";
import { ComponentChildren } from "preact";
import type { JSONObject } from "islands/Configurator/shared.ts";
import { processMacrosInObject } from "islands/Configurator/macros.ts";

export type ConfiguratorGizmoProviderProps = {
  templateObjectSource?: CNDITemplateObject;
  templateIdentifier: string;
  children: ComponentChildren;
};

const processTemplateObjectSourceStaticMacros = (obj: CNDITemplateObject) => {
    return processMacrosInObject(obj as JSONObject);
  };

export function ConfiguratorGizmoProvider(
  props: ConfiguratorGizmoProviderProps
) {
  const { templateIdentifier, children } = props;

  // templateObjectSource comes in with strings containing {{ $cndi.some_macro(foo) }}

  const templateObjectSource = processTemplateObjectSourceStaticMacros(props.templateObjectSource!) as CNDITemplateObject;

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
