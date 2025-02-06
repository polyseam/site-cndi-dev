import {
  CNDIState,
  CNDITemplatePromptResponsePrimitive,
} from "islands/Configurator/shared.ts";
import { processMacrosInValue } from "islands/Configurator/macros.ts";

type CNDITemplateConditionComparator = "==" | "!=" | ">" | "<" | ">=" | "<=";

export type CNDITemplateConditonSpec = [
  CNDITemplatePromptResponsePrimitive,
  CNDITemplateConditionComparator,
  CNDITemplatePromptResponsePrimitive,
];

export const CNDITemplateComparators = {
  // comparators are generous with type coercion for better or worse
  "==": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive,
  ) => response == standard,
  "!=": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive,
  ) => response != standard,
  ">": (
    response: CNDITemplatePromptResponsePrimitive,
    standard: CNDITemplatePromptResponsePrimitive,
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
    standard: CNDITemplatePromptResponsePrimitive,
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
    standard: CNDITemplatePromptResponsePrimitive,
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
    standard: CNDITemplatePromptResponsePrimitive,
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

export function evaluateCNDITemplateCondition(
  spec: CNDITemplateConditonSpec,
  $cndi: CNDIState,
) {
  const left =
    (typeof spec[0] === "string"
      ? processMacrosInValue(spec[0], $cndi)
      : spec[0]) as CNDITemplatePromptResponsePrimitive;

  const right =
    (typeof spec[2] === "string"
      ? processMacrosInValue(spec[2], $cndi)
      : spec[2]) as CNDITemplatePromptResponsePrimitive;

  const comparator = spec[1];
  const result = CNDITemplateComparators[comparator](left, right);
  return result;
}
