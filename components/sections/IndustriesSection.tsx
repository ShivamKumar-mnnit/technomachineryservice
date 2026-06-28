"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const industries = [
  { name: "Road Construction", icon: "🛣️", desc: "Highways, expressways and urban road projects" },
  { name: "Bridge Construction", icon: "🌉", desc: "Girder bridges, flyovers and elevated corridors" },
  { name: "Infrastructure", icon: "🏗️", desc: "Dams, reservoirs and large-scale civil works" },
  { name: "Industrial", icon: "🏭", desc: "Factories, warehouses and industrial complexes" },
  { name: "Commercial", icon: "🏢", desc: "Malls, offices and commercial developments" },
  { name: "Residential", icon: "🏠", desc: "Housing societies, townships and apartments" },
  { name: "Government Projects", icon: "🏛️", desc: "Smart city and government infrastructure" },
];

export default function IndustriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
            Our Reach
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#071B45] mt-3 mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Techno Machinery equipment powers projects across every sector of construction and infrastructure.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F7B500]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.07, duration: 0.4 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {ind.icon}
              </div>
              <h3 className="font-bold text-[#071B45] text-sm mb-2 group-hover:text-[#F7B500] transition-colors">
                {ind.name}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">{ind.desc}</p>
            </motion.div>
          ))}

          {/* Pan India delivery card */}
          <motion.div
            className="bg-gradient-to-br from-[#071B45] to-[#0D1117] rounded-2xl p-6 border border-[#F7B500]/20 text-center flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="text-4xl mb-3">🚚</div>
            <div className="text-[#F7B500] font-black text-xl mb-1">Pan India</div>
            <div className="text-white/60 text-xs">Delivery & Support</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
