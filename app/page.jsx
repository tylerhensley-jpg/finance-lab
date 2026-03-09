import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import JourneySection from "@/components/JourneySection";
import TCPSection from "@/components/TCPSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import ToolsSection from "@/components/ToolsSection";
import EducatorsSection from "@/components/EducatorsSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <JourneySection />
      <TCPSection />
      <ScholarshipSection />
      <ToolsSection />
      <EducatorsSection />
      <ImpactSection />
      <Footer />
    </main>
  );
}
