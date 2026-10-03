'use client'

import { useReveal } from './useReveal'

const clients = [
  {
    name: 'Embassies',
    sub: 'Diplomatic & governmental facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    name: 'Hotels and Restuarants',
    sub: 'Hospitality and dining establishments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    name: 'Real estate & Apartments',
    sub: 'Residential and commercial complexes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    name: 'Hospital and Clinics',
    sub: 'Healthcare and medical facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Corporates',
    sub: 'Enterprise & multi-floor facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Offices',
    sub: 'Professional workspaces & suites',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
]

const checkmarks = [
  'Trained and vetted cleaning professionals',
  'Premium-grade, eco-conscious cleaning products',
  'Flexible scheduling — 24/7 availability',
  'Tailored plans for every facility type',
]

export default function WhoWeServe() {
  useReveal()

  return (
    <section id="who-we-serve" className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <div className="mb-10">
              <p className="eyebrow mb-5 text-brand-dark">Who We Serve</p>
              <h2 className="mb-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-navy">
                Serving the most <span className="italic text-brand-dark">demanding</span> environments
              </h2>
              <p className="max-w-[480px] text-base leading-relaxed text-navy/55">
                We understand that premium environments require premium care. Our teams are trained, vetted, and equipped to operate in high-security, high-standard facilities.
              </p>
            </div>
            <div className="stagger border-t border-navy/10">
              {clients.map((c) => (
                <div
                  key={c.name}
                  className="reveal group flex items-center gap-5 border-b border-navy/10 py-5 transition-colors duration-300 hover:bg-navy/[0.02]"
                >
                  <div className="text-brand-dark transition-colors duration-300 group-hover:text-brand [&>svg]:h-5 [&>svg]:w-5">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-navy">{c.name}</div>
                    <div className="text-xs text-navy/40">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-navy/10 bg-paper-mid p-10 md:p-12">
            <div className="mb-2 font-display text-xl text-navy">Why Choose Shik</div>
            <div className="mb-10 text-sm text-navy/45">Built for Addis Ababa&apos;s premium facilities</div>
            <div className="space-y-5 border-t border-navy/10 pt-8">
              {checkmarks.map((item) => (
                <div key={item} className="group/check flex items-start gap-3.5">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm leading-relaxed text-navy/65 transition-colors group-hover/check:text-navy">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-navy/10 pt-8">
              <svg className="h-6 w-6 flex-shrink-0 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-sm text-navy/70">
                <strong className="font-display italic text-brand-dark">Satisfaction Guarantee</strong>
                <br />
                Not satisfied? We return at no additional charge.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
