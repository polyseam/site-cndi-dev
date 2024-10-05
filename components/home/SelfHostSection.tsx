import WhySelfHostCopy from "./WhySelfHostCopy.tsx";
import WhySelfHostTable from "./WhySelfHostTable.tsx";

export default function SelfHostSection() {
  return (
    <section class="self-host-section">
      <WhySelfHostCopy />
      <WhySelfHostTable />
    </section>
  );
}
