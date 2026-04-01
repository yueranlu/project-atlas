import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/atlas/LoadingScreen";
import Navbar from "@/components/atlas/Navbar";
import HeroSection from "@/components/atlas/HeroSection";
import AboutSection from "@/components/atlas/AboutSection";
import StatsBar from "@/components/atlas/StatsBar";
import SpeakersSection from "@/components/atlas/SpeakersSection";
import VelocityMarquee from "@/components/atlas/VelocityMarquee";
import WhyAttendSection from "@/components/atlas/WhyAttendSection";
import RegisterSection from "@/components/atlas/RegisterSection";
import ScheduleSection from "@/components/atlas/ScheduleSection";
import PartnersSection from "@/components/atlas/PartnersSection";
import WhatIsSection from "@/components/atlas/WhatIsSection";
import FooterSection from "@/components/atlas/FooterSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleComplete = useCallback(() => setIsLoading(false), []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleComplete} />}
      </AnimatePresence>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <SpeakersSection />
      <VelocityMarquee />
      <WhyAttendSection />
      <RegisterSection />
      <ScheduleSection />
      <VelocityMarquee />
      <PartnersSection />
      <WhatIsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
