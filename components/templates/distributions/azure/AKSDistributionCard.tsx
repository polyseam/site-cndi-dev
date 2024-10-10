type Props = {
  title: string;
};
export default function AKSDistributionCard({ title }: Props) {
  return (
    <div
      id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5e8-caa312c4"
      class="w-layout-layout quick-stack-12 wf-layout-layout"
    >
      <div
        id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5ea-caa312c4"
        class="w-layout-cell cell_ec2-eks"
      >
        <h1 class="heading-74">AKS (Azure Kubernetes Service)</h1>
        <p class="paragraph-34">
          AKS is Microsoft Azure’s official managed Kubernetes Service. Running
          your {title}{" "}
          cluster on AKS enables deep integration with Active Directory. With
          automation of control plane operations, upgrades, and patches AKS is
          the most popular way to run Kubernetes on Azure.
        </p>
      </div>
    </div>
  );
}
