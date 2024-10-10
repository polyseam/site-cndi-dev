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
