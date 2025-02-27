const CRITERIA = [
  "Quick & Easy Setup",
  "Run Anywhere",
  "Managed From Git",
  "Lowest Possible Cost",
  "Open-Source",
  "Fully Featured",
  "Completely Customizable",
] as const;

const CircleCheck = () => (
  <div class="flex flex-col justify-center items-center p-[10px]">
    <img
      src="/images/system/checkmark_circle_green.png"
      loading="lazy"
      width="40"
      sizes="40px"
      alt="green checkmark"
      srcset="/images/system/checkmark_circle_green-p-500.png 500w, /images/system/checkmark_circle_green-p-800.png 800w, /images/system/checkmark_circle_green.png 1006w"
    />
  </div>
);

const CircleX = () => (
  <div class="flex flex-co justify-center items-center p-[10px]">
    <img
      src="/images/system/x_circle_red.png"
      loading="lazy"
      width="34"
      alt="red x"
    />
  </div>
);

const Table = () => {
  return (
    <table class="border-separate border-spacing[0] max-w-[800px]">
      <thead class="text-4xl bold bg-midpurp border border-transparent">
        <tr>
          <th class="p-4 rounded-tl-xl border-r border-r-stroke">Criteria</th>
          <th class="p-4 border-r border-r-stroke">Self-Hosting</th>
          <th class="p-4 rounded-tr-xl">PaaS</th>
        </tr>
      </thead>
      <tbody>
        {CRITERIA.map((criteria, idx) => {
          const isLast = idx === CRITERIA.length - 1;
          const isFirst = !idx;
          return (
            <tr class="bg-transparent border border-midpurp">
              <td
                class={isLast
                  ? "text-xl bold px-8 border border-midpurp rounded-bl-xl"
                  : "text-xl bold px-8 border border-midpurp"}
              >
                {criteria}
              </td>
              <td class="border border-midpurp">
                <CircleCheck />
              </td>
              <td
                class={isLast
                  ? "border border-midpurp rounded-br-xl"
                  : "border border-midpurp"}
              >
                {isFirst ? <CircleCheck /> : <CircleX />}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function WhySelfHostTable() {
  return (
    <div class="flex items-center justify-around">
      <Table />
    </div>
  );
}
