type Props = {
  templateName: string;
};

export const GetStartedWithConfiguratorButton = ({ templateName }: Props) => (
  <a
    href={`/configurator?t=https%3A%2F%2Fraw.githubusercontent.com%2Fpolyseam%2Fcndi%2Fmain%2Ftemplates%2F${templateName}.yaml`}
  >
    <button
      type="button"
      class="bg-lightpurp text-nowrap rounded no-underline p-2 text-sm"
    >
      Get Started with Configurator
    </button>
  </a>
);
