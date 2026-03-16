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
        className={`fixed inset-x-0 top-0 z-[1000] py-4 transition-all duration-300 ${
          scrolled ? 'bg-navy py-3 shadow-[0_2px_24px_rgba(1,4,30,.35)]' : ''
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-7">
          <Link href="#" className="flex items-center gap-2.5">
            <Logo variant="dark" width={30} />
            <span className="text-sm font-bold tracking-wide text-white">SHIK</span>
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-[0.82rem] font-semibold uppercase tracking-wide text-white/80 transition-colors hover:text-brand-light"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="rounded-full bg-brand px-5 py-2.5 text-[0.82rem] font-bold text-white transition-colors hover:bg-brand-light"
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
            <span className="block h-0.5 w-6 rounded bg-white" />
            <span className="block h-0.5 w-6 rounded bg-white" />
            <span className="block h-0.5 w-6 rounded bg-white" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-9 bg-navy md:hidden ${
          mobileOpen ? 'flex' : 'hidden'
        }`}
      >
        <button
          className="absolute right-7 top-6 p-1.5"
          onClick={() => setMobileOpen(false)}
        >
          <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2}>
            <line x1={18} y1={6} x2={6} y2={18} />
            <line x1={6} y1={6} x2={18} y2={18} />
          </svg>
        </button>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-2xl font-bold uppercase tracking-widest text-white hover:text-brand-light"
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="#contact"
          className="text-2xl font-bold uppercase tracking-widest text-brand-light"
          onClick={() => setMobileOpen(false)}
        >
          Get a Quote
        </Link>
      </div>
    </>
  )
}
