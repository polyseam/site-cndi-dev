import InfoCard from "components/InfoCard.tsx";
import WhatAndWhoForSection from "components/sections/WhatAndWhoForSection.tsx";

export default function GPUOperatorWhatAndWhoForSection() {
  return (
    <WhatAndWhoForSection>
      <InfoCard
        heading={`What is gpu-operator`}
        cta={{
          text: "View Project",
          link: "https://github.com/NVIDIA/gpu-operator",
        }}
      >
        The GPU Operator allows administrators of Kubernetes clusters to manage
        GPU nodes just like CPU nodes in the cluster. Instead of provisioning a
        special OS image for GPU nodes, administrators can rely on a standard OS
        image for both CPU and GPU nodes and then rely on the GPU Operator to
        provision the required software components for GPUs.
      </InfoCard>
      <InfoCard heading="Who is it for?">
        If you're managing a Kubernetes cluster with GPU nodes on any of the
        major cloud providers, the GPU Operator can help you manage your GPU
        nodes more efficiently.
      </InfoCard>
    </WhatAndWhoForSection>
  );
}
