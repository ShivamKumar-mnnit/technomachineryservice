"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, ShoppingBag, Eye, X, SlidersHorizontal, ChevronDown } from "lucide-react";
import { products, getAllCategories } from "@/data/products";
import { useRequest } from "@/context/RequestContext";
import { toast } from "sonner";

function ProductsContent() {
  const searchParams = useSearchParams();
  const { addItem, isInRequest } = useRequest();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const categories = getAllCategories();

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) setSelectedCategory(cat);
  }, [searchParams]);

  const filtered = useMemo(() => {
    let list = [...products];
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.model.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q)) ||
          p.description.toLowerCase().includes(q)
      );
    }
    if (selectedCategory) {
      list = list.filter((p) => p.category === selectedCategory);
    }
    if (sortBy === "name") list.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "category") list.sort((a, b) => a.category.localeCompare(b.category));
    return list;
  }, [search, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <div
        className="pt-24 pb-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our <span className="text-gradient">Products</span>
          </motion.h1>
          <p className="text-white/50 mb-8">
            {filtered.length} products found {selectedCategory && `in "${selectedCategory}"`}
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, model, category..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-full focus:outline-none focus:border-[#F7B500]/50 backdrop-blur-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-[#071B45] flex items-center gap-2">
                  <Filter className="w-4 h-4" /> Filters
                </h3>
                {selectedCategory && (
                  <button
                    onClick={() => setSelectedCategory("")}
                    className="text-xs text-[#F7B500] hover:underline"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Category
                </h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      !selectedCategory
                        ? "bg-[#071B45] text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    All Products ({products.length})
                  </button>
                  {categories.map((cat) => {
                    const count = products.filter((p) => p.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between ${
                          selectedCategory === cat
                            ? "bg-[#F7B500]/10 text-[#F7B500] font-semibold border border-[#F7B500]/30"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span className="line-clamp-1">{cat}</span>
                        <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded ml-2 flex-shrink-0">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  Sort By
                </h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none focus:border-[#F7B500]"
                >
                  <option value="default">Default</option>
                  <option value="name">Name A–Z</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile filter toggle */}
            <div className="flex items-center justify-between mb-6 lg:hidden">
              <p className="text-sm text-gray-500">{filtered.length} products</p>
              <button
                onClick={() => setShowFilters((f) => !f)}
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:border-[#071B45] transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {selectedCategory && (
                  <span className="bg-[#F7B500] text-[#071B45] text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                    1
                  </span>
                )}
              </button>
            </div>

            {/* Active filter chip */}
            {selectedCategory && (
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-2 bg-[#F7B500]/10 text-[#F7B500] border border-[#F7B500]/30 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory("")}>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              </div>
            )}

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-[#071B45] mb-2">No products found</h3>
                <p className="text-gray-500 mb-4">Try a different search or clear filters</p>
                <button
                  onClick={() => { setSearch(""); setSelectedCategory(""); }}
                  className="bg-[#071B45] text-white px-6 py-2 rounded-full text-sm font-semibold"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((product, i) => (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.03, duration: 0.3 }}
                      className="product-card group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#F7B500]/30 hover:shadow-xl hover:shadow-[#F7B500]/5 transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-48 bg-gray-50 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="product-image object-contain p-4"
                          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="bg-[#071B45] text-[#F7B500] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                            {product.category}
                          </span>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-[#071B45]/0 group-hover:bg-[#071B45]/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <Link
                            href={`/products/${product.slug}`}
                            className="bg-white text-[#071B45] font-bold text-xs px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-[#F7B500] transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" /> View Details
                          </Link>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-5">
                        <div className="text-xs text-[#F7B500] font-bold mb-1">{product.model}</div>
                        <h3 className="font-bold text-[#071B45] mb-2 leading-tight group-hover:text-[#F7B500] transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-xs mb-4 line-clamp-2 leading-relaxed">
                          {product.description}
                        </p>

                        {/* Specs preview */}
                        <div className="grid grid-cols-2 gap-1.5 mb-4">
                          {product.specifications.slice(0, 2).map((spec) => (
                            <div key={spec.label} className="bg-gray-50 rounded-lg p-2 border border-gray-100">
                              <div className="text-[9px] text-gray-400 uppercase tracking-wide truncate">
                                {spec.label}
                              </div>
                              <div className="text-[11px] font-bold text-[#071B45] mt-0.5 truncate">
                                {spec.value}
                              </div>
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
                            className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-xs transition-all ${
                              isInRequest(product.id)
                                ? "bg-green-50 text-green-600 border border-green-200"
                                : "bg-[#071B45] text-white hover:bg-[#F7B500] hover:text-[#071B45]"
                            }`}
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            {isInRequest(product.id) ? "In Request" : "Add to Request"}
                          </button>
                          <Link
                            href={`/products/${product.slug}`}
                            className="px-3 py-2.5 rounded-xl border border-gray-200 hover:border-[#071B45] text-gray-400 hover:text-[#071B45] transition-all"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center"><div className="text-[#071B45] font-bold">Loading...</div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
