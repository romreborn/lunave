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
    small: 'text-lg',
    medium: 'text-xl',
    large: 'text-2xl',
    xlarge: 'text-3xl'
  };

  return (
    <motion.div
      className={`flex items-center gap-3 ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* Logo Image */}
      <motion.img
        src={getImageSrc()}
        alt="Lunave Nails Logo"
        className={`${sizeClasses[size]} transition-all duration-300`}
        style={{ filter: textColor === '#FFFFFF' ? 'brightness(0) invert(1)' : 'none' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Brand Name */}
      <div className="flex flex-col leading-none">
        <h1
          className={`${textSizes[size]} font-display font-bold -mb-1`}
          style={{ color: textColor }}
        >
          <span className="bg-gradient-to-r from-baby-pink to-baby-pink/80 bg-clip-text text-transparent">
            Lunave
          </span>
        </h1>
        <span
          className={`${size === 'small' ? 'text-xs' : 'text-sm'} font-normal tracking-tight`}
          style={{ color: textColor, opacity: 0.9 }}
        >
          Nails
        </span>
      </div>
    </motion.div>
  );
};

export default StaticLogo;