// Source unique de vérité pour tout le contenu du site.
// Pour mettre à jour le portfolio, il suffit de modifier ce fichier.

export const profile = {
  name: "Bouna Diallo",
  firstName: "Bouna",
  roles: ["Ingénieur IA & Big Data", "Software Engineer", "Développeur Full Stack"],
  pitch:
    "Je conçois des produits web et des outils IA utiles : agents, automatisations, intégrations d'API et applications full stack, du prototype à la mise en production.",
  location: "Bastia, Haute-Corse",
  email: "bouna.diallo@ynov.com",
  linkedin: "https://fr.linkedin.com/in/bouna-diallo",
  cvPath: "/CV-Bouna-Diallo.pdf",
  status: "Ouvert aux opportunités",
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  context: string;
  bullets: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Développeur Full Stack & IA",
    company: "masalledebain.com",
    period: "01/2026 — 08/2026",
    location: "Bastia, France",
    context:
      "E-commerce spécialisé dans l'aménagement de salles de bain : vente en ligne et distribution de sanitaires, mobilier, robinetterie et revêtements.",
    bullets: [
      "Développement de modules Odoo en Python, XML et JavaScript.",
      "Intégration d'API, webhooks et services externes.",
      "Automatisation de processus métier et de tâches répétitives.",
      "Création d'assistants IA, chatbots et agents vocaux.",
      "Développement d'outils internes et de tableaux de bord.",
    ],
    tags: ["Python", "Odoo", "JavaScript", "Agents IA", "API"],
  },
  {
    role: "Développeur Full Stack",
    company: "Syselio",
    period: "02/2024 — 06/2024",
    location: "Monaco",
    context: "Développement logiciel sur mesure et solutions digitales pour entreprises.",
    bullets: [
      "Création d'un dashboard composé de plusieurs widgets de données.",
      "Refonte de sites internet en ASP.NET pour des entreprises monégasques.",
    ],
    tags: ["ASP.NET", "C#", "Dashboard"],
  },
  {
    role: "Développeur Web",
    company: "M.E.D.I.A Micro Extension",
    period: "09/2021 — 12/2021",
    location: "Bastia, France",
    context: "Prestataire informatique.",
    bullets: ["Réalisation d'un site web de gestion des fiches d'intervention."],
    tags: ["Web", "PHP", "SQL"],
  },
];

export type Project = {
  name: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Guardian",
    period: "2024 — Présent",
    description:
      "Plateforme SaaS qui aide les utilisateurs à gérer, déréférencer et supprimer automatiquement leurs traces numériques personnelles en ligne.",
    highlights: [
      "Assistant du droit à l'oubli : simplifie les démarches RGPD complexes.",
      "Détection et suivi automatisés des données personnelles exposées.",
    ],
    tags: ["SaaS", "RGPD", "Next.js", "FastAPI", "IA"],
  },
  {
    name: "creAIzione",
    period: "Agence",
    description:
      "Agence spécialisée dans la création d'outils IA sur mesure, l'automatisation des processus et le développement de solutions digitales pour les entreprises.",
    highlights: [
      "Outils IA sur mesure pour PME.",
      "Automatisation de workflows métier.",
    ],
    tags: ["IA", "Automatisation", "Web"],
    url: "https://creaizione.fr",
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  { label: "IA & Data", items: ["Python", "Machine Learning", "NumPy", "Pandas", "Agents IA", "Chatbots"] },
  { label: "Front-end", items: ["TypeScript", "JavaScript", "React Native", "Next.js", "Vue.js", "HTML5", "CSS3"] },
  { label: "Back-end", items: ["Node.js / Express", "PHP", "ASP.NET", "REST APIs", "JWT", "OAuth 2.0", "Odoo"] },
  { label: "Bases de données", items: ["SQL", "PL/SQL", "Oracle", "Modélisation de données"] },
  { label: "DevOps & outils", items: ["Docker", "CI/CD", "GitHub", "GitLab", "Linux", "Unix"] },
  { label: "Bas niveau", items: ["C", "C++", "Haskell", "Assembleur"] },
];

export type Education = {
  title: string;
  school: string;
  period: string;
  location?: string;
  current?: boolean;
};

export const education: Education[] = [
  { title: "Ingénieur IA & Big Data", school: "YNOV Campus", period: "09/2026 — 07/2028", current: true },
  {
    title: "Certification en Software Engineering",
    school: "Beijing Jiaotong University",
    period: "09/2024 — 06/2025",
    location: "Pékin, Chine",
  },
  {
    title: "Expert en ingénierie logicielle",
    school: "EPITECH — European Institute of Technology",
    period: "09/2020 — 07/2024",
    location: "Nice, France",
  },
];

// `value` (0-100) pilote la longueur de la barre de niveau affichée sur le site.
export const languages = [
  { name: "Français", level: "Langue maternelle", value: 100 },
  { name: "Anglais", level: "Bilingue", value: 95 },
  { name: "Portugais", level: "Très bon niveau", value: 80 },
  { name: "Allemand", level: "B1", value: 50 },
];
