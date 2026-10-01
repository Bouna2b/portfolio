# Portfolio — Bouna Diallo

CV interactif construit avec Next.js 15, TypeScript, Tailwind CSS v4 et Framer Motion.

## Lancer en local

```bash
pnpm install
pnpm dev
```

## Modifier le contenu

- Tout le contenu (expériences, projets, compétences, formation) : `src/data/cv.ts`
- Réponses de l'assistant : `src/lib/assistant.ts` (100 % local, aucune clé API)
- Photo : `public/bouna.png` — CV téléchargeable : `public/CV-Bouna-Diallo.pdf`

## Déploiement

Importer le dépôt sur [vercel.com/new](https://vercel.com/new) — Next.js est détecté automatiquement, aucune variable d'environnement requise.
