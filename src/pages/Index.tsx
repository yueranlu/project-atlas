import HeroSection from "@/components/atlas/HeroSection";
import AboutSection from "@/components/atlas/AboutSection";
import StatsBar from "@/components/atlas/StatsBar";
import SpeakersSection from "@/components/atlas/SpeakersSection";
import VelocityMarquee from "@/components/atlas/VelocityMarquee";
import WhatIsSection from "@/components/atlas/WhatIsSection";
import WhyAttendSection from "@/components/atlas/WhyAttendSection";
import RegisterSection from "@/components/atlas/RegisterSection";
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
      <WhyAttendSection />
      <RegisterSection />
      <VelocityMarquee />
      <PartnersSection />
      <WhatIsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
