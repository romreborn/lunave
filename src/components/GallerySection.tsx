import { useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GalleryImage {
  id: string;
  url: string;
  category: string[];
  alt: string;
}

export function GallerySection() {
  const images: GalleryImage[] = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwbWFuaWN1cmV8ZW58MXx8fHwxNzYyMzMwNDc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: ["all", "nail-art", "classic"],
      alt: "Luxury nail art design",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1634235421232-7dee1989eb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWwlMjBuYWlsJTIwZXh0ZW5zaW9uc3xlbnwxfHx8fDE3NjIzMzA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: ["all", "gel-x"],
      alt: "Gel-X nail extensions",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1758225490983-0fae7961e425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwc2Fsb24lMjBwZWRpY3VyZXxlbnwxfHx8fDE3NjIzMzA0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: ["all", "pedicure"],
      alt: "Spa pedicure treatment",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1664794497184-3876c2958f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMG5haWwlMjBkZXNpZ258ZW58MXx8fHwxNzYyMzMwNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: ["all", "nail-art"],
      alt: "Artistic nail design",
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1599671230528-278b4e163ce5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5pY3VyZSUyMHBvbGlzaCUyMGNvbG9yfGVufDF8fHx8MTc2MjMzMDQ4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      category: ["all", "classic"],
      alt: "Classic manicure polish",
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1611821828952-3453ba0f9408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwZ2Vtc3xlbnwxfHx8fDE3NjIzMzA0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: ["all", "nail-art", "gel-x"],
      alt: "Nail art with gems",
    },
  ];

  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = images.filter((img) => img.category.includes(activeTab));

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 border-pink-200 bg-white">
            Our Work
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Portfolio Gallery
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our stunning collection of nail designs, from elegant classics to bold artistic creations.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 mb-12 bg-white/80 backdrop-blur-sm">
            <TabsTrigger value="all">All Designs</TabsTrigger>
            <TabsTrigger value="gel-x">Gel-X</TabsTrigger>
            <TabsTrigger value="nail-art">Nail Art</TabsTrigger>
            <TabsTrigger value="classic">Classic</TabsTrigger>
            <TabsTrigger value="pedicure">Pedicure</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <ImageWithFallback
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
