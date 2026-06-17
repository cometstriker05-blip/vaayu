import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import ProblemSection  from "@/components/ProblemSection";
import FeaturesSection from "@/components/FeaturesSection";
import LanguageSection from "@/components/LanguageSection";
import MissionSection  from "@/components/MissionSection";
import ImpactSection   from "@/components/ImpactSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <FeaturesSection />
        <LanguageSection />
        <MissionSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
