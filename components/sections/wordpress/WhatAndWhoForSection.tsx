import InfoCard from "components/InfoCard.tsx";
import WhatAndWhoForSection from "components/sections/WhatAndWhoForSection.tsx";

export default function WordpressWhatAndWhoForSection() {
  return (
    <WhatAndWhoForSection>
      <InfoCard
        heading={`What is Wordpress`}
        cta={{
          text: "View Project",
          link: "https://wordpress.org",
        }}
      >
        Wordpress is a free and open-source content management system (CMS) that
        powers millions of websites worldwide. It offers a user-friendly
        interface, a vast library of themes and plugins, and robust
        customization capabilities.
      </InfoCard>
      <InfoCard heading="Who is it for?">
        Wordpress is used by a wide range of users, from independent bloggers to
        the world's biggest websites. If you are looking to publish content
        online Wordpress is for you.
      </InfoCard>
    </WhatAndWhoForSection>
  );
}
