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
    default: "Techno Machinery | Road & Building Construction Equipment",
    template: "%s | Techno Machinery",
  },
  description:
    "Techno Machinery – Premium road and building construction equipment supplier in India. Concrete mixers, excavators, backhoe loaders, rebar cutters, generators & more. Pan India delivery.",
  keywords: [
    "construction equipment",
    "road construction machinery",
    "concrete mixer",
    "excavator",
    "backhoe loader",
    "rebar cutter",
    "generator",
    "tamping rammer",
    "plate compactor",
    "vibratory roller",
    "Techno Machinery",
    "West Bengal",
  ],
  authors: [{ name: "Techno Machinery" }],
  creator: "Techno Machinery",
  publisher: "Techno Machinery",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.technomachineryservice.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.technomachineryservice.com",
    siteName: "Techno Machinery",
    title: "Techno Machinery | Road & Building Construction Equipment",
    description:
      "Premium road and building construction equipment supplier in India. Pan India delivery with expert support.",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Techno Machinery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Techno Machinery | Construction Equipment",
    description: "Premium construction equipment supplier. Pan India delivery.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
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
