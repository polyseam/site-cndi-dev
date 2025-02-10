---
title: "The Platform: How CNDI Templates Automate Project Setup"
published_at: 2025-01-08T15:00:00.000Z
author_name: 'Matt Johnston'
description: "CNDI Templates Provide Interactive Project Creation"
---

CNDI Projects are GitOps and Infrastructure-as-Code repositories.

They have 2 user-facing files you need to know about:

- `cndi_config.yaml` - This file describes the project's infrastructure,
  applications, and configuration.
- `.env` - This file contains secrets and other environment variables that are
  used by the cluster and CI.

If you understand those files, you understand CNDI and your cluster.

But where do they come from? How do you create them?

## CNDI Templates 🏗️

CNDI Templates are a way to declare prompts and how the responses should flow
into those config files. Let's look at an example:

````yaml
# each prompt is used to collect information from a user
prompts:
  - name: "project_name"
    message: "What is the name of your project?"
    type: "Input"
    default: "my-project" # default value, used if `cndi` is run non-interactively

  - name: "deployment_target_provider"
    message: "What cloud provider are you using?"
    type: "Select"
    default: "aws"
    options:
      - "aws"
      - "gcp"
      - "azure"
      - "dev"

- name: "git_token"
  message: "What is your GitHub Personal Access Token?"
  type: "Secret"
  default: ""

outputs:
  # data to be written to the cndi_config.yaml file
  cndi_config:
    # basic metadata
    cndi_version: v2
    project_name: "{{ $cndi.get_prompt_response(project_name) }}"
    provider: "{{ $cndi.get_prompt_response(deployment_target_provider) }}"

    # high-level infra like nodes and platform services
    infrastructure: { ... }

    # generally Helm charts for the applications you're deploying
    applications: { ... }

    # kubernetes manifests to apply to the cluster
    cluster_manifests: { ... } 

  # a set of environment variables to be written to the .env file
  env:
    GIT_TOKEN: "{{ $cndi.get_prompt_response(git_token) }}"

  # a markdown file to be written to the README.md
  readme:
    title: "# {{ $cndi.get_prompt_response(project_name) }}"
    example_markdown_section: |
        ## Example
        ```bash
        echo "Hello, World!"
        ```
````

The best way to get started with CNDI is to call `cndi create` and point to a
Template. Templates are just YAML files like the one above, and they can be
hosted anywhere.

Officially recognized Templates can be called by name:

```cndi
cndi create --template kafka
```

You can also point to a local file or a remote URL:

```cndi
cndi create -t https://raw.githubusercontent.com/polyseam/cndi/refs/heads/main/templates/basic.yaml
```

When you run `cndi create -t airflow` for example, you'll be prompted for some
elements that are relevant for any CNDI cluster, and some values which are
specific to your deployment target, and some for [Airflow](/templates/airflow)
itself.

We have all of the official Templates hosted in the
[./templates](https://github.com/polyseam/cndi/tree/main/templates) directory of
the [cndi](https://github.com/polyseam/cndi) GitHub Repo, and they can be
helpful when learning to write your own Templates.

## Configurator 🤖

We've just launched another brand new tool to make getting started with CNDI
Templates even easier called the
[CNDI Configurator](https://cndi.dev/configurator)! This tool enables running
through the interactive Template prompts in the browser rather than on the
command line.

The [Configurator](https://cndi.dev/configurator) can help you get a feel for
the tool and which questions you'll be asked, and when you are happy with your
responses, you can download a `my_responses.yaml` file to use with the CLI:

```cndi
cndi create -r ./my_responses.yaml
```

## Conclusion 🎯

Now that you have a clear understanding of how CNDI Templates work, you can feel
confident in using them and even creating your own!

#### After you've tried the [configurator](/configurator) you can find the [cndi project](https://cndi.run/gh?utm_content=blog_cndi-templates&utm_campaign=cndi-templates_blog&utm_source=https://cndi.dev/cndi-templates&utm_medium=blog&utm_id=8113) on GitHub! ⭐️
