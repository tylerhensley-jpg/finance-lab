"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import TCPSection from "@/components/TCPSection";
import ScholarshipSection from "@/components/ScholarshipSection";
import LaunchpadSection from "@/components/LaunchpadSection";
import ToolsSection from "@/components/ToolsSection";
import LifeStageCalculator from "@/components/LifeStageCalculator";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemSection />
      <TCPSection />
      <LaunchpadSection />
      <ScholarshipSection />
      <ToolsSection />
      <LifeStageCalculator />
      <ImpactSection />
      <Footer />
    </main>
  );
}
