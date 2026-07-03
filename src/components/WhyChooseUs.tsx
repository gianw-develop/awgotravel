"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Check, Globe, Heart, Award } from "lucide-react";
import Link from "next/link";

const reasons = [
  "Expert travel consultants with global experience",
  "Best price guarantee on all bookings",
  "Curated luxury & boutique accommodations",
  "Personalized itineraries tailored to you",
  "Exclusive access to special deals & packages",
  "Seamless booking process from start to finish",
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
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
              Why AW GO TRAVEL
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Travel with Confidence
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              With years of expertise in crafting premium travel experiences, we
              are your trusted partner for exploring the world. Every detail,
              every moment, meticulously planned for your enjoyment.
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
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
            >
              About Us
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Globe,
                  number: "50+",
                  label: "Countries",
                  desc: "Worldwide coverage",
                },
                {
                  icon: Heart,
                  number: "98%",
                  label: "Satisfaction",
                  desc: "Happy travelers",
                },
                {
                  icon: Award,
                  number: "Top",
                  label: "Rated",
                  desc: "Premium service",
                },
                {
                  icon: Check,
                  number: "100%",
                  label: "Trusted",
                  desc: "Licensed agency",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center hover:bg-white/12 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
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
