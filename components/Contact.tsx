'use client'

import { useState } from 'react'
import { useReveal } from './useReveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  useReveal()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-navy/10 bg-paper py-28 md:py-36">
      <div className="container mx-auto max-w-[1200px] px-7">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="eyebrow mb-5 text-brand-dark">Get In Touch</p>
            <h2 className="mb-6 font-display text-[clamp(1.9rem,4vw,2.8rem)] leading-[1.15] text-navy">
              Ready for a <span className="italic text-brand-dark">cleaner</span>, more professional space?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-navy/60">
              Contact us today for a free site assessment and a fully customised quote. No commitment required — just exceptional results.
            </p>
            <div className="flex flex-col gap-3 border-t border-navy/10 pt-8">
              <div className="flex items-center gap-3 text-sm text-navy/70">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0940270521/0997298286
              </div>
              <div className="flex items-center gap-3 text-sm text-navy/70">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@shikcleaning.com
              </div>
              <div className="flex items-center gap-3 text-sm text-navy/70">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon – Sun: 24/7 Service
              </div>
              <div className="flex items-center gap-3 text-sm text-navy/70">
                <svg className="h-[18px] w-[18px] flex-shrink-0 text-brand-dark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Addis Ababa, Ethiopia
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-navy/10 bg-paper-mid p-8 md:p-10">
            <input type="hidden" name="subject" value="New Quote Request — Shik Cleaning Website" />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="mb-7 font-display text-xl text-navy">Request a Free Quote</div>
            <div className="mb-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="eyebrow mb-1.5 block text-navy/45">First Name</label>
                <input required type="text" name="first_name" placeholder="John" className="w-full border border-navy/15 bg-paper px-4 py-2.5 text-sm text-navy placeholder:text-navy/25 outline-none transition-colors focus:border-brand" />
              </div>
              <div>
                <label className="eyebrow mb-1.5 block text-navy/45">Last Name</label>
                <input required type="text" name="last_name" placeholder="Smith" className="w-full border border-navy/15 bg-paper px-4 py-2.5 text-sm text-navy placeholder:text-navy/25 outline-none transition-colors focus:border-brand" />
              </div>
            </div>
            <div className="mb-3.5">
              <label className="eyebrow mb-1.5 block text-navy/45">Company / Organisation</label>
              <input type="text" name="company" placeholder="Your organisation name" className="w-full border border-navy/15 bg-paper px-4 py-2.5 text-sm text-navy placeholder:text-navy/25 outline-none transition-colors focus:border-brand" />
            </div>
            <div className="mb-3.5">
              <label className="eyebrow mb-1.5 block text-navy/45">Email Address</label>
              <input required type="email" name="email" placeholder="john@company.com" className="w-full border border-navy/15 bg-paper px-4 py-2.5 text-sm text-navy placeholder:text-navy/25 outline-none transition-colors focus:border-brand" />
            </div>
            <div className="mb-3.5">
              <label className="eyebrow mb-1.5 block text-navy/45">Service Required</label>
              <select name="service" className="w-full border border-navy/15 bg-paper px-4 py-2.5 text-sm text-navy outline-none transition-colors focus:border-brand">
                <option value="">Select a service…</option>
                <option>High-Rise Building & Window Glass Cleaning</option>
                <option>Post Construction Cleaning</option>
                <option>Deep Commercial & Residential Cleaning</option>
                <option>Corporate Janitorial Service</option>
                <option>Ceramic, Parquet & SPC Cleaning</option>
                <option>Upholstery & Furniture Cleaning</option>
                <option>Multiple Services</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="eyebrow mb-1.5 block text-navy/45">Message</label>
              <textarea required name="message" placeholder="Tell us about your space and requirements…" rows={4} className="min-h-[90px] w-full resize-y border border-navy/15 bg-paper px-4 py-2.5 text-sm text-navy placeholder:text-navy/25 outline-none transition-colors focus:border-brand" />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className={`eyebrow w-full border py-4 transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
                status === 'sent'
                  ? 'border-emerald-600 bg-emerald-600 text-white'
                  : status === 'error'
                  ? 'border-red-600 bg-red-600 text-white'
                  : 'border-brand bg-brand text-white hover:border-brand-dark hover:bg-brand-dark'
              }`}
            >
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Request Sent' : status === 'error' ? 'Something Went Wrong — Try Again' : 'Send Request'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
