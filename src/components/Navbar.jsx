import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(3); // Example cart count

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navigationLinks = [
    {
      name: 'Collections',
      href: '#',
      dropdown: ['New Arrivals', 'Best Sellers', 'Limited Edition', 'Sale']
    },
    {
      name: 'Jewelry',
      href: '#',
      dropdown: ['Rings', 'Necklaces', 'Bracelets', 'Earrings']
    },
    { name: 'About', href: '#' },
    { name: 'Craftsmanship', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  const iconButtons = [
    { icon: Search, label: 'Search', action: () => console.log('Search') },
    { icon: Heart, label: 'Wishlist', badge: null },
    { icon: ShoppingBag, label: 'Cart', badge: cartCount },
    { icon: User, label: 'Account', action: () => console.log('Account') }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        {/* Top golden accent line */}
        <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
                <h1 className="text-2xl font-serif font-medium text-gray-900 tracking-tight">
                  Elegance
                </h1>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-700"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    setHoveredLink(index);
                    if (link.dropdown) setActiveDropdown(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredLink(null);
                    setActiveDropdown(null);
                  }}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
                  >
                    <span className="uppercase tracking-wider font-light">
                      {link.name}
                    </span>
                    {link.dropdown && (
                      <ChevronDown
                        className={`w-3 h-3 transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </a>

                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-700"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredLink === index ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-100"
                        >
                          {link.dropdown.map((item, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="block px-6 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                            >
                              {item}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Action Icons */}
            <div className="hidden lg:flex items-center gap-4">
              {iconButtons.map((button, index) => (
                <motion.button
                  key={index}
                  onClick={button.action}
                  aria-label={button.label}
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 transition-colors duration-200 relative">
                    <button.icon className="w-4 h-4 text-gray-700 group-hover:text-gray-900 transition-colors duration-200" />

                    {/* Badge for cart */}
                    {button.badge && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 text-white text-xs flex items-center justify-center rounded-full"
                      >
                        {button.badge}
                      </motion.span>
                    )}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-gray-900 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
                    {button.label}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 transition-colors duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-900" />
              ) : (
                <Menu className="w-5 h-5 text-gray-900" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Bottom border for scrolled state */}
        {isScrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent origin-center"
          />
        )}
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-8 border-b border-gray-200">
                <h2 className="text-2xl font-serif text-gray-900">Menu</h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:border-gray-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-900" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-8 space-y-6">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={link.href}
                      className="block text-lg font-serif text-gray-900 hover:text-gray-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                    {link.dropdown && (
                      <div className="mt-2 ml-4 space-y-2">
                        {link.dropdown.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Mobile Action Buttons */}
              <div className="p-8 border-t border-gray-200 space-y-4">
                <p className="text-xs uppercase tracking-widest text-gray-500 font-light mb-4">
                  Quick Actions
                </p>
                {iconButtons.map((button, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      button.action && button.action();
                      setIsMobileMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="w-full flex items-center justify-between p-4 border border-gray-300 hover:border-gray-900 transition-colors group"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {button.label}
                    </span>
                    <div className="relative">
                      <button.icon className="w-5 h-5 text-gray-700 group-hover:text-gray-900" />
                      {button.badge && (
                        <span className="absolute -top-2 -right-2 w-5 h-5 bg-gray-900 text-white text-xs flex items-center justify-center rounded-full">
                          {button.badge}
                        </span>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
