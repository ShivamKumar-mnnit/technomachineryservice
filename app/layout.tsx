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
    "Techno Machine",
    "Ambey Service",
    // Rebar machines – high intent
    "rebar cutting machine",
    "bar cutting machine",
    "steel bar cutting machine",
    "TMT bar cutting machine",
    "rebar cutter Kolkata",
    "bar bending machine",
    "rebar bending machine",
    "TMT bar bending machine",
    "steel bar bender",
    "stirrup bending machine",
    "ring making machine",
    "bar straightening machine",
    "CNC rebar straightening machine",
    "thread rolling machine",
    // Concrete & compaction
    "concrete mixer",
    "concrete mixer Kolkata",
    "plate compactor",
    "tamping rammer",
    "vibratory roller",
    "concrete cutter",
    "concrete pump",
    "internal vibrator",
    "poker vibrator",
    "external vibrator",
    // Heavy equipment
    "excavator",
    "mini excavator",
    "backhoe loader",
    "jack hammer",
    "generator",
    "diesel generator",
    // Specialty
    "water pump",
    "petrol water pump",
    "suspended platform",
    "gondola platform",
    "power trowel",
    // Location
    "construction equipment Kolkata",
    "construction machinery Kolkata",
    "construction equipment West Bengal",
    "construction equipment Howrah",
    "construction equipment supplier India",
    "construction machinery dealer Kolkata",
    "construction equipment price India",
    "building construction equipment",
    "road construction machinery",
    // Parts & intent
    "construction machine parts",
    "construction equipment supplier",
    "construction equipment dealer",
    "buy rebar cutter India",
    "buy bar bending machine Kolkata",
    "construction equipment rental",
    "construction machinery price",
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
