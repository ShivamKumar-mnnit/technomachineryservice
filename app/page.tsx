import HeroSection from "@/components/sections/HeroSection";
import CompanyOverview from "@/components/sections/CompanyOverview";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import IndustriesSection from "@/components/sections/IndustriesSection";
import YouTubeSection from "@/components/sections/YouTubeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Store"],
      "@id": "https://www.technomachineryservice.com/#business",
      name: "Techno Machinery Service",
      alternateName: ["Techno Machinery", "Techno Machine", "Ambey Service"],
      url: "https://www.technomachineryservice.com",
      logo: "https://www.technomachineryservice.com/logo.png",
      image: "https://www.technomachineryservice.com/logo.png",
      description:
        "Techno Machinery Service is a leading supplier of construction equipment in Kolkata and West Bengal. We supply rebar cutting machines, bar bending machines, concrete mixers, excavators, plate compactors, vibratory rollers and more at best prices with Pan India delivery.",
      telephone: ["+917323936166", "+917004790714"],
      email: "technomachinery259@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "J8P6+PQX, Sapuipara, Ghosh Para, Anandanagar, Chakpara",
        addressLocality: "Howrah",
        addressRegion: "West Bengal",
        postalCode: "711227",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.5584,
        longitude: 88.2894,
      },
      areaServed: [
        { "@type": "City", name: "Kolkata" },
        { "@type": "City", name: "Howrah" },
        { "@type": "City", name: "Durgapur" },
        { "@type": "City", name: "Asansol" },
        { "@type": "State", name: "West Bengal" },
        { "@type": "Country", name: "India" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Bank Transfer, UPI",
      sameAs: [
        "https://youtube.com/@technomachinery5272",
        "https://facebook.com/technomachinery",
        "https://instagram.com/technomachinery",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Construction Equipment Catalog",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Rebar Cutting Machines" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bar Bending Machines" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Bar Straightening Machines" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Concrete Mixers" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Plate Compactors" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Excavators" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Backhoe Loaders" } },
          { "@type": "Offer", itemOffered: { "@type": "Product", name: "Generators" } },
        ],
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.technomachineryservice.com/#organization",
      name: "Techno Machinery Service",
      url: "https://www.technomachineryservice.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.technomachineryservice.com/logo.png",
        width: 400,
        height: 160,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+917323936166",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["Hindi", "English", "Bengali"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.technomachineryservice.com/#website",
      url: "https://www.technomachineryservice.com",
      name: "Techno Machinery Service",
      description: "Construction equipment supplier in Kolkata – rebar cutters, bar benders, mixers & more",
      publisher: { "@id": "https://www.technomachineryservice.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://www.technomachineryservice.com/products?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <StatsSection />
      <CompanyOverview />
      <CategoriesSection />
      <FeaturedProducts />
      <WhyChooseUs />
      <IndustriesSection />
      <YouTubeSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
