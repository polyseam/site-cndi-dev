import type { CNDITemplateObject } from "./shared.ts";
import { createContext, type ComponentChildren } from "preact";

type ConfiguratorGizmoContextValue = {
  templateObjectSource?: CNDITemplateObject;
  templateIdentifier?: string;
  children?: ComponentChildren;
};

const initialConfiguratorGizmoContextValue: ConfiguratorGizmoContextValue = {};

export const ConfiguratorGizmoContext = createContext(
  initialConfiguratorGizmoContextValue
);