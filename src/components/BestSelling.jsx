import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import eternalEmbraceRing from '../../public/rings/eternal-embrace-ring.avif';
import harmonicSerenityRing from '../../public/rings/harmonic-serenity-ring.avif';
import starlitVoyageRing from '../../public/rings/starlit-voyage-ring.avif';
import emberGlowRing from '../../public/rings/ember-glow-ring.avif';
import moonlitSerenadeRing from '../../public/rings/moonlit-serenade-ring.avif';
import radiantReverieRing from '../../public/rings/radiant-reverie-ring.avif';

const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: 'Eternal Embrace Ring',
      brand: 'Lumière & Co.',
      price: '$330.00',
      rating: 4.9,
      reviews: 2345,
      image: eternalEmbraceRing,
      isFavorite: false
    },
    {
      id: 2,
      name: 'Harmonic Serenity Ring',
      brand: 'Aurum Jewels',
      price: '$325.00',
      rating: 4.9,
      reviews: 2345,
      image: harmonicSerenityRing,
      isFavorite: true
    },
    {
      id: 3,
      name: 'Starlit Voyage Ring',
      brand: 'Gilded Grace',
      price: '$300.00',
      rating: 4.9,
      reviews: 2345,
      image: starlitVoyageRing,
      isFavorite: false
    },
    {
      id: 4,
      name: 'Ember Glow Ring',
      brand: 'Soleil Gems',
      price: '$310.00',
      rating: 4.9,
      reviews: 2345,
      image: emberGlowRing,
      isFavorite: false
    },
    {
      id: 5,
      name: 'Moonlit Serenade Ring',
      brand: 'Veilara Atelier',
      price: '$295.00',
      rating: 4.9,
      reviews: 2345,
      image: moonlitSerenadeRing,
      isFavorite: false
    },
    {
      id: 6,
      name: 'Radiant Reverie Ring',
      brand: 'Opal & Ivy',
      price: '$340.00',
      rating: 4.9,
      reviews: 2345,
      image: radiantReverieRing,
      isFavorite: false
    }
  ];

  const [favorites, setFavorites] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.isFavorite;
      return acc;
    }, {})
  );

  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleFavorite = (productId) => {
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="w-full py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            Best Selling
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const isHovered = hoveredCard === product.id;

            return (
              <div
                key={product.id}
                className="group cursor-pointer bg-white overflow-hidden"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Header with Rating and Wishlist */}
                <div className="flex justify-between items-center p-4 pb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-gray-800 text-gray-800" />
                    <span className="text-sm font-medium text-gray-800">
                      {product.rating}
                    </span>
                    <span className="text-xs text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(product.id);
                    }}
                    className="hover:scale-110 transition-transform z-10"
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites[product.id]
                          ? 'fill-gray-900 text-gray-900'
                          : 'fill-none text-gray-400'
                      } transition-colors`}
                    />
                  </button>
                </div>

                {/* Product Image with Overlay */}
                <div className="relative aspect-5/4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Inner shadow overlay for depth */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
                  />

                  {/* Overlay Reveal Effect */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    {/* View Details Text */}
                    <motion.p
                      className="text-white text-sm uppercase tracking-widest font-light mb-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10
                      }}
                      transition={{
                        duration: 0.3,
                        delay: isHovered ? 0.1 : 0
                      }}
                    >
                      Quick View
                    </motion.p>

                    {/* Decorative golden line */}
                    <motion.div
                      className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{
                        width: isHovered ? 64 : 0,
                        opacity: isHovered ? 1 : 0
                      }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    />
                  </motion.div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    by {product.brand}
                  </p>
                  <p className="text-lg font-bold text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
