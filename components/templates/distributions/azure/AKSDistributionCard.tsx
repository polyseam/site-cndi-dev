import { DistributionCard } from "components/templates/distributions/DistributionCard.tsx";
type Props = {
  title: string;
};

export default function AKSDistributionCard({ title }: Props) {
  return (
    <DistributionCard distributionTitle="AKS (Azure Kubernetes Service)">
      AKS is Microsoft Azure’s official managed Kubernetes Service. Running
      your&nbsp;{title}&nbsp;cluster on AKS enables deep integration with Active
      Directory. With automation of control plane operations, upgrades, and
      patches AKS is the most popular way to run Kubernetes on Azure.
    </DistributionCard>
  );
}
