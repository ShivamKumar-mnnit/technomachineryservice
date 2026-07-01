import type { Metadata } from "next";
import { SITE_URL } from "@/lib/contact";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { RequestProvider } from "@/context/RequestContext";
import { Toaster } from "sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import LoadingScreen from "@/components/layout/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Techno Machinery Service | Construction Equipment Supplier Kolkata",
    template: "%s | Techno Machinery Service Kolkata",
  },
  description:
    "Techno Machinery Service – Top construction equipment supplier in Kolkata & West Bengal. Rebar cutting machines, bar bending machines, concrete mixers, excavators, plate compactors, vibratory rollers & more. Best price. Pan India delivery. Call: 7323936166",
  keywords: [
    // Brand
    "Techno Machinery",
    "Techno Machinery Service",
    "technomachineryservice",
    "technomachinery",
    "Techno Machine",
    "Ambey Service",
    "techno machinery kolkata",
    "techno machinery service kolkata",
    // Rebar cutting – all variants
    "rebar cutting machine",
    "rebar cutter",
    "bar cutting machine",
    "steel bar cutting machine",
    "TMT bar cutting machine",
    "TMT bar cutter",
    "rebar cutter machine",
    "bar cutter machine",
    "rebar cutting machine price",
    "rebar cutting machine Kolkata",
    "rebar cutter Kolkata",
    "rebar cutting machine India",
    "GQ40 rebar cutter",
    "GQ45 rebar cutter",
    "electric rebar cutter",
    "hydraulic rebar cutter",
    "automatic rebar cutter",
    "portable rebar cutter",
    "rebar cutting machine price India",
    "buy rebar cutter India",
    "rebar cutter price Kolkata",
    // Bar bending – all variants
    "bar bending machine",
    "rebar bending machine",
    "TMT bar bending machine",
    "steel bar bending machine",
    "bar bender machine",
    "rebar bender",
    "bar bending machine price",
    "bar bending machine Kolkata",
    "bar bending machine India",
    "electric bar bending machine",
    "automatic bar bending machine",
    "portable bar bending machine",
    "buy bar bending machine Kolkata",
    "bar bending machine for sale",
    "stirrup bending machine",
    "stirrup making machine",
    "ring bending machine",
    "ring making machine",
    "spiral bending machine",
    "spiral ring making machine",
    "stirrup machine",
    // Bar straightening
    "bar straightening machine",
    "rebar straightening machine",
    "CNC bar straightening machine",
    "CNC rebar straightening machine",
    "wire straightening machine",
    "steel wire straightener",
    "bar straightener and cutter",
    "automatic bar straightening machine",
    // Thread rolling
    "thread rolling machine",
    "rebar coupler thread rolling machine",
    "rebar threading machine",
    "coupler thread machine",
    "rebar coupler machine",
    // Concrete equipment
    "concrete mixer",
    "concrete mixer machine",
    "concrete mixer Kolkata",
    "cement mixer",
    "concrete mixer price",
    "concrete mixer price India",
    "concrete mixing machine",
    "drum mixer",
    "tilting drum mixer",
    "concrete pump",
    "concrete pumping machine",
    "trailer concrete pump",
    "electric concrete pump",
    "concrete pump price India",
    "concrete cutter",
    "concrete cutting machine",
    "floor saw",
    "road cutter machine",
    "concrete wall cutter",
    // Vibrators
    "concrete vibrator",
    "internal vibrator",
    "needle vibrator",
    "poker vibrator",
    "immersion vibrator",
    "vibrator for concrete",
    "external vibrator",
    "form vibrator",
    "surface vibrator",
    "vibrator motor",
    // Screeds & trowels
    "surface screed",
    "power screed",
    "concrete screed machine",
    "vibratory screed",
    "power trowel",
    "floor trowel machine",
    "floor finishing machine",
    // Compaction
    "plate compactor",
    "plate compactor machine",
    "vibratory plate compactor",
    "plate compactor price India",
    "tamping rammer",
    "jumping jack compactor",
    "tamping machine",
    "vibratory roller",
    "road roller",
    "mini road roller",
    "walk behind roller",
    "double drum roller",
    "single drum roller",
    // Heavy equipment
    "excavator",
    "mini excavator",
    "hydraulic excavator",
    "excavator price India",
    "mini excavator Kolkata",
    "backhoe loader",
    "JCB machine",
    "earth moving equipment",
    "earth moving machine",
    "earth mover",
    // Jack hammers
    "jack hammer",
    "demolition hammer",
    "electric jack hammer",
    "pneumatic jack hammer",
    "rotary hammer",
    "breaker machine",
    "concrete breaker",
    // Generators
    "generator",
    "diesel generator",
    "petrol generator",
    "silent generator",
    "portable generator",
    "generator set",
    "genset",
    "power generator India",
    "generator price Kolkata",
    // Water pumps
    "water pump",
    "petrol water pump",
    "submersible pump",
    "dewatering pump",
    "water pump price India",
    "construction water pump",
    // Specialty
    "suspended platform",
    "gondola platform",
    "ZLP suspended platform",
    "electric gondola",
    "working platform",
    "material hoist",
    "construction hoist",
    "goods lift",
    "paver roller",
    "cube testing machine",
    // Location – Kolkata + surroundings
    "construction equipment Kolkata",
    "construction machinery Kolkata",
    "construction equipment West Bengal",
    "construction equipment Howrah",
    "construction equipment Durgapur",
    "construction equipment Asansol",
    "construction equipment Siliguri",
    "construction equipment Burdwan",
    "construction machinery dealer Kolkata",
    "construction equipment supplier Kolkata",
    "construction equipment dealer West Bengal",
    "construction equipment price Kolkata",
    "construction machine dealer Howrah",
    // Pan India intent
    "construction equipment supplier India",
    "construction machinery supplier India",
    "construction equipment dealer India",
    "construction equipment price India",
    "construction equipment for sale India",
    "buy construction equipment India",
    "construction machinery price",
    // Application/use-case
    "building construction equipment",
    "road construction machinery",
    "infrastructure equipment",
    "civil construction equipment",
    "TMT bar processing machine",
    "steel processing machine",
    "rebar processing equipment",
    "reinforcement bar machine",
    "construction tool supplier",
    "construction site machinery",
    "construction machine supplier",
    // Parts & service intent
    "construction machine parts",
    "construction equipment spare parts",
    "construction machine service",
    "construction equipment rental",
    "construction machinery on hire",
    "construction equipment on rent",
    "construction machine quotation",
    "construction equipment quote",
  ],
  authors: [{ name: "Techno Machinery Service" }],
  creator: "Techno Machinery Service",
  publisher: "Techno Machinery Service",
  category: "Construction Equipment",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.technomachineryservice.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.technomachineryservice.com",
    siteName: "Techno Machinery Service",
    title: "Techno Machinery Service | Construction Equipment Supplier Kolkata",
    description:
      "Top construction equipment supplier in Kolkata – rebar cutters, bar benders, concrete mixers, excavators & more. Pan India delivery. Call: 7323936166",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Techno Machinery Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Machinery Service | Construction Equipment Kolkata",
    description: "Rebar cutters, bar benders, mixers, excavators & more. Pan India delivery.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico",        sizes: "any" },
      { url: "/favicon-16x16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "10FI2whmNIJf8dcT3TRud512EvB7OhS3JuIqd",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#071B45" />
        <meta name="msapplication-TileColor" content="#071B45" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
      </head>
      <body className="bg-background text-dark antialiased overflow-x-hidden" suppressHydrationWarning>
        <RequestProvider>
          <LoadingScreen />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#071B45",
                color: "#fff",
                border: "1px solid #F7B500",
              },
            }}
          />
        </RequestProvider>
      </body>
    </html>
  );
}
