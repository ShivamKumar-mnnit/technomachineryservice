"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ShoppingBag, Send, ArrowLeft, X } from "lucide-react";
import { useRequest } from "@/context/RequestContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formatWhatsAppMessage } from "@/lib/utils";
import { WA_BASE } from "@/lib/contact";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required").max(15),
  company: z.string().min(2, "Company name is required"),
  city: z.string().min(2, "City is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RequestPage() {
  const { items, removeItem, updateQuantity, clearAll } = useRequest();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    if (items.length === 0) {
      toast.error("Please add products to your request list first");
      return;
    }
    const msg = formatWhatsAppMessage(
      items.map((i) => ({ name: i.product.name, model: i.product.model, quantity: i.quantity })),
      data
    );
    window.open(`${WA_BASE}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
    clearAll();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] pt-24 flex items-center justify-center">
        <motion.div
          className="text-center max-w-md mx-auto px-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-black text-[#071B45] mb-4">Request Sent!</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Your quotation request has been sent to Techno Machinery via WhatsApp. Our team will contact you shortly.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#071B45] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#F7B500] hover:text-[#071B45] transition-all"
          >
            Browse More Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Header */}
      <div
        className="pt-24 sm:pt-28 pb-10 sm:pb-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Products
          </Link>
          <h1 className="text-4xl font-black text-white">
            Request <span className="text-gradient">List</span>
          </h1>
          <p className="text-white/50 mt-2">{items.length} product{items.length !== 1 ? "s" : ""} selected</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[#071B45] mb-3">Your request list is empty</h3>
            <p className="text-gray-400 mb-8">Add products to your request list to send a quotation</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#071B45] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#F7B500] hover:text-[#071B45] transition-all"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            {/* Product List */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-[#071B45]">Products Selected</h2>
                <button
                  onClick={() => {
                    clearAll();
                    toast.info("Request list cleared");
                  }}
                  className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear All
                </button>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0 }}
                      className="bg-white rounded-2xl border border-gray-100 p-4 flex gap-4 items-center shadow-sm"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-100 flex-shrink-0 bg-gray-50">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          width={80}
                          height={80}
                          className="object-contain p-2 w-full h-full"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-[#F7B500] font-bold mb-0.5">{item.product.model}</div>
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="font-bold text-[#071B45] hover:text-[#F7B500] transition-colors text-sm line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <div className="text-xs text-gray-400 mt-0.5">{item.product.category}</div>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 bg-gray-50 rounded-full border border-gray-200 px-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-6 text-center font-bold text-[#071B45] text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => {
                          removeItem(item.product.id);
                          toast.info("Product removed");
                        }}
                        className="p-2 text-gray-300 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Customer Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-[#071B45] p-5">
                  <h2 className="text-white font-bold text-lg">Your Details</h2>
                  <p className="text-white/50 text-sm">Fill in your contact information</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#F7B500] transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      {...register("phone")}
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#F7B500] transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                      Company Name *
                    </label>
                    <input
                      {...register("company")}
                      placeholder="Your company"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#F7B500] transition-colors"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                      City *
                    </label>
                    <input
                      {...register("city")}
                      placeholder="Your city"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#F7B500] transition-colors"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                      Email (optional)
                    </label>
                    <input
                      {...register("email")}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#F7B500] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-1.5">
                      Additional Notes (optional)
                    </label>
                    <textarea
                      {...register("message")}
                      rows={3}
                      placeholder="Any specific requirements..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#F7B500] transition-colors resize-none"
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                      Summary
                    </div>
                    {items.map((item) => (
                      <div key={item.product.id} className="flex justify-between text-sm py-1">
                        <span className="text-gray-600 truncate mr-2">{item.product.name}</span>
                        <span className="font-bold text-[#071B45] flex-shrink-0">×{item.quantity}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between text-sm font-bold text-[#071B45]">
                      <span>Total Items</span>
                      <span>{items.reduce((s, i) => s + i.quantity, 0)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all hover:shadow-lg disabled:opacity-60 text-base"
                  >
                    <Send className="w-5 h-5" />
                    Send Request on WhatsApp
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    This will open WhatsApp with your pre-filled request
                  </p>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
