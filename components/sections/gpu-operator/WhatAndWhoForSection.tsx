import InfoCard from "components/InfoCard.tsx";

export default function GpuOperatorWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
        >
          <InfoCard
            heading={`What is gpu-operator`}
            cta={{
              text: "View Project",
              link: "https://github.com/NVIDIA/gpu-operator",
            }}
          >
            The GPU Operator allows administrators of Kubernetes clusters to
            manage GPU nodes just like CPU nodes in the cluster. Instead of
            provisioning a special OS image for GPU nodes, administrators can
            rely on a standard OS image for both CPU and GPU nodes and then rely
            on the GPU Operator to provision the required software components
            for GPUs.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            If you're managing a Kubernetes cluster with GPU nodes on any of the
            major cloud providers, the GPU Operator can help you manage your GPU
            nodes more efficiently.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
