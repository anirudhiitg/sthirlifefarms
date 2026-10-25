import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-kraft-light">
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Soft sun-washed glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#F4EFEA_0%,_#EDE5DA_45%,_#E8E0D5_100%)]"></div>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[70rem] h-[40rem] rounded-full bg-terracotta/10 blur-3xl"></div>

        {/* Gentle rolling fields along the horizon, echoing the logo */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[38%] text-forest"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path fillOpacity="0.06" d="M0 170 C 240 110, 480 120, 720 160 S 1200 220, 1440 140 L 1440 320 L 0 320 Z" />
          <path fillOpacity="0.08" d="M0 230 C 300 180, 560 200, 820 235 S 1260 260, 1440 215 L 1440 320 L 0 320 Z" />
          <path fillOpacity="0.10" d="M0 285 C 360 250, 700 265, 1000 285 S 1320 300, 1440 280 L 1440 320 L 0 320 Z" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-8 grid lg:grid-cols-[1.15fr_1fr] items-center gap-12 lg:gap-16">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kraft/90 backdrop-blur-md border border-forest/15 mb-8 shadow-sm">
            <img src="/assets/LOGO.png" alt="Logo Seal" className="w-6 h-6 object-contain rounded-full" />
            <span className="text-[11px] uppercase tracking-widest text-forest font-semibold">
              Member-Only Slow Living Ecosystem
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-medium uppercase tracking-[0.12em] text-forest-dark leading-tight mb-6">
            Stay Still. <br />
            <span className="italic font-medium text-terracotta-dark">Live Whole.</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-forest max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            A member-only country club bringing calmness to everyday city life. Rooted in the sun-baked soil of Rajasthan, providing whole foods, digital detox paths, and unhurried retreats.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#community"
              className="w-full sm:w-auto px-8 py-4 bg-forest text-kraft font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest-light transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Apply for Community Membership
            </a>
            <a
              href="#philosophy"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-forest/40 text-forest font-sans text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-forest/5 hover:border-forest transition-all duration-300"
            >
              Read Our Manifesto
            </a>
          </div>
        </div>

        {/* Brand mark, shown in full beside the copy rather than behind it */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-44 sm:w-64 lg:w-full lg:max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-terracotta/10 rotate-3" aria-hidden="true"></div>
            <img
              src="/assets/LOGO.png"
              alt="Sthir Life emblem: a young plant rising from rolling fields"
              className="relative w-full aspect-square object-cover rounded-[2rem] shadow-2xl shadow-forest/25"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-forest/70 hidden sm:flex flex-col items-center gap-1">
        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
