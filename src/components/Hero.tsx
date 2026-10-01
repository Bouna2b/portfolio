"use client";

import { ArrowRight, Mail, MapPin } from "lucide-react";
import { LinkedinIcon } from "./ui";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "@/data/cv";

/** Fait défiler les intitulés de poste avec un effet "frappe au clavier". */
function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const empty = deleting && text === "";
    const delay = done ? 1800 : deleting ? 35 : 70;

    const t = setTimeout(() => {
      if (done) return setDeleting(true);
      if (empty) {
        setDeleting(false);
        return setIndex((i) => i + 1);
      }
      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section id="top" className="mx-auto grid min-h-[92vh] max-w-6xl items-center gap-12 px-5 pt-28 pb-16 md:grid-cols-[1.4fr_1fr]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          {profile.status}
        </span>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{profile.name}</h1>
        <p className="mt-4 h-9 font-mono text-xl sm:text-2xl">
          <span className="text-gradient caret">{role}</span>
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.pitch}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#assistant"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
          >
            Me poser une question
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent"
          >
            Voir mes projets
          </a>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {profile.location}</span>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-ink"><Mail size={14} /> {profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-ink"><LinkedinIcon size={14} /> LinkedIn</a>
        </div>
      </motion.div>

      {/* Carte "profil" stylisée comme une sortie de terminal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card relative overflow-hidden p-6"
      >
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent-2/20 blur-3xl" />
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/50 ring-offset-4 ring-offset-surface">
            <Image src="/bouna.png" alt="Portrait de Bouna Diallo" fill sizes="80px" className="scale-[1.08] object-cover" priority />
          </div>
          <div>
            <p className="font-semibold">{profile.name}</p>
            <p className="text-sm text-muted">Full Stack · IA · Data</p>
          </div>
        </div>
        <pre className="mt-6 overflow-x-auto rounded-lg border border-line bg-bg/70 p-4 font-mono text-[12.5px] leading-6 text-muted">
<span className="text-accent-2">const</span> <span className="text-ink">bouna</span> = {"{"}
{"\n"}  focus: [<span className="text-emerald-300">&quot;agents IA&quot;</span>, <span className="text-emerald-300">&quot;automatisation&quot;</span>],
{"\n"}  stack: [<span className="text-emerald-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-300">&quot;Python&quot;</span>],
{"\n"}  formation: <span className="text-emerald-300">&quot;YNOV · IA &amp; Big Data&quot;</span>,
{"\n"}  langues: [<span className="text-emerald-300">&quot;FR&quot;</span>, <span className="text-emerald-300">&quot;EN&quot;</span>],
{"\n"}  dispo: <span className="text-accent">true</span>,
{"\n"}{"}"};
        </pre>
      </motion.div>
    </section>
  );
}
