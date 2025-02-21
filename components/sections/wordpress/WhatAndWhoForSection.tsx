import InfoCard from "components/InfoCard.tsx";

export default function WordpressWhoAndWhatForSection() {
  return (
    <section>
      <div class="mx-auto max-w-screen-lg p-16">
        <div
          class="grid grid-rows-[auto] grid-cols-[1fr_1fr] gap-5"
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
