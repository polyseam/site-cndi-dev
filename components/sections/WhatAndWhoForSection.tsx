import { StandardSection } from "components/Section.tsx";
import { ComponentChild } from "preact";

type Props = {
  children: [ComponentChild, ComponentChild];
};

export default function WhatAndWhoForSection({ children }: Props) {
  return (
    <StandardSection>
      <div class="mx-auto max-w-screen-lg p-16">
        <div class="grid grid-cols lg:grid-cols-2 gap-5">
          {children}
        </div>
      </div>
    </StandardSection>
  );
}
