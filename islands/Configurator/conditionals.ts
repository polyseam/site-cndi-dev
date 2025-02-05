import { CNDITemplatePromptResponsePrimitive } from "./shared.ts";
import { literalizeGetPromptResponseCalls } from "./macros.ts";

type CNDITemplateConditionComparator = "==" | "!=" | ">" | "<" | ">=" | "<=";

export type CNDITemplateConditonSpec = [
  CNDITemplatePromptResponsePrimitive,
  CNDITemplateConditionComparator,
  CNDITemplatePromptResponsePrimitive
];

export const CNDITemplateComparators = {
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

export function evaluateCNDITemplateCondition(
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