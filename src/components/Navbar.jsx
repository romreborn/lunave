import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className={`font-display text-2xl font-bold ${
              isScrolled ? 'text-charcoal-gray' : 'text-white'
            }`}>
              Lunave Nails
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-baby-pink ${
                  isScrolled ? 'text-charcoal-gray' : 'text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-3 rounded-2xl transition-all duration-300 ${
              isScrolled
                ? 'bg-baby-pink/10 text-charcoal-gray hover:bg-baby-pink/20 border border-baby-pink/10'
                : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10'
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -1 }}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {isMobileMenuOpen ? (
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.div
                  className="w-6 h-6 flex flex-col justify-center items-center gap-1.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                      isScrolled ? 'bg-charcoal-gray' : 'bg-white'
                    }`}
                    animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                      isScrolled ? 'bg-charcoal-gray' : 'bg-white'
                    }`}
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className={`block h-0.5 w-5 rounded-full transition-colors duration-300 ${
                      isScrolled ? 'bg-charcoal-gray' : 'bg-white'
                    }`}
                    animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )}
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{ opacity: 1, height: 'auto', scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.95 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 origin-top"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-baby-pink/10 overflow-hidden">
              {/* Menu Header */}
              <div className="bg-gradient-to-r from-baby-pink to-baby-pink/80 px-6 py-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold">Menu</h3>
                    <p className="text-white/80 text-sm">Navigate our services</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="group w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-left relative overflow-hidden transition-all duration-300 hover:bg-gradient-to-r hover:from-baby-pink/10 hover:to-cream-nude/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon Background */}
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-baby-pink/20 to-cream-nude/50 flex items-center justify-center group-hover:from-baby-pink group-hover:to-baby-pink/80 transition-all duration-300">
                      <span className="text-baby-pink group-hover:text-white text-lg font-semibold transition-colors duration-300">
                        {item.name === 'Home' && '🏠'}
                        {item.name === 'Services' && '💅'}
                        {item.name === 'Portfolio' && '🎨'}
                        {item.name === 'Testimonials' && '⭐'}
                        {item.name === 'Contact' && '📞'}
                      </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h4 className="font-semibold text-charcoal-gray group-hover:text-baby-pink transition-colors duration-300">
                        {item.name}
                      </h4>
                      <p className="text-xs text-gray-500 group-hover:text-baby-pink/70 transition-colors duration-300">
                        {item.name === 'Home' && 'Welcome to Lunave Nails'}
                        {item.name === 'Services' && 'Our premium nail services'}
                        {item.name === 'Portfolio' && 'View our work gallery'}
                        {item.name === 'Testimonials' && 'What clients say'}
                        {item.name === 'Contact' && 'Get in touch with us'}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <div className="w-8 h-8 rounded-xl bg-baby-pink/10 flex items-center justify-center group-hover:bg-baby-pink transition-all duration-300">
                      <svg className="w-4 h-4 text-baby-pink group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Menu Footer */}
              <div className="px-6 py-4 bg-gradient-to-r from-cream-nude/50 to-baby-pink/10 border-t border-baby-pink/10">
                <motion.button
                  onClick={() => {
                    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
                    const message = encodeURIComponent('Halo Lunave Nails, saya ingin booking.');
                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-baby-pink to-baby-pink/80 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-baby-pink/25 transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Quick Booking
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;