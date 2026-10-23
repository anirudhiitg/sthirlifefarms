import React, { useState } from 'react'

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  const items = [
    {
      title: 'A2 Gir Cow Bilona Ghee',
      subtitle: 'Slow Wooden-Fire Churning',
      image: '/assets/Ghee.png',
      caption: 'Handcrafted in copper cauldrons over natural wooden embers.'
    },
    {
      title: 'Sun-Dried Heritage Pulses',
      subtitle: 'Sun-Baked Rajasthan Soil',
      image: '/assets/PULSES.png',
      caption: 'Unpolished native lentils rich in original dietary fiber and clean protein.'
    },
    {
      title: 'Country Retreat Architecture',
      subtitle: 'Natural Materials & Earthy Tones',
      image: '/assets/Gemini_Generated_Image_wyvjxbwyvjxbwyvj.png',
      caption: 'Franchised country stays designed for silence and deep digital detox.'
    },
    {
      title: 'Urban Balcony Grow & Microgreens',
      subtitle: 'Fresh Harvests at Home',
      image: '/assets/Gemini_Generated_Image_jr6ctvjr6ctvjr6c.png',
      caption: 'Teaching city dwellers the art of balcony cultivation and living produce.'
    },
    {
      title: 'Sthir Community Apparel',
      subtitle: '100% Organic Unbleached Cotton',
      image: '/assets/Tshirt.png',
      caption: 'Breathable, minimalist artifacts embodying slow living values.'
    },
    {
      title: 'Botanical Wax Seals & Identity',
      subtitle: 'Crafted Heritage Packaging',
      image: '/assets/LOGO (2).png',
      caption: 'Unbleached kraft paper packaging secured with Forest Green botanical wax.'
    }
  ]

  return (
    <section id="gallery" className="py-24 bg-kraft-light border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold">
            Visual Exhibition
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest font-normal mt-2">
            The Sanctuary Gallery
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto my-4"></div>
          <p className="font-sans text-sm text-forest/80 leading-relaxed font-light">
            Glimpses into our farm life, Vedic crafting, country retreats, and unhurried community artifacts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer bg-kraft rounded-2xl overflow-hidden border border-forest/10 hover:border-terracotta/40 transition-all duration-500 shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-kraft-dark/20">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-xs uppercase tracking-widest text-kraft bg-forest/80 backdrop-blur-sm px-4 py-2 rounded-full font-medium">
                    Expand Image
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-sans uppercase tracking-widest text-terracotta font-medium mb-1">
                  {item.subtitle}
                </p>
                <h3 className="font-serif text-lg text-forest uppercase tracking-wider font-semibold">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-forest/70 font-light mt-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-forest-dark/90 backdrop-blur-md flex items-center justify-center p-6 animate-fadeIn"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="bg-kraft max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl border border-forest/20 p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-forest text-kraft flex items-center justify-center text-xs font-bold hover:bg-forest-light transition-colors"
              >
                ✕
              </button>
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-xl mb-4 bg-kraft-dark/20"
              />
              <p className="text-xs uppercase tracking-widest text-terracotta font-medium mb-1">
                {activeImage.subtitle}
              </p>
              <h3 className="font-serif text-2xl text-forest uppercase tracking-wider font-semibold">
                {activeImage.title}
              </h3>
              <p className="font-sans text-xs text-forest/80 font-light mt-2 leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
