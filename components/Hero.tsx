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
    <section className="relative overflow-hidden border-b border-navy/10 bg-paper">
      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative order-first h-[42vh] md:order-last md:h-auto md:border-l md:border-navy/10">
          <Image
            src="/hero-bg.png"
            alt="Premium office lobby cleaned by Shik Cleaning"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-7 py-16 md:py-28 md:pl-10 md:pr-14 lg:pl-16 lg:pr-20">
          <div className={`mb-10 transition-all duration-700 delay-100 ${show}`}>
            <Logo variant="light" width={44} />
          </div>
          <p className={`eyebrow mb-6 text-brand-dark transition-all duration-700 delay-150 ${show}`}>
            Addis Ababa &middot; Est. Cleaning Management
          </p>
          <h1 className={`mb-7 font-display text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.1] text-navy transition-all duration-700 delay-200 ${show}`}>
            Professional cleaning services for businesses.
          </h1>
          <p className={`mb-11 max-w-[440px] text-[0.95rem] leading-relaxed text-navy/60 transition-all duration-700 delay-300 ${show}`}>
            Precision cleaning solutions for embassies, hotels, corporates, and offices — where impeccable standards are non-negotiable.
          </p>
          <div className={`flex flex-wrap items-center gap-5 transition-all duration-700 delay-[400ms] ${show}`}>
            <Link
              href="#contact"
              className="eyebrow border border-brand bg-brand px-8 py-4 text-white transition-colors hover:border-brand-dark hover:bg-brand-dark"
            >
              Request a Quote
            </Link>
            <Link
              href="#services"
              className="eyebrow border border-navy/20 px-8 py-4 text-navy transition-colors hover:border-navy/40"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
