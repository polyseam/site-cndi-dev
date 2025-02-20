import { Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "@std/http/status";

const BAD_CLIENT_BODY = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Moved Permanently</title>
  </head>
  <body>
    <h1>Moved Permanently</h1>
    <p>This page has moved to <a href="https://configurator.cndi.dev">https://configurator.cndi.dev</a>.</p>
  </body>
</html>`.trim();

export const handler: Handlers = {
  GET: (req, _ctx) => {
    const url = new URL(req.url);
    const t = url.searchParams.get("t");
    const Location = `https://configurator.cndi.dev/?t=${t}`;
    return new Response(BAD_CLIENT_BODY, {
      status: STATUS_CODE.MovedPermanently,
      headers: {
        Location,
      },
    });
  },
};
