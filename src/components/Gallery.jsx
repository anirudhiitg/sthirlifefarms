import React, { useState, useEffect } from 'react'

/*
 * Farm gallery.
 *
 * To add a real photo:
 *   1. Put the file in public/assets/farm/ (e.g. public/assets/farm/fields-sunrise.jpg).
 *      Landscape photos around 1600px wide work best; keep each under ~400 KB.
 *   2. Set `image` on the matching item below, e.g. image: '/assets/farm/fields-sunrise.jpg'.
 * Items without an image show a placeholder tile.
 */
const items = [
  {
    title: 'The Fields at Sunrise',
    caption: 'First light over the farm in Rajasthan.',
    image: null,
    span: 'col-span-2 row-span-2',
  },
  {
    title: 'Hands in the Soil',
    caption: 'Sowing the season by hand.',
    image: null,
    span: '',
  },
  {
    title: 'Our Gir Cows',
    caption: 'The heart of our Bilona ghee.',
    image: null,
    span: '',
  },
  {
    title: 'The Morning Churn',
    caption: 'Curd churned slowly, the Bilona way.',
    image: null,
    span: '',
  },
  {
    title: 'Harvest Season',
    caption: 'Heritage pulses, picked and sorted by hand.',
    image: null,
    span: '',
  },
  {
    title: 'Sun-Drying Moringa',
    caption: 'Leaves dried in the shade, never rushed.',
    image: null,
    span: 'col-span-2',
  },
  {
    title: 'The Retreat Courtyard',
    caption: 'Where the days slow down.',
    image: null,
    span: '',
  },
  {
    title: 'Around the Table',
    caption: 'Members sharing a farm-to-table meal.',
    image: null,
    span: '',
  },
]

function Placeholder({ title }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 sm:p-4 bg-kraft-dark/40 border-2 border-dashed border-forest/20 rounded-2xl">
      {/* Faint rolling fields, echoing the logo */}
      <svg
        className="absolute bottom-0 left-0 w-full h-1/2 text-forest"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden="true"
      >
        <path fillOpacity="0.06" d="M0 55 C 100 30, 220 35, 400 50 L 400 100 L 0 100 Z" />
        <path fillOpacity="0.08" d="M0 80 C 140 60, 260 70, 400 75 L 400 100 L 0 100 Z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative shrink-0 w-6 h-6 sm:w-8 sm:h-8 text-forest/50 mb-2 sm:mb-3"
        aria-hidden="true"
      >
        <path d="M3 8a2 2 0 0 1 2-2h2l1.5-2h7L17 6h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
      <p className="relative font-serif text-base sm:text-xl uppercase tracking-wider text-forest-dark font-semibold leading-tight [text-wrap:balance]">
        {title}
      </p>
      <p className="relative font-sans text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest whitespace-nowrap text-forest/60 font-semibold mt-1.5 sm:mt-2">
        Photo coming soon
      </p>
    </div>
  )
}

export default function Gallery() {
  const [activeItem, setActiveItem] = useState(null)

  useEffect(() => {
    if (!activeItem) return
    const onKey = (e) => e.key === 'Escape' && setActiveItem(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeItem])

  return (
    <section id="gallery" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta-dark font-semibold">
            From Our Soil
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest-dark font-medium mt-2">
            Life on <br className="sm:hidden" />
            <span className="italic text-terracotta-dark">the Farm.</span>
          </h2>
          <div className="w-16 h-0.5 bg-terracotta mx-auto my-6"></div>
          <p className="font-sans text-base sm:text-lg text-forest leading-relaxed">
            Moments from our fields, our kitchen and our retreats, just as they are.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] sm:auto-rows-[200px] lg:auto-rows-[230px] gap-3 sm:gap-4">
          {items.map((item) => (
            <figure key={item.title} className={`relative rounded-2xl overflow-hidden ${item.span}`}>
              {item.image ? (
                <button
                  type="button"
                  onClick={() => setActiveItem(item)}
                  className="group absolute inset-0 w-full h-full text-left"
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-forest-dark/85 via-forest-dark/40 to-transparent text-kraft-light">
                    <p className="font-serif text-lg sm:text-xl uppercase tracking-wider font-semibold leading-tight">
                      {item.title}
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-kraft-light/90 mt-1 hidden sm:block">
                      {item.caption}
                    </p>
                  </figcaption>
                </button>
              ) : (
                <Placeholder title={item.title} />
              )}
            </figure>
          ))}
        </div>

        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-forest-dark/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
          >
            <figure
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-kraft-light text-forest flex items-center justify-center text-sm font-bold hover:bg-kraft transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
              />
              <figcaption className="text-center text-kraft-light mt-4">
                <p className="font-serif text-2xl uppercase tracking-wider font-semibold">{activeItem.title}</p>
                <p className="font-sans text-sm text-kraft-light/80 mt-1">{activeItem.caption}</p>
              </figcaption>
            </figure>
          </div>
        )}
      </div>
    </section>
  )
}
