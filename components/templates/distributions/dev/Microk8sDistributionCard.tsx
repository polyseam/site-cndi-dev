import { ComponentChildren } from "preact";
import { DistributionCard } from "components/templates/distributions/DistributionCard.tsx";

export default function Microk8sDistributionCard(
  props: { children: ComponentChildren },
) {
  return (
    <DistributionCard distributionTitle="microk8s">
      {props.children}
    </DistributionCard>
  );
}
