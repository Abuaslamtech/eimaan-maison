import { Award, Star, Leaf, Heart } from 'lucide-react'

const PILLARS = [
  {
    icon: <Leaf size={20} />,
    title: 'Thoughtfully Formulated',
    desc: 'Skincare developed with attention to quality, skin science and the specific needs of our customers.',
  },
  {
    icon: <Star size={20} />,
    title: 'Personalized Guidance',
    desc: 'One-on-one consultations help you build a routine suited to your skin type and lifestyle.',
  },
  {
    icon: <Award size={20} />,
    title: 'Premium Fragrance',
    desc: 'Carefully curated fragrances — from everyday wear to special-occasion scents — for every preference.',
  },
  {
    icon: <Heart size={20} />,
    title: 'Elegant Presentation',
    desc: 'Luxury packaging and presentation designed to make every product feel like a gift.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#0e0c09]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#d4a843] mb-4">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6">
            About <span className="text-gold-gradient italic">Eimaan Maison</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mb-8" />
          <p className="font-body text-sm md:text-base text-[#fdf8ef]/60 leading-relaxed max-w-2xl mx-auto">
            Eimaan Maison is a luxury skincare and beauty brand focused on thoughtfully formulated
            skincare, personalized consultations, premium fragrances, and carefully curated luxury
            essentials. We combine product quality with personalized guidance — helping every
            customer find exactly what their skin and senses deserve.
          </p>
        </div>

        {/* Brand info card */}
        <div className="glass-card rounded-none p-8 md:p-12 mb-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center sm:text-left">
            <div>
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843]/70 mb-1">Registered Name</p>
              <p className="font-display text-lg text-[#fdf8ef]">Eimaan Maison Enterprises</p>
            </div>
            <div>
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843]/70 mb-1">Registration No.</p>
              <p className="font-display text-lg text-[#fdf8ef]">BN No. 9650895</p>
            </div>
            <div>
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843]/70 mb-1">Registered Under</p>
              <p className="font-display text-lg text-[#fdf8ef]">Companies &amp; Allied Matters Act 2020</p>
            </div>
            <div>
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#d4a843]/70 mb-1">Status</p>
              <p className="font-display text-lg text-green-400/90">Active · July 2026</p>
            </div>
          </div>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="glass-card p-7 group hover:border-[rgba(212,168,67,0.3)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-[rgba(212,168,67,0.3)] text-[#d4a843] mb-5 group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                {p.icon}
              </div>
              <h3 className="font-display text-lg text-[#fdf8ef] mb-3">{p.title}</h3>
              <p className="font-body text-xs text-[#fdf8ef]/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
