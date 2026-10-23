import React from 'react'

export default function Verticals() {
  const verticals = [
    {
      number: '01',
      title: 'Food & First Access Edibles',
      subtitle: 'Pure Farm Harvests & Direct Nutrition',
      description: 'First access to handpicked organic pulses, A2 Gir Cow Ghee, fresh urban microgreens, and pure moringa and amla powders.',
      details: ['Pure A2 Bilona Ghee', 'Handpicked Native Pulses', 'Urban Balcony Grow Workshops'],
      image: '/assets/PULSES.png',
      badge: 'Daily Habit'
    },
    {
      number: '02',
      title: 'Experiences & Digital Detox',
      subtitle: 'Mindful Retreats & Slow Living',
      description: 'Exclusive weekend trips, farm-to-table culinary sessions, balcony grow classes, and digital detox journeys designed to help you disconnect.',
      details: ['Farm-to-Fork Gatherings', 'Balcony Gardening Classes', 'Curated Digital Detox Paths'],
      image: '/assets/Gemini_Generated_Image_jr6ctvjr6ctvjr6c.png',
      badge: 'Weekend Escape'
    },
    {
      number: '03',
      title: 'Country Stays & Retreats',
      subtitle: 'Franchised Member Properties',
      description: 'Carefully designed country stays operating on an exclusive partner model near major cities, providing an unhurried refuge for reflection.',
      details: ['Grounded Architecture', 'Near Major Cities', 'Exclusive Member Access'],
      image: '/assets/Ghee.png',
      badge: 'Physical Refuge'
    }
  ]

  return (
    <section id="verticals" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold">
            Sthir Life Verticals
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest font-normal mt-2">
            A Cohesive Ecosystem
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto my-4"></div>
          <p className="font-sans text-sm text-forest/80 leading-relaxed font-light">
            Designed around three interconnected pillars to nurture mental and physical well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((v) => (
            <div
              key={v.number}
              className="bg-kraft-light/60 rounded-2xl p-6 sm:p-8 border border-forest/10 hover:border-terracotta/40 transition-all duration-500 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl italic text-terracotta">{v.number}</span>
                  <span className="text-[10px] uppercase tracking-widest text-forest bg-kraft px-3 py-1 rounded-full border border-forest/15">
                    {v.badge}
                  </span>
                </div>

                <div className="overflow-hidden rounded-xl mb-6 aspect-video bg-kraft">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <h3 className="font-serif text-2xl text-forest uppercase tracking-wider mb-1 font-medium">
                  {v.title}
                </h3>
                <p className="font-sans text-xs uppercase tracking-widest text-terracotta font-medium mb-3">
                  {v.subtitle}
                </p>
                <p className="font-sans text-xs text-forest/80 leading-relaxed font-light mb-6">
                  {v.description}
                </p>
              </div>

              <div className="pt-4 border-t border-forest/10">
                <ul className="space-y-2">
                  {v.details.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[11px] text-forest/90 uppercase tracking-wider font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
