"use client";

import { AnimatedSection } from "./AnimatedSection";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const destinations = [
  {
    title: "Maldives",
    region: "Indian Ocean",
    description: "Crystal clear waters and overwater villas in paradise",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
    price: "From $2,499",
  },
  {
    title: "Santorini",
    region: "Greece",
    description: "Iconic white architecture and stunning Aegean sunsets",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    price: "From $1,899",
  },
  {
    title: "Bali",
    region: "Indonesia",
    description: "Ancient temples, emerald rice terraces, and tropical bliss",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    price: "From $1,599",
  },
  {
    title: "Swiss Alps",
    region: "Switzerland",
    description: "Majestic mountain peaks and charming alpine villages",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80",
    price: "From $2,199",
  },
  {
    title: "Cancún",
    region: "Mexico",
    description: "Pristine beaches, vibrant nightlife, and ancient Mayan ruins",
    image: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=800&q=80",
    price: "From $999",
  },
  {
    title: "Tokyo",
    region: "Japan",
    description: "Where ancient tradition meets futuristic innovation",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    price: "From $1,799",
  },
];

export function FeaturedDestinations() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            Top Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
            Where Dreams Take Flight
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Explore our handpicked collection of the world&apos;s most
            captivating destinations, curated for the ultimate travel experience.
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
                  <div className="absolute top-4 right-4 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-full">
                    {dest.price}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium">{dest.region}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-slate text-sm mb-4 leading-relaxed">
                    {dest.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-gold font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl text-sm uppercase tracking-wider"
          >
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
