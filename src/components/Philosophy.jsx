import React from 'react'

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-kraft relative border-t border-forest/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        <span className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold">
          Our Core Philosophy
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest font-normal mt-2 mb-6">
          Beyond Retail. <span className="italic font-normal text-terracotta">An Urban Refuge.</span>
        </h2>

        <div className="w-16 h-0.5 bg-terracotta mx-auto mb-8"></div>

        <p className="font-sans text-base sm:text-lg text-forest/90 leading-relaxed font-light max-w-3xl mx-auto mb-12">
          We reject the aggressive pace of modern e-commerce. Sthir Life is not a normal commercial venture—it is a selective, community-first country club dedicated to restoring calmness and whole nutrition in an overstimulated world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-kraft-light/80 p-8 rounded-2xl border border-forest/10 relative">
            <div className="w-10 h-10 rounded-full bg-forest text-kraft font-serif italic text-xl flex items-center justify-center mb-4">
              🧘‍♂️
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-wider text-forest font-semibold mb-2">
              Mental Well-Being
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-terracotta font-medium mb-3">
              Digital Detox & Silence
            </p>
            <p className="font-sans text-xs text-forest/80 leading-relaxed font-light">
              Creating structured spaces, quiet retreats, and mindful rituals that counteract digital noise, allowing urban dwellers to rediscover inner still focus.
            </p>
          </div>

          <div className="bg-kraft-light/80 p-8 rounded-2xl border border-forest/10 relative">
            <div className="w-10 h-10 rounded-full bg-forest text-kraft font-serif italic text-xl flex items-center justify-center mb-4">
              🥗
            </div>
            <h3 className="font-serif text-2xl uppercase tracking-wider text-forest font-semibold mb-2">
              Physical Well-Being
            </h3>
            <p className="font-sans text-xs uppercase tracking-widest text-terracotta font-medium mb-3">
              Whole Foods & Organic Movement
            </p>
            <p className="font-sans text-xs text-forest/80 leading-relaxed font-light">
              Nourishing your body with unadulterated farm produce, pure Bilona ghee, unpolished heritage pulses, and vibrant balcony grow gardens.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
