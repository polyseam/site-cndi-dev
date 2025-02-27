import { ComponentChild } from "preact";
import { StandardSection } from "components/Section.tsx";

const DecorativeLine = () => <div class="h-px mt-3 w-14 bg-white" />;

const Title = ({ children }: { children: ComponentChild }) => (
  <div class="h-[128px] p-5 rounded rounded-t-lg text-2xl">
    <div>
      <h1 class="text-white mt-1 mb-0 px-0 text-xl">{children}</h1>
      <DecorativeLine />
    </div>
  </div>
);

const Description = ({ children }: { children: ComponentChild }) => (
  <div class="bg-[#322b38] w-auto h-[128px] p-5 text-bff rounded-b-lg text-base">
    <div>{children}</div>
  </div>
);

type BenefitCardProps = {
  children: [ComponentChild, ComponentChild];
};

const BenefitCard = (props: BenefitCardProps) => (
  <div class="max-w-80 h-[256px] rounded-lg shadow-lg border border-[#322b38]">
    {props.children[0]}
    {props.children[1]}
  </div>
);

export default function UseInteractiveCNDITemplatesSection() {
  // More than 6 cards is noise
  return (
    <StandardSection>
      <div class="flex-col items-center mx-auto max-w-screen-lg">
        <div class="flex flex-wrap gap-6 justify-center">
          <BenefitCard>
            <Title>Infrastructure as Code and GitOps</Title>
            <Description>
              Manage the infrastructure and configuration of your cluster as
              code in Git.
            </Description>
          </BenefitCard>
          <BenefitCard>
            <Title>Security and Auditability</Title>
            <Description>
              Ensure secure systems, with all cluster changes made and traced
              through Git.
            </Description>
          </BenefitCard>
          <BenefitCard>
            <Title>Built-in Observability</Title>
            <Description>
              Complete observability stack, with Prometheus, Loki, Grafana, and
              pre-configured dashboards included.
            </Description>
          </BenefitCard>
          <BenefitCard>
            <Title>Ejectability</Title>
            <Description>
              Seamlessly transition to managing your cluster completely on your
              own.
            </Description>
          </BenefitCard>
          <BenefitCard>
            <Title>Uncompromised Self-Hosting</Title>
            <Description>
              Deploy workloads across any cloud or on-prem infrastructure. Get
              the scalability and flexibility you need without constraints.
            </Description>
          </BenefitCard>
          <BenefitCard>
            <Title>Reduce Costs</Title>
            <Description>
              Pay for compute, not fluff -  avoid the PaaS or SaaS tax by
              enjoying self-hosting made easy.
            </Description>
          </BenefitCard>
        </div>
      </div>
    </StandardSection>
  );
}
