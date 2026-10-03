'use client'

import { useReveal } from './useReveal'

const whyCards = [
  {
    title: 'Vetted & Trained Professionals',
    desc: 'All staff undergo rigorous background checks, professional training, and are fully uniformed for every assignment.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Quality-Controlled Processes',
    desc: 'Detailed checklists and supervisory sign-offs ensure every task meets specification — with photo verification available.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Rapid Response Capability',
    desc: "Emergency and same-day services available. We adapt to your schedule and urgency — not the other way around.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Conscious Products',
    desc: 'We use environmentally responsible, biodegradable cleaning agents that are safe for your team and the planet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Fully Insured & Bonded',
    desc: 'Comprehensive liability coverage protects your property and gives complete peace of mind on every job.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Dedicated Account Manager',
    desc: 'Your personal manager handles scheduling, feedback, and consistent service quality across every single visit.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  useReveal()

  return (
    <section id="why-us" className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="eyebrow mb-5 text-brand-dark">Why Shik</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-navy">
            The standard that <span className="italic text-brand-dark">sets us apart</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/55">
            We don&apos;t just clean — we manage cleanliness as a professional discipline, with full accountability at every step.
          </p>
        </div>
        <div className="stagger grid grid-cols-1 border-t border-l border-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c) => (
            <div
              key={c.title}
              className="reveal group border-b border-r border-navy/10 p-9 transition-colors duration-300 hover:bg-navy/[0.02]"
            >
              <div className="mb-7 text-brand-dark transition-colors duration-300 group-hover:text-brand [&>svg]:h-7 [&>svg]:w-7">
                {c.icon}
              </div>
              <h3 className="mb-3 font-display text-lg text-navy transition-colors duration-300 group-hover:text-brand-dark">{c.title}</h3>
              <p className="text-sm leading-relaxed text-navy/50">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
