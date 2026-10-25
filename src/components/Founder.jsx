import React from 'react'

/*
 * About the founders: a father and son building Sthir Life together.
 * Everything in [square brackets] is a placeholder to replace.
 *
 * To add photos: put them in public/assets/founder/ (portrait photos, ideally on
 * the farm, around 1000px wide) and set each `photo`, e.g. '/assets/founder/father.jpg'.
 */
const story = [
  'Sthir Life is a family story. [Father’s Name] has spent [X years] close to the land in Rajasthan, [a line about his life on the farm or his roots]. [Son’s Name] grew up hearing those stories, then spent [X years] in [city / profession], living the fast, always-on life so many of us know.',
  '[One or two lines about the moment they decided to build something together, e.g. a season the son spent back on the farm.] Today, one brings the patience of the soil and the other the needs of the city. Sthir Life is where the two meet.',
]

const founders = [
  {
    name: '[Father’s Name]',
    relation: 'Father',
    role: 'The Roots',
    bio: '[Two lines about him: years with the land, what he knows that cannot be learned from books, what he cares about most.]',
    quote: '[A line in his own words, e.g. about the land or patience.]',
    photo: null,
  },
  {
    name: '[Son’s Name]',
    relation: 'Son',
    role: 'The Return',
    bio: '[Two lines about him: life in the city, what brought him back, what he wants Sthir Life to give people.]',
    quote: '[A line in his own words, e.g. about why he came back.]',
    photo: null,
  },
]

function Portrait({ founder }) {
  return (
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
            className="w-16 h-16 text-forest/35 mb-3"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c1-4.5 4.2-7 8-7s7 2.5 8 7" />
          </svg>
          <p className="font-serif text-lg uppercase tracking-wider text-forest-dark font-semibold">
            {founder.relation}’s Portrait
          </p>
          <p className="font-sans text-[10px] uppercase tracking-widest text-forest/60 font-semibold mt-2">
            Photo coming soon
          </p>
        </div>
      )}
      <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest font-semibold text-kraft-light bg-forest/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {founder.relation} · {founder.role}
      </span>
    </div>
  )
}

export default function Founder() {
  return (
    <section id="founder" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            The Founders
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            Two Generations. <br />
            <span className="italic text-terracotta-dark">One Shared Soil.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
          <div className="space-y-4">
            {story.map((paragraph, i) => (
              <p key={i} className="font-sans text-base sm:text-lg text-forest leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 lg:gap-16 max-w-5xl mx-auto">
          {founders.map((f, i) => (
            <article key={f.relation} className={`max-w-[17rem] sm:max-w-sm mx-auto w-full ${i === 1 ? 'md:mt-16' : ''}`}>
              <div className="relative">
                <div
                  className={`absolute -inset-3 rounded-[2rem] bg-terracotta/10 ${i === 0 ? '-rotate-2' : 'rotate-2'}`}
                  aria-hidden="true"
                ></div>
                <div className="relative">
                  <Portrait founder={f} />
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-serif italic text-3xl text-terracotta-dark">{f.name}</h3>
                <p className="font-sans text-[11px] uppercase tracking-widest text-forest/70 font-semibold mt-1">
                  Co-Founder, Sthir Life Farms
                </p>
                <p className="font-sans text-base text-forest/90 leading-relaxed mt-4">{f.bio}</p>
                <blockquote className="mt-5 pl-5 border-l-2 border-terracotta font-serif italic text-xl sm:text-2xl text-forest-dark leading-snug">
                  {f.quote}
                </blockquote>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center font-serif italic text-2xl sm:text-3xl text-forest-dark mt-16 sm:mt-20">
          Built together, <span className="text-terracotta-dark">slowly.</span>
        </p>
      </div>
    </section>
  )
}
