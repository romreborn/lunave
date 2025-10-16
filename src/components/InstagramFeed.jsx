import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InstagramFeed = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const instagramEmbedUrl = import.meta.env.VITE_INSTAGRAM_EMBED_URL;

  // If no Instagram embed URL is provided, show placeholder content
  if (!instagramEmbedUrl) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block bg-baby-pink/20 text-baby-pink px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Follow Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
              Follow Our
              <span className="text-baby-pink"> Instagram</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Stay updated with our latest nail art designs, special offers, and behind-the-scenes content.
              Follow us on Instagram for daily inspiration!
            </p>

            {/* Placeholder Instagram Posts */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: item * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square bg-gradient-to-br from-baby-pink to-cream-nude rounded-2xl overflow-hidden group cursor-pointer m-2"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                      </svg>
                      <p className="text-sm font-medium">@lunavenails</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Instagram CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-cream-nude rounded-2xl p-8 shadow-xl max-w-md mx-auto my-8"
            >
              <h3 className="font-display text-2xl font-bold text-charcoal-gray mb-4">
                Follow @lunavenails
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community of nail art lovers and never miss an update!
              </p>
              <motion.a
                href="https://instagram.com/lunavenails"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
                Follow on Instagram
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  // If Instagram embed URL is provided, show the actual embed
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block bg-baby-pink/20 text-baby-pink px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Instagram Feed
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
            Follow Our
            <span className="text-baby-pink"> Instagram</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Stay updated with our latest nail art designs, special offers, and behind-the-scenes content.
          </p>

          {/* Instagram Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <iframe
              src={instagramEmbedUrl}
              className="w-full h-96 md:h-[500px] border-0 rounded-2xl shadow-xl"
              scrolling="no"
              allowtransparency="true"
              title="Instagram Feed"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;