import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { data } from "template-details";
import { capitalize } from "utils";

export default function TemplateHome(props: PageProps) {
  const t = data.find(
    (template) => template.name === props.params.templateName,
  );
  const templateName = props.params.templateName;
  const title = t?.title || capitalize(templateName);
  //   const {whatIsIt, whoIsItFor, linkToProject, linkToOfficialReference, title, type } = data.find((template) => template.name === templateName);
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div>{templateName}</div>
    </div>
  );
}
