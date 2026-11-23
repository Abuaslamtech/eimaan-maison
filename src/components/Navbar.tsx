import { useState, useEffect } from 'react'
import { Menu, X, ChevronUp } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skincare',     href: '#skincare' },
  { label: 'Consultation', href: '#consultation' },
  { label: 'Fragrance',    href: '#fragrance' },
  { label: 'Gifting',      href: '#gifting' },
  { label: 'Visit Us',     href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [showTop, setShowTop]     = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setShowTop(window.scrollY > 600)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0e0c09]/90 backdrop-blur-xl border-b border-[rgba(212,168,67,0.12)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand */}
          <a href="#hero" aria-label="Eimaan Maison Home" className="flex items-center gap-3 group">
            <picture>
              <source srcSet="/eimaan-logo.webp" type="image/webp" />
              <img
                src="/eimaan-logo.png"
                alt="Eimaan Maison wordmark"
                width={257}
                height={40}
                decoding="async"
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:opacity-75"
              />
            </picture>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-body text-xs font-medium tracking-widest uppercase text-[#fdf8ef]/85 hover:text-[#d4a843] transition-colors duration-200 hover-line focus-visible:outline-none focus-visible:text-[#d4a843] focus-visible:ring-1 focus-visible:ring-[#d4a843]/50 rounded-sm px-1 py-0.5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/2348138933237"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-whatsapp-cta"
            aria-label="Chat with Eimaan Maison on WhatsApp (opens in new tab)"
            className="hidden lg:inline-flex btn-gold text-xs"
          >
            WhatsApp Us
          </a>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            className="lg:hidden text-[#d4a843] min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a843] active:scale-95 transition-transform"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer backdrop and panel */}
        {open && (
          <>
            <div
              className="fixed inset-0 top-[65px] bg-black/60 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <div className="relative z-50 lg:hidden bg-[#0e0c09]/98 backdrop-blur-2xl border-t border-[rgba(212,168,67,0.15)] px-6 py-8 flex flex-col gap-6 shadow-2xl animate-fade-in-up">
              {NAV_LINKS.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-sm tracking-widest uppercase text-[#fdf8ef]/90 hover:text-[#d4a843] transition-colors py-1 focus-visible:outline-none focus-visible:text-[#d4a843]"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[rgba(212,168,67,0.12)]">
                <a
                  href="https://wa.me/2348138933237"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Eimaan Maison on WhatsApp (opens in new tab)"
                  className="btn-gold w-full text-xs"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Back to top */}
      {showTop && (
        <button
          id="back-to-top"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 flex items-center justify-center bg-[#d4a843] text-[#0e0c09] shadow-lg hover:bg-[#e8c45d] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0c09] focus-visible:ring-[#d4a843]"
        >
          <ChevronUp size={18} />
        </button>
      )}
    </>
  )
}
