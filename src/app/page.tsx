import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection from "@/components/sections/FAQSection";
import TrustBar from "@/components/sections/TrustBar";
import StatsSection from "@/components/sections/StatsSection";
import PremiumCTA from "@/components/sections/PremiumCTA";
import QuotationBuilder from "@/components/sections/QuotationBuilder";
import TransparencyDashboard from "@/components/sections/TransparencyDashboard";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TrustBar />
      <StatsSection />
      <ServicesSection />
      <QuotationBuilder />
      <ProcessSection />
      <PortfolioSection />
      <AboutSection />
      <TransparencyDashboard />
      <TestimonialsSection />
      <FAQSection />
      <PremiumCTA />
      <ContactSection />
    </main>
  );
}
