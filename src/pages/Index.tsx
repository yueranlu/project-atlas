import Navbar from "@/components/atlas/Navbar";
import HeroSection from "@/components/atlas/HeroSection";
import AboutSection from "@/components/atlas/AboutSection";
import SpeakersSection from "@/components/atlas/SpeakersSection";
import MarqueeSection from "@/components/atlas/MarqueeSection";
import WhatIsSection from "@/components/atlas/WhatIsSection";
import WhyAttendSection from "@/components/atlas/WhyAttendSection";
import PartnersSection from "@/components/atlas/PartnersSection";
import FooterSection from "@/components/atlas/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <MarqueeSection />
      <WhatIsSection />
      <WhyAttendSection />
      <MarqueeSection />
      <PartnersSection />
      <FooterSection />
    </div>
  );
};

export default Index;
