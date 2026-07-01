"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, ChevronLeft, ChevronRight, CheckCircle, Phone, MessageSquare, Play } from "lucide-react";
import { Product } from "@/types";
import { useRequest } from "@/context/RequestContext";
import { toast } from "sonner";
import { PHONE_PRIMARY, PHONE_SECONDARY, WA_BASE, YOUTUBE_CHANNEL } from "@/lib/contact";
import YouTubePlayer from "@/components/ui/YouTubePlayer";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem, isInRequest, removeItem } = useRequest();
  const [qty, setQty] = useState(1);
  const [videoOpen, setVideoOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Deduplicate: main image first, then additional gallery images
  const allImages = [
    product.image,
    ...product.gallery.filter((img) => img !== product.image),
  ];

  const goTo = (idx: number) => {
    setDirection(idx > activeImage ? 1 : -1);
    setActiveImage(idx);
  };
  const prev = () => goTo((activeImage - 1 + allImages.length) % allImages.length);
  const next = () => goTo((activeImage + 1) % allImages.length);

  const handleAddToRequest = () => {
    if (isInRequest(product.id)) {
      removeItem(product.id);
      toast.info(`${product.name} removed from request list`);
    } else {
      addItem(product, qty);
      toast.success(`${product.name} added to request list`);
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Techno Machinery,\n\nI am interested in:\n*${product.name}* (${product.model})\nQuantity: ${qty}\n\nPlease share pricing and availability.`
  );

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm text-gray-400 flex-wrap">
          <Link href="/" className="hover:text-[#071B45] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[#071B45] transition-colors">Products</Link>
          <span>/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#071B45] transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#071B45] font-medium line-clamp-1">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Images — Amazon-style gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-3">
              {/* Vertical thumbnail strip — desktop */}
              {allImages.length > 1 && (
                <div className="hidden sm:flex flex-col gap-2 w-[72px] flex-shrink-0 max-h-[480px] overflow-y-auto pr-1"
                  style={{ scrollbarWidth: "thin" }}>
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`flex-shrink-0 w-16 h-16 rounded-xl border-2 overflow-hidden transition-all bg-white ${
                        activeImage === i
                          ? "border-[#F7B500] shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <Image src={img} alt="" width={64} height={64} className="object-contain p-1 w-full h-full" />
                    </button>
                  ))}
                </div>
              )}

              {/* Main image */}
              <div className="flex-1 relative aspect-square bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeImage}
                    className="absolute inset-0"
                    initial={{ opacity: 0, x: direction * 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -40 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={allImages[activeImage]}
                      alt={`${product.name} — image ${activeImage + 1}`}
                      fill
                      className="object-contain p-8"
                      priority={activeImage === 0}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#071B45] text-[#F7B500] text-xs font-bold px-3 py-1.5 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Prev / Next arrows — only when multiple images */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#071B45] transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={next}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-600 hover:text-[#071B45] transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    {/* Counter */}
                    <div className="absolute bottom-3 right-3 z-10 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {activeImage + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Horizontal thumbnails — mobile only */}
            {allImages.length > 1 && (
              <div className="flex sm:hidden gap-2 mt-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`flex-shrink-0 w-14 h-14 rounded-lg border-2 overflow-hidden transition-all bg-white ${
                      activeImage === i
                        ? "border-[#F7B500] shadow-md"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image src={img} alt="" width={56} height={56} className="object-contain p-1 w-full h-full" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-sm text-[#F7B500] font-bold mb-2">{product.model}</div>
            <h1 className="text-3xl sm:text-4xl font-black text-[#071B45] mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-gray-500 leading-relaxed mb-6">{product.description}</p>

            {product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-[#071B45] mb-3 text-sm uppercase tracking-wide">Key Features</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#F7B500] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity + Actions */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-semibold text-[#071B45]">Quantity:</span>
                <div className="flex items-center gap-2 bg-gray-50 rounded-full border border-gray-200">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors font-bold"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-bold text-[#071B45] text-sm">{qty}</span>
                  <button
                    onClick={() => setQty((q) => q + 1)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors font-bold"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToRequest}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all ${
                    isInRequest(product.id)
                      ? "bg-green-50 text-green-600 border-2 border-green-200"
                      : "bg-[#071B45] text-white hover:bg-[#F7B500] hover:text-[#071B45] hover:shadow-lg"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {isInRequest(product.id) ? "Remove from Request" : "Add to Request"}
                </button>
                <a
                  href={`${WA_BASE}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 px-6 rounded-xl hover:bg-green-500 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <Link
                href="/request"
                className="block text-center mt-3 text-sm text-[#071B45] font-semibold hover:text-[#F7B500] transition-colors"
              >
                View Request List →
              </Link>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Phone className="w-4 h-4 text-[#F7B500]" />
              <span>Call us:</span>
              <a href={`tel:+91${PHONE_PRIMARY}`} className="font-bold text-[#071B45] hover:text-[#F7B500] transition-colors">{PHONE_PRIMARY}</a>
              <span className="text-gray-300">|</span>
              <a href={`tel:+91${PHONE_SECONDARY}`} className="font-bold text-[#071B45] hover:text-[#F7B500] transition-colors">{PHONE_SECONDARY}</a>
            </div>

            {/* YouTube button */}
            <button
              onClick={() => {
                if (product.videoId) {
                  setVideoOpen(true);
                } else {
                  window.open(YOUTUBE_CHANNEL, "_blank");
                }
              }}
              className="flex items-center gap-2 text-sm text-[#FF0000] hover:text-white bg-[#FF0000]/10 hover:bg-[#FF0000] border border-[#FF0000]/30 hover:border-[#FF0000] font-semibold px-4 py-2.5 rounded-xl transition-all w-full justify-center"
            >
              <Play className="w-4 h-4 fill-current" />
              {product.videoId ? "Watch Product Video" : "Watch on YouTube"}
            </button>
          </motion.div>

          {/* YouTube player modal */}
          {product.videoId && (
            <YouTubePlayer
              videoId={product.videoId}
              title={product.name}
              isOpen={videoOpen}
              onClose={() => setVideoOpen(false)}
            />
          )}
        </div>

        {/* Specifications table */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-black text-[#071B45] mb-6">
            Technical{" "}
            <span style={{ background: "linear-gradient(135deg,#F7B500,#FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Specifications
            </span>
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-[#071B45]">
                  <th className="text-left px-6 py-4 text-[#F7B500] text-sm font-bold uppercase tracking-wider">Parameter</th>
                  <th className="text-left px-6 py-4 text-white text-sm font-bold uppercase tracking-wider">Details</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-gray-500 text-sm font-medium border-b border-gray-50">{spec.label}</td>
                    <td className="px-6 py-4 text-[#071B45] text-sm font-bold border-b border-gray-50">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Applications */}
        {product.applications.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-black text-[#071B45] mb-6">Applications</h2>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app) => (
                <span
                  key={app}
                  className="inline-flex items-center gap-2 bg-[#071B45]/5 border border-[#071B45]/10 text-[#071B45] text-sm font-medium px-4 py-2 rounded-full"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F7B500]" />
                  {app}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[#071B45] font-semibold hover:text-[#F7B500] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
