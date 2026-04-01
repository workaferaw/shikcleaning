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
    <section id="process" className="bg-navy-mid py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-7">
        <div className="reveal mb-14 text-center">
          <h2 className="mb-4 text-[clamp(1.7rem,4vw,2.6rem)] font-extrabold text-white">
            Simple, <span className="text-brand">Seamless</span> Process
          </h2>
          <p className="mx-auto max-w-[560px] text-base leading-relaxed text-white/55">
            Getting started is straightforward. We handle every detail so you can focus on your core business.
          </p>
        </div>
        <div className="stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="reveal group flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-light text-2xl font-black text-white shadow-[0_8px_26px_rgba(43,127,212,.32)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_36px_rgba(43,127,212,.45)]">
                {s.n}
              </div>
              <h3 className="mb-2 font-bold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
