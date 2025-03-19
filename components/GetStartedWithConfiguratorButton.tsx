type Props = {
  templateName: string;
};

export const GetStartedWithConfiguratorButton = ({ templateName }: Props) => (
  <a
    href={`/configurator?t=https://raw.githubusercontent.com/polyseam/cndi/main/templates/${templateName}.yaml`}
  >
    <button
      type="button"
      class="bg-lightpurp text-nowrap rounded no-underline p-2 text-sm"
    >
      Get Started with Configurator
    </button>
  </a>
);
