import InfoCard from "components/InfoCard.tsx";

export default function RedisWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
        >
          <InfoCard
            heading={`What is Redis`}
            cta={{
              text: "View Project",
              link: "https://redis.io/docs/latest/get-started/",
            }}
          >
            Redis is an open-source, in-memory data structure store often used
            as a database, cache, and message broker. It is designed for high
            performance, supporting fast read and write operations with low
            latency. Redis is widely used for real-time applications such as
            caching, session management, analytics, and pub/sub messaging.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            Redis is for developers building high-performance, scalable
            applications that require low-latency data management. It’s ideal
            for use cases like caching, real-time analytics, session management,
            and pub/sub messaging. Whether you’re designing resilient,
            distributed systems, optimizing application performance, or handling
            real-time data streams, Redis offers the speed, flexibility, and
            scalability to meet these demands.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
