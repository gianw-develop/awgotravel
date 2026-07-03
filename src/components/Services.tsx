"use client";

import { AnimatedSection } from "./AnimatedSection";
import {
  Plane,
  Hotel,
  Map,
  Headphones,
  Shield,
  CreditCard,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Access to the best airfare deals worldwide with flexible booking options and premium cabin upgrades.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "Handpicked luxury hotels, boutique resorts, and unique accommodations tailored to your preferences.",
  },
  {
    icon: Map,
    title: "Custom Itineraries",
    description:
      "Personalized travel plans designed around your interests, pace, and budget for a seamless journey.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance before, during, and after your trip for complete peace of mind.",
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description:
      "Comprehensive coverage options to protect your investment and ensure worry-free travels.",
  },
  {
    icon: CreditCard,
    title: "Flexible Payments",
    description:
      "Convenient payment plans and financing options to make your dream vacation accessible.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
            Everything You Need to Travel
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            From planning to landing, we handle every detail so you can focus on
            creating memories.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white">
                <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-14">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border-2 border-navy hover:bg-navy text-navy hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
          >
            All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
