import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const PinterestGrid = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'Absolutely stunning craftsmanship. Worth every rupee.',
      author: 'Priya Sharma',
      location: 'Pune',
      rating: 5,
      height: 'short'
    },
    {
      id: 2,
      quote: 'My engagement ring looks like a dream. The attention to detail is extraordinary.',
      author: 'Aarav Mehta',
      location: 'Mumbai',
      rating: 5,
      height: 'medium'
    },
    {
      id: 3,
      quote: 'They customised my necklace in just 3 days. Impeccable service.',
      author: 'Megha Kapoor',
      location: 'Delhi',
      rating: 5,
      height: 'short'
    },
    {
      id: 4,
      quote: 'Exquisite attention to detail. Each piece feels personal and timeless.',
      author: 'Ananya Reddy',
      location: 'Bangalore',
      rating: 5,
      height: 'medium'
    },
    {
      id: 5,
      quote: "The quality is unmatched. My mother's wedding set was beautifully restored.",
      author: 'Rohan Chatterjee',
      location: 'Kolkata',
      rating: 5,
      height: 'medium'
    },
    {
      id: 6,
      quote: 'Elegant, understated, perfect.',
      author: 'Ishaan Patel',
      location: 'Hyderabad',
      rating: 5,
      height: 'short'
    },
    {
      id: 7,
      quote: 'I have never received more compliments. The design is sophisticated yet unique.',
      author: 'Kavya Iyer',
      location: 'Chennai',
      rating: 5,
      height: 'medium'
    },
    {
      id: 8,
      quote: 'Heirloom quality at its finest.',
      author: 'Arjun Singh',
      location: 'Jaipur',
      rating: 5,
      height: 'short'
    },
    {
      id: 9,
      quote: 'From consultation to delivery, the experience was seamless and luxurious.',
      author: 'Diya Malhotra',
      location: 'Ahmedabad',
      rating: 5,
      height: 'medium'
    }
  ];

  return (
    <section className="w-full py-20 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Cherished by Many
          </motion.h2>
          <motion.p
            className="text-sm text-gray-500 max-w-2xl mx-auto tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Stories from our clients who wear their legacy with pride
          </motion.p>
        </div>

        {/* Pinterest Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate color based on author name for consistent avatar colors
  const getAvatarColor = (name) => {
    const colors = [
      'from-amber-600 to-amber-700',
      'from-gray-700 to-gray-800',
      'from-gray-800 to-gray-900',
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;
    return colors[colorIndex];
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <motion.div
      className="group cursor-pointer break-inside-avoid mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.4, 0.25, 1]
      }}
    >
      <div className="relative p-8 bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-300">
        {/* Quotation Mark Icon */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-amber-600/20" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-3.5 h-3.5 fill-amber-500 text-amber-500"
            />
          ))}
        </div>

        {/* Quote Text */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 font-light">
          "{testimonial.quote}"
        </p>

        {/* Decorative Line */}
        <motion.div
          className="h-px bg-gradient-to-r from-amber-500 to-transparent mb-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: isHovered ? '100%' : '48px',
            opacity: isHovered ? 0.6 : 0.3
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Author Info */}
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className={`w-10 h-10 rounded-full bg-gradient-to-br ${getAvatarColor(testimonial.author)} flex items-center justify-center flex-shrink-0 shadow-sm`}
          >
            <span className="text-white text-sm font-semibold">
              {getInitial(testimonial.author)}
            </span>
          </div>

          {/* Name and Location */}
          <div className="flex-grow">
            <p className="text-sm font-medium text-gray-900 mb-0.5">
              {testimonial.author}
            </p>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-light">
              {testimonial.location}
            </p>
          </div>
        </div>

        {/* Hover Border Effect */}
        <motion.div
          className="absolute inset-0 border-2 border-gray-900 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
};

export default PinterestGrid;
