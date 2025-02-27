export const DEPLOYMENT_TARGET_PROVIDERS = [
  {
    name: "aws",
    title: "Amazon Web Services",
    imgSrc: "/images/provider-icons/aws.png",
    distributions: ["eks"],
  },
  {
    name: "gcp",
    title: "Google Cloud Platform",
    imgSrc: "/images/provider-icons/gcp.webp",
    distributions: ["gke"],
  },
  {
    name: "azure",
    title: "Microsoft Azure",
    imgSrc: "/images/provider-icons/azure.png",
    distributions: ["aks"],
  },
  {
    name: "dev",
    title: "Local Development",
    imgSrc: "/images/provider-icons/dev.png",
    distributions: ["microk8s"],
  },
] as const;
