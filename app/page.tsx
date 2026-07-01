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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Techno Machinery Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Techno Machinery Service (powered by Ambey Service) is a leading construction equipment supplier based in Kolkata, West Bengal. We supply rebar cutting machines, bar bending machines, bar straightening machines, concrete mixers, excavators, backhoe loaders, plate compactors, vibratory rollers, generators, water pumps and more across India.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Techno Machinery Service located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Techno Machinery Service is located at J8P6+PQX, Sapuipara, Ghosh Para, Anandanagar, Chakpara, Howrah, West Bengal – 711227. We serve customers in Kolkata, Howrah, Durgapur, Asansol, Siliguri and all across India.",
      },
    },
    {
      "@type": "Question",
      name: "What construction machines does Techno Machinery sell?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Techno Machinery Service supplies 69+ construction machines including: Rebar Cutting Machines (GQ40, GQ45, TM-R32), Bar Bending Machines, Ring Making Machines, Bar Straightening Machines, Concrete Mixers, Concrete Pumps, Plate Compactors, Tamping Rammers, Vibratory Rollers, Excavators, Backhoe Loaders, Jack Hammers, Generators, Water Pumps, Suspended Platforms, Thread Rolling Machines and more.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of a rebar cutting machine in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rebar cutting machine prices in India vary by capacity. At Techno Machinery Service, we offer rebar cutters starting from entry-level models up to heavy-duty 40mm and 45mm capacity machines. Contact us at 7323936166 or WhatsApp for the latest price and best deal.",
      },
    },
    {
      "@type": "Question",
      name: "Does Techno Machinery deliver Pan India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Techno Machinery Service delivers construction equipment across India. We are based in Kolkata, West Bengal and supply to all major cities and states including Delhi, Mumbai, Chennai, Hyderabad, Bengaluru, and all of North East India.",
      },
    },
    {
      "@type": "Question",
      name: "How to contact Techno Machinery Service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Techno Machinery Service by calling or WhatsApp at +91 7323936166 or +91 7004790714. Email: technomachinery259@gmail.com. Office: Howrah, West Bengal. Business hours: Monday to Saturday, 9AM to 7PM.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price of a bar bending machine in Kolkata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bar bending machine prices depend on capacity and model. Techno Machinery Service offers a range of TMT bar bending machines for 6mm to 40mm bar sizes. Call us at 7323936166 for the current price list and availability in Kolkata and West Bengal.",
      },
    },
    {
      "@type": "Question",
      name: "Does Techno Machinery sell excavators and backhoe loaders?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Techno Machinery Service supplies mini excavators and backhoe loaders for construction projects. We offer competitive pricing with Pan India delivery. Contact us at 7323936166 for specifications, pricing and availability.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
