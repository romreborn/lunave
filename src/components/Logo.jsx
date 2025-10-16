import { motion } from 'framer-motion';

const Logo = ({ size = 'medium', className = '', textColor = 'currentColor' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12',
    xlarge: 'w-16 h-16'
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
      {/* Flower Logo SVG */}
      <motion.svg
        className={`${sizeClasses[size]} transition-all duration-300`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        whileHover={{ rotate: 0 }}
      >
        {/* Flower petals */}
        <g transform="translate(50,50)">
          {/* Center petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.9"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
          {/* Top petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(45)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          {/* Right petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(90)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
          {/* Bottom right petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(135)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          {/* Bottom petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(180)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          {/* Bottom left petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(225)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
          {/* Left petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(270)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
          {/* Top left petal */}
          <motion.path
            d="M 0,-25 Q -8,-20 -10,-10 Q -8,-5 0,0 Q 8,-5 10,-10 Q 8,-20 0,-25"
            fill="url(#petalGradient)"
            opacity="0.85"
            transform="rotate(315)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Center circle */}
          <motion.circle
            r="8"
            fill="url(#centerGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, duration: 0.4 }}
          />

          {/* Inner detail */}
          <motion.circle
            r="4"
            fill="white"
            opacity="0.6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.2, duration: 0.3 }}
          />
        </g>

        {/* Gradients */}
        <defs>
          <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#F8C9D4', stopOpacity: 1 }} />
            <stop offset="70%" style={{ stopColor: '#F8C9D4', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#FDA4BA', stopOpacity: 0.6 }} />
          </radialGradient>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" style={{ stopColor: '#FDA4BA', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#F8C9D4', stopOpacity: 1 }} />
          </radialGradient>
        </defs>
      </motion.svg>

      {/* Brand Name */}
      <div className="flex flex-col">
        <h1
          className={`${textSizes[size]} font-display font-bold leading-tight`}
          style={{ color: textColor }}
        >
          <span className="bg-gradient-to-r from-baby-pink to-baby-pink/80 bg-clip-text text-transparent">
            Lunave
          </span>
        </h1>
        <span
          className={`${size === 'small' ? 'text-xs' : 'text-sm'} font-light tracking-wider`}
          style={{ color: textColor, opacity: 0.8 }}
        >
          Nails
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;