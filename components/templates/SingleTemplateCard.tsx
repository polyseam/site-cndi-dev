import { capitalize } from "utils";

const DEPLOYMENT_TARGET_PROVIDERS = [
  {
    name: "aws",
    title: "Amazon Web Services",
    imgSrc: "/images/provider-icons/aws.png",
  },
  {
    name: "gcp",
    title: "Google Cloud Platform",
    imgSrc: "/images/provider-icons/gcp.webp",
  },
  {
    name: "azure",
    title: "Microsoft Azure",
    imgSrc: "/images/provider-icons/azure.png",
  },
  {
    name: "dev",
    title: "Local Development",
    imgSrc: "/images/provider-icons/dev.png",
  },
] as const;

type SingleTemplateCardProps = {
  name: string;
  type: string;
  title?: string;
};

type PillProps = {
  children: string;
};

const Pill = ({ children }: PillProps) => (
  <span class="text-white text-xs rounded-md whitespace-nowrap border border-stroke my-0 py-1 px-2 flex-start">
    {children || "Miscellaneous"}
  </span>
);

type CardTitleProps = {
  children: string;
  name: string;
};

const CardTitle = ({ children, name }: CardTitleProps) => (
  <h1 class="text-3xl pb-2 text-nowrap">
    <a href={`templates/${name}`}>{children}</a>
  </h1>
);

type CardLogoProps = {
  name: string;
  title: string;
};

const CardLogo = ({ name, title }: CardLogoProps) => (
  <div class="flex h-20 w-20 justify-center items-center bg-mutedpurp rounded-lg border border-transparent hover:border-white hover:cursor-pointer">
    <a href={`/templates/${name}`}>
      <img
        src={`/images/template-icons/${name}/logo.png`}
        loading="lazy"
        class="max-w-10"
        alt={`${title} Logo`}
      />
    </a>
  </div>
);

type CardTopShelfProps = {
  name: string;
  title: string;
  type: string;
};

const CardTopShelf = ({ name, title, type }: CardTopShelfProps) => (
  <div class="flex items-center h-[140px] rounded rounded-t-lg px-8">
    <div class="flex">
      <CardLogo name={name} title={title} />
    </div>
    <div class="p-2" />
    <div>
      <CardTitle name={name}>{title}</CardTitle>
      <Pill>{type}</Pill>
    </div>
  </div>
);

const DeploymentTargetRow = ({ name }: { name: string }) => (
  <div className="flex flex-row justify-evenly items-center space-x-4">
    {DEPLOYMENT_TARGET_PROVIDERS.map((provider) => (
      <div
        key={provider.name}
        className="h-10 w-10 p-1 flex flex-col justify-center items-center rounded border border-transparent hover:border-white"
      >
        <a href={`templates/${name}/${provider.name}`}>
          <img
            src={provider.imgSrc}
            loading="lazy"
            width="40"
            alt={`${provider.title} Logo`}
          />
        </a>
      </div>
    ))}
  </div>
);

const CardBottomShelf = ({ name }: { name: string }) => (
  <div class="bg-mutedpurp p-4">
    <div class="flex flex-col rounded-b-lg">
      <div class="text-bff text-nowrap pb-4">
        Choose your Deployment Target:
      </div>
      <div>
        <DeploymentTargetRow name={name} />
      </div>
    </div>
  </div>
);

export default function SingleTemplateCard(props: SingleTemplateCardProps) {
  const name = props.name.toLowerCase();
  const type = props?.type || "Miscellaneous";
  const title = props?.title || capitalize(name);

  return (
    <div class="w-96">
      <div class="shadow rounded-lg border border-stroke">
        <CardTopShelf name={name} title={title} type={type} />
        <CardBottomShelf name={name} />
      </div>
    </div>
  );
}
