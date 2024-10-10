import { type PageProps } from "$fresh/server.ts";
import Nav from "../components/Nav.tsx";
import Footer from "../components/Footer.tsx";

export default function App({ Component, url }: PageProps) {
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
        <script type="text/javascript">
          {'!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);'}
        </script>
        <link
          href="/images/favicon.png"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon"></link>
      </head>
      <body class="body wf-17859gj wf-vl64f">
        <Nav url={url} />
        <Component />
        <Footer url={url} />
      </body>
    </html>
  );
}
