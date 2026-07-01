"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "RK Construction Co.",
    city: "Kolkata",
    rating: 5,
    text: "Excellent quality machinery! The concrete mixers we purchased from Techno Machinery are still running strong after 2 years. Great after-sales support too.",
    avatar: "RK",
  },
  {
    name: "Sunil Sharma",
    company: "Sharma Builders",
    city: "Howrah",
    rating: 5,
    text: "We ordered a Techno TM-R40 rebar cutter and it arrived in 2 days. The machine is powerful and efficient. Highly recommend Techno Machinery for all construction equipment needs.",
    avatar: "SS",
  },
  {
    name: "Mohan Das",
    company: "Das Infrastructure",
    city: "Burdwan",
    rating: 5,
    text: "Purchased a 30 KVA generator for our site. The delivery was fast and the product is top quality. The team helped us choose the right specification for our project.",
    avatar: "MD",
  },
  {
    name: "Priya Singh",
    company: "Singh Contractors",
    city: "Asansol",
    rating: 5,
    text: "The plate compactors are fantastic! High performance and very durable. The team at Techno Machinery is extremely helpful and professional.",
    avatar: "PS",
  },
  {
    name: "Arun Gupta",
    company: "Gupta Road Works",
    city: "Durgapur",
    rating: 5,
    text: "Bought backhoe loaders and vibratory rollers for our road project. The machines performed excellently. Will definitely order again from Techno Machinery.",
    avatar: "AG",
  },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [AutoPlay({ delay: 4000, stopOnInteraction: false })]
  );

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
            Client Reviews
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#071B45] mt-3 mb-4">
            What Our Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={emblaRef}
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="flex gap-0">
            {testimonials.map((t, i) => (
              <div key={i} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-3">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#F7B500] text-[#F7B500]" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#071B45] flex items-center justify-center text-[#F7B500] font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-[#071B45] text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">
                        {t.company} · {t.city}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
