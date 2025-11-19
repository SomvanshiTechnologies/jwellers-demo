import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react';
import artisanImage from '../../public/Stock/image3.png';
import Button from './Button';

const WhyChooseUs = () => {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 lg:max-h-[550px]">
          {/* Left Section - Smaller Image with Interactive Effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] lg:aspect-[3/4] overflow-hidden cursor-none order-2 lg:order-1"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <motion.img
              src={'https://plus.unsplash.com/premium_photo-1681276168422-ebd2d7e95340?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8andlbGxlcnklMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MQ%3D%3D'}
              alt="Artisan craftsmanship"
              className="w-full h-full object-cover"
              animate={{ scale: isImageHovered ? 1.05 : 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            {/* Inner shadow for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.15)' }}
            />

            {/* Decorative Corner Badge */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-900">Premium</span>
              </div>
            </div>

            {/* Custom Cursor */}
            <motion.div
              className="absolute pointer-events-none z-10"
              animate={{
                left: cursorPosition.x,
                top: cursorPosition.y,
                opacity: isImageHovered ? 1 : 0,
                scale: isImageHovered ? 1 : 0,
              }}
              initial={{
                left: cursorPosition.x,
                top: cursorPosition.y,
                opacity: 0,
                scale: 0,
              }}
              transition={{
                left: { type: "spring", stiffness: 150, damping: 20, mass: 0.5 },
                top: { type: "spring", stiffness: 150, damping: 20, mass: 0.5 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4, type: "spring", stiffness: 300, damping: 25 }
              }}
              style={{
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="w-20 h-20 rounded-full bg-gray-900 shadow-xl flex items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-widest font-semibold">View</span>
                  <ArrowRight className="w-4 h-4 text-white mt-1" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section - Stacked Content */}
          <div className="flex flex-col gap-8 lg:col-span-2 order-1 lg:order-2 lg:h-full lg:justify-between">
            {/* Top Section - Main Message (Light Box) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 p-10 lg:p-12"
            >
              <div className="flex items-start justify-between gap-8 flex-col lg:flex-row">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight mb-6">
                    Where Trust Meets
                    <br />
                    Timeless Craft
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed">
                    Every piece is a testament to three generations of mastery—handcrafted with precision,
                    certified for authenticity, and delivered with uncompromising care.
                  </p>
                </div>
                {/* Decorative Element */}
                <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                <div className="flex-shrink-0 text-center lg:text-right">
                  <div className="text-5xl lg:text-6xl font-serif text-gray-900 mb-2">25+</div>
                  <p className="text-xs uppercase tracking-widest text-gray-500">Years Legacy</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Section - CTA Card (Dark) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <h3 className="text-xl font-serif text-white mb-2">
                  Discover Our Heritage
                </h3>
                <p className="text-sm text-gray-300">
                  Explore the artistry and passion behind each creation
                </p>
              </div>
              <motion.button
                className="group inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 text-sm font-medium tracking-widest hover:bg-gray-100 transition-all duration-300 flex-shrink-0"
                // whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                Explore Collections
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
