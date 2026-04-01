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
    <section id="why-us" className="relative overflow-hidden bg-navy py-28 md:py-36">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 700px 500px at 85% 40%, rgba(43,127,212,.12) 0%, transparent 60%),
            radial-gradient(ellipse 500px 400px at 10% 80%, rgba(43,127,212,.06) 0%, transparent 50%)
          `,
        }}
      />
      <div className="container relative z-10 mx-auto max-w-[1200px] px-7">
        <div className="reveal mb-16 text-center">
          <h2 className="mb-5 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold tracking-tight text-white">
            The Standard That <span className="text-brand">Sets Us Apart</span>
          </h2>
          <p className="mx-auto max-w-[560px] text-base leading-relaxed text-white/50">
            We don&apos;t just clean — we manage cleanliness as a professional discipline, with full accountability at every step.
          </p>
        </div>
        <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c) => (
            <div
              key={c.title}
              className="reveal group rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1.5 hover:border-brand/20 hover:bg-white/[0.06] hover:shadow-[0_20px_48px_rgba(43,127,212,.08)]"
            >
              <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-400 group-hover:bg-brand/20 group-hover:scale-110 [&>svg]:h-5.5 [&>svg]:w-5.5">
                {c.icon}
              </div>
              <h3 className="mb-3 text-base font-bold text-white transition-colors duration-300 group-hover:text-brand">{c.title}</h3>
              <p className="text-sm leading-relaxed text-white/45">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
