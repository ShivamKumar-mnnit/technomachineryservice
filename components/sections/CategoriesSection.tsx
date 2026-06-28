"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import {
  Scissors, Zap, RotateCw, ArrowDownToLine, Layers, Circle,
  GitBranch, Hammer, Truck, Activity, Radio, Wrench
} from "lucide-react";

const categories = [
  { name: "Rebar Cutting Machines", icon: Scissors, color: "from-red-500 to-red-700", desc: "32mm–52mm cutting capacity" },
  { name: "Generators", icon: Zap, color: "from-yellow-500 to-yellow-700", desc: "15 KVA to 62.5 KVA diesel sets" },
  { name: "Concrete Mixers", icon: RotateCw, color: "from-blue-500 to-blue-700", desc: "125 Ltr to 500 Ltr capacity" },
  { name: "Tamping Rammers", icon: ArrowDownToLine, color: "from-green-500 to-green-700", desc: "TR-60 to TR-100 series" },
  { name: "Plate Compactors", icon: Layers, color: "from-purple-500 to-purple-700", desc: "Forward & reversible types" },
  { name: "Power Trowels", icon: Circle, color: "from-pink-500 to-pink-700", desc: "24\" to 60\" blade diameter" },
  { name: "Concrete Cutters", icon: GitBranch, color: "from-orange-500 to-orange-700", desc: "14\" to 20\" floor saws" },
  { name: "Jack Hammers", icon: Hammer, color: "from-teal-500 to-teal-700", desc: "Light to heavy duty breakers" },
  { name: "Backhoe Loaders", icon: Truck, color: "from-indigo-500 to-indigo-700", desc: "30 HP to 60 HP models" },
  { name: "Excavators", icon: Activity, color: "from-cyan-500 to-cyan-700", desc: "8 Ton to 30 Ton class" },
  { name: "Vibratory Rollers", icon: Wrench, color: "from-lime-500 to-lime-700", desc: "Walk-behind to ride-on" },
  { name: "Internal Vibrators", icon: Radio, color: "from-rose-500 to-rose-700", desc: "HMS, IREN, IRFU series" },
];

export default function CategoriesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
            Equipment Range
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#071B45] mt-3 mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Complete range of road and building construction equipment for every project requirement.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <Link
                href={`/products?category=${encodeURIComponent(cat.name)}`}
                className="group block p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#F7B500]/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <cat.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-[#071B45] text-sm mb-1 group-hover:text-[#F7B500] transition-colors leading-tight">
                  {cat.name}
                </h3>
                <p className="text-gray-400 text-xs">{cat.desc}</p>

                {/* Arrow */}
                <div className="mt-3 flex items-center gap-1 text-[#F7B500] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  View Products →
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
