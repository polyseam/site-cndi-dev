import { ComponentChildren } from "preact";
import CookieManager from "components/CookieManager.tsx";
import LinkOut from "components/LinkOut.tsx";
type FooterProps = {
  children: ComponentChildren;
  url: URL;
};

export default function Footer(props: FooterProps) {
  const footerVersion = "v1.0.0";
  const utm_source = props.url.toString();
  return (
    <>
      <CookieManager disabled />
      <section class="footer_homepage">
        <div class="container-1460">
          <div class="footer-wrapper">
            <LinkOut
              className="footer-brand w-inline-block"
              utm_source={utm_source}
              pathname="/pio"
              utm_content="nav_github"
              utm_id={8000}
              contentVersion={`site_cndidev@${footerVersion}`}
            >
              <img
                src="/images/Polyseam-Logo--With-white-Text.png"
                loading="lazy"
                width="211"
                sizes="(max-width: 479px) 100vw, 211px"
                alt="Polyseam Logo"
                srcset="/images/Polyseam-Logo--With-white-Text-p-500.png 500w, images/Polyseam-Logo--With-white-Text-p-800.png 800w, images/Polyseam-Logo--With-white-Text-p-1080.png 1080w, images/Polyseam-Logo--With-white-Text-p-1600.png 1600w, images/Polyseam-Logo--With-white-Text-p-2000.png 2000w, images/Polyseam-Logo--With-white-Text-p-2600.png 2600w, images/Polyseam-Logo--With-white-Text-p-3200.png 3200w"
              />
            </LinkOut>
            <div class="footer-content">
              <div
                id="w-node-fa344622-2bf7-cfce-a4e8-1fdee3c07e9e-f6848bac"
                class="footer-block"
              >
                <div class="title-small">Socials</div>
                <LinkOut
                  utm_content="footer_youtube"
                  utm_source={utm_source}
                  utm_id={8013}
                  contentVersion={footerVersion}
                  pathname="/yt"
                  className="footer-link-2"
                >
                  YouTube
                </LinkOut>
                <LinkOut
                  utm_content="footer_github"
                  utm_source={utm_source}
                  utm_id={8014}
                  contentVersion={footerVersion}
                  pathname="/gh"
                  className="footer-link-2"
                >
                  GitHub
                </LinkOut>
                <LinkOut
                  utm_content="footer_discord"
                  utm_source={utm_source}
                  utm_id={8015}
                  contentVersion={footerVersion}
                  pathname="/di"
                  className="footer-link-2"
                >
                  Discord
                </LinkOut>
                <LinkOut
                  utm_content="footer_twitter"
                  utm_source={utm_source}
                  utm_id={8016}
                  contentVersion={footerVersion}
                  pathname="/tw"
                  className="footer-link-2"
                >
                  Twitter
                </LinkOut>

                <LinkOut
                  utm_content="footer_linkedin"
                  utm_source={utm_source}
                  utm_id={8017}
                  contentVersion={footerVersion}
                  pathname="/li"
                  className="footer-link-2"
                >
                  LinkedIn
                </LinkOut>
              </div>
              <div
                id="w-node-fa344622-2bf7-cfce-a4e8-1fdee3c07eab-f6848bac"
                class="footer-block"
              >
                <div class="title-small">About</div>
                <a href="/community" class="footer-link-2">
                  Community
                </a>
                <a href="/terms-of-use" target="_blank" class="footer-link-2">
                  Terms of Use
                </a>
                <a href="/privacy-policy" target="_blank" class="footer-link-2">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-copyright-center">
          Copyright © 2024{" "}
          <a href="index.html" aria-current="page" class="link w--current">
            Polyseam
          </a>
        </div>
      </section>
    </>
  );
}
