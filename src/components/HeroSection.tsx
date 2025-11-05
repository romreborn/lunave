import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Sparkles, Palette, Clock, Shield, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onBookClick: () => void;
  onViewServicesClick: () => void;
}

export function HeroSection({ onBookClick, onViewServicesClick }: HeroSectionProps) {
  const features = [
    { icon: <Sparkles className="w-4 h-4" />, text: "Premium Quality" },
    { icon: <Palette className="w-4 h-4" />, text: "Custom Designs" },
    { icon: <Clock className="w-4 h-4" />, text: "Expert Service" },
    { icon: <Shield className="w-4 h-4" />, text: "Hygienic Standards" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1731644139982-b75487df663e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwc2Fsb24lMjBsdXh1cnl8ZW58MXx8fHwxNzYyMzM0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-pink-400/60 to-rose-400/65" />
      
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-300/15 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-6 px-6 py-2 bg-white/90 backdrop-blur-sm border-white/50 text-white">
            Welcome to Lunavè Nails Studio
          </Badge>
        </motion.div>

        <motion.h1
          className="mb-6 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Where Beauty Meets Art
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-white/95 mb-10 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Experience premium nail care and artistic designs at Jakarta's most elegant nail studio. 
          We create wearable art that expresses your unique style and personality, using premium 
          products and expert techniques in a luxurious, hygienic environment.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={onBookClick}
            className="bg-white text-pink-600 hover:bg-pink-50 px-8 shadow-lg"
          >
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onViewServicesClick}
            className="border-white text-white hover:bg-white/20 backdrop-blur-sm"
          >
            View Services
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <Badge variant="secondary" className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800">
                <span className="mr-2">{feature.icon}</span>
                {feature.text}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col items-center gap-2 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <span className="text-sm">Discover More</span>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
