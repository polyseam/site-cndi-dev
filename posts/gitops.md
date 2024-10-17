---
title: GitOps With CNDI
published_at: 2023-03-23T15:00:00.000Z
author_name: 'Matt Johnston'
description: Managing Cluster Infrastructure and Applications from Git
---

### GitOps takes the DevOps process and applies it to managing your infrastructure as code, your Kubernetes cluster, and the applications that run on top of it.

**What is GitOps?** ‍

If you're wondering what GitOps is, you have come to the right place! Check out
our GitOps with CNDI video, if that's how you prefer to learn!

<iframe width="560" height="315" src="https://www.youtube.com/embed/grTslxZIvYE?si=CsMbIKlkelEcNIHC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Like many terms, it’s hard to find an agreed upon definition out there, so let's
start by going over Polyseam’s GitOps definition:

_GitOps takes the DevOps process and applies it to managing your infrastructure
as code, your Kubernetes cluster and the applications that run on top of it._

That definition had a bunch of software engineering terms, so let’s break it
down, starting with DevOps.

**DevOps**

DevOps is a continuous process with the goal of efficiently iterating on a
software project to make it better. Most organizations who use the DevOps
approach are likely using git, whether they are self-hosting it or on a cloud
platform like GitHub or GitLab.

By using git your team can effectively collaborate on work, review each other’s
code, run tests to ensure the code is working properly, and then ultimately have
that code automatically deployed. Developers being able to own this entire
lifecycle of software development is the core of DevOps.

The next term in our GitOps definition that you might not know, is
“Infrastructure as Code”.

**Infrastructure as Code (IaC)**

Infrastructure as code or “IaC” refers to managing the state of your hardware
infrastructure from code instead of manual processes. It’s important to keep in
mind that Infrastructure as Code is just managing your hardware - software is
still not involved yet.

Some benefits of managing your infrastructure this way include easy
infrastructure scaling (up or down), it’s much easier to redeploy infrastructure
for common jobs, and it lowers the amount of errors caused by manual
configuration. There are many other benefits to IaC but those are some of the
most common.

**Kubernetes**

Kubernetes is by far the most commonly used platform to deploy distributed
applications to the cloud because of it’s ability to manage a cluster of servers
working together to run software. It’s also open-source and available in every
cloud.

Kubernetes is managed with configuration files, and traditionally these files
need to be manually applied within the cluster, this means there is no trace of
how the cluster has been configured over time, and this process is very error
prone.

Just like we saw with IaC the best way to manage changes is to keep those files
in git. By using a tool like ArgoCD we’re able to automatically sync this
configuration into our cluster from our git repo. This approach of having the
cluster synchronize itself is the software component of GitOps, and coupled with
the hardware infrastructure as code, our entire system is defined as source code
in git. Because the configuration files (Kubernetes Manifests) are all in git,
we can use a modern DevOps approach to manage the files - and by extension the
cluster - efficiently.

We know this is a complex topic, so let’s recap our definition.

GitOps takes the DevOps process and applies it to managing your infrastructure
as code, your Kubernetes cluster, and the applications that run on top of it.

Essentially what we're doing is using the DevOps process to manage our hardware
and software that run our compute workloads. Now if you're wondering what tool
you can use to really enable the GitOps workflow in your organization, this is
where CNDI comes in, built by Polyseam, fully open-source, and totally free for
everyone to use forever.

CNDI essentially lets you leverage the power of GitOps from one configuration
file, in the same workflow you already use for your software projects.

From this file you can specify the hardware and software aspects of your
infrastructure. This file can be generated from answering some interactive
prompts in the command line. You can even write templates with your own prompts
to accelerate your own teams through Platform Engineering. Stay tuned for a blog
post about that!

![A tree of components: a config file, terraform objects, kubernetes objects, servers, and cloud providers](/images/blog/gitops/one-file.png)

If you're interested, you can check out the project
[here!](https://cndi.run/gh?utm_id=8057&utm_medium=blog&utm_campaign=gitops_blog&utm_content=blog_gitops_cndi_link&utm_source=https://cndi.dev/blog/gitops)

Last thing I want to mention is since CNDI is an open-source project, we’re
excited to onboard every interested contributor. So if you want to be involved
in building this new Cloud-Native tool, we would love to hear your ideas and
build together.

Please reach out if you want to learn more about GitOps or CNDI, our team is
here to
[help on Discord!](https://cndi.run/di?utm_id=8058&utm_medium=blog&utm_campaign=gitops_blog&utm_content=blog_gitops_discord_link&utm_source=https://cndi.dev/blog/gitops)
‍
