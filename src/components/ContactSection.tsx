import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

interface ContactSectionProps {
  onWhatsAppClick: () => void;
}

export function ContactSection({ onWhatsAppClick }: ContactSectionProps) {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Jakarta Selatan, Indonesia",
      subValue: "Premium Shopping District",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+62 812-3456-7890",
      subValue: "Call us anytime",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "hello@lunavenails.com",
      subValue: "We'll reply within 24hrs",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Hours",
      value: "Mon - Sun: 10:00 - 21:00",
      subValue: "Open every day",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 border-pink-200 bg-white">
            Get in Touch
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Book Your Appointment
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Ready to transform your nails into works of art? Contact us today to schedule your appointment 
            or inquire about our services.
          </p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              onClick={onWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <p className="text-sm text-gray-500 mt-3">
              Instant confirmation • Fast response • Easy booking
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-pink-100 bg-white/80 backdrop-blur-sm">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                      {info.icon}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{info.label}</p>
                  <p className="text-gray-900 mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.subValue}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-8 border-t border-pink-200 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 mb-2">
            © 2025 Lunavè Nails Studio. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Where Beauty Meets Art • Jakarta, Indonesia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
