import { MessageCircle, Flame, Droplets, Wind, Star, Gift } from 'lucide-react'

const FRAGRANCE_CATS = [
  { icon: <Flame size={20} />,    name: "Women's Fragrances",  desc: 'Floral, oriental and modern feminine scents for every mood and occasion.' },
  { icon: <Wind size={20} />,     name: "Men's Fragrances",    desc: 'Bold, fresh and woody compositions crafted for the modern gentleman.' },
  { icon: <Star size={20} />,     name: 'Unisex Fragrances',   desc: 'Sophisticated, boundary-less scents that transcend traditional fragrance categories.' },
  { icon: <Droplets size={20} />, name: 'Perfume Oils',        desc: 'Concentrated, long-lasting oil-based perfumes in luxurious rollerball formats.' },
  { icon: <Gift size={20} />,     name: 'Fragrance Sets',      desc: 'Curated gift sets pairing complementary scents — perfect for gifting or layering.' },
]

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
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6">
            Perfumes &amp; <span className="text-gold-gradient italic">Fragrance</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p className="font-body text-sm md:text-base text-[#fdf8ef]/80 leading-relaxed max-w-xl mx-auto">
            Explore Eimaan Maison's selection of premium fragrances — curated for everyday wear,
            special occasions and thoughtful gifting.
          </p>
        </div>

        {/* Large feature strip + cards */}
        <div className="flex flex-col gap-6">
          {/* Top row: two featured categories */}
          <div className="grid md:grid-cols-2 gap-6">
            {FRAGRANCE_CATS.slice(0, 2).map((cat, i) => (
              <FragCard key={i} cat={cat} large />
            ))}
          </div>
          {/* Bottom row: three */}
          <div className="grid md:grid-cols-3 gap-6">
            {FRAGRANCE_CATS.slice(2).map((cat, i) => (
              <FragCard key={i} cat={cat} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/2348064474739?text=Hi%20Eimaan%20Maison%2C%20I'd%20like%20to%20explore%20your%20fragrance%20collection."
            target="_blank"
            rel="noopener noreferrer"
            id="fragrance-explore-cta"
            aria-label="Explore our full fragrance collection on WhatsApp (opens in new tab)"
            className="btn-gold"
          >
            <MessageCircle size={15} />
            Explore on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

function FragCard({ cat, large = false }: { cat: { icon: React.ReactNode; name: string; desc: string }; large?: boolean }) {
  return (
    <div className={`glass-card group relative overflow-hidden hover:-translate-y-1 hover:border-[rgba(212,168,67,0.25)] hover:shadow-[0_8px_40px_rgba(212,168,67,0.07)] transition-all duration-300 ${large ? 'p-9' : 'p-7'}`}>
      {/* Background gold shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(212,168,67,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        <div className="w-11 h-11 border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[#d4a843] mb-5 group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
          {cat.icon}
        </div>
        <h3 className={`font-display text-[#fdf8ef] mb-3 ${large ? 'text-2xl' : 'text-xl'}`}>{cat.name}</h3>
        <p className="font-body text-xs text-[#fdf8ef]/70 leading-relaxed mb-5">{cat.desc}</p>
        <a
          href={`https://wa.me/2348064474739?text=Hi%20Eimaan%20Maison%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(cat.name)}.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${cat.name} on WhatsApp (opens in new tab)`}
          className="inline-flex items-center gap-2 font-body text-[0.7rem] tracking-[0.15em] uppercase text-[#e8c45d] hover:text-[#f9efcf] transition-colors hover-line"
        >
          <MessageCircle size={12} />
          Enquire
        </a>
      </div>
    </div>
  )
}
