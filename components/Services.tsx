'use client'

import { useReveal } from './useReveal'

const services = [
  {
    title: 'Marble Floor Cleaning & Polishing',
    desc: 'Professional restoration and polishing of marble floors, bringing back the original shine and elegance to your space.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-brand',
  },
  {
    title: 'High-Rise Building Exterior Cleaning',
    desc: 'Specialized exterior cleaning for tall buildings and skyscrapers using advanced equipment and safety protocols.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-brand to-cyan-600',
  },
  {
    title: 'Wooden Floor Polishing',
    desc: 'Expert wood floor care and polishing services that protect, restore, and enhance your hardwood surfaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    gradient: 'from-amber-700 to-brand',
  },
  {
    title: 'Professional Fumigation Services',
    desc: 'Comprehensive pest control and fumigation using safe, effective methods to protect your premises.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    gradient: 'from-emerald-600 to-brand',
  },
  {
    title: 'Interior & Exterior Window Cleaning',
    desc: 'Crystal-clear window cleaning for both interior and exterior surfaces, enhancing natural light and building appearance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M3 3h18v18H3V3zm9 0v18M3 12h18" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-brand',
  },
]

export default function Services() {
  useReveal()

  return (
    <section id="services" className="bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="reveal mb-14 text-center">
          <h2 className="mb-4 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-white">
            Specialized <span className="text-brand">Cleaning</span> Services
          </h2>
          <p className="mx-auto max-w-[560px] text-base leading-relaxed text-white/55">
            From marble floors to high-rise exteriors — precision, accountability, and premium-grade results for every project.
          </p>
        </div>
        <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="reveal group relative cursor-pointer overflow-hidden rounded-2xl border border-brand/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-2 hover:border-brand/30 hover:bg-white/[0.07] hover:shadow-[0_20px_60px_rgba(1,4,30,.25)]"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${svc.gradient} transition-transform duration-500 group-hover:scale-x-100`} />

              <div className="p-7">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/15 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(43,127,212,.3)] group-hover:scale-110">
                    <span className="[&>svg]:h-6 [&>svg]:w-6">{svc.icon}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-brand">{svc.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-white/50">{svc.desc}</p>

                {/* Learn more link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Background glow on hover */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-brand/0 transition-all duration-500 group-hover:bg-brand/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
