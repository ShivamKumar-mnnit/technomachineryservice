"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { YOUTUBE_CHANNEL } from "@/lib/contact";
import YouTubePlayer from "@/components/ui/YouTubePlayer";

const VIDEOS: { title: string; category: string; videoId: string | null }[] = [
  { title: "Tamping Rammer Demo",        category: "Tamping Rammers",     videoId: null },
  { title: "Plate Compactor Performance",category: "Plate Compactors",    videoId: null },
  { title: "Concrete Mixer in Action",   category: "Concrete Mixers",     videoId: null },
  { title: "Vibratory Roller Demo",      category: "Vibratory Rollers",   videoId: null },
  { title: "Internal Vibrator",          category: "Internal Vibrators",  videoId: null },
  { title: "Generator Set",              category: "Generators",          videoId: null },
];

const BG_GRADIENTS = [
  "from-[#1a0000] to-[#4a0000]",
  "from-[#001a2e] to-[#003a5c]",
  "from-[#1a1400] to-[#4a3a00]",
  "from-[#001a00] to-[#003a00]",
  "from-[#0f0020] to-[#280050]",
  "from-[#001a1a] to-[#003a3a]",
];

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function YouTubeSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<{ id: string; title: string } | null>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  const handlePlay = (videoId: string | null, title: string) => {
    if (videoId) {
      setActiveVideo({ id: videoId, title });
    } else {
      window.open(YOUTUBE_CHANNEL, "_blank");
    }
  };

  return (
    <section
      ref={ref}
      className="py-12 sm:py-16 lg:py-24 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0D1117 0%, #071B45 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="flex items-center gap-2 text-[#FF0000] text-sm font-bold uppercase tracking-widest mb-2">
              <YoutubeIcon className="w-4 h-4" /> Our YouTube Channel
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white">
              See It <span className="text-gradient">In Action</span>
            </h2>
            <p className="text-white/50 mt-2 max-w-xl text-sm sm:text-base">
              Watch our construction equipment perform in real site conditions across India.
            </p>
          </div>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF0000] hover:bg-red-500 text-white font-bold px-5 py-2.5 rounded-full text-sm transition-all hover:shadow-lg hover:shadow-red-500/30"
          >
            <YoutubeIcon className="w-4 h-4" /> Subscribe
          </a>
        </motion.div>

        {/* Scroll row */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hidden lg:flex shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {VIDEOS.map((v, i) => (
              <motion.button
                key={v.title}
                onClick={() => handlePlay(v.videoId, v.title)}
                className={`flex-shrink-0 w-64 sm:w-72 aspect-video rounded-2xl overflow-hidden relative group cursor-pointer bg-gradient-to-br ${BG_GRADIENTS[i]} border border-white/10 hover:border-[#FF0000]/50 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* If videoId is set, show YouTube thumbnail */}
                {v.videoId && (
                  <img
                    src={`https://img.youtube.com/vi/${v.videoId}/mqdefault.jpg`}
                    alt={v.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-300" />

                {/* Play button + label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FF0000] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white ml-0.5" />
                  </div>
                  <div className="text-center px-3">
                    <div className="text-white font-bold text-sm leading-snug">{v.title}</div>
                    <div className="text-white/50 text-xs mt-0.5">{v.category}</div>
                  </div>
                </div>

                {/* YouTube watermark */}
                <div className="absolute top-2.5 left-3 opacity-60 group-hover:opacity-100 transition-opacity">
                  <YoutubeIcon className="w-5 h-5 text-[#FF0000]" />
                </div>
              </motion.button>
            ))}

            {/* Visit channel card */}
            <motion.a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-64 sm:w-72 aspect-video rounded-2xl overflow-hidden relative group border border-[#FF0000]/20 hover:border-[#FF0000]/60 bg-[#FF0000]/5 hover:bg-[#FF0000]/10 transition-all duration-300 flex flex-col items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, duration: 0.4 }}
            >
              <YoutubeIcon className="w-10 h-10 text-[#FF0000] group-hover:scale-110 transition-transform" />
              <div className="text-center px-4">
                <div className="text-white font-bold text-sm">Visit Our Channel</div>
                <div className="text-white/40 text-xs mt-1 flex items-center gap-1 justify-center">
                  <ExternalLink className="w-3 h-3" /> More videos on YouTube
                </div>
              </div>
            </motion.a>
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hidden lg:flex shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal player */}
      {activeVideo && (
        <YouTubePlayer
          videoId={activeVideo.id}
          title={activeVideo.title}
          isOpen={true}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
