'use client'

import { useState } from 'react'
import { useReveal } from './useReveal'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  useReveal()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-navy to-navy-light py-28 md:py-36">
      <div className="absolute -top-32 -right-32 h-[560px] w-[560px] rounded-full bg-brand/[0.06]" />
      <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-brand/[0.07]" />
      <div className="container relative z-10 mx-auto max-w-[1200px] px-7">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div className="reveal">
            <h2 className="mb-4 text-[clamp(1.75rem,3.5vw,2.4rem)] font-extrabold text-white">
              Ready for a Cleaner, More Professional Space?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/55">
              Contact us today for a free site assessment and a fully customised quote. No commitment required — just exceptional results.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-white/65">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +251 92 321 4597
              </div>
              <div className="flex items-center gap-3 text-sm text-white/65">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@shikcleaning.com
              </div>
              <div className="flex items-center gap-3 text-sm text-white/65">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon – Sun: 24/7 Service
              </div>
              <div className="flex items-center gap-3 text-sm text-white/65">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="reveal rounded-3xl bg-navy-mid border border-white/[0.06] p-8 shadow-[0_24px_64px_rgba(0,0,0,.25)] md:p-10">
            <div className="mb-6 text-xl font-extrabold text-white">Request a Free Quote</div>
            <div className="mb-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">First Name</label>
                <input type="text" placeholder="John" className="w-full rounded-xl border-2 border-brand/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-brand focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(43,127,212,.15)]" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Last Name</label>
                <input type="text" placeholder="Smith" className="w-full rounded-xl border-2 border-brand/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-brand focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(43,127,212,.15)]" />
              </div>
            </div>
            <div className="mb-3.5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Company / Organisation</label>
              <input type="text" placeholder="Your organisation name" className="w-full rounded-xl border-2 border-brand/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-brand focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(43,127,212,.15)]" />
            </div>
            <div className="mb-3.5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Email Address</label>
              <input type="email" placeholder="john@company.com" className="w-full rounded-xl border-2 border-brand/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-brand focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(43,127,212,.15)]" />
            </div>
            <div className="mb-3.5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Service Required</label>
              <select className="w-full rounded-xl border-2 border-brand/15 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-brand focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(43,127,212,.15)]">
                <option value="" className="bg-navy-mid">Select a service…</option>
                <option className="bg-navy-mid">Marble Floor Cleaning & Polishing</option>
                <option className="bg-navy-mid">High-Rise Building Exterior Cleaning</option>
                <option className="bg-navy-mid">Wooden Floor Polishing</option>
                <option className="bg-navy-mid">Professional Fumigation Services</option>
                <option className="bg-navy-mid">Interior & Exterior Window Cleaning</option>
                <option className="bg-navy-mid">Multiple Services</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">Message</label>
              <textarea placeholder="Tell us about your space and requirements…" rows={4} className="min-h-[90px] w-full resize-y rounded-xl border-2 border-brand/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-brand focus:bg-white/10 focus:shadow-[0_0_0_3px_rgba(43,127,212,.15)]" />
            </div>
            <button
              type="submit"
              className={`w-full rounded-full py-3.5 text-sm font-bold transition-all ${
                submitted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-brand text-white hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(43,127,212,.42)]'
              }`}
            >
              {submitted ? '✓ Request Sent!' : 'Send Request →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
