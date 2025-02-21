import InfoCard from "components/InfoCard.tsx";

export default function HopWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
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
