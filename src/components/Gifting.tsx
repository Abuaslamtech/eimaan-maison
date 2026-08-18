import { Gift, Package, Star, Heart, MessageCircle } from 'lucide-react'

const GIFT_OPTIONS = [
  { icon: <Package size={20} />,     label: 'Gift Boxes',            desc: 'Beautifully assembled gift boxes featuring our skincare and fragrance essentials.' },
  { icon: <Star size={20} />,        label: 'Fragrance Sets',        desc: 'Paired or curated sets of complementary scents for any occasion or personality.' },
  { icon: <Heart size={20} />,       label: 'Skincare Sets',         desc: 'Thoughtfully selected skincare routines packaged as a complete gifting experience.' },
  { icon: <Gift size={20} />,        label: 'Custom Packaging',      desc: 'Personalised, luxury packaging for weddings, milestones, corporate events and more.' },
]

export default function Gifting() {
  return (
    <section
      id="gifting"
      className="section-pad"
      style={{
        background: `
          radial-gradient(ellipse 60% 40% at 100% 0%, rgba(212,168,67,0.06) 0%, transparent 60%),
          #0e0c09
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#e8c45d] mb-4">
              Special Occasions
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6 leading-tight">
              Gifting &amp;<br />
              <span className="text-gold-gradient italic">Special Occasions</span>
            </h2>
            <div className="gold-divider w-24 mb-8" />
            <p className="font-body text-sm text-[#fdf8ef]/80 leading-relaxed mb-4">
              Eimaan Maison offers thoughtfully curated gift sets, luxury packaging, and
              custom arrangements designed to make every occasion memorable.
            </p>
            <p className="font-body text-sm text-[#fdf8ef]/80 leading-relaxed mb-10">
              Whether it's a birthday, wedding, Eid, or a corporate gesture, we ensure
              your gift arrives with the elegance it deserves.
            </p>
            <a
              href="https://wa.me/2348064474739?text=Hi%20Eimaan%20Maison%2C%20I'd%20like%20to%20arrange%20a%20gift%20or%20custom%20packaging."
              target="_blank"
              rel="noopener noreferrer"
              id="gifting-enquire-cta"
              aria-label="Enquire about custom gift sets on WhatsApp (opens in new tab)"
              className="btn-gold"
            >
              <MessageCircle size={15} />
              Enquire on WhatsApp
            </a>
          </div>

          {/* Right: gift options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {GIFT_OPTIONS.map((g, i) => (
              <div
                key={i}
                className="glass-card p-6 group hover:border-[rgba(212,168,67,0.25)] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,67,0.07)]"
              >
                <div className="w-10 h-10 border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[#d4a843] mb-4 group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                  {g.icon}
                </div>
                <h3 className="font-display text-lg text-[#fdf8ef] mb-2">{g.label}</h3>
                <p className="font-body text-xs text-[#fdf8ef]/70 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
