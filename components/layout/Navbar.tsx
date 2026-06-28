"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Phone, ChevronDown } from "lucide-react";
import { useRequest } from "@/context/RequestContext";
import { cn } from "@/lib/utils";
import { PHONE_PRIMARY, WA_BASE } from "@/lib/contact";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useRequest();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-[#071B45]/98 backdrop-blur-md shadow-2xl border-b border-white/5"
            : "bg-[#071B45]/80 backdrop-blur-sm"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo — circular crop of icon portion + text, avoids the white-bg PNG issue */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0 bg-white">
                <Image
                  src="/logo.png"
                  alt=""
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 28%" }}
                  priority
                />
              </div>
              <div className="leading-none">
                <div className="text-white font-black text-sm tracking-tight">TECHNO</div>
                <div className="text-[#F7B500] font-black text-sm tracking-tight italic">MACHINERY</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link px-3 xl:px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2 xl:gap-3">
              {/* Phone — only show at xl to avoid crowding at lg */}
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                className="hidden xl:flex items-center gap-2 text-white/70 hover:text-[#F7B500] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>{PHONE_PRIMARY}</span>
              </a>

              {/* Request List badge */}
              <Link
                href="/request"
                className="relative flex items-center gap-2 bg-[#F7B500] hover:bg-yellow-400 text-[#071B45] font-bold text-sm px-4 py-2 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-yellow-400/30"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="hidden sm:inline">Request List</span>
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </Link>

              {/* WhatsApp CTA */}
              <a
                href={WA_BASE}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>

              {/* Mobile menu toggle */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-30 bg-black/50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-40 w-72 bg-[#071B45] shadow-2xl lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Image src="/logo.png" alt="Techno Machinery" width={120} height={44} className="object-contain h-9 w-auto" />
                <button onClick={() => setMobileOpen(false)} className="text-white/70">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 p-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium"
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`tel:+91${PHONE_PRIMARY}`}
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F7B500]" />
                  <span className="text-sm">{PHONE_PRIMARY}</span>
                </a>
                <a
                  href={WA_BASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 rounded-xl"
                >
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
