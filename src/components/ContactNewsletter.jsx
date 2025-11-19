import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@jewelry.com',
      link: 'mailto:hello@jewelry.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: '123 Jewelry District, NY',
      link: '#'
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Section - Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-light mb-4">
                Stay Connected
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                Join Our
                <br />
                Newsletter
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Be the first to discover new collections, exclusive offers, and stories
                of craftsmanship. Subscribe to our newsletter for a curated experience.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 border border-gray-300 text-sm focus:outline-none focus:border-gray-900 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="mt-4 w-full sm:w-auto group relative px-8 py-4 bg-gray-900 text-white text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    'Subscribing...'
                  ) : (
                    <>
                      Subscribe
                      <Send className="w-4 h-4" />
                    </>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.button>
              </div>

              {/* Success Message */}
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600"
                >
                  ✓ Successfully subscribed! Check your inbox for confirmation.
                </motion.p>
              )}

              <p className="text-xs text-gray-500 leading-relaxed">
                By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
              </p>
            </form>
          </motion.div>

          {/* Right Section - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 p-10 lg:p-12 flex flex-col justify-center"
          >
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-light mb-4">
                Get In Touch
              </p>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">
                We're Here
                <br />
                to Help
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Have questions about our collections or need assistance?
                Our team is ready to provide personalized service.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group flex items-start gap-4 hover:translate-x-1 transition-transform duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 border border-gray-300 flex items-center justify-center group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500 font-light mb-1">
                      {item.label}
                    </p>
                    <p className="text-base text-gray-900 font-medium">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="mt-10 pt-10 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                Visit our showroom by appointment for a personalized consultation
                and view our exclusive collections.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactNewsletter;
