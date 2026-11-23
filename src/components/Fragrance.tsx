import { MessageCircle } from 'lucide-react'
import { PRODUCTS, type Product } from '../data/products'

const FRAGRANCE_PRODUCTS = PRODUCTS.filter(p => p.category === 'fragrance')

export default function Fragrance() {
  return (
    <section
      id="fragrance"
      className="section-pad"
      style={{
        background: `
          radial-gradient(ellipse 80% 40% at 0% 50%, rgba(212,168,67,0.06) 0%, transparent 60%),
          linear-gradient(180deg, #0e0c09 0%, #1a1610 50%, #0e0c09 100%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#e8c45d] mb-4">
            Scents &amp; Sensibility
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6 text-balance">
            Perfumes &amp; <span className="text-gold-gradient italic">Fragrance</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p className="font-body text-sm md:text-base text-[#fdf8ef]/80 leading-relaxed max-w-xl mx-auto text-balance">
            Concentrated, long-lasting perfume oils — crafted for depth, warmth and all-day presence.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FRAGRANCE_PRODUCTS.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/2348138933237?text=Hi%20Eimaan%20Maison%2C%20I'd%20like%20to%20explore%20your%20fragrance%20collection."
            target="_blank"
            rel="noopener noreferrer"
            id="fragrance-explore-cta"
            aria-label="Explore our full fragrance collection on WhatsApp (opens in new tab)"
            className="btn-gold"
          >
            <MessageCircle size={15} />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: Product }) {
  const waMsg = encodeURIComponent(`Hi Eimaan Maison, I'm interested in your ${product.name} perfume oil.`)
  return (
    <div className="glass-card group relative overflow-hidden hover:-translate-y-1 hover:border-[rgba(212,168,67,0.25)] hover:shadow-[0_12px_48px_rgba(212,168,67,0.09)] transition-all duration-300 flex flex-col">
      {/* Product image */}
      <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[3/4] shrink-0">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Type badge */}
        <div className="absolute top-3 left-3">
          <span className="font-body text-[0.625rem] font-medium tracking-[0.2em] uppercase text-[#e8c45d] border border-[rgba(212,168,67,0.4)] bg-[rgba(14,12,9,0.85)] backdrop-blur-sm px-2.5 py-1">
            {product.type}
          </span>
        </div>
        {/* Gold overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,12,9,0.6)] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-[#fdf8ef] mb-2">{product.name}</h3>
        <p className="font-body text-xs text-[#fdf8ef]/70 leading-relaxed mb-5 flex-1">{product.desc}</p>
        <a
          href={`https://wa.me/2348138933237?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${product.name} on WhatsApp (opens in new tab)`}
          className="inline-flex items-center gap-2 font-body text-[0.7rem] tracking-[0.15em] uppercase text-[#e8c45d] hover:text-[#f9efcf] transition-all hover-line active:scale-[0.96] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#e8c45d] rounded-sm py-0.5"
        >
          <MessageCircle size={12} />
          Enquire
        </a>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,67,0.35)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}
