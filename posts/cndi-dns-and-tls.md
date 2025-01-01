---
title: 'The Platform: How CNDI Automates DNS and TLS'
published_at: 2024-12-30T15:00:00.000Z
author_name: 'Matt Johnston'
description: 'CNDI Integrates External-DNS and Cert-Manager Automatically'
---

Not long ago it was a manual process to manage DNS records and TLS certificates
for your services, but Kubernetes and a few of it's extensions have made this a
thing of the past.

Today we'll run through how CNDI integrates the Nginx Ingress controller,
External-DNS, and Cert-Manager to automatically manage DNS and TLS for your
public facing services.

It all starts with the Kubernetes
[Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)
resource, it provides a declarative way to manage external access to services
deployed in your cluster. Ingress resources are not all that useful on their own
though, they need a Controller to watch for changes and act on them.

[Kubernetes Controllers](https://kubernetes.io/docs/concepts/architecture/controller/)
are programs which monitor the Kubernetes API for changes to resources they are
registered to watch. This foundational concept is employed for all 3 of the
systems we are discussing today.

1. [Ingress Nginx Controller](https://kubernetes.github.io/ingress-nginx/)
   watches for changes to Ingress resources and routes traffic to Services.
2. [External-DNS](https://github.com/bitnami/charts/blob/main/bitnami/external-dns/README.md)
   watches for changes to Ingress resources and creates DNS records _external_
   to your cluster.
3. [Cert-Manager](https://cert-manager.io/) watches for Ingress resources and
   creates TLS certificates.

The first thing CNDI does to automate these processes is that it installs each
of these as "Core Appplications" in your CNDI Cluster. Core Apps in CNDI are
enabled by default, and you can find them in your project's
`./cndi/cluster_manifests/applications` folder.

Each controller can be configured using designated keys in your
`cndi_config.yaml` file.

The most common configuration is something like this:

```yaml
# basic cndi_config.yaml
applications: { ... }
cluster_manifests: { ... }
infrastructure:
  cndi:
    external_dns:
      provider: aws
      domain_filter:
        - example.com
    cert_manager:
      email: john.smith@example.com
    nodes: [...]
```

We can see here that we are configuring External-DNS to use AWS Route53 as the
DNS Provider, only allowing updates to DNS records for the `example.com` domain.

We are also configuring Cert-Manager to use the email address
`"john.smith@example.com"` and that address will be used when requesting TLS
certificates from [Let's Encrypt](https://letsencrypt.org/).

Both of these configuration objects can also be passed a `values` key, which is
a map of additional configuration options that can be passed to the respective
Helm charts. The same applies to the "public" Ingress Nginx Controller
(`infrastructure.cndi.ingress.nginx.public`) but it doesn't need any
configuration by default.

External-DNS also requires that we provide it with access to the API where your
DNS Zones are hosted. The credentials used are different depending on your DNS
provider, but they will always be stored securely in a Secret called
`external-dns` in the `external-dns` namespace.

Here's an example of what that Secret might look like for AWS Route53:

```yaml
infrastructure: { ... }
applications: { ... }
cluster_manifests:
  # external-dns-secret.yaml for AWS Route53
  external-dns-secret:
    apiVersion: v1
    kind: Secret
    metadata:
      name: external-dns
      namespace: external-dns
    stringData:
      AWS_ACCESS_KEY_ID: $cndi_on_ow.seal_secret_from_env_var(AWS_ACCESS_KEY_ID)
      AWS_SECRET_ACCESS_KEY: $cndi_on_ow.seal_secret_from_env_var(AWS_SECRET_ACCESS_KEY)
```

If you've worked with Kubernetes Secrets before, those last 2 lines might look a
little funky. CNDI is going to replace those
`$cndi_on_ow.seal_secret_from_env_var()` calls with the actual values of the
secrets from your environment. This is a security feature to ensure that your
Secrets are never stored in git in plain text (documented in the
[cluster_manifests doc](https://github.com/polyseam/cndi/blob/main/docs/config/cluster_manifests.md)).
This is powered by a tool called
[Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) and we'll cover
that in our next post!

If you're looking for information on how to configure External-DNS for another
provider, you can learn more from CNDI's
[external_dns](https://github.com/polyseam/cndi/blob/main/docs/config/infrastructure/cndi/external_dns.md)
documentation.

Now that the 3 apps are installed and configured all that's left is to create
Ingress resources with the appropriate annotations.

Here's an example of an Ingress resource configured in `cndi_config.yaml`:

```yaml
applications: { ... }
infrastructure: { ... }
cluster_manifests:
  # example argo-ingress.yaml
  argo-ingress:
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: argocd-ingress
      namespace: argocd
      annotations:
        cert-manager.io/cluster-issuer: cluster-issuer
        kubernetes.io/tls-acme: "true"
        external-dns.alpha.kubernetes.io/hostname: argocd.example.com
        nginx.ingress.kubernetes.io/backend-protocol: HTTPS
    spec:
      ingressClassName: public
      tls:
        - hosts:
            - argocd.example.com
          secretName: cluster-issuer-private-key
      rules:
        - host: argocd.example.com
          http:
            paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: argocd-server
                    port:
                      number: 443
```

This Ingress resource will create a DNS record for `argocd.example.com` and will
request a TLS certificate from Let's Encrypt using the email address provided in
the `cert_manager` configuration.

These CNDI features should make it as easy as possible to manage your own
Ingress DNS and TLS configurations, and we hope you find them useful when you
get started with `cndi create`!

#### Check [cndi](https://cndi.run/gh?utm_content=blog_cndi-dns-and-tls_cndi_link&utm_campaign=cndi-dns-and-tls_blog&utm_source=https://cndi.dev/blog/cndi-dns-and-tls&utm_medium=blog&utm_id=8107) out on GitHub! ⭐️
