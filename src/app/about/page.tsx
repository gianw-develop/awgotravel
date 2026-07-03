"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Globe } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We are passionate travelers ourselves. Every trip we plan reflects our deep love for exploration and discovery.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We set the highest standards in travel planning, ensuring every detail exceeds your expectations.",
  },
  {
    icon: Users,
    title: "Personal Touch",
    description:
      "No two travelers are alike. We listen, understand, and create personalized experiences just for you.",
  },
  {
    icon: Globe,
    title: "Global Expertise",
    description:
      "Our extensive network of partners worldwide ensures authentic, high-quality experiences everywhere you go.",
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
            className="text-gold text-sm font-medium tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Story
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About AW GO TRAVEL
          </motion.h1>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your trusted partner in creating unforgettable travel experiences
            around the world.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6">
                Born from a Love of Travel
              </h2>
              <div className="space-y-4 text-slate leading-relaxed">
                <p>
                  AW GO TRAVEL LLC was founded in 2026 with a clear mission: to
                  make premium travel accessible and effortless. Based in
                  Wyoming, we serve travelers across the United States and
                  beyond, crafting bespoke journeys that transform ordinary
                  vacations into extraordinary adventures.
                </p>
                <p>
                  Our team of experienced travel consultants brings together
                  years of industry expertise and personal travel experience.
                  We believe that travel is not just about visiting new places
                  — it&apos;s about creating lasting memories, discovering new
                  cultures, and finding inspiration in every corner of the
                  globe.
                </p>
                <p>
                  Whether you dream of relaxing on a pristine beach in the
                  Maldives, exploring ancient ruins in Peru, or savoring wine
                  in Tuscany, we are here to make it happen — seamlessly and
                  memorably.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                  alt="Travel planning"
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold rounded-xl p-6 shadow-xl">
                  <div className="text-navy font-bold text-3xl">2026</div>
                  <div className="text-navy/70 text-sm">Founded in Wyoming</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
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
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    Our Mission
                  </h3>
                  <p className="text-slate leading-relaxed">
                    To democratize premium travel by providing expert planning,
                    exclusive access, and personalized service that transforms
                    every journey into an unforgettable experience. We strive to
                    be the bridge between your travel dreams and reality.
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
                  <h3 className="text-2xl font-bold text-navy mb-3">
                    Our Vision
                  </h3>
                  <p className="text-slate leading-relaxed">
                    To become the most trusted and innovative travel agency in
                    the Americas, known for our commitment to excellence,
                    sustainability, and creating meaningful connections between
                    travelers and the world.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
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
                  <h4 className="text-lg font-bold text-navy mb-3">
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Let&apos;s Plan Your Next Adventure
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Ready to explore the world? Our team is here to help you every
              step of the way.
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-gold hover:bg-gold-dark text-navy font-semibold px-10 py-4 rounded-full transition-all duration-300 text-sm uppercase tracking-wider"
            >
              Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
