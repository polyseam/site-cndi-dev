import { capitalize } from "utils";
type SingleTemplateCardProps = {
  name: string;
  type: string;
  title?: string;
};

export default function SingleTemplateCard(props: SingleTemplateCardProps) {
  const name = props.name.toLowerCase();
  const type = props?.type || "Miscellaneous";
  const title = props?.title || capitalize(name);

  return (
    <div
      id="w-node-d10f1168-2d44-eee5-cfdd-68bde82636ba-a5d56d94"
      class="w-layout-cell templatecard"
    >
      <div class="div-block-87">
        <a href={`templates/${name}`} class="link-block-9 w-inline-block">
          <img
            src={`images/template-icons/${name}/logo.png`}
            loading="lazy"
            width="40"
            sizes="40px"
            alt={`${title} Logo`}
            // srcset={iconSrcSet} removed because not all exported images have srcsets
          />
        </a>
        <div class="div-block-90">
          <h1 class="heading-81">
            <a href={`templates/${name}`} class="link-8">
              {title}
            </a>
          </h1>
          <div class="text-block-66">{type || "Miscellaneous"}</div>
        </div>
      </div>
      <div class="div-block-96">
        <div class="text-block-69">Choose your Deployment Target:</div>
        <div>
          <div
            id="w-node-b2e139f6-6ca5-a82d-5fcf-dd9438b16fe7-a5d56d94"
            class="w-layout-layout template_deploy_targets wf-layout-layout"
          >
            <div
              id="w-node-b2e139f6-6ca5-a82d-5fcf-dd9438b16fe8-a5d56d94"
              class="w-layout-cell cell_target"
            >
              <a
                href={`templates/${name}/aws`}
                class="link_target w-inline-block"
              >
                <img
                  src="images/AWS-2.png"
                  loading="lazy"
                  width="32"
                  sizes="(max-width: 1439px) 32px, (max-width: 1919px) 2vw, 32px"
                  alt="Amazon Web Services Logo"
                  srcset="images/AWS-2-p-500.png 500w, images/AWS-2.png 782w"
                  class="image-46"
                />
              </a>
            </div>
            <div
              id="w-node-b2e139f6-6ca5-a82d-5fcf-dd9438b16feb-a5d56d94"
              class="w-layout-cell cell_target"
            >
              <a
                href={`templates/${name}/gcp`}
                class="link_target w-inline-block"
              >
                <img
                  src="images/gcp-logo-cloud.webp"
                  loading="lazy"
                  width="32"
                  alt="GCP Logo"
                />
              </a>
            </div>
            <div
              id="w-node-b2e139f6-6ca5-a82d-5fcf-dd9438b16fee-a5d56d94"
              class="w-layout-cell cell_target"
            >
              <a
                href={`templates/${name}/azure`}
                class="link_target w-inline-block"
              >
                <img
                  src="images/Microsoft_Azure.svg.png"
                  loading="lazy"
                  width="29"
                  sizes="(max-width: 1439px) 29px, (max-width: 1919px) 2vw, 29px"
                  alt="Microsoft Azure Logo"
                  srcset="images/Microsoft_Azure.svg-p-500.png 500w, images/Microsoft_Azure.svg-p-800.png 800w, images/Microsoft_Azure.svg-p-1080.png 1080w, images/Microsoft_Azure.svg.png 1200w"
                />
              </a>
            </div>
            <div
              id="w-node-b2e139f6-6ca5-a82d-5fcf-dd9438b16ff1-a5d56d94"
              class="w-layout-cell cell_target"
            >
              <a href={`templates/${name}`} class="link_target w-inline-block">
                <div class="text-block-58">+</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
