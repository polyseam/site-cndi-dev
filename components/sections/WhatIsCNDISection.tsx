import { StandardSection } from "components/Section.tsx";

type DeploymentTargetProvider = "aws" | "gcp" | "azure" | "dev";
type DeploymentSquareProps = {
  deploymentTargetProvider: DeploymentTargetProvider;
  imgExtension?: string;
};

const DeploymentSquare = ({
  deploymentTargetProvider,
  imgExtension = "png",
}: DeploymentSquareProps) => (
  <a href="/templates#supported-deployments" class="">
    <div class="flex bg-midpurp border border-midpurp rounded-lg p-4 justify-center items-center mx-[20px] hover:border-white h-[100px] w-[100px]">
      <img
        src={`/images/provider-icons/${deploymentTargetProvider}.${imgExtension}`}
        loading="lazy"
        width="50"
        sizes="50px"
        alt={`${deploymentTargetProvider} Logo`}
      />
    </div>
  </a>
);

export default function WhatIsCNDISection() {
  return (
    <StandardSection>
      <div class="items-center mx-auto max-w-screen-lg">
        <div class="w-full">
          <h1 class="text-center text-4xl">
            What is <span class="text-lightpurp">CNDI?</span>
          </h1>
          <div class="text-center mt-10 text-base text-bff">
            The CNDI framework makes it easy to self-host open-source
            distributed systems with GitOps and Infrastructure as Code. Deploy
            production grade application clusters in any environment, and
            improve them over time using the Git workflow that developers use
            every day.
          </div>
        </div>
        <div class="flex flex-col items-center mt-10">
          <div class="grid grid-cols-4 grid-rows-1 gap-1 place-items-center place-content-around">
            <DeploymentSquare deploymentTargetProvider="aws" />
            <DeploymentSquare
              deploymentTargetProvider="gcp"
              imgExtension="webp"
            />
            <DeploymentSquare deploymentTargetProvider="azure" />
            <DeploymentSquare deploymentTargetProvider="dev" />
          </div>
        </div>
      </div>
    </StandardSection>
  );
}
