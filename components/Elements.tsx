import { ComponentChildren } from "preact";

type ElementalProps = {
  children: ComponentChildren;
  className?: string;
};

type ElementalPropsWithSize = ElementalProps & {
  size?: "sm" | "md" | "lg";
};

export const H1 = ({ children, className }: ElementalProps) => (
  <h1 class={className ?? "text-5xl text-white bold py-8"}>{children}</h1>
);

export const H2 = ({ children, className }: ElementalProps) => (
  <h2 class={className ?? "text-4xl text-white bold py-8"}>{children}</h2>
);

export const H3 = ({ children, className }: ElementalProps) => (
  <h3 class={className ?? "text-3xl text-white bold py-8"}>{children}</h3>
);

export const H4 = ({ children, className }: ElementalProps) => (
  <h3 class={className ?? "text-2xl text-white bold py-8"}>{children}</h3>
);

export const P = ({ children, className, size }: ElementalPropsWithSize) => (
  <p className={className ?? `text-${size ?? "base"} text-bff pb-8`}>
    {children}
  </p>
);
