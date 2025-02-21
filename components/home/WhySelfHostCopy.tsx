export default function WhySelfHostCopy() {
  return (
    <div class="mb-16 mx-auto max-w-screen-md text-base text-bff">
      <div>
        <h1 class="text-center">Why Self-Host Infrastructure?</h1>
        <p class="text-left mb-16 px-16">
          When it comes to deploying your applications, choosing between
          self-hosting and PaaS options can significantly impact your control,
          costs, and flexibility. Here’s why CNDI Self-Hosting might be the
          better option for your needs.
        </p>
      </div>
      <div
        class="grid grid-cols-[1fr_1fr] grid-rows-[auto_auto_auto] gap-y-8 gap-x-5 auto-cols-[1fr] justify-center p-5"
      >
        <div class="flex-col justify-start items-start flex">
          <h1>
            Managed <br />
            from Git
          </h1>
          <p>
            CNDI Apps are managed from Git. GitOps and Infrastructure-as-code go
            hand-in-hand as the best way to manage your apps. Get started using
            the Git workflow your engineering team uses already.
          </p>
        </div>
        <div class="flex-col justify-start items-start flex">
          <img
            src="/images/content/self-hosting/managed_from_git.png"
            loading="lazy"
            width="308"
            sizes="(max-width: 479px) 100vw, 308px"
            alt=""
            srcset="/images/content/self-hosting/managed_from_git-p-500.png 500w, /images/content/self-hosting/managed_from_git-p-800.png 800w, /images/content/self-hosting/managed_from_git-p-1080.png 1080w, /images/content/self-hosting/managed_from_git.png 1320w"
          />
        </div>
        <div class="flex-col justify-start items-start flex">
          <img
            src="/images/content/self-hosting/cluster_customization.png"
            loading="lazy"
            width="253"
            sizes="(max-width: 479px) 100vw, 253px"
            alt=""
            srcset="/images/content/self-hosting/cluster_customization-p-500.png 500w, /images/content/self-hosting/cluster_customization-p-800.png 800w, /images/content/self-hosting/cluster_customization.png 857w"
          />
        </div>
        <div class="flex-col justify-start items-start flex">
          <h1>
            <strong>Cluster Customization</strong>
          </h1>
          <p>
            Self-Host your cluster using CNDI and gain full control over your
            application deployment. No features gated behind paywalls, and you
            can get the most out of your hardware to suit your unique
            requirements. If you don’t need anything too special, CNDI App
            Templates will give you great defaults out of the box.
          </p>
        </div>
        <div class="flex-col justify-start items-start flex">
          <h1>
            <strong>Operational Cost</strong>
          </h1>
          <p>
            CNDI Self-Hosting is a low cost alternative to the recurring
            expenses and hidden fees associated with PaaS. Avoid confusing price
            structures, annoying vendor lock-in, and be in control of your
            spending.
          </p>
        </div>
        <div class="flex-col justify-start items-start flex">
          <img
            src="/images/content/self-hosting/operational_cost.png"
            loading="lazy"
            width="307"
            sizes="(max-width: 479px) 100vw, 307px"
            alt=""
            srcset="/images/content/self-hosting/operational_cost-p-500.png 500w, /images/content/self-hosting/operational_cost-p-800.png 800w, /images/content/self-hosting/operational_cost.png 998w"
          />
        </div>
      </div>
    </div>
  );
}
