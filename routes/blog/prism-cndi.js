(function (Prism) {
  /**
   * A custom Prism.js language definition for the "cndi" CLI.
   */

  Prism.languages.cndi = {
    // Single-line comments (# ...)
    comment: {
      pattern: /#.*/,
      greedy: true,
    },
    // The main 'cndi' command
    command: {
      pattern: /(^|\s)(cndi)(?=\s|$)/,
      lookbehind: true,
      alias: "function",
    },
    // Recognized subcommands
    subcommand: {
      pattern:
        /\b(?:create|init|overwrite|ow|run|destroy|upgrade|show-outputs|completions)\b/,
      alias: "function",
    },
    // Flags: -t, --template, --help, etc.
    // This pattern looks for either start-of-line or whitespace, then
    // captures `--` or `-` followed by letters/digits/hyphens, and stops
    // before the next space or end of the string.
    flag: {
      pattern: /(^|\s)--?[a-zA-Z0-9-]+(?=$|\s)/,
      lookbehind: true,
      alias: "function",
    },
    // Paths like "owner/repo"
    path: {
      pattern: /[^\s]+\/[^\s]+/,
      alias: "string",
    },
    // Placeholders in angle brackets: <something>
    placeholder: {
      pattern: /<[^>]+>/,
      greedy: true,
      alias: "placeholder",
    },
    // Commas, periods, etc.
    punctuation: /[.,]/,
    "catchall-string": {
      pattern: /\S+/,
      alias: "string",
    },
  };
})(Prism);
