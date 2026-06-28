"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { value: 1000, suffix: "+", label: "Machines Delivered", icon: "🏗️" },
  { value: 500, suffix: "+", label: "Satisfied Clients", icon: "🤝" },
  { value: 25, suffix: "+", label: "Cities Served", icon: "📍" },
  { value: 10, suffix: "+", label: "Equipment Categories", icon: "⚙️" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-10 sm:py-14 lg:py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071B45, #0D1117)" }}
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7B500]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7B500]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-black text-[#F7B500] mb-2">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    delay={0.2}
                  />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-white/60 text-sm uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
