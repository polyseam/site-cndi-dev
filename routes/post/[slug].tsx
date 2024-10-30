import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const Location = `/blog/${ctx.params.slug}`;
    return new Response("", {
      status: 301,
      headers: { Location },
    });
  },
};
