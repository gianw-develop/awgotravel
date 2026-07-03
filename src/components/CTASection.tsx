"use client";

import { AnimatedSection } from "./AnimatedSection";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-gold text-[10px] font-medium tracking-[0.5em] uppercase mb-6 block">
            Start Here
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Ready to Design
            <br />
            <span className="gradient-text font-medium">Your Next Journey?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Tell us what you&apos;re looking for. Our team will respond within 24
            hours with a private consultation and initial scope.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold hover:bg-gold-dark text-navy font-medium px-12 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-xs uppercase tracking-[0.3em]"
            >
              Private Inquiry
            </Link>
            <a
              href="mailto:sales@awgotravel.com"
              className="border border-white/20 hover:border-white/50 text-white font-medium px-12 py-4 rounded-full transition-all duration-300 hover:bg-white/5 text-xs uppercase tracking-[0.3em]"
            >
              Email Directly
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
