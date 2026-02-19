import HeroSection from "@/components/atlas/HeroSection";
import AboutSection from "@/components/atlas/AboutSection";
import StatsBar from "@/components/atlas/StatsBar";
import SpeakersSection from "@/components/atlas/SpeakersSection";
import VelocityMarquee from "@/components/atlas/VelocityMarquee";
import WhatIsSection from "@/components/atlas/WhatIsSection";
import WhyAttendSection from "@/components/atlas/WhyAttendSection";
import PartnersSection from "@/components/atlas/PartnersSection";
import FooterSection from "@/components/atlas/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <StatsBar />
      <SpeakersSection />
      <VelocityMarquee />
      <WhatIsSection />
      <WhyAttendSection />
      <VelocityMarquee />
      <PartnersSection />
      <FooterSection />
    </div>
  );
};

export default Index;
