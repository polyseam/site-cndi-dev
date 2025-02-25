import { StandardSection } from "components/Section.tsx";
import TerminalView from "components/TerminalView.tsx";

const UseTemplatesCopy = () => (
  <div class="flex flex-col items-center md:items-start">
    <h1>Interactive Configuration</h1>
    <div class="text-bff text-base">
      Easily deploy any application in our Template library to a supported cloud
      destination in minutes. Templates are a CNDI concept, and they can be
      thought of as a &quot;blueprint&quot; for a data stack, built on top of
      ArgoCD, Helm Charts, and Terraform. Check out all our supported templates
      below.
    </div>
    <br />
    <div>
      <a href="/templates">
        <button
          type="button"
          class="bg-lightpurp text-white rounded-md no-underline py-3 px-5"
        >
          Templates
        </button>
      </a>
    </div>
  </div>
);

export default function UseInteractiveCNDITemplatesSection() {
  return (
    <StandardSection>
      <div class="max-w-screen-lg mx-auto">
        <h1 class="text-center text-4xl leading-tight font-bold text-white py-10">
          Use CNDI Templates
          <br />
          for Simplified Deployments
        </h1>
        <div class="flex flex-col-reverse md:space-x-8 md:flex-row">
          <div class="flex flex-1">
            <UseTemplatesCopy />
          </div>
          <div class="flex flex-1 justify-center pb-8 md:pb-0">
            <TerminalView src="/images/vhs-animations/cndi-create.gif" />
          </div>
        </div>
      </div>
    </StandardSection>
  );
}
