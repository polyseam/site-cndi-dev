import { ComponentChildren } from "preact";

export const FormPanel = ({ children }: { children: ComponentChildren }) => {
  return <div class="my-4 p-4 bg-[var(--softgrey)] rounded">{children}</div>;
};
