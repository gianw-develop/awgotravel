"use client";

import { AnimatedSection } from "./AnimatedSection";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    title: "The Maldives",
    region: "Indian Ocean",
    description: "Private overwater villas, personal butler service, and untouched coral reefs",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    price: "From $4,900",
  },
  {
    title: "Santorini",
    region: "Greece",
    description: "Cliffside suites with caldera views, private yacht charters, and wine tasting tours",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    price: "From $3,800",
  },
  {
    title: "Bali",
    region: "Indonesia",
    description: "Jungle retreats, private temple ceremonies, and bespoke wellness experiences",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    price: "From $3,200",
  },
  {
    title: "Swiss Alps",
    region: "Switzerland",
    description: "Exclusive chalets, helicopter tours, and Michelin-star alpine dining",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    price: "From $5,500",
  },
  {
    title: "Amalfi Coast",
    region: "Italy",
    description: "Cliffside villas, private boat excursions, and curated gastronomic journeys",
    image: "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?auto=format&fit=crop&w=800&q=80",
    price: "From $4,200",
  },
  {
    title: "Tokyo",
    region: "Japan",
    description: "Ryokan retreats, private tea ceremonies, and exclusive cultural immersion",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    price: "From $4,600",
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
            Curated Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mt-3 mb-5">
            Where Luxury Meets Discovery
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Each destination is personally vetted by our travel consultants.
            We handle all planning, reservations, and coordination directly.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <AnimatedSection key={dest.title} delay={i * 100}>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full tracking-wide">
                    {dest.price}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium">{dest.region}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-slate text-sm mb-4 leading-relaxed">
                    {dest.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all duration-300 tracking-wide"
                  >
                    Request Itinerary <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-sm uppercase tracking-[0.2em]"
          >
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
