"use client";

import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";
import { Plane } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
              <Plane className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next
            <br />
            <span className="gradient-text">Adventure?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Let our expert travel consultants craft the perfect itinerary for
            you. Contact us today and start planning your dream trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-sm uppercase tracking-wider"
            >
              Get a Free Quote
            </Link>
            <a
              href="mailto:sales@awgotravel.com"
              className="border-2 border-white/30 hover:border-white text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-sm uppercase tracking-wider"
            >
              Email Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
