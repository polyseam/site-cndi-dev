const GreenCircle = () => (
  <div class={`bg-trafficgreen w-[15px] h-[15px] ml-0 mr-[5px] rounded-full`}>
  </div>
);
const YellowCircle = () => (
  <div class={`bg-trafficyellow w-[15px] h-[15px] ml-0 mr-[5px] rounded-full`}>
  </div>
);
const RedCircle = () => (
  <div class={`bg-trafficred w-[15px] h-[15px] ml-0 mr-[5px] rounded-full`}>
  </div>
);

export default function TerminalView(
  { src, width = 490 }: { src: string; width?: number },
) {
  return (
    <div class="border bg-terminalgrey rounded-md border-terminalborder flex flex-col">
      <div class="flex mt-4 mb-0 mx-4">
        <GreenCircle />
        <YellowCircle />
        <RedCircle />
      </div>
      <img
        src={src}
        loading="lazy"
        width={width}
        alt="animated interactive setup using 'cndi create' command"
      />
    </div>
  );
}
