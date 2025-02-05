
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
