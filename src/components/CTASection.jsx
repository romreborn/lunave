import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTASection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
    const message = encodeURIComponent('Halo Lunave Nails, saya tertarik untuk booking.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
    window.open(`tel:+${phoneNumber}`, '_self');
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-baby-pink to-cream-nude relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold">
              Ready to Transform Your Nails?
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Book Your
            <span className="text-white"> Appointment</span>
            <br />
            Today!
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Don't wait to get the beautiful nails you deserve. Book your appointment now
            and let our expert technicians create the perfect look for you.
          </motion.p>

          {/* Contact Methods */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto my-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* WhatsApp Booking */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-green-400 text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-white/80 mb-6 text-sm">
                Fast response and easy booking
              </p>
              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Book on WhatsApp
              </motion.button>
            </motion.div>

            {/* Phone Call */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-baby-pink text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80 mb-6 text-sm">
                Speak with our team directly
              </p>
              <motion.button
                onClick={handleCallClick}
                className="w-full bg-white hover:bg-gray-100 text-charcoal-gray font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-md mx-auto my-8"
          >
            <h4 className="text-white font-semibold mb-4 text-center">Business Hours</h4>
            <div className="space-y-2 text-white/90 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>9:00 AM - 9:00 PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;