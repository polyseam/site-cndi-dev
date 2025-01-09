---
title: What is CNDI?
published_at: 2024-21-20T15:00:00.000Z
author_name: 'Matt Johnston'
description: "CNDI: What does it do? Does it do things? Let's find out!"
---

<!-- Cloud Native Deployment Interface -->

Kubernetes is the operating system of the cloud, but we aren't done yet! Every
cloud has their own distribution and even though K8s can run anything, it's not
simple enough for everyone to use.

For every cluster you need perform a common set of tasks:

- <span style="color: var(--color-accent-fg);">Infrastructure
  Provisioning</span>: Setting up networks, Kubernetes clusters, and supporting
  resources, via Infrastructure-as-Code.
- <span style="color: var(--color-accent-fg);">Cluster Management</span>: Safely
  updating the configuration of your cluster and applications.
- <span style="color: var(--color-accent-fg);">Secrets Management</span>:
  Managing credentials and environment variables responsibly.
- <span style="color: var(--color-accent-fg);">Observability</span>: Monitoring
  and logging to ensure everything is running smoothly.
- <span style="color: var(--color-accent-fg);">DNS and TLS</span>: Setting up
  ingresses with domain names and SSL certificates for your public-facing
  services.
- <span style="color: var(--color-accent-fg);">Static Analysis</span>: Ensuring
  your configurations are inline with best practices and security standards.

CNDI helps you deploy and manage portable Kubernetes-based applications in a
GitOps-friendly way by providing a common platform to handle all of those tasks.

## Template-Driven Deployment

One of the biggest selling points of CNDI is its Template feature. If you’re
deploying a common service like Apache Airflow, Kafka, or PostgreSQL, you can
use one of our [existing Templates](https://cndi.dev/templates) that capture
best practices and recommended configurations. All you need to do is follow the
interactive prompts!

You can even create your own CNDI Templates —they're just YAML— enabling you to
share interactive wizards with your team. This reduces cognitive load and
ensures that everyone is following the same standards.

## Core Commands

Working with CNDI primarily revolves around four commands:

#### <span style="color: #e9d5ff; font-family: monospace; background-color: #161b22; padding: 0.5rem; border-radius: 0.375rem">cndi create</span>

This is your starting point. It asks you a series of interactive prompts:

- What should we call the new Git repo?
- Which Template should we use?
- Where should we deploy the cluster?
- What credentials do we need?

and more! Once they've all been answered CNDI sets up a brand-new project
folder, complete with a repo, secrets, and workflows on GitHub.

#### <span style="color: #e9d5ff; font-family: monospace; background-color: #161b22; padding: 0.5rem; border-radius: 0.375rem">cndi overwrite</span>

Once your project is created, you manage it through two key files:

- `.env`: Contains sensitive info (e.g., passwords, tokens).
- `cndi_config.yaml`: The central configuration for your cluster, apps, and
  infrastructure.

When you run `cndi ow`, it translates this configuration into Terraform code and
Kubernetes manifests, including encypting
([sealing](https://github.com/bitnami-labs/sealed-secrets)) your Secrets.

#### <span style="color: #e9d5ff; font-family: monospace; background-color: #161b22; padding: 0.5rem; border-radius: 0.375rem">cndi run</span>

When you’re ready to apply your changes, you push them to your repo. A GitHub
Actions workflow will call `cndi run` to apply your infrastructure changes.

#### <span style="color: #e9d5ff; font-family: monospace; background-color: #161b22; padding: 0.5rem; border-radius: 0.375rem">cndi destroy</span>

If you ever need to tear everything down, this command fetches the Terraform
state, decrypts it, and calls `terraform destroy` so you can cleanly remove all
resources CNDI created.

## Why Use CNDI?

- **GitOps-Managed**: Your cluster will pull configuration from git ensuring a
  consistent and auditable deployment process.
- **Infrastructure as Code**: CNDI generates Terraform code for your
  infrastructure, ensuring it’s simple, versioned, and repeatable.
- **Cross-Cloud Flexibility**: Run on AWS, GCP, Azure, or locally
- **Templating & Extensibility**: Interactive wizards for common services, or
  create your own
- **Completely free and Open-Source**: No licensing fees or vendor lock-in
- **Community & Support**: Supportive Discord community and active development

CNDI aims to close the gap between infrastructure provisioning and application
delivery by wrapping best practices and automation into one approachable CLI.

If you’re curious to see how it all fits together—or if you’re simply tired of
manual cluster setups—give CNDI a try. We hope you find it useful and we'd love
to hear from you!

#### For complete documentation, check out [cndi](https://cndi.run/gh?utm_content=blog_what-is-cndi_cndi_link&utm_campaign=what-is-cndi_blog&utm_source=https://cndi.dev/blog/what-is-cndi&utm_medium=blog&utm_id=8108) on GitHub! ⭐️
