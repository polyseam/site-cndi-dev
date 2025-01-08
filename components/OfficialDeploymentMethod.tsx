import LinkOut from "islands/LinkOut.tsx";

type Props = {
  contentVersion: string;
  templateName: string;
  title: string;
  utm_source: string;
  utm_id: number;
  pathname: string;
};

export default function OfficialDeploymentMethod(props: Props) {
  const { contentVersion, templateName, title, utm_source, utm_id, pathname } =
    props;
  return (
    <div class="div-block-82 my-8">
      <img
        src={`/images/template-icons/${templateName}/logo.png`}
        loading="lazy"
        width="25"
        sizes="(max-width: 767px) 25px, (max-width: 991px) 3vw, (max-width: 1919px) 25px, 1vw"
        alt={`${title} Logo`}
        class="image-51"
      />
      <div class="text-block-68">
        <LinkOut
          utm_source={utm_source}
          pathname={pathname}
          utm_content={`${templateName}_official_deployment_method`}
          utm_id={utm_id}
          className="link-4"
          contentVersion={contentVersion}
        >
          Official {title} Deployment Method
        </LinkOut>
      </div>
    </div>
  );
}
