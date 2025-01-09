---
title:  'The Platform: How CNDI Automates Secrets Management'
published_at: 2025-01-04T15:00:00.000Z
author_name: 'Matt Johnston'
description: "With Sealed-Secrets CNDI ensures your secrets are safe and secure."
---

> Secrets should _never_ be stored in git!

> _All_ cluster config should be pulled from git!

Every element of cluster configuration should be _pulled_ from a Git repository,
this is the core principle of GitOps.

This includes your application code, your Kubernetes manifests, and even your
secrets.

But how is that possible? We know we aren't supposed to store secrets in Git.
That's true not only of
[Kubernetes Secrets](https://kubernetes.io/docs/concepts/configuration/secret/),
but even state from [Terraform](https://terraform.io).

CNDI has a couple tricks up its sleeve to make this possible.

## Terraform State

[Terraform](https://terraform.io) is the Infrastructure-as-Code engine that
powers CNDI. CNDI generates Terraform configuration based on our
`cndi_config.yaml` file. Once we generate the Terraform configuration we save it
to `./cndi/terraform/cdk.tf.json`. Additionally, CNDI generates a GitHub
workflow which calls `cndi run` on every push to the `main` branch.

`cndi run` is responsible for calling `terraform apply`, but it also is
responsible for ensuring that the Terraform state file `terraform.tfstate` is
stored securely.

After your first successful run, `cndi run` will encrypt the Terraform state
file and store it in the repo in a branch called `_state`. On subsequent runs,
`cndi run` will decrypt the state file and use it to apply changes, after which
the state is encryted and pushed again.

This solution means users never need to create an account or external
infrastructure to get started with CNDI!

Now that we know how we keep Terraform state secure, let's talk about how we
manage Kubernetes Secrets.

## Sealed Secrets

CNDI uses [Sealed Secrets](https://github.com/bitnami-labs/sealed-secrets) to
encrypt each of your Secrets everytime you run `cndi overwrite`. Let's look at
an input to the process, in this case a Wordpress admin password which can't be
added to git in plain text.

```yaml
# cndi_config.yaml
infrastructure: { ... }
applications: { ... }
cluster_manifests:
  wordpress-secret:
    apiVersion: v1
    kind: Secret
    metadata:
      name: wordpress-secret
      namespace: wordpress
    stringData:
      wordpress-password: $cndi_on_ow.seal_secret_from_env_var(WORDPRESS_PASSWORD)
```

The macro on the last line will get replaced with the value of the environment
variable `WORDPRESS_PASSWORD`, then encrypt CNDI will encrypt the Secret using
the `kubeseal` CLI.

In this example the resulting
[SealedSecret](https://github.com/bitnami-labs/sealed-secrets/blob/main/helm/sealed-secrets/crds/bitnami.com_sealedsecrets.yaml)
manifest would be stored in `./cndi/cluster_manifests/wordpress-secret.yaml`.

```yaml
# cndi/cluster_manifests/wordpress-secret.yaml
kind: SealedSecret
apiVersion: bitnami.com/v1alpha1
metadata:
  name: wordpress-secret
  namespace: wordpress
  creationTimestamp:
  annotations:
    sealedsecrets.bitnami.com/cluster-wide: "true"
spec:
  template:
    metadata:
      name: wordpress-secret
      namespace: wordpress
      creationTimestamp:
      annotations:
        sealedsecrets.bitnami.com/cluster-wide: "true"
  encryptedData:
    wordpress-password: AgAjqAQ0mr9yWvI8a7WmOK9H06Ncep...NHCxXS
```

Because the SealedSecret is encrypted, it can be stored in Git without fear of
leaking the secret. The SealedSecret can be decrypted by the Sealed Secrets
Controller running in your cluster, at which point the Secret will be created
with the name `wordpress-secret` in the `wordpress` namespace.

## Conclusion

Since both Kubernetes Secrets and Terraform state are encrypted in git, we can
truly say that every aspect of our cluster lives in git, and it can be managed
from there!

#### For complete documentation, check out [cndi](https://cndi.run/gh?utm_content=blog_cndi-secrets_cndi_link&utm_campaign=cndi-secrets_blog&utm_source=https://cndi.dev/blog/cndi-secrets&utm_medium=blog&utm_id=8109) on GitHub! ⭐️
