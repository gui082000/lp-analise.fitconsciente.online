import { UrgencyBar } from "@/components/ui/UrgencyBar";
import { Hero } from "@/components/sections/Hero";
import { PreviewCarousel } from "@/components/sections/PreviewCarousel";
import { QuickBullets } from "@/components/sections/QuickBullets";
import { PainSection } from "@/components/sections/PainSection";
import { BridgeSection } from "@/components/sections/BridgeSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { WhyVisualMaps } from "@/components/sections/WhyVisualMaps";
import { ModulesIndex } from "@/components/sections/ModulesIndex";
import { StudyAnywhere } from "@/components/sections/StudyAnywhere";
import { BonusSection } from "@/components/sections/BonusSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { PricingCountdown } from "@/components/sections/PricingCountdown";
import { PricingSection } from "@/components/sections/PricingSection";
import { ExpertSection } from "@/components/sections/ExpertSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <main>
        <Hero />
        <PreviewCarousel />
        <QuickBullets />
        <PainSection />
        <BridgeSection />
        <BenefitsSection />
        <WhyVisualMaps />
        <ModulesIndex />
        <StudyAnywhere />
        <BonusSection />
        <ComparisonSection />
        <TestimonialsCarousel />
        <PricingCountdown />
        <PricingSection />
        <ExpertSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
