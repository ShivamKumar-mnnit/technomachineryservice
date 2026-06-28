"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield, Headphones, Truck, Star, Zap, Users, Award, Wrench
} from "lucide-react";

const reasons = [
  { icon: Shield, title: "Premium Quality", desc: "High-quality construction equipment from trusted brands ensuring superior performance and durability." },
  { icon: Headphones, title: "After Sales Support", desc: "Prompt after-sales service and maintenance support to keep your machinery running smoothly." },
  { icon: Truck, title: "Pan India Delivery", desc: "Fast and reliable delivery across India with secure packaging and logistics support." },
  { icon: Star, title: "Trusted & Reliable", desc: "We believe in transparency, honesty, and quality service, making us a trusted partner for construction professionals." },
  { icon: Zap, title: "High Performance", desc: "All equipment is designed for maximum efficiency, productivity and long-term durability on the job site." },
  { icon: Users, title: "Expert Team", desc: "Our experienced team provides professional advice and technical support to help you choose the right equipment." },
  { icon: Award, title: "Warranty Coverage", desc: "Comprehensive warranty on all products with dedicated service centers and genuine spare parts availability." },
  { icon: Wrench, title: "Spare Parts Availability", desc: "Genuine spare parts readily available for all major equipment to minimize downtime and maximize efficiency." },
];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #071B45 0%, #0D1117 100%)" }}
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,181,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(247,181,0,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
            Our Advantages
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Why Choose <span className="text-gradient">Us?</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            At Techno Machinery, we are committed to delivering the best construction equipment and unmatched service.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              className="group rounded-2xl p-6 border border-white/8 hover:border-[#F7B500]/40 bg-white/4 hover:bg-white/6 transition-all duration-300 hover:-translate-y-0.5"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#F7B500]/10 border border-[#F7B500]/20 flex items-center justify-center mb-4 group-hover:bg-[#F7B500]/20 transition-colors">
                <item.icon className="w-6 h-6 text-[#F7B500]" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* USP strip */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: "Best Brands & Products" },
            { label: "Competitive Pricing" },
            { label: "Timely Delivery" },
            { label: "Customer First" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F7B500]/10 border border-[#F7B500]/20 text-[#F7B500] text-sm font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F7B500]" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
