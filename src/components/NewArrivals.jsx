import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import eternalEmbraceRing from '../../public/rings/eternal-embrace-ring.avif';
import harmonicSerenityRing from '../../public/rings/harmonic-serenity-ring.avif';
import starlitVoyageRing from '../../public/rings/starlit-voyage-ring.avif';
import emberGlowRing from '../../public/rings/ember-glow-ring.avif';
import moonlitSerenadeRing from '../../public/rings/moonlit-serenade-ring.avif';
import radiantReverieRing from '../../public/rings/radiant-reverie-ring.avif';

const NewArrivals = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: 'Velvet Luxe Bracelet',
      price: '$260.00',
      description: 'Handcrafted velvet-finish bracelet adorned with micro-pavé diamonds. A perfect blend of modern elegance and timeless craftsmanship.',
      material: 'Rose Gold, Diamond',
      image: eternalEmbraceRing
    },
    {
      id: 2,
      name: 'Aster Diamond Ring',
      price: '$480.00',
      description: 'Celestial-inspired ring featuring a stunning center diamond surrounded by delicate floral detailing. Crafted for those who appreciate fine artistry.',
      material: 'White Gold, Diamond',
      image: harmonicSerenityRing
    },
    {
      id: 3,
      name: 'Celeste Drop Earrings',
      price: '$220.00',
      description: 'Ethereal drop earrings that catch the light with every movement. Designed to elevate both everyday and evening looks.',
      material: 'Yellow Gold, Pearl',
      image: starlitVoyageRing
    },
    {
      id: 4,
      name: 'Lunar Pendant Necklace',
      price: '$340.00',
      description: 'Minimalist pendant featuring a crescent moon design with delicate diamond accents. Perfect for layering or wearing solo.',
      material: 'White Gold, Diamond',
      image: emberGlowRing
    },
    {
      id: 5,
      name: 'Aurora Stackable Rings',
      price: '$195.00',
      description: 'Set of three stackable rings with gradient gemstones. Mix and match to create your unique style statement.',
      material: 'Gold, Mixed Gemstones',
      image: moonlitSerenadeRing
    },
    {
      id: 6,
      name: 'Essence Chain Bracelet',
      price: '$280.00',
      description: 'Sophisticated chain bracelet with interlocking links and a signature clasp. A modern classic for the discerning collector.',
      material: 'Rose Gold',
      image: radiantReverieRing
    }
  ];

  const currentProduct = products[currentIndex];

  // Autoscroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              New Arrivals
            </h2>
            <span className="px-3 py-1 bg-gray-900 text-white text-xs uppercase tracking-wider font-light">
              New
            </span>
          </div>
          <p className="text-gray-600 text-sm">This Week's Drop</p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative aspect-square overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.img
                  src={currentProduct.image}
                  alt={currentProduct.name}
                  className="w-full h-full object-cover"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                  }}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />

                {/* Inner shadow overlay for depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.1)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)'
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicator */}
            <div className="absolute bottom-6 left-6 flex gap-2 z-10">
              {products.map((_, index) => (
                <motion.div
                  key={index}
                  className="h-0.5 bg-gray-900/30 cursor-pointer"
                  style={{ width: '40px' }}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ backgroundColor: 'rgba(17, 24, 39, 0.6)' }}
                >
                  <motion.div
                    className="h-full bg-gray-900"
                    initial={{ width: '0%' }}
                    animate={{
                      width: index === currentIndex ? '100%' : '0%'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-6"
              >
                {/* Product Category */}
                <div className="text-xs uppercase tracking-widest text-gray-500 font-light">
                  Latest Addition
                </div>

                {/* Product Name */}
                <h3 className="text-4xl md:text-5xl font-serif text-gray-900">
                  {currentProduct.name}
                </h3>

                {/* Price */}
                <div className="text-2xl font-medium text-gray-900">
                  {currentProduct.price}
                </div>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gray-900" />

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Material */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">Material:</span>
                  <span className="text-gray-900 font-medium">{currentProduct.material}</span>
                </div>

                {/* CTA Button */}
                <button className="group relative px-8 py-3 bg-gray-900 text-white text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-gray-800">
                  <span className="relative z-10">View Details</span>
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </button>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-start gap-4 pt-8">
                  <button
                    onClick={handlePrevious}
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Previous product"
                  >
                    <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                      <ChevronLeft className="w-4 h-4" />
                    </div>
                    <span className="uppercase tracking-wider text-xs">Previous</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="group flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    aria-label="Next product"
                  >
                    <span className="uppercase tracking-wider text-xs">Next</span>
                    <div className="w-10 h-10 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                  
                  <div className="flex-1 text-end text-sm text-gray-500">
                    <span className="font-medium text-gray-900">{currentIndex + 1}</span>
                    {' / '}
                    {products.length}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
