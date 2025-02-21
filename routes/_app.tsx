import { type PageProps } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";
import SegmentSnippet from "components/SegmentSnippet.tsx";
import GASnippet from "components/GASnippet.tsx";

export default function App({ Component, url }: PageProps) {
  const devMode = url.hostname === "localhost";

  if (devMode) {
    console.log("-- DEVMODE --");
  }

  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CNDI | Home</title>
        <link rel="stylesheet" href="/styles.css" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
        <link
          href="/css/cndi-run.webflow.css"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossorigin="anonymous"
        />
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        >
        </script>
        <script type="text/javascript">
          {'WebFont.load({  google: {    families: ["Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic","Source Code Pro:regular"]  }});'}
        </script>
        <link
          href="/images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon"></link>
        {!devMode
          ? (
            <SegmentSnippet
              segmentioWriteKey={Deno.env.get("SEGMENTIO_WRITE_KEY")!}
              mixpanelProjectToken={Deno.env.get("MIXPANEL_PROJECT_TOKEN")!}
            />
          )
          : <meta name="devmode"></meta>}
      </head>
      <body class="body wf-17859gj wf-vl64f">
        <Nav url={url} />
        <Component />
        <Footer url={url} />
        {!devMode
          ? <GASnippet gaMeasurementId={Deno.env.get("GA_MEASUREMENT_ID")!} />
          : <script>{`console.log('GA Disabled for DEVMODE')`}</script>}
      </body>
    </html>
  );
}
