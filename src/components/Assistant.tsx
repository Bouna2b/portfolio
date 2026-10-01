"use client";

import { Send, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { answer, suggestions } from "@/lib/assistant";
import { SectionTitle } from "./ui";

type Message = { from: "user" | "bot"; text: string };

const greeting: Message = {
  from: "bot",
  text: "Bonjour 👋 Je suis l'assistant de Bouna. Posez-moi une question sur son parcours, ses projets ou sa stack.",
};

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Garde le dernier message visible sans faire défiler toute la page
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  /** Affiche la réponse caractère par caractère pour un rendu "génération". */
  const streamReply = (full: string) => {
    setTyping(false);
    setMessages((m) => [...m, { from: "bot", text: "" }]);
    let i = 0;
    const tick = () => {
      i += 3;
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { from: "bot", text: full.slice(0, i) };
        return copy;
      });
      if (i < full.length) setTimeout(tick, 16);
    };
    tick();
  };

  const ask = (question: string) => {
    const q = question.trim();
    if (!q || typing) return;
    setMessages((m) => [...m, { from: "user", text: q }]);
    setInput("");
    setTyping(true);
    setTimeout(() => streamReply(answer(q)), 550);
  };

  return (
    <section id="assistant" className="mx-auto max-w-6xl px-5 py-24">
      <SectionTitle
        index="00 / ASSISTANT"
        title="Une question ? Demandez directement."
        subtitle="Un petit assistant qui répond à partir de mon CV. Il tourne entièrement dans votre navigateur."
      />

      <div className="card mx-auto max-w-3xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles size={16} className="text-accent" />
            <span className="font-medium">bouna.assistant</span>
          </div>
          <span className="font-mono text-[11px] text-muted">local · sans collecte de données</span>
        </div>

        <div ref={scrollRef} className="h-80 space-y-4 overflow-y-auto px-5 py-5" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
              <p
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  m.from === "user"
                    ? "rounded-br-sm bg-accent text-white"
                    : "rounded-bl-sm border border-line bg-surface-2 text-ink"
                }`}
              >
                {m.text}
              </p>
            </div>
          ))}
          {typing && (
            <div className="flex gap-1 px-2" aria-label="L'assistant écrit">
              {[0, 1, 2].map((d) => (
                <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${d * 120}ms` }} />
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 border-t border-line px-5 pt-4">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => ask(s)}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-ink"
            >
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(input);
          }}
          className="flex items-center gap-2 p-4"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ex. : Quelle est ton expérience en IA ?"
            aria-label="Votre question"
            className="flex-1 rounded-full border border-line bg-bg/60 px-4 py-2.5 text-sm outline-none placeholder:text-muted/60 focus:border-accent"
          />
          <button
            type="submit"
            aria-label="Envoyer"
            className="grid h-10 w-10 place-items-center rounded-full bg-accent text-white transition hover:brightness-110 disabled:opacity-40"
            disabled={!input.trim() || typing}
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}
