import { DistributionCard } from "components/templates/distributions/DistributionCard.tsx";

type Props = {
  title: string;
};
export default function GKEDistributionCard({ title }: Props) {
  return (
    <DistributionCard distributionTitle="GKE (Google Kubernetes Engine)">
      GCP’s official managed Kubernetes Service. Running your&nbsp;{title}&nbsp;
      cluster with GKE provides a clean management experience at a great cost.
      GKE is the most popular way to run Kubernetes on GCP and it's a great
      choice for new projects thanks to it's easy to use interface.
    </DistributionCard>
  );
}
