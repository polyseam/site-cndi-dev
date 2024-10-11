import InfoCard from "components/InfoCard.tsx";

export default function PostgresWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
        >
          <InfoCard
            heading={`What is Kafka`}
            cta={{
              text: "View Project",
              link: "https://kafka.apache.org",
            }}
          >
            Apache Kafka is a high-performance and distributed streaming
            platform designed to handle real-time data feeds and processing at
            scale, known for its fault-tolerant architecture and low-latency
            event streaming capabilities. Kafka enables the efficient and
            reliable transfer of data streams across applications, allowing
            organizations to build robust, event-driven architectures for
            processing and analyzing data in real-time, making it a popular
            choice for building modern data pipelines and streaming
            applications.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            Apache Kafka is a high-performance and distributed streaming
            platform built for developers and organizations looking to harness
            real-time data feeds and processing at scale. It is suitable for
            those working on event-driven architectures, building data
            pipelines, or developing streaming applications. Whether you are in
            e-commerce, finance, IoT, or any other industry requiring real-time
            data processing, Kafka provides the tools and capabilities to build
            robust and scalable streaming solutions.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
