"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, ChevronLeft, CheckCircle, Phone, MessageSquare } from "lucide-react";
import { Product } from "@/types";
import { useRequest } from "@/context/RequestContext";
import { toast } from "sonner";
import { PHONE_PRIMARY, PHONE_SECONDARY, WA_BASE } from "@/lib/contact";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem, isInRequest, removeItem } = useRequest();
  const [qty, setQty] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const allImages = product.gallery.length > 0 ? product.gallery : [product.image];

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
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-square bg-white rounded-2xl border border-gray-100 overflow-hidden mb-4 shadow-sm">
              <Image
                src={allImages[activeImage]}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#071B45] text-[#F7B500] text-xs font-bold px-3 py-1.5 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
            {allImages.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 overflow-hidden transition-all ${
                      activeImage === i ? "border-[#F7B500]" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image src={img} alt="" width={64} height={64} className="object-contain p-1 w-full h-full" />
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
          </motion.div>
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
