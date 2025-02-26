import { DistributionCard } from "components/templates/distributions/DistributionCard.tsx";
type Props = {
  title: string;
};

export default function EKSDistributionCard({ title }: Props) {
  return (
    <DistributionCard distributionTitle="EKS (Amazon Elastic Kubernetes Service)">
      Simplify&nbsp;{title}&nbsp;cluster management with a fully managed
      Kubernetes service that reduces operational complexity and offers
      AWS-integrated security features. EKS is the most popular way to run
      Kubernetes on AWS and it takes care of control plane operations, upgrades,
      and patches.
    </DistributionCard>
  );
}
