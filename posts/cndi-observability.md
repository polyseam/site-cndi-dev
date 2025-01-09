---
title: "The Platform: How CNDI Automates Observability"
published_at: 2025-01-08T15:00:00.000Z
author_name: 'Matt Johnston'
description: "CNDI Automatically Integrates Prometheus, Loki, Promtail, and Grafana"
---

Observability is a requirement for modern cloud-native applications, but it
doesn't need to be highly differentiated.

We need to capture logs and metrics from our applications and control plane, and
we need to be able to query and visualize them. Because these requirements are
so universal it is possible to completely automate the setup of these systems.

The CNDI platform integrates [Prometheus](https://prometheus.io/),
[Loki](https://grafana.com/oss/loki/),
[Promtail](https://grafana.com/docs/loki/latest/send-data/promtail/), and
[Grafana](https://grafana.com/) to provide observability out-of-the-box in every
cluster.

It's powered by 3 charts:

- [kube-prometheus-stack](https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack)
  for Prometheus and Grafana,
- [promtail](https://grafana.com/docs/loki/latest/send-data/promtail/installation/#install-using-helm)
  for log collection
- [loki](https://grafana.com/docs/loki/latest/setup/install/helm/install-monolithic/)
  for log storage

and they're all configured and integrated together for you.

The only thing to (optionally) configure is the domain name you want CNDI to use
for Grafana.

```yaml
# basic cndi_config.yaml
project_name: my-project
provider: ...
distribution: ...
applications: { ... }
cluster_manifests: { ... }
infrastructure:
  cndi:
    nodes: { ... }
    external_dns: { ... }
    observability:
      grafana:
        hostname: my-dashboards.example.com
```

Like all the other "Core Applications" in CNDI, the observability stack can be
configured with custom Helm Values by adding them to your `cndi_config.yaml`, or
you can even disable it entirely.

#### For documentation on observability and more, check out [cndi](https://cndi.run/gh?utm_content=blog_cndi-observability_cndi_link&utm_campaign=cndi-observability_blog&utm_source=https://cndi.dev/blog/cndi-observability&utm_medium=blog&utm_id=8110) on GitHub! ⭐️
