type Props = {
  title: string;
};
export default function EKSDistributionCard({ title }: Props) {
  return (
    <div
      id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5e8-caa312c4"
      class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-12 wf-layout-layout"
    >
      <div
        id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5ea-caa312c4"
        class="flex-col justify-start items-start flex cell_ec2-eks"
      >
        <h1 class="heading-74">EKS (Amazon Elastic Kubernetes Service)</h1>
        <p class="paragraph-34">
          Simplify{" "}
          {title}&nbsp; cluster management with a fully managed Kubernetes
          service that reduces operational complexity and offers AWS-integrated
          security features. EKS is the most popular way to run Kubernetes on
          AWS and it takes care of control plane operations, upgrades, and
          patches.
        </p>
      </div>
    </div>
  );
}
