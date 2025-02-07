import { useState } from "preact/hooks";

const POLYSEAM_TEMPLATE_REGEX =
  /^https:\/\/raw\.githubusercontent\.com\/polyseam\/cndi\/refs\/heads\/main\/templates\/([^/]+)\.yaml$/;

type CNDICreateConfiguratorCLISnippetProps = {
  templateIdentifier: string;
};

export function CNDICreateConfiguratorCLISnippet(
  props: CNDICreateConfiguratorCLISnippetProps,
) {
  const matches = props.templateIdentifier.match(POLYSEAM_TEMPLATE_REGEX);

  const templateIdentifier = matches ? matches[1] : props.templateIdentifier;

  // The full command string that will be copied.
  const command =
    `cndi create -r ~/Downloads/cndi_responses.yaml -t ${templateIdentifier}`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      // Reset "copied" after 1 second
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  // If the command was just copied, display a simple "copied!" message.
  if (copied) {
    return (
      <code
        class="p-2 my-2 ml-0 sm:ml-2 rounded-md monospace bg-[#161b22] hover:bg-[#1f2937] cursor-pointer text-center"
        onClick={copyToClipboard}
      >
        <span class="verb text-purple-200">copied!</span>
      </code>
    );
  }

  return (
    <code
      class="p-2 my-2 ml-0 sm:ml-2 rounded-md monospace bg-[#161b22] hover:bg-[#1f2937] cursor-pointer"
      onClick={copyToClipboard}
    >
      {
        /*
        Each part of the command is wrapped in a <span> that is
        a block element on small screens (causing a line break)
        but inline on larger screens. Adjust the breakpoints as needed.
      */
      }
      <span class="verb text-purple-200 block sm:inline">cndi</span>
      <span class="verb text-purple-200 block sm:inline">create</span>
      <span class="option-name text-green-600 block sm:inline">-r</span>
      <span class="option-val text-purple-200 block sm:inline">
        ~/Downloads/cndi_responses.yaml{" "}
      </span>
      <span class="option-name text-green-600 block sm:inline">-t</span>
      <span class="option-val text-purple-200 block sm:inline">
        {templateIdentifier}
        {" "}
      </span>
      <span class="text-purple-200 block sm:inline">&#x2398;</span>
    </code>
  );
}
