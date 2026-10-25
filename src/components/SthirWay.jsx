import React from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'w-6 h-6',
}

const standards = [
  {
    title: 'Small Batches, Old Methods',
    text: 'Bilona-churned ghee, stone-ground and shade-dried staples, made only in quantities we can do well.',
    pillar: 'Whole Nourishment',
    icon: (
      // Churning pot
      <svg {...iconProps}>
        <path d="M12 2v9" />
        <path d="M9.5 6.5h5" />
        <path d="M5 11h14l-1.5 8.5a2 2 0 0 1-2 1.5h-7a2 2 0 0 1-2-1.5L5 11Z" />
      </svg>
    ),
  },
  {
    title: 'Traceable to the Soil',
    text: "Grown without synthetic pesticides or forced yields, and you'll always know where it came from.",
    pillar: 'Whole Nourishment',
    icon: (
      // Location pin over a field
      <svg {...iconProps}>
        <path d="M12 15s5-4.5 5-8.5a5 5 0 0 0-10 0c0 4 5 8.5 5 8.5Z" />
        <circle cx="12" cy="6.5" r="1.6" />
        <path d="M3 20c3-1.6 6-2.2 9-2.2s6 .6 9 2.2" />
      </svg>
    ),
  },
  {
    title: 'Time Over Speed',
    text: 'No flash sales, no rush delivery. We would rather arrive later than cut a corner.',
    pillar: 'Slow Rituals',
    icon: (
      // Hourglass
      <svg {...iconProps}>
        <path d="M6 3h12M6 21h12" />
        <path d="M7 3c0 5 10 5 10 9s-10 4-10 9" />
        <path d="M17 3c0 5-10 5-10 9s10 4 10 9" />
      </svg>
    ),
  },
  {
    title: 'Community First',
    text: 'Membership is selective so every workshop and gathering stays small and personal.',
    pillar: 'Slow Rituals',
    icon: (
      // People around a table
      <svg {...iconProps}>
        <circle cx="7" cy="7" r="2.2" />
        <circle cx="17" cy="7" r="2.2" />
        <path d="M3 14.5c.6-2.2 2.1-3.5 4-3.5s3.4 1.3 4 3.5M13 14.5c.6-2.2 2.1-3.5 4-3.5s3.4 1.3 4 3.5" />
        <path d="M2.5 18h19" />
      </svg>
    ),
  },
  {
    title: 'Screens Off, Nature On',
    text: 'Retreat days follow the sun, with digital-free spaces built for real rest.',
    pillar: 'Restorative Retreats',
    icon: (
      // Sun over the horizon
      <svg {...iconProps}>
        <path d="M7 16a5 5 0 0 1 10 0" />
        <path d="M12 5v2.5M4.9 8.9l1.8 1.8M19.1 8.9l-1.8 1.8M2 16h2.5M19.5 16H22" />
        <path d="M3 20h18" />
      </svg>
    ),
  },
  {
    title: 'Hosted With Care',
    text: 'Small groups, unhurried hosts, and meals that come straight from the farm.',
    pillar: 'Restorative Retreats',
    icon: (
      // Bowl with steam
      <svg {...iconProps}>
        <path d="M3 12h18a9 9 0 0 1-18 0Z" />
        <path d="M9 3.5c-1 1.2 1 2.3 0 3.5M12 3c-1 1.2 1 2.3 0 3.5M15 3.5c-1 1.2 1 2.3 0 3.5" />
      </svg>
    ),
  },
]

export default function SthirWay() {
  return (
    <section id="sthir-way" className="py-24 bg-kraft-light relative overflow-hidden border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            The Sthir Way
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            Our Standards. <br />
            <span className="italic text-terracotta-dark">Unhurried by Design.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
          <p className="font-sans text-base sm:text-lg text-forest leading-relaxed">
            The promises behind everything we grow, host and share.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s) => (
            <article
              key={s.title}
              className="flex flex-col bg-kraft rounded-3xl p-7 sm:p-8 border border-forest/10 shadow-sm hover:shadow-xl hover:shadow-forest/10 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-forest text-kraft-light flex items-center justify-center shadow-md mb-5">
                {s.icon}
              </div>
              <h3 className="font-serif text-2xl uppercase tracking-wider text-forest-dark font-semibold leading-tight mb-3 [text-wrap:balance]">
                {s.title}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] text-forest/90 leading-relaxed mb-6">
                {s.text}
              </p>
              <span className="mt-auto self-start font-sans text-[11px] uppercase tracking-widest font-semibold text-terracotta-dark bg-terracotta/10 rounded-full px-3 py-1">
                {s.pillar}
              </span>
            </article>
          ))}
        </div>

        <figure className="mt-14 sm:mt-16 bg-forest text-kraft-light rounded-3xl px-8 py-10 sm:px-14 sm:py-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 shadow-xl shadow-forest/20">
          <img
            src="/assets/LOGO.png"
            alt=""
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shrink-0 ring-4 ring-kraft-light/10"
          />
          <div className="text-center sm:text-left">
            <blockquote className="font-serif italic text-2xl sm:text-3xl leading-snug">
              "True luxury in modern times is not speed or excess, but purity, silence, and whole nourishment directly from the land."
            </blockquote>
            <figcaption className="font-sans text-[11px] uppercase tracking-widest text-terracotta-light font-semibold mt-4">
              The Sthir Life Manifesto
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  )
}
