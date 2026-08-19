import { MessageCircle, Globe, Share2 } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0a0805] border-t border-[rgba(212,168,67,0.08)] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet="/eimaan-logo.webp" type="image/webp" />
              <img
                src="/eimaan-logo.png"
                alt="Eimaan Maison"
                width={128}
                height={20}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto object-contain opacity-90"
              />
            </picture>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {[
              { label: 'About',        href: '#about' },
              { label: 'Skincare',     href: '#skincare' },
              { label: 'Fragrance',    href: '#fragrance' },
              { label: 'Consultation', href: '#consultation' },
              { label: 'Visit Us',     href: '#visit' },
            ].map(l => (
              <a
                key={l.href}
                href={l.href}
                className="font-body text-[0.65rem] tracking-widest uppercase text-[#fdf8ef]/70 hover:text-[#e8c45d] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/eimaan_maison"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Eimaan Maison on Instagram (opens in new tab)"
              className="text-[#fdf8ef]/70 hover:text-[#d4a843] transition-colors p-1"
            >
              <Globe size={16} />
            </a>
            <a
              href="https://facebook.com/eimaanmaison"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Eimaan Maison on Facebook (opens in new tab)"
              className="text-[#fdf8ef]/70 hover:text-[#d4a843] transition-colors p-1"
            >
              <Share2 size={16} />
            </a>
            <a
              href="https://wa.me/2348138933237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Eimaan Maison on WhatsApp (opens in new tab)"
              className="text-[#fdf8ef]/70 hover:text-[#d4a843] transition-colors p-1"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div className="gold-divider my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="font-body text-[0.65rem] text-[#fdf8ef]/60">
            &copy; {year} Eimaan Maison Enterprises. BN No. 9650895. All rights reserved.
          </p>
          <p className="font-body text-[0.65rem] text-[#fdf8ef]/60">
            No. 12 Sabuwar Kasuwa, Katsina, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
