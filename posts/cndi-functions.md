---
title: "The Platform: How CNDI Automates Deploying Serverless Functions"
published_at: 2025-01-24T15:00:00.000Z
author_name: 'Matt Johnston'
description: "How CNDI Enables Self-Hosted Serverless Functions on Kubernetes"
---

Serverless functions are of course not serverless. They run on servers, but are
called serverless because you don't need to think about the server as a
developer. You just write your function and deploy it, and the cloud provider
takes care of the rest.

Another interesting attribute of serverless functions is that they are generally
billed per-invocation, so you're paying only for the time the function is
running. This is in contrast to a traditional server where you pay for the
server to be running all the time, even if it's not doing anything. This isn't
always an advantage though, in fact the more your functions are called, the less
affordable this model becomes.

Serverless functions also have the property that because they are invoked
"just-in-time", they typically have a startup delay. This is called a "cold
start" and can be a problem for some applications.

CNDI provides an authoring and deployment experience just like other
Functions-as-a-Service runtimes, except that it runs in **your own** Kubernetes
cluster. You don't have to [worry](https://serverlesshorrors.com) about cold
starts or costs that scale poorly with usage.

Like all great tools, Functions-as-a-Service and CNDI Functions are not the
right tool for every situation. From this point let's set some assumptions:

- You want to write [JavaScript](https://deno.com/blog/deno-v-oracle) or
  [TypeScript](https://typescriptlang.org) functions.
- You want to write stateless functions that are invoked in response to HTTP
  Events.
- You're fundamentally a cool and open minded individual.

Now, let's talk options.

1. If you are looking for the proprietary Functions-as-a-Service offering
   built-in to your cloud, your choices are
   [AWS Lambda](https://aws.amazon.com/lambda/),
   [Google Cloud Functions](https://cloud.google.com/functions), or
   [Azure Functions](https://azure.microsoft.com/en-us/services/functions/).
   Even though these are built-in to the cloud, they are still surprisingly
   lacking in developer experience and each have vendor-specific non-portable
   APIs.

2. If you are able to use an up-and-coming cloud provider, I'd recommend
   [Deno Deploy](https://deno.com/deploy). It's a great platform for writing
   Functions that are invoked in response to HTTP Events, and it's built on
   [open standards](https://wintercg.org/work). Pricing is per-invocation, but
   you get a generous free tier without a credit card (for now!).

3. If you like the programming model of Deno Functions but you would rather
   self-host,
   [CNDI Functions](https://github.com/polyseam/cndi/blob/main/docs/functions.md)
   is the right tool for you. You can run it in your own Kubernetes cluster in
   your own cloud, and you don't have to worry about cold-starts or
   per-invocation pricing.

Sincerely, I would start with option
<span style="color: var(--color-accent-fg);">#2.</span> because you'll quickly
learn just how elegant Functions can be when they're at their best. If you give
it a try and you're a fan, then consider
<span style="color: var(--color-accent-fg);">#3.</span>!

With all that said, let's dive into what makes CNDI Functions special.

## The CNDI Functions Experience

Getting started with CNDI Functions is similar to getting started with any other
CNDI Template:

```cndi
# eg. cndi create johnstonmatt/my-fns-cluster --template fns
cndi create <github-owner>/<new-github-repo> -t fns
```

This will prompt you interactively for all required info starting with the
basics like which Kubernetes distribution you are targeting (eg. `aws/eks`),
then moving on to asking you about the domain names to use for your new cluster
services.

Using all that info `cndi` will create a new repository on GitHub and generate
some source code in the folder `./<new-github-repo>`. Inside you'll see a folder
`./functions`, and a couple demo functions.

Your `cndi_config.yaml` will include a block for configuring CNDI Functions:

```yaml
# ./cndi_config.yaml
cluster_manifests: { ... }
applications: { ... }
infrastructure:
  cndi:
    functions:
      hostname: fns.example.com
```

If you configured a hostname for your Functions when prompted earlier, it will
be shown in your `cndi_config.yaml` as `infrastructure.cndi.functions.hostname`.
This hostname's DNS records will be automatically updated as well if you are
using CNDI's [ExternalDNS and TLS](/blog/cndi-dns-and-tls) features.

Every function you write should be in your repo as `./functions/my-fn/index.ts`
and should call `Deno.serve` to handle incoming requests. When you call
`cndi overwrite` and push your cndi project to git, your function will be served
at `https://fns.example.com/my-fn`.

```typescript
// ./functions/cowsay/index.ts
import { say } from "npm:cowsay/build/cowsay.es.js";

Deno.serve((req) => {
  const { pathname } = new URL(req.url);

  // accessible at https://fns.example.com/cowsay?message=hello
  if (pathname !== "/cowsay") {
    return new Response("Not Found", {
      status: 404,
    });
  }

  const query = new URL(req.url).searchParams;
  const message = query.get("message");

  if (!message || typeof message !== "string" || message.length === 0) {
    return new Response("Please provide a message", {
      status: 400,
    });
  } else {
    return new Response(say({ text: message }), {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
});
```

### Secrets and Environment Variables

You can also use the `fns-env-secret` in `cndi_config.yaml` to attach Secret
environment variables to be read by your Functions. The
`./functions/hello-world/index.ts` function below reads the `GREETING`
environment variable.

```yaml
# ./cndi_config.yaml
cluster_manifests:
  fns-env-secret:
    kind: Secret
    metadata:
      name: fns-env-secret
      namespace: fns
    stringData:
      GREETING: $cndi_on_ow.seal_secret_from_env_var(DEFAULT_GREETING)
```

```typescript
// ./functions/greet/index.ts
import { STATUS_CODE } from "jsr:@std/http";

const greeting = Deno.env.get("GREETING") || "Hello";

Deno.serve((req) => {
  const { pathname } = new URL(req.url);

  if (!pathname.startsWith("/greet")) {
    return new Response("Not Found", {
      status: STATUS_CODE.NotFound,
    });
  }

  const who = pathname.split("/")?.[2] || "world";

  const text = `${greeting} ${who}!`;

  const result = {
    greeting: text,
  };

  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
    },
    status: STATUS_CODE.OK,
  });
});
```

This ability to provide Secret values can of course be used for sensitive
information too, like database credentials, and CNDI will ensure they remain
encrypted by leveraging our [Secrets Management](/blog/cndi-secrets) features.

CNDI Functions allows you to easily spin up a serverless function runtime based
on modern Typescript and web standards, and all you need to do is write the code
and push to git.

Big shoutouts to the MIT licensed
[supabase/edge-runtime](https://github.com/supabase/edge-runtime) which powers
much of the CNDI Functions project under the hood.

#### To get started with writing your own Functions check out [cndi](https://cndi.run/gh?utm_content=blog_cndi-functions&utm_campaign=cndi-functions_blog&utm_source=https://cndi.dev/blog/cndi-functions&utm_medium=blog&utm_id=8112) on GitHub! ⭐️
