// Mini-assistant 100 % local : aucune clé API, aucun appel réseau.
// On normalise la question, on calcule un score par intention selon les mots-clés
// trouvés, et on renvoie la réponse de l'intention la mieux notée.

type Intent = { id: string; keywords: string[]; answer: string };

// L'ordre compte : en cas d'égalité de score, la première intention gagne.
// Les sujets précis (international) passent donc avant les sujets généraux.
const intents: Intent[] = [
  {
    id: "international",
    keywords: [
      "etranger", "international", "internationale", "chine", "china", "pekin", "beijing", "jiaotong",
      "monaco", "monegasque", "monegasques", "abroad", "vecu", "voyage", "expatriation", "pays", "asie",
    ],
    answer:
      "J'ai un parcours tourné vers l'international : j'ai passé l'année 2024-2025 à Pékin, à Beijing Jiaotong University, pour une certification en Software Engineering. Avant cela, j'ai travaillé à Monaco chez Syselio sur des projets pour des entreprises monégasques. Je suis bilingue en anglais, je parle aussi portugais et allemand, et je suis à l'aise dans un environnement multiculturel.",
  },
  {
    id: "profil",
    keywords: ["qui", "toi", "presente", "profil", "resume", "parcours", "about"],
    answer:
      "Je suis Bouna Diallo, développeur full stack orienté IA, basé à Bastia. Diplômé d'EPITECH (Expert en ingénierie logicielle), certifié en Software Engineering à Beijing Jiaotong University, je poursuis aujourd'hui un cursus d'Ingénieur IA & Big Data chez YNOV.",
  },
  {
    id: "ia",
    keywords: ["ia", "ai", "intelligence", "agent", "agents", "chatbot", "llm", "machine", "learning", "ml", "vocal", "data"],
    answer:
      "Côté IA, j'ai conçu des assistants, des chatbots et des agents vocaux en production chez masalledebain.com. Je travaille en Python (NumPy, Pandas, Machine Learning) et je privilégie une IA pragmatique : automatiser ce qui fait vraiment gagner du temps.",
  },
  {
    id: "experience",
    keywords: ["experience", "experiences", "travail", "poste", "entreprise", "job", "masalledebain", "syselio", "media"],
    answer:
      "Dernière expérience : Développeur Full Stack & IA chez masalledebain.com (2026) — modules Odoo, API, automatisations, agents IA. Avant : Syselio à Monaco (dashboards, ASP.NET) et M.E.D.I.A Micro Extension (application de fiches d'intervention).",
  },
  {
    id: "projets",
    keywords: ["projet", "projets", "guardian", "creaizione", "saas", "side", "rgpd", "agence"],
    answer:
      "Deux projets phares : Guardian, un SaaS qui aide à supprimer et déréférencer ses traces numériques (droit à l'oubli, RGPD), et creAIzione, mon agence d'outils IA sur mesure et d'automatisation pour les entreprises.",
  },
  {
    id: "stack",
    keywords: ["stack", "techno", "technos", "technologies", "langage", "langages", "competence", "competences", "skills", "outils"],
    answer:
      "Ma stack principale : TypeScript, Next.js, Node.js et Python. Je suis aussi à l'aise avec PHP, ASP.NET, Odoo, SQL/Oracle, Docker et la CI/CD — et la formation EPITECH m'a donné de solides bases en C, C++, Haskell et assembleur.",
  },
  {
    id: "formation",
    keywords: ["formation", "etudes", "ecole", "diplome", "epitech", "ynov", "beijing", "chine", "universite"],
    answer:
      "EPITECH Nice (2020-2024, Expert en ingénierie logicielle), un an à Beijing Jiaotong University en Software Engineering (2024-2025), puis le cursus Ingénieur IA & Big Data chez YNOV (2026-2028).",
  },
  {
    id: "langues",
    keywords: ["langue", "langues", "anglais", "english", "francais", "portugais", "allemand", "german", "parles", "parle", "polyglotte"],
    answer:
      "Je parle quatre langues : français (langue maternelle), anglais (bilingue), portugais (très bon niveau) et allemand (niveau B1). Mon année en Chine m'a aussi habitué à travailler dans un environnement international.",
  },
  {
    id: "contact",
    keywords: ["contact", "contacter", "mail", "email", "joindre", "linkedin", "recruter", "dispo", "disponible", "disponibilite", "embauche"],
    answer:
      "Je suis ouvert aux opportunités. Le plus simple : bouna.diallo@ynov.com ou LinkedIn (lien en bas de page). Vous pouvez aussi télécharger mon CV en haut de la page.",
  },
];

const fallback =
  "Je n'ai pas de réponse précise à cela, mais essayez : « Quelle est ta stack ? », « Ton parcours à l'étranger ? » ou « Comment te contacter ? ».";

/** Retire accents, ponctuation et majuscules pour comparer des mots simples. */
function normalize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export function answer(question: string): string {
  const words = new Set(normalize(question));
  let best: { score: number; intent?: Intent } = { score: 0 };

  for (const intent of intents) {
    const score = intent.keywords.filter((k) => words.has(k)).length;
    if (score > best.score) best = { score, intent };
  }
  return best.intent?.answer ?? fallback;
}

export const suggestions = [
  "Qui es-tu ?",
  "Ton expérience en IA ?",
  "Parle-moi de Guardian",
  "Ton parcours à l'étranger ?",
  "Quelle est ta stack ?",
  "Comment te contacter ?",
];
