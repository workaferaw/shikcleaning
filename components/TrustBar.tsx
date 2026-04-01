'use client'

import Image from 'next/image'

const items = [
  {
    label: 'Embassies & Consulates',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
      </svg>
    ),
  },
  {
    label: 'International Hotels',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'Corporate Offices',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Business Centers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
  },
  {
    label: 'Premium Facilities',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75}>
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
]

const clients = [
  {
    name: 'BNT Industry and Trading PLC',
    logo: '/clients/bnt.jpg',
  },
]

export default function TrustBar() {
  const doubled = [...items, ...items]

  return (
    <div>
      {/* Scrolling marquee of sectors */}
      <div className="overflow-hidden border-y border-white/[0.06] bg-navy py-5">
        <div className="animate-marquee flex w-max gap-14">
          {doubled.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex flex-shrink-0 items-center gap-3 text-sm font-semibold tracking-wide text-white/55 transition-colors hover:text-white"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand [&>svg]:h-4 [&>svg]:w-4">
                {item.icon}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Client logos section */}
      <div className="bg-navy-mid border-b border-white/[0.06] py-10">
        <div className="mx-auto max-w-[1200px] px-7">
          <p className="mb-6 text-center text-[0.65rem] font-bold uppercase tracking-[0.25em] text-white/25">Trusted By</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {clients.map((client) => (
              <div key={client.name} className="flex items-center gap-5 group transition-all duration-300 hover:scale-105">
                <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.07] shadow-[0_4px_16px_rgba(0,0,0,.15)] backdrop-blur-sm">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-sm font-semibold tracking-wide text-white/50 group-hover:text-white/80 transition-colors">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
