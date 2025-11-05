import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

interface HeaderProps {
  onBookClick: () => void;
}

export function Header({ onBookClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Services", action: () => scrollToSection("services") },
    { label: "Gallery", action: () => scrollToSection("gallery") },
    { label: "Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-16 h-16">
              <AnimatedLogo />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent" style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>
                Lunavè
              </span>
              <span className="text-gray-600" style={{ fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.1em' }}>
                NAILS STUDIO
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={onBookClick}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            className="md:hidden py-4 border-t border-pink-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onBookClick();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white w-full"
              >
                Book Now
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
