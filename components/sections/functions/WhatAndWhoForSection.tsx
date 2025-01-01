import InfoCard from "components/InfoCard.tsx";

export default function FunctionsWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
        >
          <InfoCard
            heading={`What is CNDI Functions?`}
            cta={{
              text: "View Project",
              link:
                "https://github.com/polyseam/cndi/blob/main/docs/functions.md",
            }}
          >
            CNDI Functions is a system for creating and managing serverless
            functions. It is built on top of the Supabase Edge Runtime and
            enables the developer experience of serverless functions but the
            pricing and flexibility of Kubernetes.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            CNDI Functions is for developers who want to build serverless
            functions but don't want to be locked into a per-request pricing
            model, or vendor defined runtime. We let you write your
            Deno-compatible typescript functions and deploy them to your own
            infrastructure. Writing functions that respond to web requests has
            never been this easy.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
