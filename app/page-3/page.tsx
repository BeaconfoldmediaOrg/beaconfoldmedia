import { Navigation } from "@/components/landing/navigation";
import { FeaturesSection } from "@/components/landing/features-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { SecuritySection } from "@/components/landing/security-section";
import { DevelopersSection } from "@/components/landing/developers-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { BlogsSection } from "@/components/landing/blogs-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection3 } from "@/components/landing/hero-section-3";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navigation variant="light" />
      <HeroSection3 />
      <InfrastructureSection />
      <HowItWorksSection />
      <FeaturesSection />
       <SecuritySection />
            <TestimonialsSection />
      <BlogsSection />
      {/* <MetricsSection /> */}
      {/* <IntegrationsSection /> */}
{/*  
      <DevelopersSection /> */}

      <CtaSection />
      <FooterSection />
    </main>
  );
}
