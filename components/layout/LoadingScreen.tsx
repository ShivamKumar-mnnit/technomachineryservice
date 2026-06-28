"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const MIN_DURATION = 2200;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const elapsed = Date.now() - startTime;
          const wait = Math.max(300, MIN_DURATION - elapsed);
          setTimeout(() => setLoading(false), wait);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-yellow-400/30"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}

          {/* Logo with pulse + zoom */}
          <motion.div
            className="relative mb-10"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 -m-8 border-2 border-transparent rounded-full"
              style={{
                borderTopColor: "#F7B500",
                borderRightColor: "rgba(247,181,0,0.3)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 -m-14 border border-transparent rounded-full"
              style={{
                borderBottomColor: "rgba(247,181,0,0.2)",
                borderLeftColor: "rgba(247,181,0,0.1)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Logo */}
            <motion.div
              className="bg-white rounded-2xl px-6 py-4 shadow-2xl"
              animate={{
                scale: [1, 1.03, 1],
                opacity: [1, 0.9, 1],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo.png"
                alt="Techno Machinery"
                width={200}
                height={100}
                className="object-contain w-44 h-auto"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-white/60 text-sm tracking-[0.3em] uppercase mb-10 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Built for Today. Ready for Tomorrow.
          </motion.p>

          {/* Progress bar */}
          <div className="w-56 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full"
              style={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <motion.span
            className="text-white/30 text-xs mt-3 tracking-widest"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {Math.min(Math.round(progress), 100)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
