import React from 'react'

const pillars = [
  {
    number: '01',
    mantra: 'Eat Whole',
    title: 'Whole Nourishment',
    tagline: 'Food the way the soil intended.',
    description:
      'Small-batch staples grown without shortcuts and sent to your kitchen as close to the farm as possible. Nothing polished, bleached or preserved, and always traceable to where it was grown.',
    offerings: [
      'A2 Gir cow Bilona ghee',
      'Unpolished heritage pulses',
      'Shade-dried moringa & amla powders',
      'Fresh urban microgreens',
    ],
    rhythm: 'Every Day',
    image: '/assets/pillars/food.webp',
    alt: 'Sthir Life paper pouch of moringa resting on raw farm soil',
  },
  {
    number: '02',
    mantra: 'Live Slow',
    title: 'Slow Rituals',
    tagline: 'Rituals that bring the pace down.',
    description:
      'Simple, repeatable practices that fit into city life: tending a balcony garden, cooking from scratch, putting the phone away and gathering around a shared table.',
    offerings: [
      'Balcony grow workshops',
      'Farm-to-fork gatherings',
      'Mindful cooking sessions',
      'Curated digital detox paths',
    ],
    rhythm: 'Every Week',
    image: '/assets/pillars/slow-living.webp',
    alt: 'Linen Sthir Life tote in a quiet, sunlit room with an olive branch',
  },
  {
    number: '03',
    mantra: 'Rest Deep',
    title: 'Restorative Retreats',
    tagline: 'Time away to reset, close to the city.',
    description:
      'Unhurried country stays at partner properties near major cities, where days follow the sun, meals come from the farm and screens stay switched off.',
    offerings: [
      'Weekend digital detox retreats',
      'Seasonal farm-to-table meals',
      'Grounded, nature-led spaces',
      'Exclusive member access',
    ],
    rhythm: 'Every Season',
    image: '/assets/pillars/retreats.webp',
    alt: 'Jar of Bilona ghee on a sunlit table among traditional brass vessels',
  },
]

export default function Verticals() {
  return (
    <section id="verticals" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            The Sthir Life Ecosystem
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            Three Pillars. <br />
            <span className="italic text-terracotta-dark">One Way of Living.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
          <p className="font-sans text-base sm:text-lg text-forest leading-relaxed max-w-xl mx-auto">
            What you eat, how you live each day, and how you rest. Each pillar strengthens the others.
          </p>
          <p className="font-serif italic text-xl sm:text-2xl text-terracotta-dark mt-4">
            Eat whole. Live slow. Rest deep.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {pillars.map((p, i) => (
            <article
              key={p.number}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className={`relative ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div
                  className={`absolute -inset-3 rounded-[2rem] bg-terracotta/10 ${i % 2 === 1 ? '-rotate-2' : 'rotate-2'}`}
                  aria-hidden="true"
                ></div>
                <div className="relative overflow-hidden rounded-3xl shadow-xl shadow-forest/15 aspect-[4/3] group">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest font-semibold text-forest-dark bg-kraft-light/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {p.rhythm}
                  </span>
                </div>
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-serif italic text-5xl text-terracotta leading-none">{p.number}</span>
                  <span className="font-sans text-xs uppercase tracking-widest font-semibold text-forest/70">
                    {p.mantra}
                  </span>
                </div>
                <h3 className="font-serif text-3xl sm:text-4xl uppercase tracking-wider text-forest-dark font-semibold leading-tight">
                  {p.title}
                </h3>
                <p className="font-serif italic text-xl sm:text-2xl text-terracotta-dark mt-2 mb-5">
                  {p.tagline}
                </p>
                <p className="font-sans text-sm sm:text-base text-forest/90 leading-relaxed mb-7">
                  {p.description}
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-forest/15">
                  {p.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-sm text-forest">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
