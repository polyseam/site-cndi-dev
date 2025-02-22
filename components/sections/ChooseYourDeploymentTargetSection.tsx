type TargetSquareProps = {
  provider: string;
  template: string;
  logoext?: string;
};

const TargetSquare = ({
  provider,
  template,
  logoext = "png",
}: TargetSquareProps) => {
  return (
    <a
      href={`/templates/${template}/${provider}`}
      class="flex border border-white rounded-md max-w-full w-[100px] h-[100px] mx-4 no-underline [transition:all_.35s] items-center justify-center hover:shadow-[0_0_6px_0_lightpurp] hover:bg-hoverpurp"
    >
      <img
        src={`/images/provider-icons/${provider}.${logoext}`}
        loading="lazy"
        width="50"
        alt={`${provider} Logo`}
      />
    </a>
  );
};

export default function ChooseYourDeploymentTargetSection(props: {
  templateName: string;
}) {
  const { templateName } = props;
  return (
    <section>
      <div class="flex flex-col items-center pb-0 pt-16 mx-auto max-w-screen-lg">
        <h1 class="px-10 capitalize text-center">
          Choose your deployment Target Below
        </h1>
        <div class="w-2/3 h-[1px] bg-[var(--stroke)] mt-[10px] mx-8" />
        <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 pt-5">
          <TargetSquare provider="aws" template={templateName} />
          <TargetSquare provider="gcp" template={templateName} logoext="webp" />
          <TargetSquare provider="azure" template={templateName} />
          <TargetSquare provider="dev" template={templateName} />
        </div>
      </div>
    </section>
  );
}
