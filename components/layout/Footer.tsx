import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ArrowRight } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY, EMAIL, SITE_URL, WA_BASE } from "@/lib/contact";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
  { label: "Request Quote", href: "/request" },
];

const categories = [
  "Rebar Cutting Machines",
  "Concrete Mixers",
  "Generators",
  "Tamping Rammers",
  "Plate Compactors",
  "Vibratory Rollers",
  "Concrete Cutters",
  "Power Trowels",
  "Backhoe Loaders",
  "Excavators",
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white/70 relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F7B500]/50 to-transparent" />

      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(247,181,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(247,181,0,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="inline-block bg-white rounded-xl px-3 py-2 mb-5">
              <Image
                src="/logo.png"
                alt="Techno Machinery"
                width={140}
                height={56}
                className="object-contain h-12 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed mb-5 text-white/50">
              Techno Machinery – a leading supplier of road & building construction equipment.
              Premium quality, Pan India delivery, expert after-sales support.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/technomachinery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F7B500]/20 hover:border-[#F7B500]/50 transition-all text-white/60 hover:text-[#F7B500]"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com/technomachinery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#F7B500]/20 hover:border-[#F7B500]/50 transition-all text-white/60 hover:text-[#F7B500]"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm hover:text-[#F7B500] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Equipment
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat}>
                  <Link
                    href={`/products?category=${encodeURIComponent(cat)}`}
                    className="flex items-center gap-2 text-sm hover:text-[#F7B500] transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#F7B500] mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  J8P6+PQX, Sapuipara, Ghosh Para,<br />
                  Anandanagar, Chakpara,<br />
                  West Bengal – 711227
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 text-[#F7B500] flex-shrink-0" />
                <div className="flex flex-col gap-1 text-sm">
                  <a href={`tel:+91${PHONE_SECONDARY}`} className="hover:text-[#F7B500] transition-colors">
                    {PHONE_SECONDARY}
                  </a>
                  <a href={`tel:+91${PHONE_PRIMARY}`} className="hover:text-[#F7B500] transition-colors">
                    {PHONE_PRIMARY}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-[#F7B500] flex-shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm hover:text-[#F7B500] transition-colors"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="w-4 h-4 text-[#F7B500] flex-shrink-0" />
                <a
                  href={SITE_URL}
                  className="text-sm hover:text-[#F7B500] transition-colors"
                >
                  {SITE_URL.replace("https://www.", "")}
                </a>
              </li>
            </ul>

            {/* CTA */}
            <a
              href="/Techno_Catalogue_FullBleed.pdf"
              download="Techno_Machinery_Catalogue_2026.pdf"
              className="inline-flex items-center gap-2 mt-6 bg-[#F7B500] hover:bg-yellow-400 text-[#071B45] font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-yellow-400/20"
            >
              Get Catalogue
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Techno Machinery. All rights reserved. Powered by Ambey Service.
          </p>
          <p className="text-xs text-white/20">
            Built for Today. Ready for Tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
