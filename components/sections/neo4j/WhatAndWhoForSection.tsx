import InfoCard from "components/InfoCard.tsx";

export default function Neo4jWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
        >
          <InfoCard
            heading={`What is Neo4j`}
            cta={{
              text: "View Project",
              link: "https://neo4j.com",
            }}
          >
            Neo4j is a highly scalable and graph database management system
            designed to store, retrieve, and analyze connected data. It offers a
            native graph storage and processing engine, allowing organizations
            to model and traverse complex relationships between data points
            efficiently. Neo4j's graph database approach enables powerful
            querying, pattern matching, and graph algorithms, making it an ideal
            choice for applications that heavily rely on relationships and
            networks.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            Neo4j is tailored for developers, data scientists, and organizations
            working with connected data and complex relationships. It is ideal
            for domains such as social networks, recommendation engines,
            knowledge graphs, and network analysis. Whether you need to model
            intricate relationships, perform graph-based analysis, or build
            intelligent systems, Neo4j empowers you to unlock valuable insights
            from your connected data and create innovative solutions in the
            graph database domain.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
