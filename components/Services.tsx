'use client'

import { useReveal } from './useReveal'

const services = [
  {
    title: 'High-Rise Building & Window Glass Cleaning',
    desc: 'Specialized exterior and glass cleaning for tall buildings and skyscrapers using advanced equipment and safety protocols.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Post Construction Cleaning',
    desc: 'Comprehensive deep cleaning services for newly built or renovated spaces, ensuring they are ready for use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Deep Commercial & Residential Cleaning',
    desc: 'Thorough, top-to-bottom cleaning for offices, homes, and residential properties, tailored to the space and its use.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
      </svg>
    ),
  },
  {
    title: 'Corporate Janitorial Service',
    desc: 'Reliable, scheduled janitorial support for offices and corporate facilities, keeping your workplace consistently presentable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M20 7h-3V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2H4a1 1 0 00-1 1v10a2 2 0 002 2h14a2 2 0 002-2V8a1 1 0 00-1-1zM9 5h6v2H9V5zM3 13h18" />
      </svg>
    ),
  },
  {
    title: 'Ceramic, Parquet & SPC Cleaning',
    desc: 'Professional restoration and polishing of ceramic, parquet, and SPC floor types, bringing back the original shine and elegance to your space.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Upholstery & Furniture Cleaning',
    desc: 'Deep cleaning and stain removal for sofas, chairs, and furniture upholstery, restoring fabric and leather surfaces.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M5 13a2 2 0 012-2h10a2 2 0 012 2v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3zm1-2V9a2 2 0 012-2h8a2 2 0 012 2v2M5 17v2m14-2v2" />
      </svg>
    ),
  },
]

export default function Services() {
  useReveal()

  return (
    <section id="services" className="bg-paper-mid py-28 md:py-36">
      <div className="mx-auto max-w-[1100px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="eyebrow mb-5 text-brand-dark">What We Do</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-navy">
            Specialized <span className="italic text-brand-dark">cleaning</span> services
          </h2>
        </div>

        <div className="stagger border-t border-navy/10">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="reveal group grid grid-cols-[44px_1fr] items-center gap-6 border-b border-navy/10 py-9 transition-colors duration-300 hover:bg-navy/[0.02] sm:grid-cols-[72px_44px_1fr] sm:gap-8 md:py-10"
            >
              <span className="num-display hidden text-xl text-navy/20 transition-colors duration-300 group-hover:text-brand-dark/60 sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="text-brand-dark transition-colors duration-300 group-hover:text-brand [&>svg]:h-7 [&>svg]:w-7">
                {svc.icon}
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="mb-2 font-display text-xl text-navy transition-colors duration-300 group-hover:text-brand-dark md:text-2xl">
                    {svc.title}
                  </h3>
                  <p className="max-w-[480px] text-sm leading-relaxed text-navy/50">{svc.desc}</p>
                </div>
                <svg
                  className="hidden h-5 w-5 flex-shrink-0 text-navy/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand-dark sm:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
