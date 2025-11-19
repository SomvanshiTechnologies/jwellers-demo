import React from 'react';
import { motion } from 'framer-motion';

const FeaturedStoryBanner = () => {
  return (
    <div
      className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden"
      style={{
        backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661645449568-b470fda2e990?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGpld2Vscnl8ZW58MHwwfDB8fHwx)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Category Label */}
          <motion.p
            className="text-xs uppercase tracking-widest text-white/70 font-light mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Craftsmanship
          </motion.p>

          {/* Decorative golden line */}
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mb-6"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-6xl font-serif text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Crafted to Perfection
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-base md:text-lg text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Every piece goes through 42+ quality checks and is handcrafted by artisans with 20+ years of experience.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <button className="group relative px-8 py-3 bg-white text-gray-900 text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-gray-100">
              <span className="relative z-10">Know More</span>
              <motion.div
                className="absolute inset-0 bg-gray-900/10"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5 }}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStoryBanner;
