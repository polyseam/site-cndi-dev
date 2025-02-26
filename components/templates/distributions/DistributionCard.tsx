import { ComponentChild } from "preact";

export const DistributionCard = ({
  children,
  distributionTitle,
}: {
  children: ComponentChild;
  distributionTitle: string;
}) => {
  return (
    <div class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 grid border border-stroke">
      <div class="flex-col justify-start items-start flex">
        <h1 class="text-3xl text-white mb-6 bold">{distributionTitle}</h1>
        <p class="text-lg text-bff">{children}</p>
      </div>
    </div>
  );
};
