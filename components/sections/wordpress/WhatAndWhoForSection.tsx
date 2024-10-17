import InfoCard from "components/InfoCard.tsx";

export default function WordpressWhoAndWhatForSection() {
  return (
    <section class="bg-[var(--mid_purp)] bg-gradient-to-b from-[var(--mid_purp)] to-[var(--dark-purp)]">
      <div class="w-layout-blockcontainer container-1462 w-container">
        <div
          id="w-node-_00701ea6-7f63-616b-6522-dae43b4b5ad4-02e921a5"
          class="w-layout-layout wf-layout-layout"
        >
          <InfoCard
            heading={`What is Wordpress`}
            cta={{
              text: "View Project",
              link: "https://wordpress.org",
            }}
          >
            Wordpress is a free and open-source content management system (CMS)
            that powers millions of websites worldwide. It offers a
            user-friendly interface, a vast library of themes and plugins, and
            robust customization capabilities.
          </InfoCard>
          <InfoCard heading="Who is it for?">
            Wordpress is used by a wide range of users, from independent
            bloggers to the world's biggest websites. If you are looking to
            publish content online Wordpress is for you.
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
