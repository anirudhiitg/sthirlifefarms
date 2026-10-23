import React, { useState } from 'react'

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const products = [
    {
      id: 'ghee',
      name: 'A2 Gir Cow Vedic Bilona Ghee',
      category: 'edibles',
      description: 'Hand-crafted using traditional Vedic two-way churning (Bilona) over gentle wooden fires. Rich in Golden A2 protein, nutty aroma, and granular texture.',
      price: '₹1,450 / 500ml',
      image: '/assets/Ghee.png',
      tag: 'Heritage Recipe',
      whatsappMessage: 'Hello Sthir Life Farms, I would like to order the A2 Gir Cow Vedic Bilona Ghee.'
    },
    {
      id: 'pulses',
      name: 'Handpicked Rajasthan Organic Pulses',
      category: 'edibles',
      description: 'Unpolished native lentils grown in sun-baked organic soil. Rich in natural dietary fiber and clean plant protein.',
      price: '₹380 / 1kg',
      image: '/assets/PULSES.png',
      tag: 'Sun-Dried',
      whatsappMessage: 'Hello Sthir Life Farms, I would like to order the Handpicked Organic Pulses.'
    },
    {
      id: 'powders',
      name: 'Pure Moringa & Amla Superfood Powders',
      category: 'edibles',
      description: 'Shade-dried organic leaves and wild amla fruits ground slowly to preserve thermolabile antioxidants and essential minerals.',
      price: '₹450 / 250g',
      image: '/assets/Gemini_Generated_Image_jr6ctvjr6ctvjr6c.png',
      tag: 'Superfood',
      whatsappMessage: 'Hello Sthir Life Farms, I would like to order the Moringa & Amla Powders.'
    },
    {
      id: 'tshirt',
      name: 'Sthir Minimalist Organic Cotton T-Shirt',
      category: 'artifacts',
      description: 'Crafted from 100% unbleached organic cotton with breathable weight and clean botanical typography ("Stay Still. Live Whole.").',
      price: '₹1,290',
      image: '/assets/Tshirt.png',
      tag: 'Tangible Artifact',
      whatsappMessage: 'Hello Sthir Life Farms, I would like to order the Minimalist Organic Cotton T-Shirt.'
    }
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="py-24 bg-kraft border-t border-forest/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase tracking-widest text-terracotta font-semibold">
            First Access Edibles & Tangible Artifacts
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-forest font-normal mt-2">
            The Member Collection
          </h2>
          <div className="w-12 h-0.5 bg-terracotta mx-auto my-4"></div>
          <p className="font-sans text-sm text-forest/80 leading-relaxed font-light">
            Zero product push. Each item represents our commitment to purity, whole nourishment, and unhurried craftsmanship.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-forest text-kraft shadow-sm'
                : 'bg-kraft-light text-forest/70 hover:text-forest hover:bg-kraft-light/80'
            }`}
          >
            All Items
          </button>
          <button
            onClick={() => setSelectedCategory('edibles')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
              selectedCategory === 'edibles'
                ? 'bg-forest text-kraft shadow-sm'
                : 'bg-kraft-light text-forest/70 hover:text-forest hover:bg-kraft-light/80'
            }`}
          >
            Organic Edibles
          </button>
          <button
            onClick={() => setSelectedCategory('artifacts')}
            className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
              selectedCategory === 'artifacts'
                ? 'bg-forest text-kraft shadow-sm'
                : 'bg-kraft-light text-forest/70 hover:text-forest hover:bg-kraft-light/80'
            }`}
          >
            Lifestyle Artifacts
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-kraft-light/60 rounded-2xl overflow-hidden border border-forest/10 hover:border-terracotta/40 transition-all duration-500 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-kraft">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-kraft/90 backdrop-blur-md text-forest px-3 py-1 rounded-full border border-forest/15 font-medium">
                    {product.tag}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="font-serif text-xl text-forest uppercase tracking-wider font-semibold">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-sans text-xs font-semibold text-terracotta mb-3">
                    {product.price}
                  </p>
                  <p className="font-sans text-xs text-forest/80 leading-relaxed font-light mb-6">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(product.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-forest text-kraft font-sans text-xs uppercase tracking-widest font-medium rounded-full hover:bg-forest-light transition-all duration-300 shadow-sm"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
                  </svg>
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
