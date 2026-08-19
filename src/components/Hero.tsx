import { MessageCircle, BookOpen, ShoppingBag, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,168,67,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 60% 40% at 80% 100%, rgba(184,137,31,0.08) 0%, transparent 60%),
          linear-gradient(180deg, #0e0c09 0%, #1a1610 50%, #0e0c09 100%)
        `
      }}
    >
      {/* Decorative gold lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-1/3 left-0 w-px h-32 bg-gradient-to-b from-transparent via-[rgba(212,168,67,0.3)] to-transparent" />
        <div className="absolute top-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-[rgba(212,168,67,0.3)] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[rgba(212,168,67,0.4)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title badge */}
        <div className="animate-fade-in mb-8">
          <span className="inline-block font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#e8c45d] border border-[rgba(212,168,67,0.3)] px-5 py-2">
            Est. 2026 · Katsina, Nigeria
          </span>
        </div>

        {/* Brand logo wordmark */}
        <div className="animate-fade-in-up delay-100 mb-6">
          <picture>
            <source srcSet="/eimaan-logo-gold.webp" type="image/webp" />
            <img
              src="/eimaan-logo-gold.png"
              alt="Eimaan Maison — Luxury Skincare, Beauty & Fragrance"
              width={720}
              height={112}
              fetchPriority="high"
              decoding="async"
              className="h-28 md:h-40 w-auto object-contain mx-auto"
              style={{ filter: 'drop-shadow(0 0 40px rgba(212,168,67,0.25))' }}
            />
          </picture>
        </div>

        {/* H1 */}
        <h1 className="font-display animate-fade-in-up delay-200 text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-[#fdf8ef] mb-4 leading-tight">
          Luxury Skincare,<br />
          <span className="text-gold-gradient italic">Beauty &amp; Fragrance</span>
        </h1>

        {/* Tagline */}
        <p className="font-body animate-fade-in-up delay-300 text-sm md:text-base text-[#fdf8ef]/80 tracking-wider max-w-xl mx-auto mb-12 leading-relaxed">
          Premium skincare formulated with intention. Personalized consultations.
          Curated fragrances and luxury essentials.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in-up delay-400 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#consultation"
            id="hero-consult-cta"
            aria-label="Book a personalized skincare consultation"
            className="btn-gold"
          >
            <BookOpen size={15} />
            Book a Consultation
          </a>
          <a
            href="#skincare"
            id="hero-explore-cta"
            aria-label="Explore our luxury skincare collection"
            className="btn-ghost"
          >
            <ShoppingBag size={15} />
            Explore Collection
          </a>
          <a
            href="https://wa.me/2348138933237"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            aria-label="Chat with Eimaan Maison on WhatsApp (opens in new tab)"
            className="btn-ghost"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#d4a843]/80 hover:text-[#d4a843] transition-colors animate-fade-in delay-600"
      >
        <span className="font-body text-[0.6rem] tracking-[0.25em] uppercase">Discover</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  )
}
