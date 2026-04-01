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
    name: 'Hotels',
    sub: 'International & luxury properties',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
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
    <section id="clients" className="bg-navy py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <div className="reveal">
              <h2 className="mb-4 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-white">
                Serving the Most <span className="text-brand">Demanding</span> Environments
              </h2>
              <p className="mb-10 max-w-[560px] text-base leading-relaxed text-white/55">
                We understand that premium environments require premium care. Our teams are trained, vetted, and equipped to operate in high-security, high-standard facilities across Addis Ababa.
              </p>
            </div>
            <div className="stagger grid gap-3 sm:grid-cols-2">
              {clients.map((c) => (
                <div
                  key={c.name}
                  className="reveal group flex cursor-pointer items-center gap-3 rounded-xl border-2 border-brand/15 bg-white/[0.04] p-4 transition-all duration-300 hover:translate-x-1 hover:border-brand/40 hover:bg-brand/10"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110 [&>svg]:h-5 [&>svg]:w-5">
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white">{c.name}</div>
                    <div className="text-xs text-white/40">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal rounded-3xl bg-gradient-to-br from-navy-mid to-navy-light p-10 md:p-12 border border-brand/10">
            <div className="mb-2 text-base font-bold text-white">Why Choose Shik</div>
            <div className="mb-8 text-sm text-white/45">Built for Addis Ababa&apos;s premium facilities</div>
            <div className="space-y-4">
              {checkmarks.map((item) => (
                <div key={item} className="group/check flex items-start gap-3 transition-all duration-200 hover:translate-x-1">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand transition-transform duration-200 group-hover/check:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-white/65 transition-colors group-hover/check:text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-xl border border-brand/20 bg-brand/10 p-4 transition-all hover:border-brand/40 hover:bg-brand/15">
              <svg className="h-5 w-5 flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-sm text-white/70">
                <strong className="text-brand">Satisfaction Guarantee</strong>
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
