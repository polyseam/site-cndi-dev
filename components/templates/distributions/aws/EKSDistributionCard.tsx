type Props = {
  title: string;
};
export default function EKSDistributionCard({ title }: Props) {
  return (
    <div
      id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5e8-caa312c4"
      class="w-layout-layout quick-stack-12 wf-layout-layout"
    >
      <div
        id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5ea-caa312c4"
        class="w-layout-cell cell_ec2-eks"
      >
        <h1 class="heading-74">EKS (Amazon Elastic Kubernetes Service)</h1>
        <p class="paragraph-34">
          Simplify {title}{" "}
          cluster management with a fully managed Kubernetes service that
          reduces operational complexity and offers AWS-integrated security
          features. EKS is the most popular way to run Kubernetes on AWS and it
          takes care of control plane operations, upgrades, and patches.
        </p>
      </div>
    </div>
  );
}
