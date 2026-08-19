import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

async function prerender() {
  const templatePath = toAbsolute('dist/index.html')
  if (!fs.existsSync(templatePath)) {
    console.error('dist/index.html not found. Run client build first.')
    process.exit(1)
  }

  const { render } = await import('./dist-ssr/entry-server.js')
  const appHtml = render()

  let template = fs.readFileSync(templatePath, 'utf-8')
  template = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  fs.writeFileSync(templatePath, template)
  console.log('✅ Successfully pre-rendered full static HTML into dist/index.html for AI crawlers & SEO!')

  // Clean up dist-ssr
  if (fs.existsSync(toAbsolute('dist-ssr'))) {
    fs.rmSync(toAbsolute('dist-ssr'), { recursive: true, force: true })
  }
}

prerender()
