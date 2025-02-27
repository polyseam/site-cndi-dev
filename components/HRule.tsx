type Props = {
  pillContent: string;
};

const HR = () => <div class="bg-stroke w-full h-px mt-2"></div>;

const Pill = ({ children }: { children: string }) => (
  <div class="hidden sm:flex text-white my-0 border border-stroke rounded-md py-[5px] px-[10px]">
    <a href="/templates">{children}</a>
  </div>
);

const Decor = ({ children }: { children: string }) => (
  <div class="italic text-gray-400 my-0 pl-4 py-[5px]">
    {children}
  </div>
);

export default function HRule(props: Props) {
  const { pillContent } = props;

  return (
    <div class="border-stroke flex flex-col">
      <div class="flex text-center justify-center sm:justify-between items-center w-full">
        <Pill>{pillContent}</Pill>
        <Decor>Self-Host with the ease of PaaS</Decor>
      </div>
      <HR />
    </div>
  );
}
