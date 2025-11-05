import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner@2.0.3";

export default function App() {
  const whatsappNumber = "+6281234567890"; // Configure your WhatsApp number here

  const handleWhatsAppBooking = (message?: string) => {
    const defaultMessage = "Hi Lunavè Nails Studio! I would like to book an appointment.";
    const encodedMessage = encodeURIComponent(message || defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp...", {
      description: "You'll be redirected to WhatsApp to complete your booking.",
    });
  };

  const handleBookService = (serviceName: string) => {
    const message = `Hi Lunavè Nails Studio! I would like to book an appointment for: ${serviceName}`;
    handleWhatsAppBooking(message);
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />
      
      <Header onBookClick={() => handleWhatsAppBooking()} />
      
      <HeroSection
        onBookClick={() => handleWhatsAppBooking()}
        onViewServicesClick={handleViewServices}
      />
      
      <ServicesSection onBookService={handleBookService} />
      
      <GallerySection />
      
      <TestimonialsSection onBookClick={() => handleWhatsAppBooking()} />
      
      <ContactSection onWhatsAppClick={() => handleWhatsAppBooking()} />
    </div>
  );
}
