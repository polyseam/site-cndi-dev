// https://chatgpt.com/share/67a28c24-91e8-8001-b842-080980abcd2e
// remember, ChatGPT is built on a throne of lies

import { CNDITemplatePromptResponsePrimitive, JSONObject, JSONValue } from "islands/Configurator/shared.ts";


/**
 * Takes a string with $cndi.get_prompt_response(foo) calls and replaces them with the corresponding prompt responses.
 */ 
export function literalizeGetPromptResponseCalls(
  input: string,
  { responses }: { responses: Map<string, CNDITemplatePromptResponsePrimitive> }
): string {
  const macroRegex = /{{\s*\$cndi\.get_prompt_response\(([^)]+)\)\s*}}/g; // Matches {{ $cndi.get_prompt_response(foo) }}

  return input.replace(
    macroRegex,
    (match: string, promptName: string): string => {
      const cleanPromptName = promptName.trim();
      const response = responses.get(cleanPromptName);
      return response === undefined ? match : `${response}`;
    }
  );
}

/**
 * Macro handler for $cndi.get_random_string(length)
 * Replaces all occurences of $cndi.get_random_string(length) with a random string of the given length.
 */

const ALPHANUMERIC_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function handleGetRandomStringMacro(args: [string]) {
  const length = parseInt(args[0]) || 32;
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(
    array,
    (byte) => ALPHANUMERIC_CHARSET[byte % ALPHANUMERIC_CHARSET.length],
  ).join("");
}

/**
 * Placeholder for the macro-processing logic.
 * Replace with your own logic to handle macros in a string.
 */
function processStringMacros(str: string): string {
  // Example:
  // return str.replace(...);
  // For demonstration, we'll just return the string unchanged:
  // Regex to find all occurrences of the macro
  const macroRegex = /\{\{\s*\$([^.]+)\.([^(]+)\(([^)]*)\)\s*\}\}/g;

  return str.replace(
    macroRegex,
    (match, macroObject, macroMethod, macroArgs) => {
      // match -> the full matched string e.g. "{{ $foo.processBar(xyz) }}"
      // macroObject -> the part after '$', e.g. "foo"
      // macroMethod -> the method name, e.g. "processBar"
      // macroArgs -> the inside of parentheses, e.g. "xyz"

      // 1. Parse arguments if needed
      const args = macroArgs.split(",").map((arg: string) => arg.trim());

      // 2. Invoke your macro handling logic
      //    This could be anything—maybe you have a map of objects/methods you can call,
      //    or you just handle each known macro type manually.
      if (macroObject === "cndi") {
        // Example of manual handling:
        switch (macroMethod) {
          case "get_random_string":
            return handleGetRandomStringMacro(args);
          default:
            console.warn("Unknown macro method:", macroMethod);
        }
      }

      // If no known macro found, return the original match or handle gracefully
      return match;
    },
  );
}

/**
 * Recursively traverse a JSON-like structure and process macro strings.
 * @param value A JSONValue (object, array, string, number, boolean, or null).
 * @returns A new JSONValue with macros processed (where applicable).
 */
export function processMacrosInObject(value: JSONValue): JSONValue {
  if (Array.isArray(value)) {
    // Process each item in the array
    return value.map((item) => processMacrosInObject(item));
  } else if (value && typeof value === "object") {
    // value is a JSON object
    const result: JSONObject = {};
    for (const key in value) {
      // Safely index into value (which we know is an object here)
      const child = value[key];
      result[key] = processMacrosInObject(child);
    }
    return result;
  } else if (typeof value === "string") {
    // Process macros in the string
    return processStringMacros(value);
  }

  // For numbers, booleans, or null, return as is
  return value;
}
