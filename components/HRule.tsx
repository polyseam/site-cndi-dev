type Props = {
  topText: string;
};

// .div-block-80 {
//     border: 1px none var(--stroke);
//     border-radius: 5px;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     margin-top: 0;
//     padding: 0;
//     display: flex;
//   }

// background-color: var(--stroke);
// width: 1040px;
// height: 1px;
// margin-top: 10px;

// border-radius: 5px;
// margin-top: 0;
// margin-bottom: 0;
// padding: 5px 10px;

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
        <div class="bg-[var(--stroke)] w-full h-px mt-2"></div>
      </div>
    </>
  );
}
