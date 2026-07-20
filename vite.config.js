import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig(() => ({
  base: "/",
  appType: "mpa",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        sl: resolve(projectRoot, "index.html"),
        en: resolve(projectRoot, "en/index.html"),
      },
    },
  },
  server: {
    allowedHosts: [".trycloudflare.com", ".loca.lt"],
  },
}));
