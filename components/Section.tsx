import { ComponentChildren } from "preact";

export function FullWidthSection(
  { children }: { children: ComponentChildren },
) {
  return <section class="m-0 p-0">{children}</section>;
}

export function StandardSection({
  children,
}: {
  children: ComponentChildren;
}) {
  return <section class="m-4 p-4 sm:m-8 sm:p-8 max-w-full">{children}</section>;
}
