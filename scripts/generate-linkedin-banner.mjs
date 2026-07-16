import path from 'node:path'
import { pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer'

const input = path.resolve('deliverables/linkedin-banner.html')
const output = path.resolve('deliverables/LinkedIn-banner-Renato-Kostomaj.png')
const browser = await puppeteer.launch({ headless: true })

try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1584, height: 396, deviceScaleFactor: 1 })
  await page.goto(pathToFileURL(input).href, { waitUntil: 'networkidle0' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: output, type: 'png' })
  await page.close()
  console.log(`Generated ${output}`)
} finally {
  await browser.close()
}
