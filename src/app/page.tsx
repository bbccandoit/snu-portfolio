import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CareerSection from "@/components/CareerSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import AffiliationsSection from "@/components/AffiliationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CareerSection />
        <ServicesSection />
        <AboutSection />
        <ExpertiseSection />
        <AffiliationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
