import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Equipment – 69+ Products | Techno Machinery Service Kolkata",
  description: "Browse 69+ construction machines at Techno Machinery Service, Kolkata. Rebar cutters, bar bending machines, concrete mixers, plate compactors, excavators, backhoe loaders, generators & more. Best price. Pan India delivery. Call: 7323936166",
  alternates: { canonical: "/products" },
  keywords: [
    "construction equipment list",
    "rebar cutting machine price India",
    "bar bending machine Kolkata",
    "concrete mixer price",
    "plate compactor for sale",
    "excavator dealer Kolkata",
    "construction machinery catalogue",
    "buy construction equipment India",
    "Techno Machinery Service products",
  ],
  openGraph: {
    title: "69+ Construction Machines | Techno Machinery Service Kolkata",
    description: "Rebar cutters, bar benders, mixers, compactors, excavators & more. Pan India delivery. Call: 7323936166",
    url: "/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
