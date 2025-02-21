import InfoCard from "components/InfoCard.tsx";

export default function PostgresWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
        >
          <InfoCard
            heading={`What is Postgres`}
            cta={{
              text: "View Project",
              link: "https://cloudnative-pg.io",
            }}
          >
            PostgreSQL, or Postgres, is an open-source relational database
            management system renowned for its power, scalability, and
            reliability. It efficiently stores and manages large volumes of
            structured and unstructured data, offering extensive features like
            advanced data types, complex queries, transactions, and concurrency
            control. With a strong focus on standards compliance, Postgres
            provides a flexible foundation for developers and organizations to
            build applications and manage databases.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            PostgreSQL, or Postgres, is a versatile and open-source relational
            database management system designed for a wide range of users. It
            caters to developers, data engineers, and organizations seeking a
            powerful and reliable database solution. Whether you are a small
            startup, a medium-sized business, or a large enterprise, PostgreSQL
            offers a robust foundation to handle your data storage and
            management needs efficiently and securely.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
