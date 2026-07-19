import puppeteer from "puppeteer";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "public", "renato-og-2026-v2.jpg");
const url = process.env.OG_SOURCE_URL || "https://renato-kostomaj.pages.dev/";

const browser = await puppeteer.launch({ headless: true });

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.evaluateOnNewDocument(() => {
    sessionStorage.setItem("portfolio-intro-seen", "true");
    localStorage.setItem("portfolio-language", "sl");
  });
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((resolve) => setTimeout(resolve, 1200));
  await page.screenshot({ path: output, type: "jpeg", quality: 90 });
  console.log(`Created ${output}`);
} finally {
  await browser.close();
}
