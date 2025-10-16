import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Sample portfolio data - in real implementation, these would be actual images
const portfolioImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1610992015792-5c4c8518da5a?w=400&h=600&fit=crop',
    category: 'gel-x',
    title: 'Pink Gel-X Extensions',
    description: 'Elegant pink gel-x with French tips'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1564564267070-1e0b018646b6?w=400&h=600&fit=crop',
    category: 'nail-art',
    title: 'Floral Nail Art',
    description: 'Hand-painted floral design'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=600&fit=crop',
    category: 'classic',
    title: 'Classic Red',
    description: 'Timeless red polish application'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1519419920935-2f5cf2be2436?w=400&h=600&fit=crop',
    category: 'nail-art',
    title: 'Glitter Dreams',
    description: 'Sparkling glitter nail art'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1519419920935-2f5cf2be2436?w=400&h=600&fit=crop',
    category: 'gel-x',
    title: 'Nude Gel-X',
    description: 'Natural-looking nude extensions'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=600&fit=crop',
    category: 'nail-art',
    title: 'Marble Design',
    description: 'Elegant marble nail art'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1564564267070-1e0b018646b6?w=400&h=600&fit=crop',
    category: 'pedicure',
    title: 'Spa Pedicure',
    description: 'Luxurious pedicure treatment'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1610992015792-5c4c8518da5a?w=400&h=600&fit=crop',
    category: 'nail-art',
    title: 'Ombre Effects',
    description: 'Beautiful ombre gradient'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=600&fit=crop',
    category: 'gel-x',
    title: 'Crystal Extensions',
    description: 'Clear gel-x with nail art'
  }
];

const categories = [
  { id: 'all', name: 'All Work' },
  { id: 'gel-x', name: 'Gel-X Extensions' },
  { id: 'nail-art', name: 'Nail Art' },
  { id: 'classic', name: 'Classic' },
  { id: 'pedicure', name: 'Pedicure' }
];

const PortfolioModal = ({ image, isOpen, onClose }) => {
  if (!isOpen || !image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative max-w-4xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-w-4 aspect-h-6">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal-gray p-2 rounded-full hover:bg-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-charcoal-gray mb-2">{image.title}</h3>
              <p className="text-gray-600">{image.description}</p>
              <div className="mt-4">
                <span className="inline-block bg-baby-pink/20 text-baby-pink px-3 py-1 rounded-full text-sm font-semibold capitalize">
                  {image.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredImages = selectedCategory === 'all'
    ? portfolioImages
    : portfolioImages.filter(img => img.category === selectedCategory);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-baby-pink/20 text-baby-pink px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
            Nail Art
            <span className="text-baby-pink"> Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse our collection of stunning nail designs and transformations.
            Each piece showcases our creativity and attention to detail.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-baby-pink text-white shadow-lg'
                  : 'bg-cream-nude text-charcoal-gray hover:bg-baby-pink hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="break-inside-avoid mb-4"
            >
              <div
                className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-white/80">{image.description}</p>
                  </div>
                </div>

                {/* View button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.button
                    className="bg-white text-charcoal-gray p-3 rounded-full shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center my-12"
        >
          <p className="text-gray-600 mb-6">
            Ready to get your own stunning nail design?
          </p>
          <motion.button
            onClick={() => {
              const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '6281234567890';
              const message = encodeURIComponent('Halo Lunave Nails, saya ingin membuat janji dengan desain khusus.');
              window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
            }}
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Design
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      <PortfolioModal
        image={selectedImage}
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
};

export default PortfolioSection;