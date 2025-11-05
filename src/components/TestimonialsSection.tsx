import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Users, Award, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  service: string;
  initials: string;
}

interface TestimonialsSectionProps {
  onBookClick: () => void;
}

export function TestimonialsSection({ onBookClick }: TestimonialsSectionProps) {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Siti Rahma",
      rating: 5,
      text: "Absolutely love my Gel-X extensions! The attention to detail and artistry is incredible. Will definitely come back!",
      service: "Gel-X Extensions",
      initials: "SR",
    },
    {
      id: "2",
      name: "Amanda Chen",
      rating: 5,
      text: "Best nail salon in Jakarta! The staff is professional, the place is super clean, and my nails always look perfect for weeks.",
      service: "Gel Polish",
      initials: "AC",
    },
    {
      id: "3",
      name: "Dina Putri",
      rating: 5,
      text: "The custom nail art designs are stunning! They really listen to what you want and create something unique every time.",
      service: "Nail Art Design",
      initials: "DP",
    },
    {
      id: "4",
      name: "Jessica Tan",
      rating: 5,
      text: "The spa pedicure was so relaxing! Great massage and my feet look amazing. This is my new go-to place.",
      service: "Spa Pedicure",
      initials: "JT",
    },
    {
      id: "5",
      name: "Maya Kusuma",
      rating: 5,
      text: "Such a luxurious experience! From the ambiance to the service quality, everything exceeded my expectations.",
      service: "Premium Services",
      initials: "MK",
    },
    {
      id: "6",
      name: "Rina Lestari",
      rating: 5,
      text: "I've tried many nail salons, but Lunavè is by far the best. The quality and longevity of their work is unmatched!",
      service: "Regular Client",
      initials: "RL",
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "5000+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate" },
    { icon: <Clock className="w-6 h-6" />, value: "3+", label: "Years Experience" },
    { icon: <Star className="w-6 h-6" />, value: "4.9", label: "Average Rating" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 border-pink-200">
            Testimonials
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it - hear from our satisfied clients about their experiences at Lunavè Nails Studio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-pink-100">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500">
                      <AvatarFallback className="text-white">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.service}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-pink-500 text-pink-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-rose-50"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-3 text-pink-600">{stat.icon}</div>
              <div className="mb-1 text-pink-600">{stat.value}</div>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={onBookClick}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8"
          >
            Book Your Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
