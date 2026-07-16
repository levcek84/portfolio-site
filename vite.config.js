import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command, isPreview }) => ({
  base: command === "serve" && !isPreview ? "/" : "/portfolio-site/",
  appType: "mpa",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [".trycloudflare.com", ".loca.lt"],
  },
}));
