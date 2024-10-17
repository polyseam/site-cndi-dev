---
title: What is Cloud Native?
published_at: 2023-05-09T15:00:00.000Z
author_name: 'Sheldon Mackay'
description: 'A breakdown of the term according to Polyseam'
---

### What is Cloud Native?

We just released our “What is Cloud Native” video too, check it out below if
you're interested.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qjkt1JwYCMA?si=aHs8U4tXq_JF5sQ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

We rely heavily on applications for many common things in life, like browsing
social media, listening to music with Spotify, or shopping online with Amazon.
All these applications need to be able to scale rapidly and not break down with
millions of users flooding onto them.

If you have ever wondered how these applications are built and what allows them
to be so resilient while trying to process billions of requests, it’s all in how
they are designed. Today, we are talking about a popular design architecture
that has been gaining traction called Cloud-Native.

Cloud Native is an application design architecture that has been growing fast
and being adopted by many engineering teams over the last few years. At its
core, it's about leveraging the full power and scalability of the cloud by
pooling computers together in something called clusters.

And before we go more in depth on explaining Cloud Native, to really understand
this, it's a good idea to have some context about what was common before Cloud
Native and how it became popular.

Prior to Cloud Native we would build applications on our own servers, often
using what is called a monolithic design architecture. All different parts of
the application were very tightly integrated which caused many scaling issues
and other problems, like downtime when features get updated, which negatively
impacts the user experience.

So this pushed developers to find innovative new ways to build and manage
applications at scale.

### Enter Cloud-Native

This is when Cloud Native was created. The term entered the world of Information
Technology and started gaining traction in 2015, when the Cloud Native Computing
Foundation or [CNCF](https://cncf.io) was founded. It was founded by many big
players in the cloud space, like Google, Red Hat, Intel and VMware, to name a
few. CNCF is a non-profit organization with the mission of fostering the
development and advancing the adoption of cloud-native computing technologies.
CNCFs initial flagship project was [Kubernetes](https://kubernetes.io) which
provides a common language to develop applications across all the modern clouds.

With the rise and prolific adoption of cloud platforms like AWS, GCP, and Azure,
many Engineering teams have started to leverage Kubernetes to develop scalable
applications using a Cloud-Native approach.

As developers looked for more flexibility and scalability in their applications,
microservices were born. And, they really took off as Kubernetes provided a
platform that simplified deploying and running microservices. As an example of
microservices, let’s look at a made up ecommerce site.

![a wireframe showing all technical components in a single bounding box](/images/blog/cloud-native/monolitic.png)

Now, with a traditional monolithic architecture, the dotted line reflects the
application’s structure. Everything is just rolled up into one big application,
making everything tightly coupled and harder to update only certain features.

![a wireframe showing all components separated with bounding boxes](/images/blog/cloud-native/microservices.png)

With Cloud-Native architecture, we may build our applications as microservices.
Each different component of the application is broken down into a microservice.
In this case, we have four of them. Having each microservice containerized and
built independently means that you are able to upgrade any one service without
impacting the others.

In a Cloud Native architecture, services can be moved, scaled across different
cloud environments, and updated easily. This is all achieved by the services
being containerized and deployed using a modern DevOps workflow.

**A Cloud-Native application is one designed from the beginning to best leverage
the power of the cloud**, and today that is best exemplified by Kubernetes.

It gives your engineering teams the power to ship features quickly with the best
possible performance, scalability, and reliability. All of that provides a
smoother user experience for both the people building and using the application.

The goal with every application is to provide users with a seamless and quick
user experience. The less your users are thinking about what's going on under
the hood of your application, the better. It should just work, all the time.

If you're looking for a way to quickly deploy and maintain Cloud-Native
applications, and their infrastructure, check out our open-source tool
[CNDI](https://cndi.run/gh?utm_content=blog_cloud-native_cndi_link&utm_campaign=cloud-native_blog&utm_source=https://cndi.dev/blog/cloud-native&utm_medium=blog&utm_id=8059).
It’s free for anyone and reduces the complexity of deploying a Kubernetes
cluster.
