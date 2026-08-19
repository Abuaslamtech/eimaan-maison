import { MessageCircle, BookOpen, MapPin, Globe, Share2 } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="section-pad"
      style={{
        background: `
          linear-gradient(135deg,
            rgba(212,168,67,0.12) 0%,
            rgba(184,137,31,0.06) 50%,
            rgba(212,168,67,0.10) 100%
          ),
          #0e0c09
        `
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#e8c45d] mb-6">
          Ready to Begin?
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6 leading-tight">
          Find your perfect<br />
          <span className="text-gold-gradient italic">skincare routine</span> or fragrance
        </h2>
        <div className="gold-divider w-24 mx-auto mb-10" />
        <p className="font-body text-sm text-[#fdf8ef]/80 mb-12 max-w-md mx-auto">
          Reach out on WhatsApp, book a consultation, or visit us in Katsina.
          We're here to guide you to products that truly suit you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="https://wa.me/2348138933237"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp"
            aria-label="Chat with Eimaan Maison on WhatsApp (opens in new tab)"
            className="btn-gold"
          >
            <MessageCircle size={16} />
            WhatsApp Eimaan Maison
          </a>
          <a
            href="https://wa.me/2348138933237?text=Hi%20Eimaan%20Maison%2C%20I'd%20like%20to%20book%20a%20skincare%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            id="cta-consult"
            aria-label="Book a skincare consultation session via WhatsApp (opens in new tab)"
            className="btn-ghost"
          >
            <BookOpen size={16} />
            Book a Consultation
          </a>
          <a
            href="https://maps.google.com/?q=Sabuwar+Kasuwa+Katsina+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-directions"
            aria-label="Get directions to Eimaan Maison in Katsina on Google Maps (opens in new tab)"
            className="btn-ghost"
          >
            <MapPin size={16} />
            Get Directions
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://instagram.com/eimaan_maison"
            target="_blank"
            rel="noopener noreferrer"
            id="banner-instagram"
            aria-label="Follow Eimaan Maison on Instagram (opens in new tab)"
            className="flex items-center gap-2 font-body text-[0.7rem] tracking-widest uppercase text-[#fdf8ef]/75 hover:text-[#d4a843] transition-colors"
          >
            <Globe size={16} />
            Instagram
          </a>
          <span className="text-[#d4a843]/40">·</span>
          <a
            href="https://facebook.com/eimaanmaison"
            target="_blank"
            rel="noopener noreferrer"
            id="banner-facebook"
            aria-label="Follow Eimaan Maison on Facebook (opens in new tab)"
            className="flex items-center gap-2 font-body text-[0.7rem] tracking-widest uppercase text-[#fdf8ef]/75 hover:text-[#d4a843] transition-colors"
          >
            <Share2 size={16} />
            Facebook
          </a>
          <span className="text-[#d4a843]/40">·</span>
          <a
            href="https://wa.me/2348138933237"
            target="_blank"
            rel="noopener noreferrer"
            id="banner-whatsapp"
            aria-label="Message Eimaan Maison on WhatsApp (opens in new tab)"
            className="flex items-center gap-2 font-body text-[0.7rem] tracking-widest uppercase text-[#fdf8ef]/75 hover:text-[#d4a843] transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
