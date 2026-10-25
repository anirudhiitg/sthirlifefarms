import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import Verticals from './components/Verticals'
import SthirWay from './components/SthirWay'
import Products from './components/Products'
import Gallery from './components/Gallery'
import CommunityForm from './components/CommunityForm'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen bg-kraft text-forest font-sans selection:bg-terracotta selection:text-kraft-light">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <Philosophy />
        <Verticals />
        <SthirWay />
        <Gallery />
        <Products />
        <CommunityForm />
      </main>
      <Footer />
    </div>
  )
}
