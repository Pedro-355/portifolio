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
      "Automação de infraestrutura em cloud utilizando Infrastructure as Code.",
    tags: ["Terraform", "AWS", "Automation"],
    repo: "https://github.com/Pedro-355/infrastructure-automation",
  },

  {
    title: "CI/CD Pipeline",
    description:
      "Pipeline automatizado para build, testes e deploy de aplicações.",
    tags: ["GitLab CI", "Docker", "DevOps"],
    repo: "https://github.com/Pedro-355/cicd-pipeline",
  },

  {
    title: "Observability Stack",
    description:
      "Stack de observabilidade utilizando métricas, logs e dashboards.",
    tags: ["Grafana", "Prometheus", "Loki"],
    repo: "https://github.com/Pedro-355/observability",
  },

  // ========================================
  // ADICIONE NOVOS PROJETOS ABAIXO
  // ========================================

  // {
  //   title: "Meu novo projeto",
  //   description: "Descrição do projeto.",
  //   tags: ["Go", "Docker", "AWS"],
  //   repo: "https://github.com/Pedro-355/meu-projeto",
  // },
];