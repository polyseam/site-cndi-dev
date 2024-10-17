---
title: Self-Hosting is the Future (and the Past)
published_at: 2024-10-16T15:00:00.000Z
author_name: 'Matt Johnston'
description: "It's the practice of running your own servers, whether in the cloud or on-prem."
---

> Self-Hosting is the practice of running your own servers, whether they are in
> the cloud or on premises. This is in contrast to using a SaaS or PaaS provider
> to run your software.

### Self-Hosting is the Future (and the Past)

I'm a huge fan of the [Acquired podcast](https://acquired.fm), where they tell
the stories of some of the most valuable and influential companies in the world.

Nearly every episode the hosts talk about a Jeff Bezos quote "Focus on the
things that make your beer taste better.", the core of the idea is that you
should focus on the things that make your product unique, and outsource the
rest.

Considering this advice, it isn't hard to imagine how the software industry has
traded running their own software in favor of SaaS and PaaS alternatives.

Why should we become experts in hosting our own database clusters when AWS RDS
exists, for example?

#### Cost

The first reason that might spring to mind is that it is cheaper to self-host,
and importantly this is more true now than ever. We measure this expense as
"total cost of ownership" or TCO, and it is a measure of the cost of running a
system over time, including the cost of the hardware, software, and people
required to run it.

Not long ago it was totally reasonable to assume that a SaaS or PaaS provider
will net out saving you money over self-hosting, due to the engineering costs of
running your own systems.

But today, with the tools we have available it is no more difficult to self-host
a distributed system than it is to buy and configure a SaaS or PaaS. In some
ways it's even easier, because changes are tracked in version control rather
than in a web interface.

PaaS and SaaS pricing is a well-tuned engine to extract as much cash from you as
a user as possible. It's incredible that open-source often presents a viable
alternative to this model, and with the tools we have today it's definitely
worth considering.

#### Control

In order to operate a profitable SaaS or PaaS platform, the vendor needs to
reduce scope and configurability.

Your instance is likely part of some larger multi-tenant cluster, and you are
limited in the ways you can configure it. At best the vendor restricts your
options just to provide a scalable service to all of their customers, and at
worst your options are limited intentionally to increase your spending.

When self-hosting you probably want the power to change the hardware, networking
configuration, application configuration, and even build your own version of the
application if you need to.

You probably want to manage all of that from a single git repo, and you can!

This ability to control your own system is a huge advantage of self-hosting, and
it really does have a material impact on your product's user experience because
it grants the power to tailor the system precisely to your needs.

#### Portability

When you self-host your software you can move it to any cloud provider.
Kubernetes is being called "the operating system of the cloud" and if you build
for Kubernetes, you build for anywhere.

PaaS and SaaS providers are incentivized to make it difficult to move your
workload elsewhere. By contrast current tools
([like CNDI](https://cndi.run/gh?)) can have your workload running on a new
cloud provider with 5 lines of code and a Pull Request.

#### Conclusion

The open-source ecosystem is a wild place. We're seeing open-core projects
changing license terms, acquisitions, and hyperscalers forking projects for
their own use.

Running your own open source clusters puts you in the driver's seat. If you're
ready to get started with hosting you're own systems, check out
[CNDI](https://cndi.run/gh?).
