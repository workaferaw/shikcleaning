'use client'

import { useReveal } from './useReveal'

const steps = [
  {
    n: 1,
    title: 'Initial Consultation',
    desc: 'Tell us about your space, requirements, and schedule. We listen and assess carefully.',
  },
  {
    n: 2,
    title: 'Custom Quote',
    desc: 'Receive a transparent, itemised quote tailored precisely to your needs with no hidden costs.',
  },
  {
    n: 3,
    title: 'Expert Cleaning',
    desc: 'Our vetted team arrives fully equipped and executes to the highest professional standard.',
  },
  {
    n: 4,
    title: 'Quality Review',
    desc: 'Post-service inspection conducted and your satisfaction confirmed before we leave.',
  },
]

export default function Process() {
  useReveal()

  return (
    <section id="process" className="bg-paper-mid py-28 md:py-36">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="mb-12 max-w-[620px]">
          <p className="eyebrow mb-5 text-brand-dark">How It Works</p>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1] text-navy">
            Simple, <span className="italic text-brand-dark">seamless</span> process
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/55">
            Getting started is straightforward. We handle every detail so you can focus on your core business.
          </p>
        </div>
        <div className="stagger grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="reveal border-t border-navy/15 pt-7">
              <div className="num-display mb-5 text-4xl italic text-brand-dark">{String(s.n).padStart(2, '0')}</div>
              <h3 className="mb-3 font-display text-lg text-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-navy/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
