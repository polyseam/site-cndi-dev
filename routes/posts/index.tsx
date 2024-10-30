import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req) {
    return new Response("", {
      status: 301,
      headers: { Location: "/blog" },
    });
  },
};
