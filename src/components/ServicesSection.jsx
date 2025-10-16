import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useInView } from 'react-intersection-observer';

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getDefaultImage = (title) => {
    const imageMap = {
      'Basic Manicure': 'https://images.unsplash.com/photo-1567034987505-0c9a851eb88c?w=400&h=300&fit=crop',
      'Gel Polish': 'https://images.unsplash.com/photo-1603988162605-734b236b7f3a?w=400&h=300&fit=crop',
      'Premium Gel-X Extensions': 'https://images.unsplash.com/photo-1611003616856-a6d0c3d1e1c5?w=400&h=300&fit=crop',
      'Nail Art Design': 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      'Spa Pedicure': 'https://images.unsplash.com/photo-1590727263113-61e6b5ae4b33?w=400&h=300&fit=crop',
      'Nail Repair & Maintenance': 'https://images.unsplash.com/photo-1511044329656-718c2b6979c0?w=400&h=300&fit=crop'
    };
    return imageMap[title] || 'https://images.unsplash.com/photo-1567034987505-0c9a851eb88c?w=400&h=300&fit=crop';
  };

  const scrollToWhatsApp = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
    const message = encodeURIComponent(`Halo Lunave Nails, saya tertarik dengan layanan ${service.title}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer border border-baby-pink/5"
      onClick={scrollToWhatsApp}
    >
      {/* Service Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image || getDefaultImage(service.title)}
          alt={service.title}
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ backgroundColor: '#FDF1ED' }}
          onError={(e) => {
            // Fallback to a working image if the primary one fails
            e.target.src = 'https://images.unsplash.com/photo-1567034987505-0c9a851eb88c?w=400&h=300&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-baby-pink/60 via-cream-nude/40 to-baby-pink/60" />

        {service.popular && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-white text-baby-pink px-4 py-2 rounded-full text-sm font-semibold shadow-xl border border-baby-pink/10">
              Popular
            </span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-4xl mb-2">{service.icon || '💅'}</div>
            <h3 className="text-xl font-bold drop-shadow-lg">{service.title}</h3>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full" />
        <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full" />
      </div>

      {/* Service Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-charcoal-gray">{service.price}</span>
          <span className="text-sm text-gray-500 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {service.duration}
          </span>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3">{service.description}</p>

        <motion.button
          className="w-full px-6 py-4 bg-gradient-to-r from-baby-pink to-baby-pink/80 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-baby-pink/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-sm group-hover:scale-105"
          whileTap={{ scale: 0.95 }}
          whileHover={{
            scale: 1.05,
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(248, 201, 212, 0.3)"
          }}
        >
          <span className="flex items-center justify-center gap-2">
            Book Now
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-cream-nude">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center component-margin-lg"
        >
          <span className="inline-block bg-gradient-to-r from-baby-pink to-baby-pink/80 text-white px-6 py-3 rounded-full text-sm font-semibold component-margin-sm shadow-lg">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
            Premium Nail
            <span className="text-baby-pink"> Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our range of professional nail services designed to pamper and beautify.
            From classic manicures to intricate nail art, we offer something for every style and preference.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 component-margin-lg">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-white rounded-3xl p-10 shadow-xl border border-baby-pink/5"
        >
          <h3 className="font-display text-2xl font-bold text-charcoal-gray mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-6">
            We offer custom packages and special designs. Contact us to discuss your specific needs!
          </p>
          <motion.button
            onClick={() => {
              const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
              const message = encodeURIComponent('Halo Lunave Nails, saya ingin bertanya tentang layanan khusus.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us for Custom Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;