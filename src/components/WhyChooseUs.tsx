"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Check, Globe, Heart, Award, ShieldCheck } from "lucide-react";
import Link from "next/link";

const reasons = [
  "Registered LLC — Wyoming, United States",
  "All services provided directly by our team",
  "Transparent pricing with no hidden fees",
  "Clear cancellation and refund policies",
  "Dedicated personal travel consultant assigned to you",
  "Secure payments and confirmed booking documentation",
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1436491865332-7a61a109db05?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
              Why AW GOTRAVEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mt-3 mb-6">
              Trust &amp; Transparency
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              AW GOTRAVEL LLC is a registered travel services company. We
              provide online travel planning, itinerary assistance, hotel and
              flight booking support, vacation package coordination, and
              customer travel consultation services. You pay for services we
              deliver directly.
            </p>
            <ul className="space-y-4 mb-10">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{reason}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-[0.2em]"
            >
              About Our Company
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  number: "50+",
                  label: "Countries",
                  desc: "Worldwide planning",
                },
                {
                  icon: Heart,
                  number: "98%",
                  label: "Satisfaction",
                  desc: "Client retention",
                },
                {
                  icon: Award,
                  number: "Top",
                  label: "Rated",
                  desc: "Luxury concierge",
                },
                {
                  icon: ShieldCheck,
                  number: "100%",
                  label: "Secure",
                  desc: "Payment protection",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-semibold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gold text-sm font-semibold">
                    {stat.label}
                  </div>
                  <div className="text-white/50 text-xs mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
