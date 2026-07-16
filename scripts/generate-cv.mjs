import path from 'node:path'
import { pathToFileURL } from 'node:url'
import puppeteer from 'puppeteer'

const jobs = [
  ['deliverables/cv/renato-kostomaj-cv-sl.html', 'public/Renato-Kostomaj-CV-SL.pdf'],
  ['deliverables/cv/renato-kostomaj-cv-en.html', 'public/Renato-Kostomaj-CV-EN.pdf'],
]

const browser = await puppeteer.launch({ headless: true })

try {
  for (const [input, output] of jobs) {
    const page = await browser.newPage()
    await page.goto(pathToFileURL(path.resolve(input)).href, {
      waitUntil: 'networkidle0',
    })
    await page.pdf({
      path: path.resolve(output),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
    })
    await page.close()
    console.log(`Generated ${output}`)
  }
} finally {
  await browser.close()
}
