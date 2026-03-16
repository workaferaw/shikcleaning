'use client'

import { useReveal } from './useReveal'

const services = [
  {
    title: 'Deep Cleaning',
    desc: 'Comprehensive top-to-bottom sanitization covering every surface with hospital-grade products.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-brand',
  },
  {
    title: 'Event Cleaning',
    desc: 'Pre-event setup and post-event restoration for conferences, galas, and corporate functions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    gradient: 'from-brand to-brand-light',
  },
  {
    title: 'Post-Construction',
    desc: 'Complete removal of construction dust and debris — transforming sites into move-in ready spaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    gradient: 'from-brand-light to-cyan-400',
  },
  {
    title: 'Sofa & Carpet',
    desc: 'Advanced hot-water extraction and steam cleaning eliminating stains, allergens, and odors.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 8a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    gradient: 'from-indigo-500 to-brand',
  },
]

export default function Services() {
  useReveal()

  return (
    <section id="services" className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="reveal mb-14 text-center">
          <h2 className="mb-4 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-navy">
            Specialized <span className="text-brand">Cleaning</span> Services
          </h2>
          <p className="mx-auto max-w-[560px] text-base leading-relaxed text-[#374151]">
            From total sanitation overhauls to post-construction transformations — precision, accountability, and premium-grade products.
          </p>
        </div>
        <div className="stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="reveal group relative cursor-pointer overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_60px_rgba(1,4,30,.12)]"
            >
              {/* Top gradient bar */}
              <div className={`h-1 w-full origin-left scale-x-0 bg-gradient-to-r ${svc.gradient} transition-transform duration-500 group-hover:scale-x-100`} />

              <div className="p-7">
                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-brand-pale text-brand transition-all duration-300 group-hover:bg-gradient-to-br group-hover:${svc.gradient} group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(43,127,212,.3)] group-hover:scale-110`}>
                    <span className="[&>svg]:h-6 [&>svg]:w-6">{svc.icon}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-lg font-bold text-navy transition-colors group-hover:text-brand">{svc.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6b7280]">{svc.desc}</p>

                {/* Learn more link */}
                <div className="flex items-center gap-1.5 text-sm font-semibold text-brand opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  Learn more
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Background glow on hover */}
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-brand/0 transition-all duration-500 group-hover:bg-brand/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
