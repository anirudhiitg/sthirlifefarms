import React from 'react'

const pillars = [
  {
    title: 'Mental Well\u2011Being',
    subtitle: 'Digital Detox & Silence',
    icon: (
      // Ripples on still water
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="2" />
        <path d="M6.5 12a5.5 5.5 0 0 1 11 0" />
        <path d="M3 12a9 9 0 0 1 18 0" />
        <path d="M3 17h18M6 20.5h12" />
      </svg>
    ),
    problemHeadline: 'Our minds never get to rest.',
    problem:
      'From the first alarm to the last scroll, city life runs on screens. Silence is rare, and burnout and poor sleep now feel normal.',
  },
  {
    title: 'Physical Well\u2011Being',
    subtitle: 'Whole Foods & Organic Movement',
    icon: (
      // Sprout rising from the soil
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 20V10" />
        <path d="M12 13c0-3.5-2.5-6-6.5-6 0 3.5 2.5 6 6.5 6Z" />
        <path d="M12 10c0-3.5 2.5-6 6.5-6 0 3.5-2.5 6-6.5 6Z" />
        <path d="M3 20.5c3-1.5 6-2 9-2s6 .5 9 2" />
      </svg>
    ),
    problemHeadline: 'We have lost touch with real food.',
    problem:
      'Our staples are processed, polished and often adulterated, and desk-bound days leave little room to move. Lifestyle diseases are arriving earlier.',
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-kraft relative border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
          Our Core Philosophy
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2 mb-6">
          Beyond Retail. <span className="italic font-medium text-terracotta-dark">An Urban Refuge.</span>
        </h2>

        <div className="w-16 h-0.5 bg-terracotta mx-auto mb-8"></div>

        <p className="font-sans text-base sm:text-lg text-forest leading-relaxed max-w-3xl mx-auto mb-4">
          We reject the aggressive pace of modern e-commerce. Sthir Life is not a normal commercial venture. It is a selective, community-first country club dedicated to restoring calmness and whole nutrition in an overstimulated world.
        </p>
        <p className="font-serif italic text-xl sm:text-2xl text-terracotta-dark mb-14">
          Two pillars. Two quiet crises we refuse to accept.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="flex flex-col bg-kraft-light rounded-3xl border border-forest/10 shadow-sm hover:shadow-xl hover:shadow-forest/10 hover:-translate-y-1 transition-all duration-500 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 sm:p-10 pb-6 flex items-start gap-4 sm:gap-5">
                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-forest text-kraft-light flex items-center justify-center shadow-md">
                  {pillar.icon}
                </div>
                <div>
                  <span className="font-sans text-[11px] uppercase tracking-widest text-forest/60 font-semibold">
                    Pillar 0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-wide sm:tracking-wider text-forest-dark font-semibold leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs uppercase tracking-widest text-terracotta-dark font-semibold mt-1">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>

              {/* Why this pillar */}
              <div className="px-6 sm:px-10 pb-8 sm:pb-10">
                <span className="inline-block font-sans text-[11px] uppercase tracking-widest font-semibold text-terracotta-dark bg-terracotta/10 rounded-full px-3 py-1 mb-4">
                  The Problem Today
                </span>
                <h4 className="font-serif italic text-2xl text-forest-dark mb-3">
                  {pillar.problemHeadline}
                </h4>
                <p className="font-sans text-sm sm:text-[15px] text-forest/90 leading-relaxed">
                  {pillar.problem}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
