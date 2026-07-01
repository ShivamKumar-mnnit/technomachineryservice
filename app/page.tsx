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

export default function HomePage() {
  return (
    <>
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
