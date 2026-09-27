export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    title: "Infrastructure Automation",
    description:
      "Cloud infrastructure designed around repeatability, automation and infrastructure as code.",
    tags: ["Terraform", "Cloud", "Automation"],
    repo: "https://github.com/Pedro-355/infrastructure-automation",
  },

  {
    title: "CI/CD Pipelines",
    description:
      "Automated delivery workflows focused on reliable builds, deployments and operational feedback.",
    tags: ["GitLab CI", "GitHub Actions", "DevOps"],
    repo: "https://github.com/Pedro-355/cicd-pipeline",
  },

  {
    title: "Observability Stack",
    description:
      "Metrics, logs and dashboards to make distributed systems easier to operate and troubleshoot.",
    tags: ["Grafana", "Prometheus", "Loki"],
    repo: "https://github.com/Pedro-355/observability",
  },
];
