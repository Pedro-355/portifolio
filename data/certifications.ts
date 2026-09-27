export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Nome da certificação",
    issuer: "Organização",
    year: "2026",
    url: "https://...",
  },

  {
    name: "Outra certificação",
    issuer: "Organização",
    year: "2026",
    url: "https://...",
  },

  {
    name: "Mais uma certificação",
    issuer: "Organização",
    year: "2026",
    url: "https://...",
  },

  // Adicione novas certificações aqui
];