'use client'

import Image from 'next/image'

const clients = [
  {
    name: 'BNT Industry and Trading PLC',
    logo: '/clients/bnt.jpg',
  },
  {
    name: 'Dice Design PLC',
    logo: '/clients/dice.png',
  },
  {
    name: 'Meri Podcast',
    logo: '/clients/meri-podcast.jpeg',
  },
  {
    name: 'National Marketers PLC',
    logo: '/clients/national-marketers.jpeg',
  },
  {
    name: 'Awach SACCOS',
    logo: '/clients/awach.png',
  },
  {
    name: 'Tapu Restaurant and Coffee',
    logo: '/clients/tapu.png',
  },
]

export default function TrustBar() {
  return (
    <div id="clients" className="border-b border-navy/10 bg-paper py-14">
      <div className="mx-auto max-w-[1200px] px-7">
        <p className="eyebrow mb-10 text-center text-navy/35">Trusted By</p>
        <div className="grid grid-cols-2 border-l border-t border-navy/10 sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative flex aspect-[4/3] items-center justify-center border-b border-r border-navy/10 p-8 transition-colors hover:bg-paper-mid"
            >
              {client.logo ? (
                <div className="relative h-full w-full grayscale transition-all duration-300 group-hover:grayscale-0">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <span className="font-display text-center text-sm leading-snug text-navy/60 transition-colors group-hover:text-navy">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
