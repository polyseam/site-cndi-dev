import InfoCard from "components/InfoCard.tsx";

export default function Neo4jWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
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
