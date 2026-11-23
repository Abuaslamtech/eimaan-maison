import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import zlib from 'node:zlib'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

// Dynamic import of products TypeScript/ES module via node or compile
// To ensure it runs seamlessly in standard node without ts-node, we parse or import src/data/products.ts
async function loadProducts() {
  const productsFilePath = path.join(rootDir, 'src/data/products.ts')
  const content = fs.readFileSync(productsFilePath, 'utf-8')

  // Extract PRODUCTS array via regex/eval safely or read structured items
  // Since products.ts is pure data with TypeScript annotations, we can strip types or eval the exported object
  const cleanCode = content
    .replace(/^import\s+.*?;/gm, '')
    .replace(/export\s+interface\s+[\s\S]*?^}/gm, '')
    .replace(/:\s*Product\[\]/g, '')
    .replace(/export\s+/g, '')

  const moduleScope = {}
  const runCode = new Function('exports', `${cleanCode}; exports.PRODUCTS = PRODUCTS; exports.STORE_CONFIG = STORE_CONFIG;`)
  runCode(moduleScope)

  return {
    products: moduleScope.PRODUCTS,
    storeConfig: moduleScope.STORE_CONFIG
  }
}

function validateProduct(product, index) {
  const required = [
    'item_id',
    'title',
    'description',
    'url',
    'brand',
    'seller_name',
    'image_url',
    'availability',
    'price',
    'target_countries',
    'store_country',
  ]

  const errors = []
  for (const field of required) {
    if (product[field] === undefined || product[field] === null || product[field] === '') {
      errors.push(`Missing required field '${field}' on product index ${index} (${product.item_id || 'unnamed'})`)
    }
  }

  // Validate price format: "amount CURRENCY" e.g. "25.00 USD"
  if (product.price && !/^\d+(\.\d+)?\s+[A-Z]{3}$/.test(product.price)) {
    errors.push(`Invalid price format '${product.price}' on ${product.item_id}. Must be 'amount CURRENCY', e.g. '25.00 USD'.`)
  }

  // Validate availability enum
  const validAvail = ['in_stock', 'out_of_stock', 'pre_order', 'backorder', 'unknown']
  if (product.availability && !validAvail.includes(product.availability)) {
    errors.push(`Invalid availability '${product.availability}' on ${product.item_id}. Must be one of: ${validAvail.join(', ')}.`)
  }

  return errors
}

function generateOpenAIRecord(product) {
  // Only include official OpenAI schema properties
  const record = {
    item_id: String(product.item_id),
    title: String(product.title).slice(0, 150),
    description: String(product.description).slice(0, 5000),
    url: String(product.url),
    brand: String(product.brand),
    seller_name: String(product.seller_name),
    image_url: String(product.image_url),
    availability: String(product.availability),
    price: String(product.price),
    target_countries: Array.isArray(product.target_countries) ? product.target_countries : [String(product.target_countries)],
    store_country: String(product.store_country),
    is_eligible_search: product.is_eligible_search !== false,
  }

  if (product.condition) record.condition = product.condition
  if (product.product_category) record.product_category = product.product_category
  if (product.seller_url) record.seller_url = product.seller_url
  if (product.accepts_returns !== undefined) record.accepts_returns = product.accepts_returns
  if (product.return_deadline_in_days !== undefined) record.return_deadline_in_days = product.return_deadline_in_days
  if (product.return_policy) record.return_policy = product.return_policy

  return record
}

function escapeCsvCell(val) {
  if (val === undefined || val === null) return ''
  let str = typeof val === 'object' ? JSON.stringify(val) : String(val)
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    str = `"${str.replace(/"/g, '""')}"`
  }
  return str
}

async function main() {
  console.log('🚀 Generating OpenAI / ChatGPT Product Feed...')

  const { products } = await loadProducts()
  if (!products || !products.length) {
    console.error('❌ No products found in src/data/products.ts')
    process.exit(1)
  }

  // Validate all products against OpenAI schema
  const allErrors = []
  const openAiRecords = products.map((prod, idx) => {
    const errors = validateProduct(prod, idx)
    if (errors.length) allErrors.push(...errors)
    return generateOpenAIRecord(prod)
  })

  if (allErrors.length > 0) {
    console.error('❌ OpenAI Feed Validation Errors:')
    allErrors.forEach(err => console.error(`  - ${err}`))
    process.exit(1)
  }

  // 1. Generate JSONL content (UTF-8, one JSON object per line)
  const jsonlLines = openAiRecords.map(rec => JSON.stringify(rec))
  const jsonlContent = jsonlLines.join('\n') + '\n'

  // 2. Generate CSV content
  const headers = [
    'item_id',
    'title',
    'description',
    'url',
    'brand',
    'seller_name',
    'image_url',
    'availability',
    'price',
    'target_countries',
    'store_country',
    'condition',
    'product_category',
    'is_eligible_search',
    'seller_url',
    'accepts_returns',
    'return_policy'
  ]

  const csvRows = [headers.join(',')]
  for (const rec of openAiRecords) {
    const row = headers.map(h => escapeCsvCell(rec[h]))
    csvRows.push(row.join(','))
  }
  const csvContent = csvRows.join('\n') + '\n'

  // 3. Generate Gzip compressed JSONL
  const jsonlGzBuffer = zlib.gzipSync(Buffer.from(jsonlContent, 'utf-8'))

  // Target directories to write to: public/ and dist/ (if exists)
  const targetDirs = [path.join(rootDir, 'public')]
  const distDir = path.join(rootDir, 'dist')
  if (fs.existsSync(distDir)) {
    targetDirs.push(distDir)
  }

  for (const dir of targetDirs) {
    fs.mkdirSync(dir, { recursive: true })

    // Write .jsonl
    const jsonlPath = path.join(dir, 'products-feed.jsonl')
    fs.writeFileSync(jsonlPath, jsonlContent, 'utf-8')

    // Write .jsonl.gz (recommended by OpenAI)
    const jsonlGzPath = path.join(dir, 'products-feed.jsonl.gz')
    fs.writeFileSync(jsonlGzPath, jsonlGzBuffer)

    // Write .csv
    const csvPath = path.join(dir, 'products-feed.csv')
    fs.writeFileSync(csvPath, csvContent, 'utf-8')

    console.log(`✅ Feeds written to ${path.relative(rootDir, dir)}:`)
    console.log(`   - products-feed.jsonl (${jsonlLines.length} products, ${(Buffer.byteLength(jsonlContent) / 1024).toFixed(2)} KB)`)
    console.log(`   - products-feed.jsonl.gz (${(jsonlGzBuffer.length / 1024).toFixed(2)} KB)`)
    console.log(`   - products-feed.csv (${(Buffer.byteLength(csvContent) / 1024).toFixed(2)} KB)`)
  }

  console.log(`\n🎉 Product Feed successfully generated with ${products.length} products!`)
  console.log(`Direct Hosted URLs for ChatGPT:`)
  console.log(`  🔗 https://eimaanmaison.atlabx.com/products-feed.jsonl`)
  console.log(`  🔗 https://eimaanmaison.atlabx.com/products-feed.jsonl.gz`)
  console.log(`  🔗 https://eimaanmaison.atlabx.com/products-feed.csv`)
}

main().catch(err => {
  console.error('Failed to generate product feed:', err)
  process.exit(1)
})
