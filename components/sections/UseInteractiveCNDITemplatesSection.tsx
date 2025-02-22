import TerminalView from "components/TerminalView.tsx";
export default function UseInteractiveCNDITemplatesSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg">
        <h1 class="text-center text-4xl leading-tight font-bold text-white py-10">
          Use CNDI Templates
          <br />
          for Simplified Deployments
        </h1>
        <div class="flex sm:flex-row">
          <div class="flex flex-col sm:items-start">
            <h1>Interactive Configuration</h1>
            <div>
              Easily deploy any application in our Template library to a
              supported cloud destination in minutes. Templates are a CNDI
              concept, and they can be thought of as a &quot;blueprint&quot; for
              a data stack, built on top of ArgoCD, Helm Charts, and Terraform.
              Check out all our supported templates below.
            </div>
            <a
              href="/templates"
              class="bg-lightpurp text-white rounded-md mt-2 no-underline py-3 px-5"
            >
              Templates
            </a>
          </div>
          <div class="flex flex-start">
            <TerminalView src="/images/vhs-animations/cndi-create.gif" />
          </div>
        </div>
      </div>
    </section>
  );
}
