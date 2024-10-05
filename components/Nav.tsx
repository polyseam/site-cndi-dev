export default function Nav() {
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
          href="index.html"
          aria-current="page"
          class="uui-navbar07_logo-link w-nav-brand w--current"
        >
          <div class="uui-logo_component">
            <img
              src="/images/navbar_logo.png"
              loading="lazy"
              width="125"
              alt=""
              class="image-40"
            />
          </div>
        </a>
        <nav role="navigation" class="uui-navbar07_menu w-nav-menu">
          <div class="uui-navbar07_menu-left">
            <div
              data-hover="true"
              data-delay="300"
              class="uui-navbar07_menu-dropdown w-dropdown"
            >
              <div class="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div class="uui-dropdown-icon w-embed">
                  {
                    /* <svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg> */
                  }
                </div>
                <div>Solutions</div>
              </div>
              <nav class="uui-navbar07_dropdown-list w-dropdown-list">
                <div class="uui-navbar07_dropdown-link-list">
                  <a
                    href="platform-engineering.html"
                    class="uui-navbar07_dropdown-link w-inline-block"
                  >
                    <div class="uui-navbar07_item-right">
                      <div class="uui-navbar07_item-heading">
                        Platform Engineering
                      </div>
                    </div>
                  </a>
                  <a
                    href="operation-cost-savings.html"
                    class="uui-navbar07_dropdown-link w-inline-block"
                  >
                    <div class="uui-navbar07_item-right">
                      <div class="uui-navbar07_item-heading">
                        Operational Cost Savings
                      </div>
                    </div>
                  </a>
                  <a
                    href="data-mesh.html"
                    class="uui-navbar07_dropdown-link w-inline-block"
                  >
                    <div class="uui-navbar07_item-right">
                      <div class="uui-navbar07_item-heading">Data Mesh</div>
                    </div>
                  </a>
                  <a
                    href="repeatable-deployments.html"
                    class="uui-navbar07_dropdown-link w-inline-block"
                  >
                    <div class="uui-navbar07_item-right">
                      <div class="uui-navbar07_item-heading">
                        Repeatable Deployments
                      </div>
                    </div>
                  </a>
                  <a
                    href="site-reliability-engineer.html"
                    class="uui-navbar07_dropdown-link w-inline-block"
                  >
                    <div class="uui-navbar07_item-right">
                      <div class="uui-navbar07_item-heading">
                        Site Reliability Engineer (SRE)
                      </div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
            <a
              href="/templates"
              class="uui-navbar07_link bug-fix w-nav-link"
            >
              Templates
            </a>
            <a
              href="/community"
              class="uui-navbar07_link bug-fix w-nav-link"
            >
              Community
            </a>
            <a href="/blog" class="uui-navbar07_link test w-nav-link">
              Blogs
            </a>
            <a
              href="https://cndi.run/gh?utm_content=nav_github&amp;utm_campaign=cndi_dev&amp;utm_source=https://www.cndi.dev/&amp;utm_medium=website&amp;utm_id=8000"
              target="_blank"
              class="link-block-7 w-inline-block"
            >
              <img
                src="/images/GitHub.png"
                loading="lazy"
                width="40"
                alt="Github"
                class="image-38"
              />
            </a>
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
