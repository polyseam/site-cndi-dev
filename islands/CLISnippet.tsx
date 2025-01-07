import { useState } from "preact/hooks";

declare global {
  interface Window {
    analytics?: {
      // deno-lint-ignore no-explicit-any
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}

type CNDICreateCLISnippetProps = {
  templateName: string;
  deploymentTargetLabel: string;
};

export default function CNDICreateCLISnippet({
  templateName,
  deploymentTargetLabel,
}: CNDICreateCLISnippetProps) {
  const command = `cndi create -t ${templateName}`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      // Track copied event
      // deno-lint-ignore no-window
      window?.analytics?.track("CLI Snippet Copied", {
        templateName,
        deploymentTargetLabel,
      });
      // Reset copied after 1 second
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  if (copied) {
    return (
      <code
        class="p-2 my-2 ml-0 sm:ml-2 rounded-md monospace bg-[#161b22] hover:bg-[#1f2937] cursor-pointer"
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
      <span class="verb text-purple-200">cndi{" "}</span>
      <span class="verb text-purple-200">create{" "}</span>
      <span class="option-name text-green-600">-t{" "}</span>
      <span class="option-val text-purple-200">{templateName}</span>
    </code>
  );
}
