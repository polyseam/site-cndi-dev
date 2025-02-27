import { StandardSection } from "components/Section.tsx";
import TerminalView from "components/TerminalView.tsx";
import { H2, H3, P } from "elements";
import { PrimaryButton } from "components/Button.tsx";

const UseTemplatesCopy = () => (
  <div class="flex flex-col items-center md:items-start">
    <H3>Interactive Configuration</H3>
    <P>
      Easily deploy any application in our Template library to a supported cloud
      destination in minutes. Templates are a CNDI concept, and they can be
      thought of as a &quot;blueprint&quot; for a data stack, built on top of
      ArgoCD, Helm Charts, and Terraform. Check out all our supported templates
      below.
    </P>
    <br />
    <div>
      <a href="/templates">
        <PrimaryButton>Templates</PrimaryButton>
      </a>
    </div>
  </div>
);

export default function UseInteractiveCNDITemplatesSection() {
  return (
    <StandardSection>
      <div class="max-w-screen-lg mx-auto">
        <div class="text-center">
          <H2>
            Use CNDI Templates
            <br />
            for Simplified Deployments
          </H2>
        </div>
        <div class="flex flex-col-reverse md:space-x-10 md:flex-row">
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
