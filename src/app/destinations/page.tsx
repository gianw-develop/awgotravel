"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { MapPin, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const allDestinations = [
  {
    title: "Maldives",
    region: "Indian Ocean",
    description: "Crystal clear waters, overwater villas, and pristine white sand beaches in a tropical paradise.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    price: "From $2,499",
    rating: 4.9,
    category: "Beach",
  },
  {
    title: "Santorini",
    region: "Greece",
    description: "Iconic blue-domed churches, stunning caldera views, and world-class Mediterranean cuisine.",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    price: "From $1,899",
    rating: 4.8,
    category: "Culture",
  },
  {
    title: "Bali",
    region: "Indonesia",
    description: "Ancient temples, emerald rice terraces, tropical forests, and serene spiritual retreats.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    price: "From $1,599",
    rating: 4.9,
    category: "Adventure",
  },
  {
    title: "Swiss Alps",
    region: "Switzerland",
    description: "Snow-capped peaks, scenic train rides, and charming alpine villages with breathtaking scenery.",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    price: "From $2,199",
    rating: 4.7,
    category: "Adventure",
  },
  {
    title: "Cancún",
    region: "Mexico",
    description: "Turquoise Caribbean waters, ancient Mayan ruins, and vibrant nightlife on Mexico's coast.",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=800&q=80",
    price: "From $999",
    rating: 4.6,
    category: "Beach",
  },
  {
    title: "Tokyo",
    region: "Japan",
    description: "A mesmerizing blend of ancient tradition and cutting-edge technology in Asia's greatest metropolis.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    price: "From $1,799",
    rating: 4.8,
    category: "Culture",
  },
  {
    title: "Machu Picchu",
    region: "Peru",
    description: "The legendary lost city of the Incas, perched high in the Andes mountains of Peru.",
    image: "https://images.unsplash.com/photo-1587595431973-160d0d163dad?auto=format&fit=crop&w=800&q=80",
    price: "From $1,699",
    rating: 4.9,
    category: "Adventure",
  },
  {
    title: "Paris",
    region: "France",
    description: "The City of Light — world-class art, romantic boulevards, and exquisite French gastronomy.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    price: "From $1,599",
    rating: 4.7,
    category: "Culture",
  },
  {
    title: "Dubai",
    region: "UAE",
    description: "Ultra-modern architecture, luxury shopping, and desert adventures in the jewel of the Middle East.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    price: "From $1,999",
    rating: 4.6,
    category: "Luxury",
  },
];

export default function DestinationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-xs font-medium tracking-[0.4em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore the World
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mt-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Destinations
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover handpicked destinations across the globe, each offering
            unique experiences and unforgettable memories.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allDestinations.map((dest, i) => (
              <AnimatedSection key={dest.title} delay={i * 80}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-navy text-xs font-bold px-3 py-1 rounded-full">
                      {dest.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full">
                      {dest.price}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gold" />
                      <span className="text-white text-sm font-medium">
                        {dest.region}
                      </span>
                      <div className="flex items-center gap-1 ml-2">
                        <Star className="w-3 h-3 fill-gold text-gold" />
                        <span className="text-white text-xs">{dest.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {dest.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed mb-4">
                      {dest.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all duration-300"
                    >
                      Book This Trip <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
