import type { CNDITemplateObject } from "./shared.ts";
import { type ComponentChildren, createContext } from "preact";

type ConfiguratorGizmoContextValue = {
  templateObjectSource?: CNDITemplateObject;
  templateIdentifier?: string;
  children?: ComponentChildren;
};

const initialConfiguratorGizmoContextValue: ConfiguratorGizmoContextValue = {};

export const ConfiguratorGizmoContext = createContext(
  initialConfiguratorGizmoContextValue,
);
