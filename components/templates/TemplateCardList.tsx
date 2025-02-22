// import { ComponentChildren } from "preact";
import SingleTemplateCard from "components/templates/SingleTemplateCard.tsx";

import { KNOWN_TEMPLATES } from "@cndi/known-templates";

export default function TemplateCardList() {
  return (
    <div
      id="w-node-b0548776-59a8-aa1e-3e62-14c7df73e228-a5d56d94"
      class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-11 wf-layout-layout"
    >
      {KNOWN_TEMPLATES.filter(({ ga }) => ga).map(
        ({ name, title, type }, idx) => (
          <SingleTemplateCard
            name={name}
            title={title}
            type={type}
            key={`${name}-${idx}`}
          />
        ),
      )}
    </div>
  );
}
