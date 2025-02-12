import { useState } from "preact/hooks";

declare global {
  interface Window {
    analytics?: {
      // deno-lint-ignore no-explicit-any
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}
type Slug = `${string}/${string}`;
type CNDICreateCLISnippetProps = {
  templateName: string;
  deploymentTargetLabel: Slug;
};

export default function CNDICreateCLISnippet({
  templateName,
  deploymentTargetLabel,
}: CNDICreateCLISnippetProps) {
  const command = `cndi create -t ${templateName}`;

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const [deployment_target_provider, deployment_target_distribution] =
      deploymentTargetLabel.split("/");
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      // Track copied event
      const data = {
        templateIdentifier: templateName,
        deployment_target_provider,
        deployment_target_distribution,
        configurator: false,
      };
      // deno-lint-ignore no-window
      window?.analytics?.track("CLI Snippet Copied", data);
      // Reset copied after 1 second
      setTimeout(() => setCopied(false), 1000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  if (copied) {
    return (
      <code
        class="p-2 rounded-md monospace bg-[#161b22] hover:bg-[#1f2937] cursor-pointer"
        onClick={copyToClipboard}
      >
        <span class="verb text-purple-200">copied!</span>
      </code>
    );
  }

  return (
    <code
      class="p-2 rounded-md monospace bg-[#161b22] hover:bg-[#1f2937] cursor-pointer"
      onClick={copyToClipboard}
    >
      <span class="verb text-purple-200">cndi{" "}</span>
      <span class="verb text-purple-200">create{" "}</span>
      <span class="option-name text-green-600">-t{" "}</span>
      <span class="option-val text-purple-200">{templateName}{" "}</span>
      <span class="text-purple-200">&#x2398;</span>
    </code>
  );
}
