"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Phone, ChevronDown } from "lucide-react";
import { WA_BASE } from "@/lib/contact";

const floatingWords = ["Durable", "Powerful", "Reliable", "Efficient"];

type Particle = {
  width: number;
  height: number;
  left: string;
  top: string;
  isYellow: boolean;
};

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);

  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        isYellow: i % 3 === 0,
      }))
    );
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 60%, #071B45 100%)" }}
    >
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,181,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(247,181,0,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7B500]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      {/* Floating particles — client only to avoid hydration mismatch */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
            background: p.isYellow ? "#F7B500" : "rgba(255,255,255,0.3)",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: 4 + (i % 5),
            repeat: Infinity,
            delay: (i % 8) * 0.5,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 lg:pt-24 lg:pb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#F7B500]/10 border border-[#F7B500]/30 rounded-full px-4 py-1.5 mb-4"
            >
              <span className="w-2 h-2 rounded-full bg-[#F7B500] animate-pulse" />
              <span className="text-[#F7B500] text-xs sm:text-sm font-medium">
                2026 Product Catalogue — Now Available
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.7, ease: "easeOut" }}
            >
              Built for{" "}
              <span className="text-gradient">Today.</span>
              <br />
              Ready for{" "}
              <span className="text-gradient">Tomorrow.</span>
            </motion.h1>

            <motion.p
              className="text-base lg:text-lg text-white/60 mb-5 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.5 }}
            >
              Road &amp; Building Construction Equipment — engineered for superior performance,
              built to last. Pan India delivery with expert after-sales support.
            </motion.p>

            {/* Floating keywords */}
            <motion.div
              className="flex flex-wrap gap-2 mb-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9 }}
            >
              {floatingWords.map((word, i) => (
                <motion.span
                  key={word}
                  className="text-xs font-semibold uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.9 + i * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1 }}
            >
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#F7B500] hover:bg-yellow-400 text-[#071B45] font-bold px-6 py-3 rounded-full transition-all hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5 group text-sm sm:text-base"
              >
                Explore Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-full transition-all backdrop-blur-sm text-sm sm:text-base"
              >
                Contact Us
              </Link>
              <a
                href={`${WA_BASE}?text=${encodeURIComponent("Hi, I would like to request a demo call for your construction equipment.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 text-white/60 hover:text-white font-medium px-5 py-3 rounded-full transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                Request Demo
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.3 }}
            >
              {[
                { value: "1000+", label: "Machines Delivered" },
                { value: "500+", label: "Clients Served" },
                { value: "25+", label: "Cities" },
                { value: "10+", label: "Equipment Types" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl sm:text-2xl font-black text-[#F7B500]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Machine visual */}
          <motion.div
            className="relative hidden lg:block"
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.6, duration: 0.8, ease: "easeOut" }}
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-[#F7B500]/20 rounded-3xl blur-3xl scale-110" />

            {/* Catalogue cover */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/catalogue/0_cover.png"
                alt="Techno Machinery 2026 Catalogue"
                width={580}
                height={750}
                className="object-cover w-full animate-float"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B45]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <a
                  href="/Techno_Catalogue_FullBleed.pdf"
                  download="Techno_Machinery_Catalogue_2026.pdf"
                  className="inline-flex items-center gap-2 bg-[#F7B500] hover:bg-yellow-400 text-[#071B45] font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4" />
                  Get Catalogue
                </a>
              </div>
            </div>

            {/* Floating card: quality badge */}
            <motion.div
              className="absolute -left-4 top-16 bg-white rounded-xl p-3 shadow-xl"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-[#F7B500] text-xs font-bold uppercase tracking-widest mb-1">
                Premium Quality
              </div>
              <div className="text-navy text-sm font-black">ISO Certified</div>
              <div className="text-gray-400 text-xs">All India Delivery</div>
            </motion.div>

            {/* Floating card: product count */}
            <motion.div
              className="absolute -right-4 bottom-20 bg-white rounded-xl p-3 shadow-xl"
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-[#F7B500] text-xl font-black">100+</div>
              <div className="text-gray-500 text-xs mt-0.5">Product Models</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
