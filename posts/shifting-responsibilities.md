---
title: 'Shifting Responsibilities: The Role of Developers in Infrastructure'
published_at: 2023-05-09T15:00:00.000Z
author_name: 'Harshil Patel'
description: "More work for developers - but we can handle it!"
---

Is writing infrastructure as code a good practice? Should developers be
responsible for writing and maintaining the infrastructure code? And how does
this practice impact software engineering? In this article, we will explore the
evolving landscape of infrastructure management, the growing role of developers
in infrastructure code, and the challenges that arise when managing complex
systems.

#### The Evolution of Infrastructure Management

Over the years, we have witnessed the transformative impact of technologies like
Docker and Kubernetes on how we deploy modern systems. Docker simplified the
creation of container images, while Kubernetes addressed the challenges of
container management and orchestration.

Previously, deploying an application required the involvement of an operations
team, but with Docker’s rise, the responsibility for creating Docker images
shifted towards software developers. Today, it is expected that developers
provide a `Dockerfile` to run their applications in isolated environments.

#### The Role of Developers in Infrastructure as Code

As infrastructure can now be written as code, the responsibility for managing it
has shifted towards software developers. However, developers can only be experts
in so many areas, and they need to be equipped with the proper knowledge and
platform to deliver on the DevOps promise of self-serve infrastructure.

In the past, developers were only responsible for writing source code, then
passing that bundle to their operations team for deployment. This bottleneck
spawned the new model of DevOps where developers are now responsible for
deployment, and this is no small task.

From Kubernetes to Infrastructure-as-Code, achieving scalable and reliable
infrastructure and applications is simply too complex for developers to manage
without new tools.

Fortunately the infrastructure space moves quickly, and new approaches like
GitOps make deploying complex distributed systems on Kubernetes attainable for
the average developer.

For many projects, especially those which contain only one application, simply
pointing a service like AWS ECS or GCP Cloud Run to your git repository is
sufficient for deploying that application, and infrastructure-as-code is not
required.

However, many applications will require more complex architectures, which could
benefit from IaC. Sometimes this is driven by technical considerations like
performance, fundamentally distributed solutions, or other special deployment
considerations.

Maybe even more frequently, the drive towards Kubernetes and IaC is about the
development _teams_ and their structure. For instance, if you have three teams
each managing their own complex service, and those services communicate with
each-other you likely could benefit from an abstraction like Kubernetes to
facilitate orchestration and inter-service communication.

When teams reach this stage, developers should focus on using tools such as
ArgoCD to manage Kubernetes resources, and tools like Terraform to manage the
infrastructure to run the cluster itself. These tools make it easy and
repeatable to deploy complex applications in a way that is familiar to
developers: make a pull request, merge, and let automation take it from there.

#### The Role of the Platform/DevOps Team

When software developers are responsible for deploying services, it is often
useful to provide them with a set of templates that they can fill out and use to
deploy systems in the way that is right for your organization. Without these
templates your developers will consistently reinvent the wheel and potentially
make critical mistakes.

In essence, the job of the platform team is to provide the rest of the
engineering organization with an internal development platform (IDP) which makes
self-serve infrastructure not just easy for developers, but safe, reliable, and
secure.

#### Kubernetes - the good and the bad

Let’s start with the bad: despite the wealth of tools in the Kubernetes
ecosystem, setting up and managing a cluster can still present challenges.
Simplicity and functionality remain sought-after, and the community continues to
innovate to strike the right balance. Kubernetes has a very steep learning
curve, and the ramp-up time for developer productivity is considerably longer
than simpler alternatives.

However, Kubernetes is cementing its position as the universal backend. It is
available on every cloud, on-premise, and makes no assumptions about the
workload to be executed. When your team is up to speed, K8s is undoubtedly the
best way to run a distributed system.

Based on the recent
[CNCF Annual Survey](https://www.cncf.io/reports/cncf-annual-survey-2022/) the
number of application workloads in Kubernetes is growing 30% year-over-year, and
the auxiliary workloads growing a staggering 211% year-over-year, it’s clear
that for the time being, K8s is the operating system of the cloud. This is true
not just in the major clouds, but even when deploying on-premise.

The cost in terms of the Kubernetes learning curve is steep, but the portability
and ubiquity of this operating system for the cloud has the potential to
accelerate your development when your team has ramped up. This is especially
true when the platform engineering team in your organization creates the
templates that encode the critical knowledge required for deploying clusters the
right way.

#### Conclusion

We’ve seen how the number of responsibilities given to developers is growing
constantly. What was once the job of the operations team is now the job of the
developer. All this responsibility requires more expertise in terms of
infrastructure, and our developers can only be experts in so many domains. For
this reason when your developers are tasked with infrastructure deployment, they
need tools and processes which ensure they are efficient and effective. It is
the job of the platform team to build these tools and support the developers
with these new responsibilities. Developers should be using battle-tested
templates when using infrastructure as code, not reinventing the wheel with
every service.

If you are building out an internal development platform of your own, check out
our tool
[CNDI](https://cndi.run/?utm_content=blog_shifting-responsibilities_cndi_link&utm_campaign=shifting-responsibilities_blog&utm_source=https://cndi.dev/blog/shifting-responsibilities&utm_medium=blog&utm_id=8104),
which contains excellent templates out of the box for things like
[Airflow](https://cndi.dev/templates/airflow) and
[Postgres](https://cndi.dev/templates/postgres), powered by the latest in IaC
and GitOps best practices. We also created a simple method for platform teams to
create their own interactive Templates so that the complexities of Kubernetes
and Terraform can be wrangled only once, then those learnings can be used by
other engineers forever.
