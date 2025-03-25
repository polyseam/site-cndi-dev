import { Handlers } from "$fresh/server.ts";
import { STATUS_CODE } from "@std/http/status";

export const handler: Handlers = {
  GET(_req, ctx) {
    const Location = `/blog/${ctx.params.slug}`;
    return new Response("", {
      status: STATUS_CODE.MovedPermanently,
      headers: { Location },
    });
  },
};
