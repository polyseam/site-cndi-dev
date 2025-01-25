import * as yaml from "jsr:@std/yaml";

const YAML = {
  ...yaml,
  // deno-lint-ignore no-explicit-any
  stringify: (obj: any, opt = {}) =>
    yaml.stringify(obj, { lineWidth: -1, ...opt }), // prevent auto line wrap
};

type FetchYamlResult<T> = {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: number;
  };
};

export async function fetchYaml<T = any>(
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
}
