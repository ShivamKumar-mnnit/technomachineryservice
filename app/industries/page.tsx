import type { Metadata } from "next";
import Link from "next/link";
import { WA_BASE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "Techno Machinery serves road construction, bridge, infrastructure, industrial, commercial, residential and government project sectors across India.",
};

const industries = [
  {
    icon: "🛣️",
    name: "Road Construction",
    desc: "We supply tamping rammers, plate compactors, vibratory rollers, and concrete mixers for highway and urban road construction projects.",
    products: ["Tamping Rammers", "Plate Compactors", "Vibratory Rollers", "Concrete Mixers"],
  },
  {
    icon: "🌉",
    name: "Bridge Construction",
    desc: "Rebar cutting machines, internal vibrators, and backhoe loaders for bridge foundation and superstructure work.",
    products: ["Rebar Cutting Machines", "Internal Vibrators", "Backhoe Loaders", "Concrete Cutters"],
  },
  {
    icon: "🏗️",
    name: "Infrastructure",
    desc: "Heavy equipment including excavators, backhoe loaders, and large generators for dam, reservoir and large civil infrastructure projects.",
    products: ["Excavators", "Backhoe Loaders", "Generators", "Plate Compactors"],
  },
  {
    icon: "🏭",
    name: "Industrial",
    desc: "Power trowels, concrete cutters, and generators for industrial flooring, factory construction and warehousing.",
    products: ["Power Trowels", "Concrete Cutters", "Generators", "Concrete Mixers"],
  },
  {
    icon: "🏢",
    name: "Commercial",
    desc: "Equipment for malls, offices, and commercial development including concrete mixers, vibrators and tamping rammers.",
    products: ["Concrete Mixers", "Internal Vibrators", "Tamping Rammers", "Power Trowels"],
  },
  {
    icon: "🏠",
    name: "Residential",
    desc: "Compact and efficient equipment for housing societies, townships and apartment construction.",
    products: ["Concrete Mixers", "Tamping Rammers", "Plate Compactors", "Jack Hammers"],
  },
  {
    icon: "🏛️",
    name: "Government Projects",
    desc: "Heavy-duty equipment for smart city initiatives, government infrastructure, and public works projects.",
    products: ["Excavators", "Backhoe Loaders", "Vibratory Rollers", "Generators"],
  },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section
        className="pt-24 sm:pt-28 pb-10 sm:pb-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">Our Reach</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">
            Industries We{" "}
            <span style={{ background: "linear-gradient(135deg, #F7B500, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Serve
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Techno Machinery equipment powers projects across every sector of the construction industry across India.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#F7B500]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-black text-[#071B45] mb-3 group-hover:text-[#F7B500] transition-colors">
                  {ind.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{ind.desc}</p>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                    Equipment Used
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {ind.products.map((p) => (
                      <Link
                        key={p}
                        href={`/products?category=${encodeURIComponent(p)}`}
                        className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full hover:bg-[#F7B500]/10 hover:border-[#F7B500]/30 hover:text-[#F7B500] transition-all"
                      >
                        {p}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-[#071B45]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Find Equipment for Your Sector</h2>
          <p className="text-white/50 mb-8">Browse our complete catalogue and find the right machinery for your project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-[#F7B500] text-[#071B45] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-all">
              View All Products →
            </Link>
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-full hover:bg-green-500 transition-all">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
