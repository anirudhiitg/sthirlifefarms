import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Verticals', href: '#verticals' },
    { name: 'Craftsmanship', href: '#craftsmanship' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Edibles & Artifacts', href: '#products' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-kraft/95 backdrop-blur-md shadow-md py-3 border-b border-forest/15' : 'bg-kraft/85 backdrop-blur-md py-4 border-b border-forest/10 shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/assets/LOGO.png"
            alt="Sthir Life Logo"
            className="w-10 h-10 object-contain rounded-full transition-transform duration-500 group-hover:scale-105 drop-shadow-sm"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-widest font-bold uppercase text-forest-dark">
              Sthir Life
            </span>
            <span className="font-sans text-[10px] tracking-widest text-terracotta-dark uppercase -mt-1 font-bold">
              Farms
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 bg-kraft-light/50 px-6 py-2 rounded-full border border-forest/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-forest-dark font-bold hover:text-terracotta transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#community"
            className="px-5 py-2.5 bg-forest text-kraft text-xs uppercase tracking-widest font-medium rounded-full hover:bg-forest-light transition-all duration-300 shadow-sm hover:shadow"
          >
            Request Invite
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-forest focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-kraft-light border-b border-forest/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-forest font-medium py-2 border-b border-forest/5"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#community"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center px-5 py-3 bg-forest text-kraft text-xs uppercase tracking-widest font-medium rounded-full hover:bg-forest-light transition-colors"
            >
              Apply for Community Membership
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
