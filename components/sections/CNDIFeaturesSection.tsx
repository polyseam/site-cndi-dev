import { ComponentChildren } from "preact";
import { StandardSection } from "components/Section.tsx";

type FeatureProps = {
  title: string;
  imageSpec: ImgSpec;
  children: ComponentChildren;
  imageFirst?: boolean;
};

type ImgSpec = {
  width: number;
  path: string;
};

const Feature = ({ title, imageSpec, children, imageFirst }: FeatureProps) => {
  const rowClass = imageFirst
    ? "flex flex-col md:flex-row-reverse justify-between mx-8"
    : "flex flex-col md:flex-row justify-between";

  return (
    <div class="pb-12">
      <div class={rowClass}>
        <div class="flex text-white flex-col justify-start mx-8">
          <div class="text-3xl bold">{title}</div>
          <br />
          <div class="text-lg text-bff">{children}</div>
        </div>
        <div class="flex p-8" />
        <div class="self-center">
          <img
            style={{ minWidth: Math.floor(imageSpec.width * 0.8) }}
            class="max-w-[80vw] md:max-w-[15vw]"
            src={imageSpec.path}
          />
        </div>
        <br />
      </div>
    </div>
  );
};

export default function CNDIFeaturesSection() {
  return (
    <StandardSection>
      <div class="mx-auto max-w-screen-lg pt-12">
        <div>
          <h1 class="text-4xl text-center">CNDI Features</h1>
        </div>
        <div class="pt-6">
          <Feature
            title="Turnkey Kubernetes Infrastructure and Applications"
            imageSpec={{
              path: "/images/content/features/turnkey_k8s.png",
              width: 368,
            }}
          >
            Deploy popular and production ready open source systems on your own
            infrastructure - wherever that is. Provision a complete product or
            service that is ready for immediate use.
          </Feature>
          <Feature
            title="Complete Framework"
            imageSpec={{
              path: "/images/content/features/complete_framework.png",
              width: 434,
            }}
            imageFirst
          >
            CNDI provides a holistic approach to Kubernetes cluster management,
            encompassing infrastructure provisioning, application deployment,
            GitOps and ongoing Day 2 operations, ensuring a seamless end-to-end
            experience.
          </Feature>
          <Feature
            title="Template-Driven Productivity"
            imageSpec={{
              path: "/images/content/features/template_home_screenshot.png",
              width: 479,
            }}
          >
            CNDI delivers comprehensive solutions by providing Templates that
            include IaC, Applications, and configuration. You select a Template,
            we give you a cluster and repo from which to manage it.
          </Feature>
        </div>
      </div>
    </StandardSection>
  );
}
