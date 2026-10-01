"use client";

import { ArrowUpRight, Calendar, Download, GraduationCap, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { education, experiences, languages, profile, projects, skillGroups } from "@/data/cv";
import { LinkedinIcon, Reveal, SectionTitle, Tag } from "./ui";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="01 / EXPÉRIENCE" title="Expérience professionnelle" />
      {/* Frise verticale : la ligne est portée par le conteneur, les points par chaque item */}
      <ol className="relative space-y-8 border-l border-line pl-8">
        {experiences.map((xp, i) => (
          <li key={xp.company} className="relative">
            <span className="absolute top-2 -left-[37px] h-3 w-3 rounded-full border-2 border-accent bg-bg" />
            <Reveal delay={i * 0.05} className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold">
                  {xp.role} <span className="text-accent">· {xp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{xp.period}</span>
              </div>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                <MapPin size={12} /> {xp.location}
              </p>
              <p className="mt-3 text-sm text-muted">{xp.context}</p>
              <ul className="mt-4 space-y-1.5 text-sm">
                {xp.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {xp.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="02 / PROJETS" title="Projets" subtitle="Ce que je construis en parallèle de mes missions." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08} className="card group relative flex flex-col overflow-hidden p-7">
            <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-accent/10 blur-3xl transition-opacity group-hover:opacity-100 md:opacity-0" />
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-semibold">{p.name}</h3>
                <p className="mt-1 font-mono text-xs text-muted">{p.period}</p>
              </div>
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visiter ${p.name}`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
            <p className="mt-4 leading-relaxed text-muted">{p.description}</p>
            <ul className="mt-4 space-y-1.5 text-sm">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="text-accent">→</span> {h}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function SkillsSection() {
  // Filtre interactif : "Tout" ou une catégorie
  const [active, setActive] = useState<string>("Tout");
  const groups = active === "Tout" ? skillGroups : skillGroups.filter((g) => g.label === active);

  return (
    <section id="competences" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="03 / COMPÉTENCES" title="Compétences techniques" />
      <Reveal className="mb-8 flex flex-wrap gap-2">
        {["Tout", ...skillGroups.map((g) => g.label)].map((label) => (
          <button
            key={label}
            onClick={() => setActive(label)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === label ? "border-accent bg-accent/15 text-ink" : "border-line text-muted hover:text-ink"
            }`}
          >
            {label}
          </button>
        ))}
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.label} className="card p-5">
            <p className="font-mono text-xs tracking-wider text-accent">{g.label.toUpperCase()}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="formation" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle index="04 / FORMATION" title="Formation & langues" />
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.05} className="card flex gap-4 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line bg-surface-2 text-accent">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-semibold">
                  {e.title}
                  {e.current && (
                    <span className="ml-2 rounded-full bg-emerald-400/15 px-2 py-0.5 align-middle font-mono text-[10px] text-emerald-300">
                      EN COURS
                    </span>
                  )}
                </h3>
                <p className="text-sm text-accent">{e.school}</p>
                <p className="mt-1 flex flex-wrap gap-x-4 text-xs text-muted">
                  <span className="inline-flex items-center gap-1"><Calendar size={12} /> {e.period}</span>
                  {e.location && <span className="inline-flex items-center gap-1"><MapPin size={12} /> {e.location}</span>}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1} className="card h-fit p-6">
          <p className="font-mono text-xs tracking-wider text-accent">LANGUES</p>
          <div className="mt-5 space-y-5">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-muted">{l.level}</span>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-surface-2">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2" style={{ width: `${l.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pt-24 pb-12">
      <Reveal className="card relative overflow-hidden px-6 py-14 text-center sm:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(79,140,255,0.18),transparent_60%)]" />
        <p className="font-mono text-xs tracking-widest text-accent">05 / CONTACT</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Travaillons ensemble.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted">
          Un poste, une mission ou un projet IA à lancer ? Je réponds rapidement.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white hover:brightness-110">
            <Mail size={16} /> M&apos;écrire
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm hover:border-accent">
            <LinkedinIcon size={15} /> LinkedIn
          </a>
          <a href={profile.cvPath} download className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm hover:border-accent">
            <Download size={16} /> Télécharger le CV
          </a>
        </div>
      </Reveal>
      <footer className="mt-12 text-center text-xs text-muted">
        <span>© {new Date().getFullYear()} {profile.name}</span>
      </footer>
    </section>
  );
}
