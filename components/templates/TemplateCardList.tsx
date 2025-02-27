import SingleTemplateCard from "components/templates/SingleTemplateCard.tsx";

import { KNOWN_TEMPLATES } from "@cndi/known-templates";

export default function TemplateCardList() {
  return (
    <div class="flex flex-wrap gap-6 justify-center">
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
