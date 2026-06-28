"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Shield, Target, Users, Truck } from "lucide-react";

const highlights = [
  { icon: Shield, label: "Premium Quality", desc: "ISO-grade construction equipment from trusted brands" },
  { icon: Target, label: "Our Mission", desc: "Deliver world-class equipment that enhances productivity and safety" },
  { icon: Users, label: "Expert Team", desc: "Professional guidance and dedicated after-sales support" },
  { icon: Truck, label: "Pan India Delivery", desc: "Fast & reliable delivery with secure packaging across India" },
];

export default function CompanyOverview() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F7B500]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Image collage */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/catalogue/1.png"
                alt="About Techno Machinery"
                width={600}
                height={500}
                className="object-cover w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071B45]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4">
                  <div className="text-[#F7B500] font-bold text-lg">10+ Years</div>
                  <div className="text-white/80 text-sm">of Industry Excellence</div>
                </div>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute right-2 sm:-right-6 top-8 sm:top-12 bg-[#071B45] text-white rounded-xl p-4 sm:p-5 shadow-2xl border border-[#F7B500]/20"
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="text-3xl font-black text-[#F7B500]">500+</div>
              <div className="text-white/60 text-xs mt-1">Happy Customers</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#071B45] mt-3 mb-6 leading-tight">
              About Techno{" "}
              <span className="text-gradient">Machinery</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              TECHNO MACHINERY, powered by Ambey Service, is a leading supplier of road and
              building construction equipment in India. We specialize in delivering high-quality
              machinery and reliable after-sales support to contractors, builders, and
              infrastructure companies.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              With a strong commitment to quality, innovation, and customer satisfaction, we offer
              a comprehensive range of construction equipment designed for durability, performance,
              and efficiency.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#F7B500]/30 hover:bg-[#F7B500]/5 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <item.icon className="w-6 h-6 text-[#F7B500] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-[#071B45] text-sm mb-1">{item.label}</div>
                  <div className="text-gray-500 text-xs leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
