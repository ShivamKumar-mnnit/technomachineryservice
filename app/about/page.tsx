import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Users, Truck, Award, Headphones } from "lucide-react";
import { PHONE_PRIMARY, PHONE_SECONDARY, WA_BASE } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Techno Machinery – a leading supplier of road and building construction equipment in India, powered by Ambey Service.",
};

const team = [
  { name: "Archana Gupta", role: "Proprietor", phone: PHONE_SECONDARY },
  { name: "Sahil Bhardwaj", role: "Sales Management & Service Manager", phone: PHONE_PRIMARY },
];

const values = [
  { icon: Shield, title: "Premium Quality", desc: "We supply high-quality construction equipment from premium brands, ensuring superior performance and long-term durability." },
  { icon: Headphones, title: "Expert Support", desc: "Our experienced team provides professional advice and technical support to help you choose the right equipment." },
  { icon: Users, title: "Wide Product Range", desc: "A complete range of road & building construction equipment to meet every project requirement." },
  { icon: Truck, title: "Pan India Delivery", desc: "Fast and reliable delivery across India with secure packaging and logistics support." },
  { icon: Award, title: "Trusted & Reliable", desc: "We believe in transparency, honesty, and quality service, making us a trusted partner for construction professionals." },
  { icon: Target, title: "Customer Satisfaction", desc: "Our customers' success is our priority. We build long-term relationships built on trust, transparency, and timely service." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero */}
      <section
        className="pt-24 sm:pt-28 pb-10 sm:pb-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071B45 0%, #0D1117 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">Who We Are</span>
          <h1 className="text-5xl font-black text-white mt-3 mb-4">
            About <span style={{ background: "linear-gradient(135deg, #F7B500, #FFD700)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Techno Machinery</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Built for Today. Ready for Tomorrow.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl font-black text-[#071B45] mt-3 mb-6">Company Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                TECHNO MACHINERY, powered by Ambey Service, is a leading supplier of road and building construction equipment in India. We specialize in delivering high-quality machinery and reliable after-sales support to contractors, builders, and infrastructure companies.
              </p>
              <p className="text-gray-500 leading-relaxed mb-4">
                With a strong commitment to quality, innovation, and customer satisfaction, we offer a comprehensive range of construction equipment designed for durability, performance, and efficiency.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Under the leadership of Mrs. Archana Gupta, our mission is to provide dependable machinery solutions and build long-term relationships with our customers through honest business practices and exceptional service.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "10+", label: "Years of Experience" },
                  { value: "500+", label: "Satisfied Customers" },
                  { value: "100+", label: "Quality Products" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-2xl font-black text-[#F7B500]">{s.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/catalogue/1.png"
                  alt="About Techno Machinery"
                  width={600}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
              <div className="absolute -bottom-4 sm:-bottom-6 left-2 sm:-left-6 bg-[#F7B500] text-[#071B45] rounded-2xl p-4 sm:p-5 shadow-xl font-black">
                <div className="text-3xl">Pan India</div>
                <div className="text-sm font-semibold opacity-80">Delivery & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-14 lg:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-[#F7B500]/10 rounded-xl flex items-center justify-center mb-5">
                <Target className="w-6 h-6 text-[#F7B500]" />
              </div>
              <h3 className="text-2xl font-black text-[#071B45] mb-3">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">
                To provide world-class construction equipment and services that enhance productivity, ensure safety, and create lasting value for our customers. We strive to be the most reliable and trusted supplier of construction machinery in India.
              </p>
            </div>
            <div className="bg-[#071B45] rounded-2xl p-8 border border-[#F7B500]/20">
              <div className="w-12 h-12 bg-[#F7B500]/20 rounded-xl flex items-center justify-center mb-5">
                <Award className="w-6 h-6 text-[#F7B500]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                To be a trusted and preferred partner in the construction equipment industry, recognized for quality products, timely support, and customer trust. We aim to expand our reach across India while maintaining our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-4xl font-black text-[#071B45] mt-3 mb-4">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#F7B500]/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 bg-[#F7B500]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#F7B500]/20 transition-colors">
                  <v.icon className="w-6 h-6 text-[#F7B500]" />
                </div>
                <h3 className="font-bold text-[#071B45] text-base mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-10 sm:py-14 lg:py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="text-[#F7B500] text-sm font-bold uppercase tracking-widest">Meet The Team</span>
            <h2 className="text-4xl font-black text-[#071B45] mt-3 mb-4">Leadership</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center w-64">
                <div className="w-16 h-16 bg-[#071B45] rounded-full flex items-center justify-center text-[#F7B500] font-black text-xl mx-auto mb-4">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-black text-[#071B45] mb-1">{member.name}</h3>
                <p className="text-[#F7B500] text-sm font-semibold mb-3">{member.role}</p>
                <a href={`tel:+91${member.phone}`} className="text-gray-500 text-sm hover:text-[#071B45] transition-colors">
                  📞 {member.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 sm:py-14 bg-[#071B45]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Work with Us?</h2>
          <p className="text-white/50 mb-8">Browse our complete product catalogue or get a quote via WhatsApp</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="inline-flex items-center justify-center gap-2 bg-[#F7B500] text-[#071B45] font-bold px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-all">
              Browse Products →
            </Link>
            <a href={WA_BASE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-8 py-3.5 rounded-full hover:bg-green-500 transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
