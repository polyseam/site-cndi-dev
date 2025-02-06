// https://chatgpt.com/share/67a28c24-91e8-8001-b842-080980abcd2e
// remember, ChatGPT is built on a throne of lies

import { asyncReplace } from "islands/Configurator/asyncReplace.ts";
import {
  CNDITemplateConditonSpec,
  evaluateCNDITemplateCondition,
} from "islands/Configurator/conditionals.ts";

import {
  CNDIState,
  CNDITemplateObject,
  CNDITemplatePromptResponsePrimitive,
  JSONArray,
  JSONObject,
  JSONValue,
  YAML,
} from "islands/Configurator/shared.ts";

/**
 * Takes a string with $cndi.get_prompt_response(foo) calls and replaces them with the corresponding prompt responses.
 */
export function literalizeGetPromptResponseCalls(
  input: string,
  { responses }: {
    responses: Map<string, CNDITemplatePromptResponsePrimitive>;
  },
): string {
  const macroRegex = /{{\s*\$cndi\.get_prompt_response\(([^)]+)\)\s*}}/g; // Matches {{ $cndi.get_prompt_response(foo) }}

  return input.replace(
    macroRegex,
    (match: string, promptName: string): string => {
      const cleanPromptName = promptName.trim();
      const response = responses.get(cleanPromptName);
      return response === undefined ? match : `${response}`;
    },
  );
}
type HandleCommentMacroOptions = {
  body: string;
};
function handleCommentMacro(
  args: string[],
  { body }: HandleCommentMacroOptions,
) {
  return { [args[0]]: `# ${body}` };
}

/**
 * Macro handler for $cndi.get_random_string(length)
 * Replaces all occurences of $cndi.get_random_string(length) with a random string of the given length.
 */

const ALPHANUMERIC_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function handleGetRandomStringMacro(args: string[]) {
  const length = parseInt(args[0]) || 32;
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(
    array,
    (byte) => ALPHANUMERIC_CHARSET[byte % ALPHANUMERIC_CHARSET.length],
  ).join("");
}

/**
 * Matches {{ $objectName.methodName(arg1, arg2, ...) }}.
 * We use capturing groups for objectName, methodName, and argument string.
 */
const STRING_MACRO_REGEX = /\{\{\s*\$([^.]+)\.([^(]+)\(([^)]*)\)\s*\}\}/g;

/**
 * Replace *all* occurrences of string macros in `str`.
 * If the macro returns a non-string, we'll JSON-stringify it (you could do otherwise).
 */
async function processStringMacros(
  str: string,
  $cndi: CNDIState,
): Promise<string> {
  return await asyncReplace(str, STRING_MACRO_REGEX, async (
    _match: string,
    objectName: string,
    methodName: string,
    argString: string,
  ) => {
    const args = argString
      .split(",")
      .map((a) => a.trim())
      .filter(Boolean);

    // No "body" for a string macro
    const macroResult = await handleMacroCall(
      objectName,
      methodName,
      args,
      undefined,
      $cndi,
    );

    // If it's already a string, use as-is; otherwise, serialize
    if (typeof macroResult === "string") {
      return macroResult;
    } else {
      return JSON.stringify(macroResult);
    }
  });
}

/**
 * Matches the entire key if it is of the form:
 *   objectName.methodName(arg1, arg2, ...)
 * Example: "foo.bar(x, y)"
 * Supports nested macros inside arguments using `{{ ... }}`.
 */
const KEY_MACRO_REGEX = /^([^.]+)\.([^(]+)\(([\s\S]*)\)$/;

type ParsedMacro = {
  objectName: string;
  methodName: string;
  args: string[];
};

function parseKeyAsMacro(key: string): ParsedMacro | null {
  const match = KEY_MACRO_REGEX.exec(key);
  if (!match) return null;

  const [, objectName, methodName, argString] = match;
  const args = extractArguments(argString);
  return { objectName, methodName, args };
}

/**
 * Extracts KeyMacro arguments while preserving nested macros.
 */
function extractArguments(argString: string): string[] {
  const args: string[] = [];
  let currentArg = "";
  let insideMacro = 0; // Tracks nesting level of `{{ ... }}` macros
  let insideString = false; // Tracks if inside a quoted string

  for (let i = 0; i < argString.length; i++) {
    const char = argString[i];

    if (char === "{" && argString[i + 1] === "{") {
      insideMacro++;
      currentArg += "{{";
      i++; // Skip next '{'
    } else if (char === "}" && argString[i + 1] === "}") {
      insideMacro--;
      currentArg += "}}";
      i++; // Skip next '}'
    } else if ((char === '"' || char === "'") && insideMacro === 0) {
      insideString = !insideString;
      currentArg += char;
    } else if (char === "," && insideMacro === 0 && !insideString) {
      args.push(currentArg.trim());
      currentArg = "";
    } else {
      currentArg += char;
    }
  }

  if (currentArg.trim()) {
    args.push(currentArg.trim());
  }

  return args;
}

/**
 * Macro handler for $cndi.get_prompt_response(foo)
 * Returns the corresponding prompt response.
 */
type HandleGetPromptResponseMacroOptions = {
  $cndi: CNDIState;
};

function handleGetPromptResponseMacro(
  args: string[],
  { $cndi }: HandleGetPromptResponseMacroOptions,
) {
  const promptName = args[0];
  return $cndi.values.responses.get(promptName);
}

/**
 * Macro handler for $cndi.get_block(foo)
 * Returns the corresponding block.
 */

type HandleGetBlockMacroOptions = {
  body: {
    condition?: CNDITemplateConditonSpec;
    args?: Record<string, CNDITemplatePromptResponsePrimitive>;
  };
  $cndi: CNDIState;
};

async function handleGetBlockMacro(
  args: string[],
  { body, $cndi }: HandleGetBlockMacroOptions,
): Promise<JSONObject | null> {
  const [identifier] = args;
  let shouldInsert = true;
  if ("condition" in body) {
    shouldInsert = await evaluateCNDITemplateCondition(
      body.condition as CNDITemplateConditonSpec,
      $cndi,
    );
  }

  if (!shouldInsert) {
    console.log("skipping block lookup", identifier);
    return null;
  }

  console.log("looking up block", identifier);

  const block = $cndi.values.blocks.get(identifier);

  let content_url = "";

  if (block) {
    if (block?.content) {
      return block.content;
    }
    if (block?.content_path) {
      // fetch the content from the path
      console.log('"content_path" unsupported in Web UI', block.name);
    }
    if (block?.content_url) {
      content_url = block.content_url;
    }
  } else {
    content_url = identifier;
  }

  try {
    const blockUrl = new URL(await processStringMacros(content_url, $cndi));
    console.log("fetching block", blockUrl.href);
    const block = await YAML.fetch<JSONObject>(blockUrl.href);
    if (block.success) {
      console.log("fetched block!", blockUrl.href);
      return block.data as JSONObject;
    }
    return null;
  } catch (error) {
    console.log("error fetching block", error);
    return null;
  }
}

/**
 * Given the parts of a macro call (objectName, methodName, args, optional body),
 * return any JSONValue as the result.
 */
async function handleMacroCall(
  objectName: string,
  methodName: string,
  args: string[],
  body: JSONValue | undefined,
  $cndi: CNDIState,
) {
  // // Example logic that depends on "objectName" and "methodName"
  // if (objectName === "foo" && methodName === "bar") {
  //   // Just an example: produce an object with some info
  //   return {
  //     macro: `${objectName}.${methodName}`,
  //     args,
  //     body
  //   };
  // }

  switch (methodName) {
    case "get_prompt_response":
      return handleGetPromptResponseMacro(args, { $cndi });

    case "get_random_string":
      return handleGetRandomStringMacro(args);

    case "get_block": {
      const options = { $cndi, body } as HandleGetBlockMacroOptions;
      return await handleGetBlockMacro(args, options);
    }

    case "comment": {
      const options = { body } as HandleCommentMacroOptions;
      return handleCommentMacro(args, options);
    }
    // Add more macro handlers here

    default:
      break;
  }

  // Fallback for unrecognized macros
  return {
    unrecognizedMacro: `${objectName}.${methodName}`,
    args,
    body,
  };
}

/**
 * Returns true if `value` is an object with exactly one key,
 * and that key is a valid macro.
 */
function isSingleKeyMacroObject(value: JSONValue): value is JSONObject {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }
  const keys = Object.keys(value);
  if (keys.length !== 1) return false;

  // Check if that single key is a macro
  const singleKey = keys[0];
  return parseKeyAsMacro(singleKey) !== null;
}

export async function processMacrosInCNDITemplateObject(
  obj: CNDITemplateObject,
  $cndi: CNDIState,
): Promise<CNDITemplateObject> {
  return await processMacrosInObject(
    obj as JSONObject,
    $cndi,
  ) as CNDITemplateObject;
}

/**
 * Recursively process macros in a JSON-like structure:
 *  - String macros in string values: {{ $foo.bar(...) }}
 *  - Key macros in object keys: foo.bar(...), merging into the parent
 *  - Key macros in array items (if exactly one key):
 *       if the macro result is an array, it splices in
 *       otherwise it replaces the single item
 */
export async function processMacrosInValue(
  value: JSONValue,
  $cndi: CNDIState,
): Promise<JSONValue> {
  if (Array.isArray(value)) {
    return await processMacrosInArray(value, $cndi);
  } else if (value && typeof value === "object") {
    return await processMacrosInObject(value, $cndi);
  } else if (typeof value === "string") {
    // Replace any string macros inline
    return await processStringMacros(value, $cndi);
  } else {
    // number, boolean, null
    return value;
  }
}

/**
 * Process each item in the array, and if an item is a
 * "single-key macro object," then:
 *   - call the macro
 *   - if the result is an array, splice it in place (flatten)
 *   - otherwise, replace that item with the result
 */
async function processMacrosInArray(
  arr: JSONArray,
  $cndi: CNDIState,
): Promise<JSONValue> {
  const result: JSONValue[] = [];

  for (const item of arr) {
    // Check if it's a single-key macro object
    if (isSingleKeyMacroObject(item)) {
      const obj = item as JSONObject;
      const macroKey = Object.keys(obj)[0]; // The single macro key
      // console.log("single macroKey in array", macroKey);
      const parsedMacro = parseKeyAsMacro(macroKey)!; // not null if isSingleKeyMacroObject

      const { objectName, methodName, args } = parsedMacro;
      // The "body" is the value under that single key
      const body = obj[macroKey];

      // Call the macro
      const macroResult = await handleMacroCall(
        objectName,
        methodName,
        args,
        body,
        $cndi,
      );

      if (Array.isArray(macroResult)) {
        // Flatten (expand) the macro array results in place
        result.push(...macroResult);
      } else {
        // Replace this single item with the macro's result
        result.push(macroResult as JSONValue);
      }
    } else {
      // Normal array element
      result.push(item);
    }
  }

  return result;
}

/**
 * Process an object, checking each key if it's a macro.
 */
export async function processMacrosInObject(
  obj: JSONObject,
  $cndi: CNDIState,
): Promise<JSONValue> {
  const result: JSONObject = {};

  for (const [key, rawVal] of Object.entries(obj)) {
    // Recursively process the child value
    const processedVal = await processMacrosInValue(rawVal, $cndi);

    // Check if the key is a macro
    const parsed = parseKeyAsMacro(key);

    if (!parsed) {
      // Not a macro key
      result[key] = processedVal;
    } else {
      // It's a macro key
      const { objectName, methodName, args } = parsed;
      // The processedVal is the "body"
      const macroResult = await handleMacroCall(
        objectName,
        methodName,
        args,
        processedVal,
        $cndi,
      );

      if (macroResult === null) {
        continue;
      }
      insertMacroResultIntoParent(result, macroResult as JSONValue);
    }
  }

  return result;
}
/**
 * Insert the macro result into an object parent,
 * effectively removing the macro key and replacing it
 * with whatever the macro result is.
 */
function insertMacroResultIntoParent(
  parent: JSONObject,
  macroResult: JSONValue,
) {
  if (
    macroResult && typeof macroResult === "object" &&
    !Array.isArray(macroResult)
  ) {
    // Shallow-merge each property
    const objResult = macroResult as JSONObject;
    for (const key of Object.keys(objResult)) {
      parent[key] = objResult[key];
    }
  } else {
    console.error("failed to insert macroResult of type", typeof macroResult);
  }
}
