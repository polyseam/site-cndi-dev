import InfoCard from "components/InfoCard.tsx";

export default function MSSQLServerWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
        >
          <InfoCard
            heading={`What is Microsoft SQL Server?`}
            cta={{
              text: "View Project",
              link: "https://cloudnative-pg.io",
            }}
          >
            Microsoft SQL Server, commonly referred to as MS SQL Server, is a
            powerful relational database management system developed by
            Microsoft. MS SQL Server is the database of choice for many
            companies, it is reliable, performant, and Microsoft has been
            maintaining it for decades. The consistency delivered from
            Microsoft, coupled with all of its integrations and tooling put SQL
            Server in a league of its own for companies in the Microsoft
            ecosystem.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            MS SQL Server is tailored to a broad spectrum of users, ranging from
            small businesses to large enterprises with complex data
            requirements. Database administrators, software developers, and data
            analysts can benefit from the flexibility and comprehensive
            functionality offered by MS SQL Server. Small to medium-sized
            businesses seeking an efficient and scalable database solution for
            their applications will find MS SQL Server user-friendly and easy to
            integrate. At the same time, large enterprises with complex data
            ecosystems can leverage its advanced features to ensure performance,
            scalability, security, and traceability.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
