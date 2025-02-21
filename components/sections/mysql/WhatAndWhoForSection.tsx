import InfoCard from "components/InfoCard.tsx";

export default function Neo4jWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
        >
          <InfoCard
            heading={`What is MySQL?`}
            cta={{
              text: "View Project",
              link: "https://mysql.com",
            }}
          >
            MySQL is a widely used open-source relational database management
            system known for its speed, reliability, and ease of use. It
            provides a robust and scalable solution for efficiently storing,
            organizing, and retrieving structured data. With its powerful SQL
            querying capabilities, MySQL enables developers to build secure and
            high-performance applications for a variety of use cases, ranging
            from small-scale websites to large enterprise systems. With a rich
            set of features, strong community support, and compatibility with
            various operating systems and programming languages, MySQL remains a
            popular choice for businesses seeking a stable and feature-rich
            database solution.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            MySQL is a widely used open-source relational database management
            system suitable for developers, data engineers, and businesses of
            all sizes. It caters to those who require a reliable, scalable, and
            easy-to-use database solution for storing, organizing, and
            retrieving structured data. Whether you are building a small-scale
            website, developing enterprise-level applications, or managing
            complex data systems, MySQL's powerful SQL querying capabilities and
            compatibility with various programming languages make it an ideal
            choice for a broad range of projects.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
