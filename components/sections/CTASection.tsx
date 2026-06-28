"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { WA_BASE } from "@/lib/contact";

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
    >
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#F7B500]/10"
            style={{ width: 300 + i * 150, height: 300 + i * 150 }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
            Ready to Build?
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mt-4 mb-5 leading-tight">
            Need Machinery for<br />Your Next Project?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Get instant quotation via WhatsApp or browse our complete product catalogue.
            Pan India delivery with expert after-sales support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hello Techno Machinery, I would like to chat about your equipment pricing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-green-400 text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-green-400/30 hover:-translate-y-1 text-lg"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp for Pricing
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#F7B500] hover:bg-yellow-400 text-[#071B45] font-bold px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-1 text-lg"
            >
              Browse Products →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
