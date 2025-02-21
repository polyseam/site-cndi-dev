export default function ChooseYourDeploymentTargetSection(props: {
  templateName: string;
}) {
  const { templateName } = props;
  return (
    <section class="template_section_choose">
      <div class="w-layout-blockcontainer container-1471 mx-auto max-w-screen-lg">
        <h1 class="heading-80">Choose your deployment Target Below</h1>
        <div class="div-block-81-copy"></div>
        <div class="div-block-85">
          <a
            href={`/templates/${templateName}/aws`}
            class="link-block-8 w-inline-block"
          >
            <img
              src="/images/provider-icons/aws.png"
              loading="lazy"
              width="49"
              sizes="(max-width: 1439px) 49px, (max-width: 1919px) 3vw, 49px"
              alt="Amazon Web Services Logo"
              // srcset="../images/AWS-2-p-500.png 500w, ../images/AWS-2.png 782w"
            />
          </a>
          <a
            href={`/templates/${templateName}/gcp`}
            class="link-block-8 w-inline-block"
          >
            <img
              src="/images/provider-icons/gcp.webp"
              loading="lazy"
              width="49"
              alt="GCP Logo"
            />
          </a>
          <a
            href={`/templates/${templateName}/azure`}
            class="link-block-8 w-inline-block"
          >
            <img
              src="/images/provider-icons/azure.png"
              loading="lazy"
              width="49"
              sizes="(max-width: 1439px) 49px, (max-width: 1919px) 3vw, 49px"
              alt="Microsoft Azure Logo"
              // srcset="../images/Microsoft_Azure.svg-p-500.png 500w, ../images/Microsoft_Azure.svg-p-800.png 800w, ../images/Microsoft_Azure.svg-p-1080.png 1080w, ../images/Microsoft_Azure.svg.png 1200w"
            />
          </a>
          <a
            href={`/templates/${templateName}/dev`}
            class="link-block-8 w-inline-block"
          >
            <img
              src="/images/provider-icons/dev.png"
              loading="lazy"
              width="51"
              alt=""
            />
          </a>
        </div>
      </div>
    </section>
  );
}
