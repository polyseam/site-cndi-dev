import { Head } from "$fresh/runtime.ts";

export default function Error404({ url }: { url: URL }) {
  const pathname = url.pathname;
  let frag = <a href="/">Go back home</a>;
  if (pathname.includes("/templates/")) {
    frag = <a href="/templates">List Templates</a>;
  }
  if (pathname.includes("/blog/")) {
    frag = <a href="/blog">List Blog Posts</a>;
  }
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <div class="px-4 py-8 mx-auto">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h6 class="text-xl font-bold">404 - Page Not Found</h6>
          <p class="text-sm text-slate-200">
            😬 I hope we didn't break a link!
          </p>
          <p class="my-4">{frag}</p>
        </div>
      </div>
    </>
  );
}
