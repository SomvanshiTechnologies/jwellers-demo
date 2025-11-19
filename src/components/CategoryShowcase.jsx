import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Heart } from "lucide-react";

function CategoryShowcase() {
  const [isProductHovered, setIsProductHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isImageHovered, setIsImageHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 lg:max-h-[800px]">
          {/* Left Section - Two Stacked Sections */}
          <div className="flex flex-col gap-8 lg:max-h-[800px]">
            {/* Top Section - Category Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-8 lg:p-10 lg:flex-shrink-0"
            >
              <h2 className="text-4xl font-serif text-white mb-4">
                Necklace
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Explore our meticulously curated collection featuring statement pieces, delicate pendants, gemstone rings, pearl drop earrings, and chic charm bracelets. Perfect for everyday elegance.
              </p>
              <button className="group flex items-center gap-2 text-sm text-white hover:text-gray-300 transition-colors">
                <span className="uppercase tracking-wider font-light">SHOP All</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Bottom Section - Product Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 overflow-hidden cursor-pointer group lg:flex-1 lg:min-h-0 flex flex-col"
              onMouseEnter={() => setIsProductHovered(true)}
              onMouseLeave={() => setIsProductHovered(false)}
            >
              {/* Product Image */}
              <div className="relative aspect-square lg:flex-1 overflow-hidden bg-white">
                <motion.img
                  src="/rings/radiant-reverie-ring.avif"
                  alt="Twilight Serenity Ring"
                  className="w-full h-full object-cover"
                  animate={{ scale: isProductHovered ? 1.05 : 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* Inner shadow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.15)" }}
                />

                {/* Wishlist Icon */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
                  // initial={{ opacity: 0, scale: 0.8 }}
                  // animate={{
                  //   opacity: isProductHovered ? 1 : 0,
                  //   scale: isProductHovered ? 1 : 0.8,
                  // }}
                  // transition={{ duration: 0.3 }}
                >
                  <Heart className="w-4 h-4 text-gray-900" />
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-6 bg-gray-50 flex-shrink-0">
                <h3 className="text-lg font-semibold text-gray-900 font-serif mb-1">
                  Twilight Serenity Ring
                </h3>
                <p className="text-xs text-gray-500 mb-2 font-light">
                  by Lumière Jewelry
                </p>
                <p className="text-sm font-medium text-gray-900">$299.99</p>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Model Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[3/4] col-span-2 lg:aspect-auto lg:h-full lg:max-h-[800px] overflow-hidden cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1669835163351-785a187cdf95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsJTIwd2VhcmluZyUyMHJpbmd8ZW58MHx8MHx8fDA%3D"
              alt="Model wearing necklace"
              className="w-full h-full object-cover"
            />

            {/* Inner shadow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 20px rgba(0, 0, 0, 0.15)" }}
            />

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
              <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center">
                {/* Inner content */}
                <div className="flex flex-col items-center justify-center">
                  <span className="text-gray-900 text-xs uppercase tracking-widest font-semibold">Explore</span>
                  <ArrowRight className="w-4 h-4 text-gray-900 mt-1" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CategoryShowcase;
