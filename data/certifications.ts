export type Certification = {
  name: string;
  issuer: string;
  year?: string;
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    year: "2024",
    url: "https://www.credly.com/badges/af874e3d-f2c8-4520-9fc5-9eccda1cc6c4/linked_in_profile",
  },

  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    year: "2024",
    url: "https://www.credly.com/badges/5ab78183-4c9e-4940-b11f-14034aa5c79f/linked_in_profile",
  },

  {
    name: "Cybersecurity",
    issuer: "FIAP",
    year: "2024",
    url: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/116115/7747e1ba775caaeba2fa8580e1c144db/certificado.png",
  },

  // Adicione novas certificações aqui
];