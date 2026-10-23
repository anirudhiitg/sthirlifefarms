import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/Gemini_Generated_Image_wyvjxbwyvjxbwyvj.png"
          alt="Sthir Life Farm Landscape"
          className="w-full h-full object-cover object-center brightness-[0.88] contrast-[0.95]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kraft via-kraft/60 to-transparent"></div>
        <div className="absolute inset-0 bg-forest/20 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 sm:px-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kraft/90 backdrop-blur-md border border-forest/15 mb-8 shadow-sm">
          <img src="/assets/LOGO.png" alt="Logo Seal" className="w-6 h-6 object-contain rounded-full" />
          <span className="text-[11px] uppercase tracking-widest text-forest font-semibold">
            Member-Only Slow Living Ecosystem
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-widest text-forest leading-tight mb-6">
          Stay Still. <br className="hidden sm:inline" />
          <span className="italic font-normal text-terracotta">Live Whole.</span>
        </h1>

        <p className="font-sans text-sm sm:text-base text-forest/90 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          A member-only country club bringing calmness to everyday city life. Rooted in the sun-baked soil of Rajasthan, providing whole foods, digital detox paths, and unhurried retreats.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#community"
            className="w-full sm:w-auto px-8 py-4 bg-forest text-kraft font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Apply for Community Membership
          </a>
          <a
            href="#philosophy"
            className="w-full sm:w-auto px-8 py-4 bg-kraft/80 backdrop-blur-sm border border-forest/20 text-forest font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-kraft transition-all duration-300"
          >
            Read Our Manifesto
          </a>
        </div>

        <div className="mt-16 animate-bounce text-forest/60 flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
