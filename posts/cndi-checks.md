---
title: 'The Platform: How CNDI Automates Code Scanning'
published_at: 2025-01-20T15:00:00.000Z
author_name: 'Matt Johnston'
description: 'CNDI Integrates Code Scanning with GitHub Actions and Checkov'
---

### Code Scanning Before Pull Request Merges with CNDI

Code scanning is the process of analyzing the source code of an application to
find security vulnerabilities, bugs, and other issues. Analyzing source code is
also called static analysis, contrasted with dynamic analysis which is done
while the code is running.

CNDI integrates with [GitHub Actions](https://docs.github.com/en/actions) to
automate code scanning before merges. This means that every time a developer
creates a pull request, CNDI will automatically run a code scan on the code
changes, then provide helpful feedback in the form of a Pull Request comment.
When the issues are resolved, CNDI will delete the comment automatically,
indicating that the code is ready to merge.

### Tools

CNDI uses [Checkov](https://www.checkov.io/) to scan code for security
vulnerabilities and is setup to examine the generated code in the `./cndi`
directory of your project. Checkov is a static code analysis tool that scans
Terraform, Kubernetes, and more.

We'll keep this blog post up-to-date with all integrations and tools that CNDI
uses to automate code scanning!

---
*an example of a failing check and how CNDI presents it*

![Example of CNDI Checkov PR Comment](/images/blog/cndi-checks/example-comment.png)
---

### Usage

When you create a new project with `cndi create` we will automatically setup the
GitHub Actions Workflow for you, as of CNDI
[v2.26.0](https://github.com/polyseam/cndi/releases/v2.26.0). This Workflow will
run every time a Pull Request is created or updated.

If you already have a CNDI project, you can ensure PR Checks are enabled by
running `cndi overwrite --update-workflow check` to install and update your
project's GitHub Actions CNDI `check` workflow.

### Learning and Contributing

If you are interested in contributing to CNDI's code scanning integrations,
whether that's improving existing security checks or adding new ones, please
check out our [GitHub repository](https://github.com/polyseam/cndi). For more
information about code scanning tools more broadly we recommend reading the
[Code to Cloud post on Code Scanning](https://codetocloud.io/p/infrastructure-as-code-and-scanning-tools)!

#### Check [cndi](https://cndi.run/gh?utm_content=blog_cndi-checks&utm_campaign=cndi-checks_blog&utm_source=https://cndi.dev/blog/cndi-checks&utm_medium=blog&utm_id=8111) out on GitHub to get started! ⭐️
