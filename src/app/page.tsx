import Preloader       from "@/components/Preloader";
import ScrollProgress  from "@/components/ScrollProgress";
import CustomCursor    from "@/components/CustomCursor";
import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import ProblemSection  from "@/components/ProblemSection";
import CoastlineDivider from "@/components/CoastlineDivider";
import FeaturesSection from "@/components/FeaturesSection";
import Marquee         from "@/components/Marquee";
import LanguageSection from "@/components/LanguageSection";
import MissionSection  from "@/components/MissionSection";
import ImpactSection   from "@/components/ImpactSection";
import ContactSection  from "@/components/ContactSection";
import Footer          from "@/components/Footer";
import BackToTop       from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <CoastlineDivider />
        <FeaturesSection />
        <Marquee />
        <LanguageSection />
        <MissionSection />
        <ImpactSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <div aria-hidden="true" className="grain" />
    </>
  );
}
