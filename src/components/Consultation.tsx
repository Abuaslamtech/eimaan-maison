import { MessageCircle, ClipboardList, Microscope, ShoppingBag, CalendarCheck } from 'lucide-react'

const STEPS = [
  {
    num: '01',
    icon: <CalendarCheck size={18} />,
    title: 'Book a Consultation',
    desc: 'Reach out via WhatsApp or visit us at our Katsina location to schedule your session.',
  },
  {
    num: '02',
    icon: <ClipboardList size={18} />,
    title: 'Understand Your Skin',
    desc: 'We discuss your skin type, concerns, current routine, lifestyle and goals.',
  },
  {
    num: '03',
    icon: <Microscope size={18} />,
    title: 'Receive Recommendations',
    desc: 'Get personalized product recommendations specifically matched to your skin needs.',
  },
  {
    num: '04',
    icon: <ShoppingBag size={18} />,
    title: 'Build Your Routine',
    desc: 'Leave with a clear, practical skincare routine you can follow with confidence.',
  },
]

export default function Consultation() {
  return (
    <section
      id="consultation"
      className="section-pad relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 100%, rgba(212,168,67,0.07) 0%, transparent 70%),
          #0e0c09
        `
      }}
    >
      {/* Side decorative text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 font-display text-[10rem] font-light text-[rgba(212,168,67,0.03)] select-none pointer-events-none whitespace-nowrap -rotate-90 hidden xl:block">
        Consultation
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="font-body text-[0.65rem] tracking-[0.3em] uppercase text-[#d4a843] mb-4">
              Personalized Service
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#fdf8ef] mb-6 leading-tight">
              Skincare<br />
              <span className="text-gold-gradient italic">Consultation</span>
            </h2>
            <div className="gold-divider w-24 mb-8" />
            <p className="font-body text-sm text-[#fdf8ef]/60 leading-relaxed mb-4">
              Not sure which products are right for your skin? Our skincare consultations help
              you understand your unique skin needs and select products appropriate for your
              routine — no guesswork, no waste.
            </p>
            <p className="font-body text-sm text-[#fdf8ef]/60 leading-relaxed mb-10">
              Whether you're starting from scratch or looking to refine an existing routine,
              we guide you every step of the way.
            </p>

            {/* Targets */}
            <ul className="space-y-2 mb-10">
              {['Oily & combination skin', 'Dry & sensitive skin', 'Hyperpigmentation & dark spots', 'Anti-aging routines', 'Acne-prone skin management'].map(item => (
                <li key={item} className="flex items-center gap-3 font-body text-xs text-[#fdf8ef]/55">
                  <span className="w-1 h-1 rounded-full bg-[#d4a843] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/2348064474739?text=Hi%20Eimaan%20Maison%2C%20I'd%20like%20to%20book%20a%20skincare%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              id="consultation-book-cta"
              className="btn-gold"
            >
              <MessageCircle size={15} />
              Book via WhatsApp
            </a>
          </div>

          {/* Right: steps */}
          <div className="space-y-5">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="glass-card flex items-start gap-5 p-6 group hover:border-[rgba(212,168,67,0.25)] hover:-translate-x-1 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 border border-[rgba(212,168,67,0.3)] flex items-center justify-center text-[#d4a843] group-hover:bg-[rgba(212,168,67,0.08)] transition-colors">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-display text-xs text-[#d4a843]/50">{step.num}</span>
                    <h3 className="font-display text-lg text-[#fdf8ef]">{step.title}</h3>
                  </div>
                  <p className="font-body text-xs text-[#fdf8ef]/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
