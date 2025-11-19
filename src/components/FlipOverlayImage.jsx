import React, { useState } from 'react';
import { motion } from 'framer-motion'

const FlipOverlayImage = ({
  src,
  alt = "",
  className = "",
  containerClass = "",
  title = "Premium Collection",
  category = "Handcrafted Jewelry"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden ${containerClass}`}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={src}
        alt={alt}
        className={className}
      />

      {/* Inner shadow overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 40px rgba(0, 0, 0, 0.3)' }}
      />

      {/* Title Overlay - Flips from left */}
      <motion.div
        className="absolute inset-0 bg-black/60 flex flex-col items-start justify-end p-8"
        initial={{ rotateY: -90, opacity: 0 }}
        animate={{
          rotateY: isHovered ? 0 : -90,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          duration: 0.6,
          ease: "easeInOut"
        }}
        style={{
          transformOrigin: 'left center',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Decorative golden line */}
        <motion.div
          className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mb-4"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? 80 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />

        {/* Title */}
        <motion.h3
          className="text-3xl font-noto-serif font-bold text-white mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20
          }}
          transition={{
            duration: 0.4,
            delay: isHovered ? 0.3 : 0
          }}
        >
          {title}
        </motion.h3>

        {/* Category/Subtitle */}
        <motion.p
          className="text-white/70 text-sm uppercase tracking-widest font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 10
          }}
          transition={{
            duration: 0.4,
            delay: isHovered ? 0.4 : 0
          }}
        >
          {category}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default FlipOverlayImage;
