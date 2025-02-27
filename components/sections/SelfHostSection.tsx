import { StandardSection } from "components/Section.tsx";
import WhySelfHostCopy from "components/home/WhySelfHostCopy.tsx";
import WhySelfHostTable from "components/home/WhySelfHostTable.tsx";

export default function SelfHostSection() {
  return (
    <StandardSection>
      <WhySelfHostCopy />
      <WhySelfHostTable />
    </StandardSection>
  );
}
