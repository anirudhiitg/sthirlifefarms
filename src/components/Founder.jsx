import React from 'react'

/*
 * About the founder. Everything in [square brackets] is a placeholder to replace.
 *
 * To add the photo: put it in public/assets/founder/ (a portrait photo, ideally on
 * the farm, around 1000px wide) and set `photo`, e.g. '/assets/founder/founder.jpg'.
 */
const founder = {
  name: '[Founder Name]',
  role: 'Founder, Sthir Life Farms',
  photo: null,
  story: [
    'Before Sthir Life, [Founder Name] spent [X years] in [city / profession], living the fast, always-on life so many of us know. [One line about the moment or realisation that made them stop and rethink.]',
    '[A few lines about the connection to Rajasthan and the land: family roots, the farm, or what drew them there.]',
    'Sthir Life began as [how it started, e.g. sharing the farm’s ghee and pulses with a few friends and family], and grew into a small circle of people who want to live a little slower and eat a little more honestly.',
  ],
  quote: '[A personal line in the founder’s own words, e.g. “I started Sthir Life because…”]',
}

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <div className="relative max-w-[17rem] sm:max-w-md mx-auto w-full">
          <div className="absolute -inset-3 rounded-[2rem] bg-terracotta/10 -rotate-2" aria-hidden="true"></div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl shadow-forest/15">
            {founder.photo ? (
              <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-kraft-dark/50 border-2 border-dashed border-forest/20 rounded-3xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.2}
                  strokeLinecap="round"
                  className="w-20 h-20 text-forest/35 mb-4"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7" />
                </svg>
                <p className="font-serif text-xl uppercase tracking-wider text-forest-dark font-semibold">
                  Founder Portrait
                </p>
                <p className="font-sans text-[10px] uppercase tracking-widest text-forest/60 font-semibold mt-2">
                  Photo coming soon
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Story */}
        <div>
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            The Founder
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            Why Sthir Life <br />
            <span className="italic text-terracotta-dark">Began.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta my-6"></div>

          <div className="space-y-4">
            {founder.story.map((paragraph, i) => (
              <p key={i} className="font-sans text-base text-forest/90 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <blockquote className="mt-8 pl-6 border-l-2 border-terracotta font-serif italic text-2xl sm:text-3xl text-forest-dark leading-snug">
            {founder.quote}
          </blockquote>

          <div className="mt-8 flex items-center gap-4">
            <img src="/assets/LOGO.png" alt="" className="w-12 h-12 rounded-full object-cover" />
            <div>
              <p className="font-serif italic text-2xl text-terracotta-dark leading-none">{founder.name}</p>
              <p className="font-sans text-[11px] uppercase tracking-widest text-forest/70 font-semibold mt-1.5">
                {founder.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
