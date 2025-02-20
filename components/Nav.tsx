import LinkOut from "islands/LinkOut.tsx";

type NavProps = {
  url: URL;
};

export default function Nav(props: NavProps) {
  const navVersion = "v2.0.0";
  const utm_source = props.url.toString();
  return (
    <div class="flex justify-between m-8">
      <div>
        <a
          href="/"
          className="inline-block p-2 align-top position-relative text-align-left"
        >
          <img
            src="/images/logo/cndi_by_polyseam.png"
            loading="lazy"
            width="125"
          />
        </a>
      </div>
      <nav role="navigation" class="my-4">
        <div class="grid grid-flow-row gap-4 sm:grid-flow-col">
          <LinkOut
            utm_id={8056}
            utm_content="nav_blog_cndidev"
            utm_source={utm_source}
            contentVersion={navVersion}
            pathname="/configurator"
            className="inline-block p-2 align-top position-relative text-align-left"
          >
            Configurator
          </LinkOut>
          <a
            href="/blog"
            className="inline-block p-2 align-top position-relative text-align-left"
          >
            Blog
          </a>
          <a
            href="/templates"
            className="inline-block p-2 align-top position-relative text-align-left"
          >
            Templates
          </a>
          <LinkOut
            utm_id={8056}
            utm_content="nav_discord_cndidev"
            pathname="/di"
            className="inline-block p-2 align-top position-relative text-align-left"
            contentVersion={navVersion}
            utm_source={utm_source}
          >
            Discord
          </LinkOut>
          <LinkOut
            pathname="/gh"
            utm_content="nav_github_cndidev"
            utm_source={utm_source}
            utm_id={8000}
            contentVersion={navVersion}
            className="flex flex-row items-center justify-center align-top position-relative text-align-left"
          >
            <div class="w-10">
              <img
                src="/images/logo/GitHub.png"
                loading="lazy"
                alt="Github Logo"
                width="40"
              />
            </div>
          </LinkOut>
        </div>
      </nav>
    </div>
  );
}
