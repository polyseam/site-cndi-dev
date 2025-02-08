import LinkOut from "islands/LinkOut.tsx";
type NavProps = {
  url: URL;
};

export default function Nav(props: NavProps) {
  const navVersion = "v1.0.0";
  const utm_source = props.url.toString();
  return (
    <div>
      <div class="flex justify-between m-8">
        <a
          href="/"
          aria-current="page"
        >
          <div class="uui-logo_component">
            <img
              src="/images/logo/cndi_by_polyseam.png"
              loading="lazy"
              width="125"
              alt=""
              class="image-40"
            />
          </div>
        </a>
        <nav role="navigation">
          <div>
            <a
              href="/configurator"
              class="uui-navbar07_link bug-fix w-nav-link"
            >
              Configurator
            </a>
            <a href="/blog" class="uui-navbar07_link bug-fix w-nav-link">
              Blog
            </a>
            <a href="/templates" class="uui-navbar07_link bug-fix w-nav-link">
              Templates
            </a>
            <LinkOut
              utm_id={8056}
              utm_content="nav_discord"
              pathname="/di"
              className="uui-navbar07_link bug-fix w-nav-link"
              contentVersion={navVersion}
              utm_source={utm_source}
            >
              Discord
            </LinkOut>
            <LinkOut
              className="link-block-7 w-inline-block"
              pathname="/gh"
              utm_content="nav_github"
              utm_source={utm_source}
              utm_id={8000}
              contentVersion={navVersion}
            >
              <img
                src="/images/logo/GitHub.png"
                loading="lazy"
                width="40"
                alt="Github Logo"
                class="image-38"
              />
            </LinkOut>
          </div>
        </nav>
      </div>
    </div>
  );
}
