import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      title: 'Eternal Rings',
      description: 'Gold, rose gold & diamond rings for every style.',
      image: 'https://plus.unsplash.com/premium_photo-1757614255349-4ef24384c6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8andlbGxlcnklMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MQ%3D%3D',
      category: 'RINGS'
    },
    {
      id: 2,
      title: 'Necklace Stories',
      description: 'Elegant chain sets made for daily glamour.',
      image: 'https://plus.unsplash.com/premium_photo-1739548337224-0e494e4f6c6c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fE5lY2tsYWNlJTIwJTIwamV3bGxhcnklMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MQ%3D%3D',
      category: 'NECKLACES'
    },
    {
      id: 3,
      title: 'Signature Earrings',
      description: 'Studs, hoops & statement pieces.',
      image: 'https://plus.unsplash.com/premium_photo-1695792938561-e1123658a0ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEVhcnJpbmdzJTIwJTIwamV3bGxhcnklMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MQ%3D%3D',
      category: 'EARRINGS'
    },
    {
      id: 4,
      title: 'Bridal Exclusives',
      description: 'Wedding collections designed to stand out.',
      image: 'https://plus.unsplash.com/premium_photo-1661636604587-6ae3f5006763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZGFsJTIwJTIwamV3bGxhcnklMjBwaG90b2dyYXBoeXxlbnwwfDB8MHx8fDE%3D',
      category: 'BRIDAL'
    }
  ];

  return (
    <div className="w-full py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-12"
        >
          {/* Decorative golden line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-0.5 bg-gradient-to-r from-amber-500 to-amber-700 mb-4"
          />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-light mb-2">
                Curated For You
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                Featured Collections
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Collections Grid - Modern Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 auto-rows-[280px]">
          {/* Card 1 - Large Featured (spans 2 cols, 2 rows) */}
          <div className="lg:col-span-2 lg:row-span-2">
            <CollectionCard
              collection={collections[0]}
              index={0}
              featured={true}
            />
          </div>

          {/* Card 2 - Wide (spans 2 cols, 1 row) */}
          <div className="lg:col-span-2 lg:row-span-1">
            <CollectionCard
              collection={collections[1]}
              index={1}
              layout="wide"
            />
          </div>

          {/* Card 3 - Standard (2 cols, 1 row) */}
          <div className="lg:col-span-2 lg:row-span-1">
            <CollectionCard
              collection={collections[2]}
              index={2}
            />
          </div>

          {/* Card 4 - Wide Bottom (spans 4 cols, 1 row) */}
          <div className="lg:col-span-4 lg:row-span-1">
            <CollectionCard
              collection={collections[3]}
              index={3}
              layout="wide"
            />
          </div>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="group relative px-8 py-3 bg-gray-900 text-white text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-gray-800">
            <span className="relative z-10 flex items-center gap-2">
              View All Collections
              <ArrowUpRight className="w-4 h-4" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

const CollectionCard = ({ collection, index, featured = false, layout = 'standard' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer overflow-hidden h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      {/* Background Image - Fills entire card */}
      <motion.img
        src={collection.image}
        alt={collection.title}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Inner shadow overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
      />

      {/* Simple dark overlay on hover (no text) */}
      <motion.div
        className="absolute inset-0 bg-black/20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      />

      {/* Text Content - Overlaid at bottom with gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6">
        <div className="mb-3">
          <p className="text-xs uppercase tracking-widest font-light mb-2 text-white/70">
            {collection.category}
          </p>
          <h3 className="text-lg font-semibold font-serif mb-2 text-white">
            {collection.title}
          </h3>
          <p className="text-sm leading-relaxed text-white/90">
            {collection.description}
          </p>
        </div>

        <button className="group inline-flex items-center gap-1 text-xs uppercase tracking-wider text-white hover:gap-2 transition-all duration-300">
          <span>Explore</span>
          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </motion.div>
  );
};

export default FeaturedCollections;
