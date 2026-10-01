"use client";

import { Download } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/cv";

const links = [
  { href: "#assistant", label: "Assistant" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled ? "border-b border-line bg-bg/75 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="font-mono text-sm font-semibold">
          <span className="text-accent">~/</span>bouna
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.cvPath}
          download
          className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-sm transition-colors hover:border-accent"
        >
          <Download size={14} /> CV
        </a>
      </nav>
    </header>
  );
}
