import { FreshContext } from "$fresh/server.ts";
import { STATUS_CODE } from "@std/http/status";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);
  if (url.hostname === "www.cndi.dev") {
    url.hostname = "cndi.dev";

    const Location = url.toString();
    return new Response("", {
      status: STATUS_CODE.MovedPermanently,
      headers: { Location },
    });
  }
  const resp = await ctx.next();
  const contentType = resp.headers.get("Content-Type") || "";
  if (contentType.startsWith("text/html")) {
    resp.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
  }
  return resp;
}
