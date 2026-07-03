"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

function AirplaneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M38 20L28 26L20 22L8 28L10 24L18 20L10 16L8 12L20 18L28 14L38 20Z" />
    </svg>
  );
}

function CloudShape({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 80" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="70" cy="50" rx="60" ry="25" fill="currentColor" />
      <ellipse cx="110" cy="40" rx="50" ry="30" fill="currentColor" />
      <ellipse cx="140" cy="50" rx="45" ry="22" fill="currentColor" />
      <ellipse cx="50" cy="45" rx="35" ry="20" fill="currentColor" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80')`,
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="animate-fly-across absolute top-[15%]">
          <AirplaneIcon className="w-8 h-8 text-white/30" />
        </div>
        <div className="animate-fly-across-reverse absolute top-[35%]">
          <AirplaneIcon className="w-5 h-5 text-gold/20" />
        </div>
        <div className="animate-fly-across absolute top-[55%]" style={{ animationDelay: "4s" }}>
          <AirplaneIcon className="w-6 h-6 text-white/15" />
        </div>

        <div className="animate-cloud-drift absolute top-[20%] text-white/5 w-48">
          <CloudShape />
        </div>
        <div
          className="animate-cloud-drift absolute top-[60%] text-white/3 w-64"
          style={{ animationDelay: "-15s", animationDuration: "40s" }}
        >
          <CloudShape />
        </div>
        <div
          className="animate-cloud-drift absolute top-[40%] text-white/4 w-40"
          style={{ animationDelay: "-8s", animationDuration: "35s" }}
        >
          <CloudShape />
        </div>
      </div>

      <div className="absolute top-[10%] right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-gold/20 to-transparent animate-float" />
      <div
        className="absolute bottom-[20%] left-[15%] w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold text-sm sm:text-base font-medium tracking-[0.3em] uppercase mb-6 border border-gold/30 px-5 py-2 rounded-full">
            Premium Travel Experiences
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Discover the World
          <br />
          <span className="gradient-text">Your Way</span>
        </motion.h1>

        <motion.p
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Curated journeys to the world&apos;s most breathtaking destinations.
          Let us create your perfect travel experience with expert planning and
          personalized service.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/destinations"
            className="bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 text-sm uppercase tracking-wider animate-pulse-glow"
          >
            Explore Destinations
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 text-sm uppercase tracking-wider"
          >
            Plan Your Trip
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center gap-12 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {[
            { number: "500+", label: "Destinations" },
            { number: "10K+", label: "Happy Travelers" },
            { number: "15+", label: "Years Experience" },
            { number: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center hidden sm:block">
              <div className="text-2xl md:text-3xl font-bold text-gold">
                {stat.number}
              </div>
              <div className="text-white/60 text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white/50" />
      </motion.div>
    </section>
  );
}
