import React from 'react'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  className: 'w-7 h-7',
}

const benefits = [
  {
    title: 'Priority Harvest Access',
    text: 'First claim on every season’s ghee, pulses and powders, offered to members before anyone else.',
    pillar: 'Whole Nourishment',
    icon: (
      // Wheat stalk
      <svg {...iconProps}>
        <path d="M12 21V8" />
        <path d="M12 12c-2.5 0-4-1.5-4-4 2.5 0 4 1.5 4 4ZM12 12c2.5 0 4-1.5 4-4-2.5 0-4 1.5-4 4Z" />
        <path d="M12 16c-2.5 0-4-1.5-4-4 2.5 0 4 1.5 4 4ZM12 16c2.5 0 4-1.5 4-4-2.5 0-4 1.5-4 4Z" />
        <path d="M12 8c-1.2-1-1.2-3 0-5 1.2 2 1.2 4 0 5Z" />
      </svg>
    ),
  },
  {
    title: 'Member-Only Gatherings',
    text: 'Workshops, farm-to-table meals and community events, kept small so everyone has a seat at the table.',
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
    title: 'Stays & Retreats',
    text: 'Reserved access to our country stays and digital detox weekends, close to the city.',
    pillar: 'Restorative Retreats',
    icon: (
      // House among hills
      <svg {...iconProps}>
        <path d="M5 12 12 6l7 6" />
        <path d="M7 10.5V17h10v-6.5" />
        <path d="M10.5 17v-3.5h3V17" />
        <path d="M2 20c3-1.5 6.5-2 10-2s7 .5 10 2" />
      </svg>
    ),
  },
]

const steps = [
  {
    title: 'Request an Invite',
    text: 'Tell us a little about yourself and what draws you to slow living.',
  },
  {
    title: 'A Short Conversation',
    text: 'We get in touch personally, so we can get to know each other.',
  },
  {
    title: 'Welcome to the Circle',
    text: 'Your invitation arrives, with first access to the next harvest and gathering.',
  },
]

export default function Membership() {
  return (
    <section id="membership" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            Membership
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            By Invitation. <br />
            <span className="italic text-terracotta-dark">Built on Trust.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
          <p className="font-sans text-base sm:text-lg text-forest leading-relaxed">
            Sthir Life grows slowly, one genuine member at a time. Membership is invite-only, so every harvest, gathering and stay remains personal.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <article
              key={b.title}
              className="flex flex-col bg-forest text-kraft-light rounded-3xl p-8 shadow-xl shadow-forest/15 hover:-translate-y-1 transition-transform duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-kraft-light text-forest flex items-center justify-center mb-6">
                {b.icon}
              </div>
              <h3 className="font-serif text-2xl sm:text-[1.7rem] uppercase tracking-wider font-semibold leading-tight mb-3 [text-wrap:balance]">
                {b.title}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] text-kraft-light/90 leading-relaxed mb-6">
                {b.text}
              </p>
              <span className="mt-auto self-start font-sans text-[11px] uppercase tracking-widest font-semibold text-kraft-light bg-kraft-light/10 border border-kraft-light/20 rounded-full px-3 py-1">
                {b.pillar}
              </span>
            </article>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-center font-serif italic text-2xl sm:text-3xl text-terracotta-dark mb-10">
            How membership works
          </h3>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-forest/20" aria-hidden="true"></div>
            {steps.map((s, i) => (
              <li key={s.title} className="relative text-center px-4">
                <span className="relative z-10 mx-auto w-12 h-12 rounded-full bg-kraft border-2 border-terracotta text-terracotta-dark font-serif text-2xl font-semibold flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <p className="font-serif text-xl uppercase tracking-wider text-forest-dark font-semibold mb-2">
                  {s.title}
                </p>
                <p className="font-sans text-sm text-forest/90 leading-relaxed max-w-xs mx-auto">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>
          <div className="text-center mt-12">
            <a
              href="#community"
              className="inline-block px-10 py-4 bg-forest text-kraft font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Request an Invite
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
