import React from 'react'

const harvest = [
  {
    name: 'A2 Gir Cow Bilona Ghee',
    note: 'Churned in small batches',
    description: 'Made the slow Bilona way from the milk of Gir cows: curd churned by hand, then gently cooked until golden and fragrant.',
    image: '/assets/harvest/ghee.webp',
    alt: 'Jar of Sthir Life Bilona ghee sealed with a green wax seal',
  },
  {
    name: 'Unpolished Heritage Pulses',
    note: 'Harvested each season',
    description: 'Native lentils and beans grown in Rajasthan’s sun-baked soil, cleaned by hand and left unpolished, just as they come from the field.',
    image: '/assets/harvest/pulses.webp',
    alt: 'Row of glass jars holding unpolished heritage pulses',
  },
  {
    name: 'Moringa & Amla Powders',
    note: 'Shade-dried, slowly ground',
    description: 'Leaves and fruit dried in the shade and ground slowly, keeping their colour and character intact.',
    image: '/assets/harvest/moringa.webp',
    alt: 'Glass jar of shade-dried moringa powder on a rustic table',
  },
]

export default function Harvest() {
  return (
    <section id="harvest" className="py-24 bg-kraft-light border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            From the Harvest
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            Grown for Members. <br />
            <span className="italic text-terracotta-dark">Shared First.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
          <p className="font-sans text-base sm:text-lg text-forest leading-relaxed">
            What the farm gives, season by season. Each harvest is small, and members always receive it first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {harvest.map((item) => (
            <article
              key={item.name}
              className="flex flex-col bg-kraft rounded-3xl overflow-hidden border border-forest/10 shadow-sm hover:shadow-xl hover:shadow-forest/10 hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 text-[11px] uppercase tracking-widest font-semibold text-kraft-light bg-forest/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  Members First
                </span>
              </div>
              <div className="p-7 sm:p-8 flex flex-col flex-1">
                <p className="font-sans text-[11px] uppercase tracking-widest text-terracotta-dark font-semibold mb-2">
                  {item.note}
                </p>
                <h3 className="font-serif text-2xl uppercase tracking-wider text-forest-dark font-semibold leading-tight mb-3 [text-wrap:balance]">
                  {item.name}
                </h3>
                <p className="font-sans text-sm sm:text-[15px] text-forest/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-kraft rounded-3xl border border-forest/10 px-8 py-8 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-serif text-2xl sm:text-3xl uppercase tracking-wider text-forest-dark font-semibold">
              Want a share of the next harvest?
            </p>
            <p className="font-sans text-sm sm:text-base text-forest/90 mt-1">
              Harvest access is a membership benefit. Request an invite to join the circle.
            </p>
          </div>
          <a
            href="#community"
            className="shrink-0 px-8 py-4 bg-forest text-kraft font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request an Invite
          </a>
        </div>
      </div>
    </section>
  )
}
