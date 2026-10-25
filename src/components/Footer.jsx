import React from 'react'
import { whatsappLink } from '../config'

export default function Footer() {
  return (
    <footer className="bg-forest text-kraft py-16 border-t border-forest-light/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-kraft/10">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/LOGO.png"
                  alt="Sthir Life Logo"
                  className="w-10 h-10 object-contain rounded-full bg-kraft/10 p-1"
                />
                <span className="font-serif text-2xl tracking-widest font-semibold uppercase text-kraft">
                  Sthir Life Farms
                </span>
              </div>
              <p className="font-serif italic text-lg text-kraft/80 mb-4">
                "Stay Still. Live Whole."
              </p>
              <p className="text-xs text-kraft/70 leading-relaxed max-w-md font-light">
                A member-only sanctuary bringing calmness, whole nutrition, and slow country living to everyday city life. Rooted in the sun-baked soil of Rajasthan.
              </p>
            </div>

            <div className="mt-8 text-[11px] text-kraft/50 tracking-wider">
              BASED IN RAJASTHAN, INDIA • SERVING MINDFUL COMMUNITIES NATIONWIDE
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-serif uppercase tracking-widest text-sm text-terracotta-light mb-4 font-semibold">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-kraft/80">
              <li><a href="#philosophy" className="hover:text-kraft transition-colors">Slow Living Philosophy</a></li>
              <li><a href="#pillars" className="hover:text-kraft transition-colors">Our Three Pillars</a></li>
              <li><a href="#sthir-way" className="hover:text-kraft transition-colors">The Sthir Way</a></li>
              <li><a href="#founder" className="hover:text-kraft transition-colors">Our Story</a></li>
              <li><a href="#membership" className="hover:text-kraft transition-colors">Membership</a></li>
              <li><a href="#gallery" className="hover:text-kraft transition-colors">Life on the Farm</a></li>
              <li><a href="#harvest" className="hover:text-kraft transition-colors">From the Harvest</a></li>
              <li><a href="#community" className="hover:text-kraft transition-colors">Request an Invite</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-serif uppercase tracking-widest text-sm text-terracotta-light mb-4 font-semibold">
              High-Touch Member Channels
            </h4>
            <p className="text-xs text-kraft/70 leading-relaxed mb-4">
              Join our direct WhatsApp circles for first access to organic farm harvests, weekend retreat dispatches, and balcony grow guides.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={whatsappLink('Hello Sthir Life Farms, I would like to know more about the community.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-kraft bg-terracotta/90 hover:bg-terracotta px-4 py-2.5 rounded-full transition-all duration-300 w-fit"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-kraft/60 gap-4">
          <p>© {new Date().getFullYear()} Sthir Life Farms. All rights reserved.</p>
          <p className="italic font-serif">A grounded manifesto for an unhurried life.</p>
        </div>
      </div>
    </footer>
  )
}
