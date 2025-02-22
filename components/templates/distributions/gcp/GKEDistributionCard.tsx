type Props = {
  title: string;
};
export default function GKEDistributionCard({ title }: Props) {
  return (
    <div
      id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5e8-caa312c4"
      class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-12 wf-layout-layout"
    >
      <div
        id="w-node-ce65e8b9-bfe9-719f-71cd-f780a1d9c5ea-caa312c4"
        class="flex-col justify-start items-start flex cell_ec2-eks"
      >
        <h1 class="heading-74">GKE (Google Kubernetes Engine)</h1>
        <p class="paragraph-34">
          GCP’s official managed Kubernetes Service. Running your {title}
          cluster with GKE provides a clean management experience at a great
          cost. GKE is the most popular way to run Kubernetes on GCP and it's a
          great choice for new projects thanks to it's easy to use interface.
        </p>
      </div>
    </div>
  );
}
