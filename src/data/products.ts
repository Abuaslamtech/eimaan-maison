/**
 * Eimaan Maison - Central Product Catalog
 * Single Source of Truth for both the Website UI and the OpenAI/ChatGPT Product Feed.
 *
 * When you add, edit, or remove products here, running `npm run build` or `npm run generate-feed`
 * will automatically update the website UI AND regenerate the ChatGPT Product Feed files
 * (public/products-feed.jsonl, public/products-feed.jsonl.gz, public/products-feed.csv).
 */

export interface Product {
  // --- OpenAI Required Fields ---
  item_id: string                    // Stable unique identifier (e.g. EM-SKIN-001)
  title: string                      // Product name (max 150 chars)
  description: string                // Factual plain text description (max 5000 chars)
  url: string                        // Detail/landing page URL with anchor or query
  brand: string                      // 'Eimaan Maison'
  seller_name: string                // 'Eimaan Maison Enterprises'
  image_url: string                  // Direct absolute image URL (public HTTPS)
  availability: 'in_stock' | 'out_of_stock' | 'pre_order' | 'backorder' | 'unknown'
  price: string                      // Format: "amount CURRENCY", e.g. "12000.00 NGN" or "25.00 USD"
  target_countries: string[]         // ISO 3166-1 alpha-2 codes e.g. ["US"] or ["NG", "US"]
  store_country: string              // Store country code e.g. "US" or "NG"

  // --- OpenAI Optional & Recommended Fields ---
  condition?: 'new' | 'refurbished' | 'used'
  product_category?: string          // Taxonomy path separated by '>'
  is_eligible_search?: boolean       // Defaults to true
  seller_url?: string                // Store homepage URL
  accepts_returns?: boolean          // Return policy boolean
  return_deadline_in_days?: number   // Days window if accepts_returns is true
  return_policy?: string             // Public policy URL

  // --- Website UI Display Fields ---
  category: 'skincare' | 'fragrance' | 'gifting'
  name: string                       // Short name for UI card
  desc?: string                      // Short description for UI card
  tag?: string                       // Tag badge for Skincare cards (e.g. "Deep Moisture")
  type?: string                      // Type badge for Fragrance cards (e.g. "Perfume Oil")
  img: string                        // Relative path for local UI rendering (e.g. "/products/body-butter.jpg")
}

export const STORE_CONFIG = {
  brand: 'Eimaan Maison',
  sellerName: 'Eimaan Maison Enterprises',
  baseUrl: 'https://eimaanmaison.atlabx.com',
  currency: 'USD', // Set to 'USD' or 'NGN' depending on OpenAI onboarding market
  storeCountry: 'US', // OpenAI standard feed default is 'US'
  targetCountries: ['US'], // OpenAI standard feed default is ['US']
  sellerUrl: 'https://eimaanmaison.atlabx.com',
  returnPolicyUrl: 'https://eimaanmaison.atlabx.com/#faq',
  acceptsReturns: false,
}

export const PRODUCTS: Product[] = [
  // ==================== SKINCARE COLLECTION ====================
  {
    item_id: 'EM-SKIN-001',
    name: 'Body Butter',
    title: 'Eimaan Maison Body Butter — Deep Moisture Nourishing Cream',
    category: 'skincare',
    tag: 'Deep Moisture',
    desc: 'Thick, rich and deeply nourishing — leaves skin soft, hydrated and glowing all day long.',
    description: 'Thick, rich and deeply nourishing body butter crafted with natural botanical butters. Leaves skin intensely soft, hydrated, and glowing all day long.',
    img: '/products/body-butter.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/body-butter.jpg',
    url: 'https://eimaanmaison.atlabx.com/#skincare',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '25.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Skin Care > Body Moisturizers',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
  {
    item_id: 'EM-SKIN-002',
    name: 'Exfoliating Shower Gel',
    title: 'Eimaan Maison Exfoliating Shower Gel — 100% Natural Glow Cleanser',
    category: 'skincare',
    tag: '100% Natural',
    desc: 'Cleanses deep, nourishes soft and glows naturally. Formulated for a smooth, bright complexion.',
    description: 'Cleanses deep, nourishes soft, and enhances a natural radiant glow. Formulated with 100% natural micro-exfoliants for a smooth, bright, even-toned complexion.',
    img: '/products/exfoliating-shower-gel.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/exfoliating-shower-gel.jpg',
    url: 'https://eimaanmaison.atlabx.com/#skincare',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '20.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Skin Care > Body Wash',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
  {
    item_id: 'EM-SKIN-003',
    name: 'Shower Gel',
    title: 'Eimaan Maison Daily Hydrating Shower Gel — Paraben-Free Formula',
    category: 'skincare',
    tag: 'All Skin Types',
    desc: 'Gentle daily cleanser that hydrates, brightens and leaves skin refreshed — paraben-free formula.',
    description: 'Gentle daily cleanser that hydrates, brightens, and leaves skin refreshed without stripping natural moisture. Paraben-free formula suitable for all skin types.',
    img: '/products/shower-gel.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/shower-gel.jpg',
    url: 'https://eimaanmaison.atlabx.com/#skincare',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '18.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Skin Care > Body Wash',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
  {
    item_id: 'EM-SKIN-004',
    name: 'Skincare Gift Sets',
    title: 'Eimaan Maison Complete Routine Skincare Gift Set',
    category: 'skincare',
    tag: 'Complete Routine',
    desc: 'Curated sets pairing soap, lip gloss and cream — a perfect self-care gift or starter routine.',
    description: 'Curated luxury skincare set pairing artisanal soap, nourishing lip gloss, and restorative cream. A complete self-care gift or foundational daily skincare routine.',
    img: '/products/skincare-sets.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/skincare-sets.jpg',
    url: 'https://eimaanmaison.atlabx.com/#skincare',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '45.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Skin Care > Skin Care Sets',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },

  // ==================== FRAGRANCE COLLECTION ====================
  {
    item_id: 'EM-FRAG-001',
    name: 'Code 03',
    title: 'Eimaan Maison Code 03 — Concentrated Amber Perfume Oil',
    category: 'fragrance',
    type: 'Perfume Oil',
    desc: 'A rich amber accord — warm, long-lasting and seductively complex. Perfect for day and evening wear.',
    description: 'A rich amber accord featuring warm spices, resinous notes, and seductive undertones. Highly concentrated, alcohol-free perfume oil with extraordinary longevity.',
    img: '/products/code-03.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/code-03.jpg',
    url: 'https://eimaanmaison.atlabx.com/#fragrance',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '30.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Perfumes & Fragrances',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
  {
    item_id: 'EM-FRAG-002',
    name: 'Floral Luxe',
    title: 'Eimaan Maison Floral Luxe — White Floral & Musk Perfume Oil',
    category: 'fragrance',
    type: 'Perfume Oil',
    desc: 'A luminous bouquet of white florals and soft musk — elegant, airy and effortlessly feminine.',
    description: 'A luminous bouquet of delicate white florals intertwined with velvety soft musk. An elegant, airy, and effortlessly feminine artisanal perfume oil.',
    img: '/products/floral-luxe.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/floral-luxe.jpg',
    url: 'https://eimaanmaison.atlabx.com/#fragrance',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '30.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Perfumes & Fragrances',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
  {
    item_id: 'EM-FRAG-003',
    name: 'Choco Layali',
    title: 'Eimaan Maison Choco Layali — Gourmand Cocoa & Oriental Perfume Oil',
    category: 'fragrance',
    type: 'Perfume Oil',
    desc: 'Velvety cocoa notes layered with warm oriental base — indulgent, intimate and deeply alluring.',
    description: 'Velvety dark cocoa notes layered upon a warm, sensual oriental base. An indulgent, intimate, and deeply alluring unisex artisanal perfume oil.',
    img: '/products/choco-layali.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/choco-layali.jpg',
    url: 'https://eimaanmaison.atlabx.com/#fragrance',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '30.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Perfumes & Fragrances',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
  {
    item_id: 'EM-FRAG-004',
    name: 'Musk Royale',
    title: 'Eimaan Maison Musk Royale — Powdery Woody Musk Perfume Oil',
    category: 'fragrance',
    type: 'Perfume Oil',
    desc: 'A clean, powdery musk with woody depth — timeless, unisex and effortlessly sophisticated.',
    description: 'A clean, powdery white musk enriched with warm woody depth. A timeless, unisex signature fragrance that radiates understated luxury and sophistication.',
    img: '/products/musk-royale.jpg',
    image_url: 'https://eimaanmaison.atlabx.com/products/musk-royale.jpg',
    url: 'https://eimaanmaison.atlabx.com/#fragrance',
    brand: STORE_CONFIG.brand,
    seller_name: STORE_CONFIG.sellerName,
    seller_url: STORE_CONFIG.sellerUrl,
    availability: 'in_stock',
    price: '30.00 USD',
    condition: 'new',
    product_category: 'Health & Beauty > Personal Care > Cosmetics > Perfumes & Fragrances',
    target_countries: STORE_CONFIG.targetCountries,
    store_country: STORE_CONFIG.storeCountry,
    is_eligible_search: true,
    accepts_returns: false,
    return_policy: STORE_CONFIG.returnPolicyUrl,
  },
]
