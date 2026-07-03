"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate travelers ourselves. Every journey we plan reflects our deep love for discovery and extraordinary experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We set the highest standards in luxury travel planning, ensuring every detail exceeds your expectations.",
  },
  {
    icon: Users,
    title: "Personal Service",
    description:
      "No two travelers are alike. We listen, understand, and craft personalized itineraries and services just for you.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description:
      "Our worldwide knowledge and vetted partners ensure authentic, high-quality experiences in every destination.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            className="text-gold text-xs font-medium tracking-[0.4em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Company
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mt-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About AW GOTRAVEL
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A registered travel services company providing luxury planning,
            booking assistance, and personal concierge.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-gold text-xs font-medium tracking-[0.4em] uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-navy mt-3 mb-6">
                Luxury Travel, Personally Delivered
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  <strong className="text-navy">AW GOTRAVEL LLC</strong> was
                  founded on July 1, 2026 and is registered in the State of
                  Wyoming, United States. We provide online travel planning,
                  bespoke itinerary design, hotel and flight booking assistance,
                  vacation package coordination, and personal travel concierge
                  services.
                </p>
                <p>
                  Our team of experienced travel consultants works directly with
                  each client to understand their preferences, interests, and
                  budget. We then design, coordinate, and deliver a complete
                  travel experience — from the first consultation to the last
                  day of your journey.
                </p>
                <p>
                  Every service we offer is performed directly by our team. We
                  do not operate as a marketplace or payment intermediary. When
                  you book with AW GOTRAVEL, you are paying for our travel
                  planning expertise, coordination services, and confirmed
                  arrangements that we manage on your behalf.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury travel planning"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold rounded-xl p-6 shadow-xl">
                  <div className="text-navy font-semibold text-3xl">2026</div>
                  <div className="text-navy/70 text-sm">Founded in Wyoming</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-8 h-8 text-gold shrink-0" />
                <h3 className="text-2xl font-semibold text-navy">
                  Company Information
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-slate mb-1">Legal Name</div>
                  <div className="text-navy font-semibold">AW GOTRAVEL LLC</div>
                </div>
                <div>
                  <div className="text-slate mb-1">State of Formation</div>
                  <div className="text-navy font-semibold">Wyoming, USA</div>
                </div>
                <div>
                  <div className="text-slate mb-1">Date of Formation</div>
                  <div className="text-navy font-semibold">July 1, 2026</div>
                </div>
                <div>
                  <div className="text-slate mb-1">Business Type</div>
                  <div className="text-navy font-semibold">
                    Travel Planning &amp; Concierge Services
                  </div>
                </div>
                <div>
                  <div className="text-slate mb-1">Email</div>
                  <a href="mailto:sales@awgotravel.com" className="text-gold font-semibold hover:underline">
                    sales@awgotravel.com
                  </a>
                </div>
                <div>
                  <div className="text-slate mb-1">Website</div>
                  <a href="https://www.awgotravel.com" className="text-gold font-semibold hover:underline">
                    www.awgotravel.com
                  </a>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <p className="text-slate text-sm leading-relaxed">
                  AW GOTRAVEL LLC is a legitimate, registered business entity.
                  All services described on this website are provided directly by
                  our company. We maintain clear{" "}
                  <Link href="/terms" className="text-gold hover:underline">
                    Terms of Service
                  </Link>
                  ,{" "}
                  <Link href="/privacy" className="text-gold hover:underline">
                    Privacy Policy
                  </Link>
                  , and{" "}
                  <Link href="/refund-policy" className="text-gold hover:underline">
                    Refund &amp; Cancellation Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <AnimatedSection>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-3">
                    Our Mission
                  </h3>
                  <p className="text-slate leading-relaxed">
                    To deliver world-class luxury travel planning and concierge
                    services with full transparency, competitive pricing, and a
                    personal touch that makes every journey exceptional. We
                    manage every aspect of your travel so you can focus on the
                    experience.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={150}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                  <Eye className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy mb-3">
                    Our Vision
                  </h3>
                  <p className="text-slate leading-relaxed">
                    To become the most trusted luxury travel concierge in the
                    Americas — known for bespoke service, integrity, and creating
                    meaningful connections between discerning travelers and the
                    world&apos;s finest destinations.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                    <value.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-3">
                    {value.title}
                  </h4>
                  <p className="text-slate text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5">
              Let&apos;s Plan Your Journey
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Ready to experience luxury travel? Our concierge team is here to
              create your perfect itinerary.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-[0.2em]"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
