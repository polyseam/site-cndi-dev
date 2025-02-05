import * as yaml from "jsr:@std/yaml";
import { CNDITemplateConditonSpec } from "islands/Configurator/conditionals.ts";

/**
 * Define a type to represent JSON-like values.
 */
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

/**
 * A JSON object, where each key is a string and each value is a JSONValue.
 */
export interface JSONObject {
  [key: string]: JSONValue;
}

/**
 * A JSON array, which is just an array of JSONValue.
 */
export type JSONArray = JSONValue[];

export type CNDIConfigYaml = unknown;
export type CNDIPromptType =
  | "Input"
  | "Secret"
  | "Confirm"
  | "Select"
  | "List"
  | "Checkbox"
  | "Number"
  | "File";
// | "Toggle" ???;
export type CNDIPromptSpec = {
  name: string;
  type: CNDIPromptType;
  message: string;
  default?: string;
  options?: (string | number)[];
  condition?: CNDITemplateConditonSpec;
};

export type CNDITemplateObject = {
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

export type CNDITemplatePromptResponsePrimitive =
  | string
  | number
  | boolean
  | Array<string>
  | Array<number>
  | Array<boolean>;

export interface CNDIPrompt extends CNDIPromptSpec {
  index: number;
}

export type CNDIBlockSpec = {
  name: string;
  content?: JSONObject;
  content_path?: string;
  content_url?: string;
};

type CNDIStateValues = {
  blocks: Map<string, CNDIBlockSpec>;
  prompts: Map<string, CNDIPromptSpec>;
  responses: Map<string, CNDITemplatePromptResponsePrimitive>;
};

export type CNDIState = {
  values: CNDIStateValues;
  setters: {
    blocks: {
      insert: (key: string, value: CNDIBlockSpec) => void;
    };
    prompts: {
      insert: (key: string, value: CNDIPrompt) => void;
      remove: (key: string) => void;
    };
    responses: {
      insert: (key: string, value: CNDITemplatePromptResponsePrimitive) => void;
    };
  };
};

type FetchYamlResult<T> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: number;
  };
};

export const YAML = {
  ...yaml,
  // deno-lint-ignore no-explicit-any
  stringify: (obj: any, opt = {}) =>
    yaml.stringify(obj, { lineWidth: -1, ...opt }), // prevent auto line wrap
  fetch: async function fetchYaml<T = JSONObject>(
    url: string,
  ): Promise<FetchYamlResult<T>> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        // Handle HTTP errors
        const code = response.status === 404 ? 404 : 500;
        return {
          success: false,
          error: {
            message: `HTTP Error: ${response.status} - ${response.statusText}`,
            code,
          },
        };
      }

      const text = await response.text();

      try {
        // Parse the YAML content
        const data = YAML.parse(text) as T;
        return {
          success: true,
          data,
        };
      } catch (parseError) {
        // Handle YAML parsing errors
        const syntaxError = parseError as SyntaxError;
        return {
          success: false,
          error: {
            message: `YAML Parsing Error: ${syntaxError.message}`,
            code: 400, // because the user's yaml is bad we say it's their fault
          },
        };
      }
    } catch (networkError) {
      // Handle network or fetch-related errors
      return {
        success: false,
        error: {
          message: `Network Error: ${(networkError as Error).message}`,
          code: 500,
        },
      };
    }
  },
};
