import React from 'react'

export default function Craftsmanship() {
  return (
    <section id="craftsmanship" className="py-24 bg-kraft-light relative overflow-hidden border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold">
              Farm-to-Palette Craftsmanship
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest font-normal leading-tight">
              Honoring Soil, <br />
              <span className="italic font-normal text-terracotta">Purity & Time</span>
            </h2>

            <p className="font-sans text-sm text-forest/80 leading-relaxed font-light">
              Inspired by ancient Indian agricultural wisdom and modern quality mill practices (like Rajasthan's famed olive and pulse farms), Sthir Life Farms brings unwavering honesty to your daily nutrition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-kraft p-5 rounded-xl border border-forest/10">
                <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-3">
                  🌱
                </div>
                <h4 className="font-serif text-lg uppercase tracking-wider text-forest font-medium">Native Sun-Baked Soil</h4>
                <p className="font-sans text-xs text-forest/70 font-light mt-1">
                  Cultivated in Rajasthan's organic soil without synthetic pesticides or aggressive forced yields.
                </p>
              </div>

              <div className="bg-kraft p-5 rounded-xl border border-forest/10">
                <div className="w-8 h-8 rounded-full bg-forest/10 flex items-center justify-center text-forest mb-3">
                  🍯
                </div>
                <h4 className="font-serif text-lg uppercase tracking-wider text-forest font-medium">Bilona Hand-Churning</h4>
                <p className="font-sans text-xs text-forest/70 font-light mt-1">
                  Our A2 Gir Cow Ghee is slow-cooked over wooden fires following Vedic two-way churn methods.
                </p>
              </div>
            </div>

            <div className="p-6 bg-forest text-kraft rounded-2xl relative overflow-hidden mt-6">
              <p className="font-serif italic text-lg leading-relaxed text-kraft/90">
                "True luxury in modern times is not speed or excess, but purity, silence, and whole nourishment directly from the land."
              </p>
              <p className="font-sans text-[10px] uppercase tracking-widest text-terracotta-light mt-3 font-semibold">
                — Sthir Life Manifesto
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-kraft">
              <img
                src="/assets/Gemini_Generated_Image_jr6ctvjr6ctvjr6c.png"
                alt="Slow Living & Craftsmanship"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-kraft/95 backdrop-blur-md p-6 rounded-2xl border border-forest/15 shadow-lg max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <img src="/assets/LOGO.png" alt="Seal" className="w-10 h-10 object-contain" />
                <div>
                  <p className="font-serif text-sm uppercase font-semibold text-forest">100% Organic & Traceable</p>
                  <p className="text-[10px] text-terracotta uppercase tracking-wider">Zero Chemical Processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
