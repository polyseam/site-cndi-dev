import InfoCard from "components/InfoCard.tsx";

export default function MongoDBWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
        >
          <InfoCard
            heading={`What is MongoDB`}
            cta={{
              text: "View Project",
              link: "https://www.mongodb.com",
            }}
          >
            MongoDB is a leading NoSQL database that provides a flexible and
            scalable solution for managing and storing data. It offers a
            document-oriented approach, allowing developers to store, retrieve,
            and manipulate data in a flexible, JSON-like format. MongoDB&#x27;s
            flexible schema, automatic sharding, and horizontal scalability make
            it an ideal choice for handling large volumes of unstructured and
            semi-structured data, enabling organizations to build modern
            applications that require agility and scalability.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            MongoDB is designed for developers, data architects, and
            organizations seeking a flexible and scalable solution for managing
            and storing data. It caters to those dealing with unstructured and
            semi-structured data, such as developers of modern applications,
            content management systems, and data-intensive applications.
            MongoDB&#x27;s agile schema, horizontal scalability, and rich
            querying capabilities make it an excellent choice for those seeking
            agility and scalability in their data storage and processing.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
