import { MessageCircle, Droplets, Sun, Wind, Flower2, Sparkles, Layers } from 'lucide-react'

const CATEGORIES = [
  {
    icon: <Droplets size={22} />,
    name: 'Cleansers',
    desc: 'Gentle yet effective cleansers that remove impurities without stripping your skin\'s natural barrier.',
    tag: 'Daily Ritual',
  },
  {
    icon: <Sparkles size={22} />,
    name: 'Serums',
    desc: 'High-concentration serums targeting hydration, brightening, anti-aging, and evening skin tone.',
    tag: 'Targeted Treatment',
  },
  {
    icon: <Flower2 size={22} />,
    name: 'Moisturizers',
    desc: 'Rich and lightweight formulas that lock in moisture and keep skin soft, supple, and nourished all day.',
    tag: 'Hydration',
  },
  {
    icon: <Wind size={22} />,
    name: 'Body Care',
    desc: 'Body scrubs, shower gels, and lotions formulated for smooth, radiant and glowing skin.',
    tag: 'Full Body Glow',
  },
  {
    icon: <Layers size={22} />,
    name: 'Facial Oils',
    desc: 'Luxurious oils that deeply nourish, repair and restore luminosity to your complexion.',
    tag: 'Radiance',
  },
  {
    icon: <Sun size={22} />,
    name: 'Sunscreen',
    desc: 'Broad-spectrum sun protection that defends skin from UV damage while keeping it comfortable.',
    tag: 'Protection',
  },
]

export default function Skincare() {
  return (
    <section
      id="skincare"
      className="section-pad"
      style={{
        background: 'linear-gradient(180deg, #0e0c09 0%, #1a1610 50%, #0e0c09 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#e8c45d] mb-4">
            Our Core Offering
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6">
            <span className="text-gold-gradient italic">Skincare</span> Collection
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p className="font-body text-sm md:text-base text-[#fdf8ef]/80 leading-relaxed max-w-xl mx-auto">
            Discover Eimaan Maison's collection of thoughtfully formulated skincare products,
            developed with a focus on quality, care and effective beauty routines.
          </p>
        </div>

        {/* Product categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATEGORIES.map((cat, i) => (
            <div
              key={i}
              className="glass-card group relative overflow-hidden cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:border-[rgba(212,168,67,0.25)] hover:shadow-[0_8px_40px_rgba(212,168,67,0.08)]"
            >
              {/* Tag */}
              <div className="absolute top-5 right-5">
                <span className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-[#e8c45d] border border-[rgba(212,168,67,0.35)] px-2 py-1">
                  {cat.tag}
                </span>
              </div>

              <div className="p-7 pt-8">
                <div className="w-11 h-11 flex items-center justify-center border border-[rgba(212,168,67,0.25)] text-[#d4a843] mb-5 group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-display text-xl text-[#fdf8ef] mb-3">{cat.name}</h3>
                <p className="font-body text-xs text-[#fdf8ef]/70 leading-relaxed mb-6">{cat.desc}</p>
                <a
                  href={`https://wa.me/2348138933237?text=Hi%20Eimaan%20Maison%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(cat.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`skincare-enquire-${cat.name.toLowerCase().replace(/\s/g, '-')}`}
                  aria-label={`Enquire about ${cat.name} on WhatsApp (opens in new tab)`}
                  className="inline-flex items-center gap-2 font-body text-[0.7rem] tracking-[0.15em] uppercase text-[#e8c45d] hover:text-[#f9efcf] transition-colors hover-line"
                >
                  <MessageCircle size={12} />
                  Enquire
                </a>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,67,0.3)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/2348138933237?text=Hi%20Eimaan%20Maison%2C%20I'd%20like%20to%20explore%20your%20full%20skincare%20collection."
            target="_blank"
            rel="noopener noreferrer"
            id="skincare-shop-cta"
            aria-label="Shop our full skincare collection on WhatsApp (opens in new tab)"
            className="btn-gold"
          >
            <MessageCircle size={15} />
            Shop on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
