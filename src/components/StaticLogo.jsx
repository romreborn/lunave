import { motion } from 'framer-motion';
import logoImage from '../assets/images/lunave-logo.svg';
import logoSmallImage from '../assets/images/lunave-logo-small.svg';

const StaticLogo = ({ size = 'medium', className = '', textColor = 'currentColor' }) => {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-16 h-16',
    large: 'w-20 h-20',
    xlarge: 'w-24 h-24'
  };

  const getImageSrc = () => {
    return size === 'small' ? logoSmallImage : logoImage;
  };

  const textSizes = {
    small: 'text-base',
    medium: 'text-lg',
    large: 'text-xl',
    xlarge: 'text-2xl'
  };

  return (
    <motion.div
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Image */}
      <motion.img
        src={getImageSrc()}
        alt="Lunavè Nails Logo"
        className={`${sizeClasses[size]} transition-all duration-300`}
        style={{ filter: textColor === '#FFFFFF' ? 'brightness(0) invert(1)' : 'none' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Brand Name */}
      <div className="flex items-center leading-none">
        <h1
          className={`${textSizes[size]} font-display font-bold`}
          style={{ color: textColor }}
        >
          <span className="bg-gradient-to-r from-baby-pink to-baby-pink/80 bg-clip-text text-transparent">
            Lunavè
          </span>
        </h1>
      </div>
    </motion.div>
  );
};

export default StaticLogo;