import TemplateCardList from "components/templates/TemplateCardList.tsx";
import LinkOut from "islands/LinkOut.tsx";

type Props = {
  pageVersion: string;
  url: URL;
};

export default function TemplateCardListSection({ pageVersion, url }: Props) {
  return (
    <section id="section_templates_cards" class="section_template_cards">
      <div
        id="cndi-templates"
        class="w-layout-blockcontainer container-1472 mx-auto max-w-screen-lg"
      >
        <div class="div-block-86">
          <h1 class="heading-61">CNDI Templates</h1>
          <div class="text-block-62">
            Make a request for new template
            <LinkOut
              pathname="/ghi"
              utm_content="site_cndidev_templates_request_new_template"
              utm_id={8009}
              utm_source={url.toString()}
              contentVersion={pageVersion}
              className="link-6"
            >
              here
            </LinkOut>
            <span class="text-span-8"></span>
          </div>
        </div>
        <div class="div-block-81"></div>
        <TemplateCardList />
      </div>
    </section>
  );
}
