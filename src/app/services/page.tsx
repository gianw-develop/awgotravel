"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Plane,
  Hotel,
  Map,
  Headphones,
  Shield,
  CreditCard,
  Users,
  Compass,
  Palmtree,
  Car,
  Camera,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const mainServices = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Access exclusive airfare deals worldwide. We search hundreds of airlines to find the best routes, prices, and cabin classes. Business and first-class upgrades available.",
    features: [
      "Best price guarantee",
      "Flexible rebooking",
      "Premium cabin access",
      "Group bookings",
    ],
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Reservations",
    description:
      "From luxury five-star resorts to charming boutique hotels, we hand-select accommodations that match your style, preferences, and budget.",
    features: [
      "Luxury & boutique options",
      "All-inclusive packages",
      "Late checkout perks",
      "Room upgrades",
    ],
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description:
      "Every traveler is unique. Our expert consultants design bespoke travel plans around your interests, pace, and dreams — from adventure to relaxation.",
    features: [
      "Personalized planning",
      "Local expert guides",
      "Hidden gems & secrets",
      "Flexible scheduling",
    ],
  },
  {
    icon: Users,
    title: "Group Travel",
    description:
      "Planning a family reunion, corporate retreat, or destination wedding? We specialize in coordinating seamless group travel for any occasion.",
    features: [
      "Corporate retreats",
      "Destination weddings",
      "Family reunions",
      "Team building trips",
    ],
  },
  {
    icon: Compass,
    title: "Adventure Tours",
    description:
      "Thrill-seekers rejoice! From safari expeditions to mountain treks, we curate adrenaline-pumping adventures with safety and comfort.",
    features: [
      "Safari & wildlife",
      "Mountain trekking",
      "Water sports",
      "Extreme adventures",
    ],
  },
  {
    icon: Palmtree,
    title: "Beach & Cruise Vacations",
    description:
      "Sun, sand, and sea await. Whether it's a Caribbean cruise or a Maldivian resort, we create the perfect beach getaway.",
    features: [
      "Luxury cruises",
      "Beach resorts",
      "Island hopping",
      "Honeymoon packages",
    ],
  },
];

const additionalServices = [
  { icon: Car, label: "Airport Transfers" },
  { icon: Shield, label: "Travel Insurance" },
  { icon: CreditCard, label: "Flexible Payments" },
  { icon: Camera, label: "Photography Tours" },
  { icon: Utensils, label: "Food & Wine Tours" },
  { icon: Headphones, label: "24/7 Support" },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-xs font-medium tracking-[0.4em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mt-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive travel services designed to make every journey
            seamless, memorable, and truly exceptional.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={100}>
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    i % 2 === 1 ? "lg:direction-rtl" : ""
                  }`}
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                      <service.icon className="w-7 h-7 text-gold" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feat) => (
                        <div
                          key={feat}
                          className="flex items-center gap-2 text-sm text-navy"
                        >
                          <div className="w-2 h-2 rounded-full bg-gold" />
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`bg-cream rounded-2xl p-12 flex items-center justify-center ${
                      i % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <service.icon className="w-32 h-32 text-navy/10" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Additional Services
            </h2>
            <p className="text-slate text-lg max-w-xl mx-auto">
              Extra services to enhance every aspect of your travel experience.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 50}>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <s.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <span className="text-navy font-semibold text-sm">
                    {s.label}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Ready to Start Planning?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Contact our team today for a free consultation and personalized
              travel proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Get a Free Quote
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
