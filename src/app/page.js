import BrandLogosBar from "@/components/landing/BrandLogosBar";
import ComparisonTable from "@/components/landing/ComparisonTable";
import CTABanner from "@/components/landing/CTABanner";
import ExploreCategories from "@/components/landing/ExploreCategories";
import FeatureSuite from "@/components/landing/FeatureSuite";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import JourneySection from "@/components/landing/JourneySection";
import LandingNavbar from "@/components/landing/LandingNavbar";
import TestimonialsAndFAQ from "@/components/landing/TestimonialsAndFAQ";
import TrendingMarketplace from "@/components/landing/TrendingMarketplace";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavbar />
      <main>
        <HeroSection />
        <HowItWorks></HowItWorks>
        <ExploreCategories></ExploreCategories>
        <FeatureSuite></FeatureSuite>
        <ComparisonTable></ComparisonTable>
        <TrendingMarketplace></TrendingMarketplace>
        <JourneySection></JourneySection>
        <TestimonialsAndFAQ></TestimonialsAndFAQ>
        <CTABanner></CTABanner>
        <Footer></Footer>
        {/* Further sections like #how-it-works can be added here */}
      </main>
    </div>
  );
}