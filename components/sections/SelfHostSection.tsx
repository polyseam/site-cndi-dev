import WhySelfHostCopy from "components/home/WhySelfHostCopy.tsx";
import WhySelfHostTable from "components/home/WhySelfHostTable.tsx";

export default function SelfHostSection() {
  return (
    <section class="opacity-100 bg-[url('/images/background-gradient.png')] bg-[50%_0] bg-no-repeat bg-cover pt-12">
      <WhySelfHostCopy />
      <WhySelfHostTable />
    </section>
  );
}
