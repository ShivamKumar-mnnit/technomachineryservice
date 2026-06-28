import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield, Headphones, Truck, Star, Zap, Users, Award, Wrench,
  CheckCircle, Package, ThumbsUp, Clock
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description: "Discover why Techno Machinery is the trusted choice for construction equipment in India – premium quality, expert support, and pan India delivery.",
};

const reasons = [
  {
    icon: Shield,
    title: "Premium Quality Products",
    desc: "We supply high-quality construction equipment from premium brands, ensuring superior performance and long-term durability on the job site.",
    points: ["Tested & certified equipment", "From trusted manufacturers", "Built for tough conditions"],
  },
  {
    icon: Headphones,
    title: "Expert Support Team",
    desc: "Our experienced team provides professional advice and technical support to help you choose the right equipment for your specific project requirements.",
    points: ["Free equipment consultation", "Technical guidance", "Dedicated service team"],
  },
  {
    icon: Truck,
    title: "Pan India Delivery",
    desc: "Fast and reliable delivery across India with secure packaging and logistics support, ensuring your equipment arrives safely and on time.",
    points: ["Delivery across all states", "Secure packaging", "Timely dispatch"],
  },
  {
    icon: Wrench,
    title: "After Sales Support",
    desc: "We provide prompt after-sales service and maintenance support to keep your machinery running smoothly and minimize downtime.",
    points: ["Prompt service response", "Genuine spare parts", "Maintenance guidance"],
  },
  {
    icon: Star,
    title: "Trusted & Reliable",
    desc: "We believe in transparency, honesty, and quality service, making us a trusted partner for contractors and infrastructure companies across India.",
    points: ["10+ years of experience", "500+ happy clients", "Honest business practices"],
  },
  {
    icon: Award,
    title: "Competitive Pricing",
    desc: "We offer competitive pricing without compromising on quality, making premium construction equipment accessible to projects of all sizes.",
    points: ["Best price guarantee", "No hidden charges", "Flexible payment options"],
  },
];

const stats = [
  { icon: Package, value: "1000+", label: "Machines Delivered" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: ThumbsUp, value: "25+", label: "Cities Served" },
];

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section
        className="pt-24 sm:pt-28 pb-10 sm:pb-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">Our Advantages</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">
            Why Choose{" "}
            <span style={{ background: "linear-gradient(135deg, #F7B500, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Techno Machinery?
            </span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            We are committed to delivering the best construction equipment and unmatched service to help you build a stronger tomorrow.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-10 lg:py-14 bg-[#F7B500]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="w-8 h-8 text-[#071B45] mx-auto mb-2 opacity-70" />
                <div className="text-4xl font-black text-[#071B45]">{s.value}</div>
                <div className="text-[#071B45]/60 text-sm mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">What Sets Us Apart</span>
            <h2 className="text-4xl font-black text-[#071B45] mt-3 mb-4">Our Commitments</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#F7B500]/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#071B45] to-[#0D1117] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg">
                  <r.icon className="w-7 h-7 text-[#F7B500]" />
                </div>
                <h3 className="text-xl font-black text-[#071B45] mb-3">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.desc}</p>
                <ul className="space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-[#F7B500] flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP banner */}
      <section className="py-8 sm:py-10 lg:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "⭐", label: "Best Brands & Products" },
              { icon: "💰", label: "Competitive Pricing" },
              { icon: "🚚", label: "Timely Delivery" },
              { icon: "🤝", label: "Customer First Approach" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-bold text-[#071B45] text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-[#071B45]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Experience the Difference</h2>
          <p className="text-white/50 mb-8">Join 500+ satisfied customers who trust Techno Machinery for their construction equipment needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-[#F7B500] text-[#071B45] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-all">
              Browse Products →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
