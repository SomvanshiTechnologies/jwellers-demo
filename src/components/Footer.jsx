import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  Facebook,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const navigationLinks = {
    Shop: [
      { name: 'New Arrivals', href: '#' },
      { name: 'Best Sellers', href: '#' },
      { name: 'Collections', href: '#' },
      { name: 'Sale', href: '#' }
    ],
    About: [
      { name: 'Our Story', href: '#' },
      { name: 'Craftsmanship', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Press', href: '#' }
    ],
    Support: [
      { name: 'Contact Us', href: '#' },
      { name: 'Shipping Info', href: '#' },
      { name: 'Returns', href: '#' },
      { name: 'Size Guide', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'hover:text-blue-400' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-sky-400' },
    { icon: Mail, label: 'Email', href: '#', color: 'hover:text-green-400' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: Mail, text: 'hello@jewelry.com' },
    { icon: MapPin, text: '123 Jewelry District, NY' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-500 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-amber-600 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Top Decorative Line */}
      <div className="relative h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Larger Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Logo/Brand */}
            <div>
              <h2 className="text-5xl font-serif mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Elegance
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-amber-500 to-amber-700 mb-6"></div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Crafting timeless jewelry with unparalleled artistry and passion.
                Every piece tells a story of heritage, quality, and sophistication.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500">Quick Contact</p>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 border border-gray-700 flex items-center justify-center group-hover:border-amber-500 group-hover:bg-amber-500/10 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links - Three Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(navigationLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-6 font-light">
                  {category}
                </h3>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        onMouseEnter={() => setHoveredLink(`${category}-${index}`)}
                        onMouseLeave={() => setHoveredLink(null)}
                        className="group inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        <motion.span
                          animate={{
                            x: hoveredLink === `${category}-${index}` ? 4 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.name}
                        </motion.span>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: hoveredLink === `${category}-${index}` ? 1 : 0,
                            scale: hoveredLink === `${category}-${index}` ? 1 : 0
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowUpRight className="w-3 h-3" />
                        </motion.div>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider with Sparkle */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gray-900 p-4">
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm text-gray-500"
          >
            <span>© 2024 Elegance Jewelry</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 hidden sm:inline" />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs uppercase tracking-widest text-gray-500 mr-2">
              Follow Us
            </span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-10 h-10 border border-gray-700 flex items-center justify-center overflow-hidden group-hover:border-amber-500 transition-colors duration-300">
                  {/* Background Glow */}
                  <motion.div
                    className="absolute inset-0 bg-amber-500/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredSocial === index ? 1 : 0,
                      opacity: hoveredSocial === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <social.icon className={`w-4 h-4 relative z-10 text-gray-400 transition-colors duration-300 ${social.color}`} />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-6 text-sm"
          >
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <span className="text-gray-800">•</span>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;
