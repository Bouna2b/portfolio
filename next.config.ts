import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Autorise l'accès au serveur de dev depuis le réseau local (ex. test sur téléphone).
  // N'a aucun effet en production sur Vercel.
  allowedDevOrigins: ["192.168.1.*"],
};

export default nextConfig;
