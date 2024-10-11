import InfoCard from "components/InfoCard.tsx";

export default function HopWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
        >
          <InfoCard
            heading={`What is Hop`}
            cta={{
              text: "View Project",
              link: "https://hop.apache.org",
            }}
          >
            The Hop Orchestration Platform, also known as Apache Hop, is a
            comprehensive open-source data integration platform that aims to
            streamline and simplify the process of data and metadata
            orchestration. With a focus on usability, speed, and flexibility,
            Hop offers a visual development environment that empowers developers
            to enhance productivity beyond traditional coding approaches. Its
            innovative design allows for workflows and pipelines to be created
            once and run across various execution engines, including the native
            Hop engine, Spark, Flink, Google Dataflow, and AWS EMR through Beam.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            The Hop Orchestration Platform, or Apache Hop, caters to data
            integration developers, data engineers, and administrators who
            require a comprehensive and flexible platform for data and metadata
            orchestration. Whether you are a seasoned developer or new to data
            integration, Hop's visual development environment simplifies the
            process and boosts productivity.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
