'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      {/* Background image */}
      <Image
        src="/hero-bg.png"
        alt="Professional room cleaning"
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay — slightly lighter to let the image show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/70 to-navy/85" />
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 100%, rgba(43,127,212,.15) 0%, transparent 50%)
          `,
        }}
      />

      <div className="container relative z-10 mx-auto flex max-w-[800px] flex-col items-center px-7 pt-36 pb-28 text-center md:pt-44 md:pb-36">
        <div className={`mb-12 transition-all duration-700 delay-100 ${show}`}>
          <Logo variant="light" width={64} />
        </div>
        <h1 className={`mb-6 text-[clamp(2.2rem,5.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,.3)] transition-all duration-700 delay-200 md:mb-7 ${show}`}>
          Professional cleaning management for business.
        </h1>
        <p className={`mx-auto mb-12 max-w-[540px] text-base leading-relaxed text-white/75 transition-all duration-700 delay-300 md:mb-14 md:text-lg ${show}`}>
          Precision cleaning solutions for embassies, hotels, corporates, and offices in Addis Ababa — where impeccable standards are non-negotiable.
        </p>
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-700 delay-[400ms] ${show}`}>
          <Link
            href="#contact"
            className="pulse-glow inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-sm font-bold tracking-wide text-white transition-all hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(43,127,212,.5)]"
          >
            Request a Quote
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center rounded-full border-2 border-white/25 px-7 py-4 text-sm font-bold tracking-wide text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_8px_24px_rgba(0,0,0,.2)]"
          >
            Explore Services
          </Link>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-mid to-transparent" />
    </section>
  )
}
