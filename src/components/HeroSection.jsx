import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
    const message = encodeURIComponent('Halo Lunave Nails, saya tertarik untuk booking.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Lunave Nails - Premium Nail Art Studio in Jakarta</title>
        <meta
          name="description"
          content="Experience luxury nail art at Lunave Nails. Premium gel extensions, custom designs, and professional nail care services in Jakarta."
        />
      </Helmet>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-charcoal-gray via-baby-pink/20 to-cream-nude">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-baby-pink/30 via-cream-nude/40 to-baby-pink/30" />
          <img
            src="https://images.unsplash.com/photo-1610992015792-5c4c8518da5a?w=1920&h=1080&fit=crop"
            alt="Nail Art Background"
            className="w-full h-full object-cover opacity-90"
            loading="eager"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1567034987505-0c9a851eb88c?w=1920&h=1080&fit=crop';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-gray/60 via-charcoal-gray/30 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="bg-baby-pink/90 backdrop-blur-sm text-white px-8 py-3 rounded-full text-sm font-semibold shadow-lg">
                ✨ Premium Nail Art Studio
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Where Beauty
              <br />
              <span className="text-baby-pink">Meets Art</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transform your nails into stunning works of art. Experience luxury,
              precision, and creativity at Jakarta's premier nail studio.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToWhatsApp}
                className="group relative px-8 py-4 bg-gradient-to-r from-white to-white/90 text-charcoal-gray font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-white/25 transform hover:-translate-y-2 overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-baby-pink to-baby-pink/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                  Book Appointment
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>

              <motion.button
                onClick={() => scrollToSection('#services')}
                className="group px-8 py-4 bg-transparent border-2 border-white/60 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-charcoal-gray hover:shadow-xl hover:shadow-white/25 transform hover:-translate-y-2 backdrop-blur-sm hover:border-white"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View Services
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </span>
              </motion.button>
            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: '✨', title: 'Premium Quality', description: 'High-end products and techniques' },
                { icon: '🎨', title: 'Custom Designs', description: 'Unique nail art tailored to you' },
                { icon: '💅', title: 'Expert Technicians', description: 'Professional and experienced artists' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>

            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('#services')}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;