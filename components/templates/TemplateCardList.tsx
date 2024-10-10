// import { ComponentChildren } from "preact";
import SingleTemplateCard from "components/templates/SingleTemplateCard.tsx";

import { data } from "template-details";

export default function TemplateCardList() {
  return (
    <div
      id="w-node-b0548776-59a8-aa1e-3e62-14c7df73e228-a5d56d94"
      class="w-layout-layout quick-stack-11 wf-layout-layout"
    >
      {data.map(({ name, title, type }, idx) => (
        <SingleTemplateCard
          name={name}
          title={title}
          type={type}
          key={`${name}-${idx}`}
        />
      ))}
    </div>
  );
}
