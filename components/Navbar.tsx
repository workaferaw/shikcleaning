'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#clients', label: 'Clients' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#process', label: 'Process' },
  ]

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-[1000] border-b border-navy/10 bg-paper/95 backdrop-blur-sm transition-all duration-300 ${
          scrolled ? 'py-4 shadow-[0_1px_0_rgba(1,4,30,.04)]' : 'py-6'
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-7">
          <Link href="#" className="flex items-center gap-3">
            <Logo variant="light" width={26} />
            <span className="font-display text-[1.05rem] italic tracking-tight text-navy">Shik</span>
          </Link>
          <ul className="hidden items-center gap-10 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="eyebrow text-navy/55 transition-colors hover:text-brand-dark"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="eyebrow border border-brand bg-brand px-6 py-3 text-white transition-colors hover:border-brand-dark hover:bg-brand-dark"
              >
                Get a Quote
              </Link>
            </li>
          </ul>
          <button
            className="flex flex-col gap-1.5 p-1.5 md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block h-px w-6 bg-navy" />
            <span className="block h-px w-6 bg-navy" />
            <span className="block h-px w-6 bg-navy" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-9 bg-paper md:hidden ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
      >
        <button
          className="absolute right-7 top-6 p-1.5"
          onClick={() => setMobileOpen(false)}
        >
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#01041e" strokeWidth={2}>
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </button>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-display text-3xl text-navy hover:text-brand-dark"
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="eyebrow border border-brand bg-brand px-6 py-3 text-white"
          onClick={() => setMobileOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </>
  )
}
