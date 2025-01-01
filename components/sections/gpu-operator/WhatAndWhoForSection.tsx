import InfoCard from "components/InfoCard.tsx";

export default function GpuOperatorWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
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
