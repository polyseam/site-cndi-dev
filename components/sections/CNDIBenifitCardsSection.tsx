import { ComponentChild } from "preact";

const Title = ({ children }: { children: ComponentChild }) => (
  <div class="homecard_top">
    <div>
      <h1 class="cndi_card_heading">{children}</h1>
      <div class="div-block-84"></div>
    </div>
  </div>
);

const Description = ({ children }: { children: ComponentChild }) => (
  <div class="home_cards_div">
    <div class="cndi_card_text">{children}</div>
  </div>
);

type BenefitCardProps = {
  children: [ComponentChild, ComponentChild];
};

const BenefitCard = (props: BenefitCardProps) => (
  <div
    id="w-node-d24c5821-8291-5d15-b148-5b87d5c1b58e-f6848bac"
    class="flex-col justify-start items-start flex cndi_card_cell"
  >
    {props.children[0]}
    {props.children[1]}
  </div>
);

export default function UseInteractiveCNDITemplatesSection() {
  // More than 6 cards is noise
  return (
    <section class="home_section_cndi_cards">
      <div class="w-layout-blockcontainer container-1474 mx-auto max-w-screen-lg">
        <div
          id="w-node-_8da0fe8c-da81-a70f-efc5-7077e1b079f9-f6848bac"
          class="gap-y-5 gap-x-5 auto-cols-[1fr] justify-center p-5 quick-stack-16 wf-layout-layout"
        >
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
              all the scalability and flexibility you need without constraints.
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
    </section>
  );
}
