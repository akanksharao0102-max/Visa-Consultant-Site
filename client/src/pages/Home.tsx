import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import CountriesSection from "@/components/CountriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import InsightsSection from "@/components/InsightsSection";
import UniversityPartners from "@/components/UniversityPartners";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <CountriesSection />
      <TestimonialsSection />
      <CTASection />
      <InsightsSection />
      <UniversityPartners />
      <ContactSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
