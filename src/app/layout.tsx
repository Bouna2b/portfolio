import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Sur Vercel, l'URL de production est injectée automatiquement : elle sert
// à générer des liens absolus pour l'aperçu LinkedIn / réseaux sociaux.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Bouna Diallo — Ingénieur IA & Software Engineer",
  description:
    "Portfolio de Bouna Diallo : développeur full stack orienté IA, agents, automatisation et applications web. Basé à Bastia.",
  openGraph: {
    title: "Bouna Diallo — Ingénieur IA & Software Engineer",
    description: "Développeur full stack orienté IA : agents, automatisation, applications web.",
    images: ["/bouna.png"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
