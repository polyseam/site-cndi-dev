import { H2, H3, P } from "elements";

export default function WhySelfHostCopy() {
  return (
    <div class="mb-16 mx-auto max-w-screen-md text-base text-bff">
      <div class="text-center">
        <H2>Why Self-Host Infrastructure?</H2>
        <P>
          When it comes to deploying your applications, choosing between
          self-hosting and PaaS options can significantly impact your control,
          costs, and flexibility. Here’s why CNDI Self-Hosting might be the
          better option for your needs.
        </P>
      </div>
      <div class="grid grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto] gap-y-10 gap-x-5 auto-cols-[1fr] justify-center p-5">
        <div class="flex-col justify-start items-start flex">
          <H3>
            Managed <br />
            from Git
          </H3>
          <P>
            CNDI Apps are managed from Git. GitOps and Infrastructure-as-code go
            hand-in-hand as the best way to manage your apps. Get started using
            the Git workflow your engineering team uses already.
          </P>
        </div>
        <div class="flex-col justify-start items-start flex">
          <img
            src="/images/content/self-hosting/managed_from_git.png"
            loading="lazy"
            width="308"
          />
        </div>
        <div class="flex-col justify-start items-start flex">
          <img
            src="/images/content/self-hosting/cluster_customization.png"
            loading="lazy"
            width="253"
          />
        </div>
        <div class="flex-col justify-start items-start flex">
          <H3>Cluster Customization</H3>
          <P>
            Self-Host your cluster using CNDI and gain full control over your
            application deployment. No features gated behind paywalls, and you
            can get the most out of your hardware to suit your unique
            requirements. If you don’t need anything too special, CNDI App
            Templates will give you great defaults out of the box.
          </P>
        </div>
        <div class="flex-col justify-start items-start flex">
          <H3>Operational Cost</H3>
          <P>
            CNDI Self-Hosting is a low cost alternative to the recurring
            expenses and hidden fees associated with PaaS. Avoid confusing price
            structures, annoying vendor lock-in, and be in control of your
            spending.
          </P>
        </div>
        <div class="flex-col justify-start items-start flex">
          <img
            src="/images/content/self-hosting/operational_cost.png"
            loading="lazy"
            width="307"
          />
        </div>
      </div>
    </div>
  );
}
