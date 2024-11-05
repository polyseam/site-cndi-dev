export function handler(req: Request): Response {
  const url = new URL(req.url);
  if (url.hostname === "www.cndi.dev") {
    url.hostname = "cndi.dev";
  }
  const Location = url.toString();
  return new Response("", {
    status: 307,
    headers: { Location },
  });
}
