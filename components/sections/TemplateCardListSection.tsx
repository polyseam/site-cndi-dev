import { StandardSection } from "components/Section.tsx";
import TemplateCardList from "components/templates/TemplateCardList.tsx";
import LinkOut from "islands/LinkOut.tsx";

type Props = {
  pageVersion: string;
  url: URL;
};

export default function TemplateCardListSection({ pageVersion, url }: Props) {
  return (
    <StandardSection>
      <div class="flex flex-col items-center">
        <h1 class="text-3xl mb-3">CNDI Templates</h1>
        <div class="text-bff">
          Make a request for new Template&nbsp;
          <LinkOut
            pathname="/ghi"
            utm_content="site_cndidev_templates_request_new_template"
            utm_id={8009}
            utm_source={url.toString()}
            contentVersion={pageVersion}
            className="text-bff underline hover:cursor-pointer"
          >
            here
          </LinkOut>
        </div>
        <div class="bg-stroke h-[1px] my-3 w-4/5 self-center" />
        <div class="flex justify-center items-center mt-8">
          <TemplateCardList />
        </div>
      </div>
    </StandardSection>
  );
}
