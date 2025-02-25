type Props = {
  topText: string;
};

export default function HRule(props: Props) {
  const { topText } = props;

  return (
    <>
      <div class="div-block-80">
        <div class="flex justify-between items-center w-full">
          <div class="border border-transparent rounded-md flex flex-col justify-center items-start mt-0 p-0">
            <div class="text-block-66">
              <a href="/templates">{topText}</a>
            </div>
          </div>
          <div class="border border-transparent rounded-md flex flex-col justify-center items-start mt-0 p-0">
            <div class="italic text-gray-400 mt-0 mb-0 px-[5px] py-[10px] items-end">
              Self-Host with the ease of PaaS
            </div>
          </div>
        </div>
        <div class="bg-stroke w-full h-px mt-2"></div>
      </div>
    </>
  );
}
