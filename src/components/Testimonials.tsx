"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    location: "New York, USA",
    text: "AW GO TRAVEL planned our honeymoon to the Maldives and it was absolutely perfect. Every detail was thoughtfully arranged. We couldn't have asked for a better experience!",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Carlos Rodriguez",
    location: "Miami, FL",
    text: "The team at AW GO TRAVEL made our family trip to Europe seamless and unforgettable. Their expertise and personal touch made all the difference.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Emma Thompson",
    location: "Los Angeles, CA",
    text: "I've traveled with many agencies but AW GO TRAVEL stands out. Their attention to detail and premium service is truly world-class. Highly recommended!",
    rating: 5,
    avatar: "ET",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mt-3 mb-5">
            What Our Travelers Say
          </h2>
          <p className="text-slate max-w-2xl mx-auto text-lg">
            Real experiences from real travelers who trusted us with their dream
            vacations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 150}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 relative">
                <Quote className="w-10 h-10 text-gold/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-gold text-gold"
                    />
                  ))}
                </div>
                <p className="text-slate text-sm leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-11 h-11 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-navy text-sm">{t.name}</div>
                    <div className="text-slate text-xs">{t.location}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
