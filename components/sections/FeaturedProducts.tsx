"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Eye, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { featuredProducts } from "@/data/products";
import { useRequest } from "@/context/RequestContext";
import { toast } from "sonner";

export default function FeaturedProducts() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 });
  const { addItem, isInRequest } = useRequest();

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-6 sm:mb-8 lg:mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">
              Top Sellers
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-[#071B45] mt-2">
              Featured <span className="text-gradient">Products</span>
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#071B45] hover:text-white hover:border-[#071B45] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#071B45] hover:text-white hover:border-[#071B45] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          ref={emblaRef}
          className="overflow-hidden -mx-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div className="flex">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-2"
              >
                <motion.div
                  className="product-card group bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-[#F7B500]/30 hover:shadow-xl hover:shadow-[#F7B500]/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="product-image object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="bg-white text-[#071B45] font-bold text-xs px-3 py-2 rounded-full flex items-center gap-1.5 hover:bg-[#F7B500] transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" /> View
                      </Link>
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-3 left-3 bg-[#071B45] text-[#F7B500] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {product.category}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#071B45] text-base mb-1 group-hover:text-[#F7B500] transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">{product.description}</p>

                    {/* Quick specs */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {product.specifications.slice(0, 2).map((spec) => (
                        <div key={spec.label} className="bg-white rounded-lg p-2 border border-gray-100">
                          <div className="text-[10px] text-gray-400 uppercase tracking-wide">{spec.label}</div>
                          <div className="text-xs font-bold text-[#071B45] mt-0.5 truncate">{spec.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          addItem(product);
                          toast.success(`${product.name} added to request list`);
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                          isInRequest(product.id)
                            ? "bg-green-50 text-green-600 border border-green-200"
                            : "bg-[#071B45] text-white hover:bg-[#F7B500] hover:text-[#071B45]"
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                        {isInRequest(product.id) ? "Added" : "Add to Request"}
                      </button>
                      <Link
                        href={`/products/${product.slug}`}
                        className="px-3 py-2.5 rounded-xl border border-gray-200 hover:border-[#071B45] text-gray-500 hover:text-[#071B45] transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* View all */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#071B45] hover:bg-[#F7B500] text-white hover:text-[#071B45] font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg"
          >
            View All Products →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
