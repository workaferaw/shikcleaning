'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const show = loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% 110%, rgba(255,255,255,.95) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 0% 100%, rgba(43,127,212,.35) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 100% 100%, rgba(43,127,212,.35) 0%, transparent 50%),
            linear-gradient(180deg, #3586DE 0%, #5A9FE4 30%, #A8D4F5 55%, #DFEFFC 75%, #F0F7FD 100%)
          `,
        }}
      />

      <div className="container relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-7 py-32 text-center md:py-40">
        <div className={`mb-10 transition-all duration-700 delay-100 ${show}`}>
          <Logo variant="light" width={64} />
        </div>
        <h1 className={`mb-5 text-[clamp(2rem,5.5vw,3.5rem)] font-extrabold leading-[1.1] text-navy transition-all duration-700 delay-200 md:mb-6 ${show}`}>
          Professional cleaning management for business.
        </h1>
        <p className={`mx-auto mb-10 max-w-[520px] text-base leading-relaxed text-navy/55 transition-all duration-700 delay-300 md:mb-12 md:text-lg ${show}`}>
          Precision cleaning solutions for embassies, hotels, corporates, and offices in Addis Ababa — where impeccable standards are non-negotiable.
        </p>
        <div className={`flex flex-wrap justify-center gap-3 transition-all duration-700 delay-[400ms] ${show}`}>
          <Link
            href="#contact"
            className="pulse-glow inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(1,4,30,.3)]"
          >
            Request a Quote
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center rounded-full border-2 border-navy/20 px-6 py-3.5 text-sm font-bold text-navy transition-all hover:border-navy/50 hover:bg-navy/5"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  )
}
