type Props = {
  templateName: string;
};
export const GetStartedWithConfiguratorButton = ({ templateName }: Props) => (
  <a
    href={`/configurator?t=https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/${templateName}.yaml`}
  >
    <button class="button no-underline p-2">
      Get Started with Configurator
    </button>
  </a>
);
