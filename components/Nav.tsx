import LinkOut from "components/LinkOut.tsx";
type NavProps = {
  url: URL;
};

export default function Nav(props: NavProps) {
  const navVersion = "v1.0.0";
  const utm_source = props.url.toString();
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      class="uui-navbar07_component w-nav"
    >
      <div class="uui-navbar07_container">
        <a
          href="/"
          aria-current="page"
          class="uui-navbar07_logo-link w-nav-brand w--current"
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
        <nav role="navigation" class="uui-navbar07_menu w-nav-menu">
          <div class="uui-navbar07_menu-left">
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
        <div class="uui-navbar07_menu-button w-nav-button">
          <div class="menu-icon_component">
            <div class="menu-icon_line-top"></div>
            <div class="menu-icon_line-middle">
              <div class="menu-icon_line-middle-inner"></div>
            </div>
            <div class="menu-icon_line-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
