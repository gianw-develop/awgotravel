"use client";

import { AnimatedSection } from "./AnimatedSection";
import {
  Plane,
  Hotel,
  Map,
  Headphones,
  Shield,
  CalendarCheck,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Map,
    title: "Bespoke Itinerary Design",
    description:
      "Our travel consultants design custom itineraries tailored to your preferences, interests, and pace. Every detail is planned by our team.",
  },
  {
    icon: Plane,
    title: "Flight Booking Assistance",
    description:
      "We research, compare, and book the best flights for your journey. Premium cabins, flexible options, and the best routes — handled by us.",
  },
  {
    icon: Hotel,
    title: "Hotel & Resort Coordination",
    description:
      "We personally vet and book luxury accommodations — from five-star hotels to boutique villas — ensuring quality and your satisfaction.",
  },
  {
    icon: CalendarCheck,
    title: "Vacation Package Coordination",
    description:
      "We assemble complete travel packages with confirmed bookings, transfers, and activities. You receive a fully organized travel experience.",
  },
  {
    icon: Headphones,
    title: "Personal Travel Concierge",
    description:
      "Dedicated concierge support before, during, and after your trip. Restaurant reservations, local experiences, and real-time assistance.",
  },
  {
    icon: Shield,
    title: "Travel Protection Guidance",
    description:
      "We advise on comprehensive travel insurance options and help you understand cancellation policies for complete peace of mind.",
  },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mt-3 mb-5">
            What We Do for You
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            AW GOTRAVEL provides direct travel planning and booking assistance
            services. Every service below is performed by our team.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 100}>
              <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 bg-white">
                <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
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
            className="inline-flex items-center gap-2 border-2 border-navy hover:bg-navy text-navy hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-[0.2em]"
          >
            View All Services
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
