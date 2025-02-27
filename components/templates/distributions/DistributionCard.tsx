import { ComponentChild } from "preact";
import { H3 } from "elements";

export const DistributionCard = ({
  children,
  distributionTitle,
}: {
  children: ComponentChild;
  distributionTitle: string;
}) => {
  return (
    <div class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center px-5 pb-5 grid border border-stroke">
      <div class="flex-col justify-start items-start flex">
        <H3>{distributionTitle}</H3>
        <p class="text-lg text-bff">{children}</p>
      </div>
    </div>
  );
};
