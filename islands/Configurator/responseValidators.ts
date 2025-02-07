import {
  type CNDIPromptSpec,
  type CNDIPromptType,
  type CNDITemplatePromptResponsePrimitive,
} from "islands/Configurator/shared.ts";

import { default as validator } from "validator";

export type ValidationError = {
  message: string;
  validator: string;
};

type CNDIValidatorInput = {
  value: CNDITemplatePromptResponsePrimitive;
  type: CNDIPromptType;
  arg?: unknown;
  name: string;
};

type CNDIInvalidReason = string;

type CNDIValidator = (input: CNDIValidatorInput) => CNDIInvalidReason | null;

function isSlug(input: string): boolean {
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugPattern.test(input);
}

// each validator returns an error message or null
export const BuiltInValidators: Record<string, CNDIValidator> = {
  is_slug: ({ value }: CNDIValidatorInput) => {
    if (isSlug(value as string)) {
      return null;
    }
    return `is not a valid slug, must be lowercase and contain only letters, numbers, and hyphens`;
  },
  email: ({ value }: CNDIValidatorInput) => {
    if (validator.isEmail(value as string)) {
      return null;
    }

    return `must be a valid email address`;
  },
  hostname: ({ value }: CNDIValidatorInput) => {
    if (validator.isFQDN(value as string)) {
      return null;
    }

    return `must be a valid hostname`;
  },
  url: ({ value }: CNDIValidatorInput) => {
    if (validator.isURL(value as string)) {
      return null;
    }
    return `must be valid URL`;
  },
  min_length: ({ value, arg }: CNDIValidatorInput) => {
    const len = arg as number;
    if ((value as string).length >= len) {
      return null;
    }

    return `must be at least ${len} characters long`;
  },
  is_json: ({ value }: CNDIValidatorInput) => {
    try {
      JSON.parse(value as string);
      return null;
    } catch (_parseError) {
      return `must be valid JSON`;
    }
  },
} as const;

export const validateFields = (
  value: CNDITemplatePromptResponsePrimitive,
  { validators, name, type }: CNDIPromptSpec,
): { message: string; validator: string }[] => {
  const errs: { message: string; validator: string }[] = [];

  validators?.map((
    vx: string | Record<string, CNDITemplatePromptResponsePrimitive>,
  ) => {
    const vName = Object.keys(vx)?.[0] ?? vx;

    const message = BuiltInValidators[vName as string]({
      arg: typeof vx === "object" ? vx[vName] : undefined,
      value,
      type,
      name,
    });

    if (message) {
      errs.push({ message, validator: vName });
    }
  });
  return errs;
};
