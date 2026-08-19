import { MapPin, Clock, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react'

const HOURS = [
  { days: 'Monday – Sunday',  time: 'Open 24 Hours' },
]

export default function Visit() {
  return (
    <section
      id="visit"
      className="section-pad"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,168,67,0.08) 0%, transparent 70%),
          linear-gradient(180deg, #0e0c09 0%, #1a1610 100%)
        `
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#d4a843] mb-4">
            Come See Us
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6">
            Visit <span className="text-gold-gradient italic">Eimaan Maison</span>
          </h2>
          <div className="gold-divider w-24 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: contact info */}
          <div className="space-y-8">
            {/* Address */}
            <div className="glass-card p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[rgba(212,168,67,0.3)] flex items-center justify-center text-[#d4a843] flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#e8c45d] mb-2">Address</p>
                  <p className="font-display text-lg text-[#fdf8ef] leading-relaxed">
                    No. 12, Sabuwar Kasuwa<br />
                    Katsina, Katsina State<br />
                    Nigeria
                  </p>
                  <a
                    href="https://maps.google.com/?q=Sabuwar+Kasuwa+Katsina+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="visit-maps-link"
                    aria-label="Get directions to Eimaan Maison on Google Maps (opens in new tab)"
                    className="inline-flex items-center gap-1 mt-3 font-body text-[0.7rem] tracking-widest uppercase text-[#e8c45d] hover:text-[#f3dc9a] transition-colors"
                  >
                    Get Directions <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[rgba(212,168,67,0.3)] flex items-center justify-center text-[#d4a843] flex-shrink-0">
                  <Clock size={18} />
                </div>
                <div className="flex-1">
                  <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#e8c45d] mb-3">Opening Hours</p>
                  {HOURS.map(h => (
                    <div key={h.days} className="flex justify-between items-center py-2 border-b border-[rgba(212,168,67,0.08)] last:border-0">
                      <span className="font-body text-xs text-[#fdf8ef]/75">{h.days}</span>
                      <span className={`font-display text-sm ${h.time === 'Closed' ? 'text-[#fdf8ef]/40' : 'text-[#fdf8ef]'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="glass-card p-7 space-y-5">
              <p className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-[#e8c45d]">Contact</p>
              <a
                href="tel:+2348064474739"
                id="visit-phone-link"
                aria-label="Call Eimaan Maison at +234 806 447 4739"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[#d4a843] group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                  <Phone size={15} />
                </div>
                <span className="font-display text-base text-[#fdf8ef] group-hover:text-[#d4a843] transition-colors">
                  +234 806 447 4739
                </span>
              </a>
              <a
                href="mailto:eimaanmaison@gmail.com"
                id="visit-email-link"
                aria-label="Send an email to eimaanmaison@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[#d4a843] group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                  <Mail size={15} />
                </div>
                <span className="font-body text-xs text-[#fdf8ef]/85 group-hover:text-[#d4a843] transition-colors break-all">
                  eimaanmaison@gmail.com
                </span>
              </a>
              <a
                href="https://wa.me/2348138933237"
                target="_blank"
                rel="noopener noreferrer"
                id="visit-whatsapp-link"
                aria-label="Chat with Eimaan Maison on WhatsApp (opens in new tab)"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 border border-[rgba(212,168,67,0.25)] flex items-center justify-center text-[#d4a843] group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                  <MessageCircle size={15} />
                </div>
                <span className="font-display text-base text-[#fdf8ef] group-hover:text-[#d4a843] transition-colors">
                  WhatsApp Us
                </span>
              </a>
            </div>
          </div>

          {/* Right: embedded map */}
          <div className="h-full min-h-[400px]">
            <div className="glass-card overflow-hidden h-full min-h-[400px]">
              <iframe
                title="Eimaan Maison Location — Katsina, Nigeria"
                src="https://maps.google.com/maps?q=Sabuwar+Kasuwa,Katsina,Nigeria&output=embed&z=14"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0, filter: 'grayscale(0.4) contrast(1.1)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
