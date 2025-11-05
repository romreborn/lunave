import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Star } from "lucide-react";

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}

interface ServicesSectionProps {
  onBookService: (serviceName: string) => void;
}

export function ServicesSection({ onBookService }: ServicesSectionProps) {
  const services: Service[] = [
    {
      id: "basic-manicure",
      name: "Basic Manicure",
      description: "Classic manicure with shaping and cuticle care",
      price: "IDR 150K",
      duration: "45 min",
    },
    {
      id: "gel-polish",
      name: "Gel Polish",
      description: "Long-lasting gel polish with 2-3 week durability",
      price: "IDR 200K",
      duration: "60 min",
      popular: true,
    },
    {
      id: "gel-x-extensions",
      name: "Premium Gel-X Extensions",
      description: "Soft gel extensions with custom designs",
      price: "IDR 350K",
      duration: "90 min",
      popular: true,
    },
    {
      id: "nail-art",
      name: "Nail Art Design",
      description: "Custom artistic designs with gems and details",
      price: "IDR 250K+",
      duration: "60-120 min",
    },
    {
      id: "spa-pedicure",
      name: "Spa Pedicure",
      description: "Luxury foot treatment with massage",
      price: "IDR 180K",
      duration: "60 min",
    },
    {
      id: "nail-repair",
      name: "Nail Repair & Maintenance",
      description: "Quick fixes and basic maintenance",
      price: "IDR 100K",
      duration: "30 min",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 border-pink-200">
            Our Services
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Premium Nail Care Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            From classic manicures to custom nail art, we offer a comprehensive range of services 
            designed to enhance your natural beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col hover:shadow-xl transition-shadow duration-300 border-pink-100 relative overflow-hidden group">
                {service.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-1 rounded-bl-lg flex items-center gap-1">
                    <Star className="w-3 h-3 fill-white" />
                    <span className="text-sm">Popular</span>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-rose-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-start justify-between gap-2">
                    <span>{service.name}</span>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="relative z-10 flex items-center justify-between pt-4 border-t border-pink-100">
                  <span className="text-pink-600">{service.price}</span>
                  <Button
                    onClick={() => onBookService(service.name)}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white"
                  >
                    Book Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
