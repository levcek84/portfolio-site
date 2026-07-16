import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => ({
  base: "/",
  appType: "mpa",
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [".trycloudflare.com", ".loca.lt"],
  },
}));
