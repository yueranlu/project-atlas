import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";
import atlasLogo from "@/assets/atlas-logo.png";

const roles = ["Builders", "Founders", "Engineers", "Creators"];

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);
  // HLS video setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const src = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    try {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        return () => hls.destroy();
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    } catch {
      // HLS not available
    }
  }, []);

  // Rotating roles
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
          style={{ filter: "hue-rotate(60deg) saturate(1.2)" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1400px] mx-auto w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-4"
        >
          <img
            src={atlasLogo}
            alt="Atlas logo"
            className="w-20 h-20 md:w-28 md:h-28 object-contain"
            style={{
              filter: "drop-shadow(0 0 20px rgba(137, 170, 204, 0.6)) drop-shadow(0 0 50px rgba(78, 133, 191, 0.3))",
            }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs text-muted-foreground uppercase tracking-[0.3em] mb-8"
        >
          REGISTRATION OPEN &middot; MAY 24-30TH 2026
        </motion.div>

        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2"
        >
          project
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-[12vw] md:text-[10vw] lg:text-[180px] font-display leading-[0.85] tracking-tight"
          style={{
            background: "linear-gradient(90deg, #A989CC 0%, #7E4EBF 50%, #A989CC 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient-shift 6s ease infinite",
          }}
        >
          Atlas
        </motion.h1>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-sm md:text-base text-muted-foreground mt-6 tracking-widest"
        >
          Montreal &rarr; Toronto &middot; Connecting Canada's Young{" "}
          <span
            key={roleIndex}
            className="font-display text-foreground animate-role-fade-in inline-block"
          >
            {roles[roleIndex]}
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-12 mt-4"
        >
          7 days alongside the most ambitious builders in Canada. Private events, firm visits, and connections that outlast the week.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="inline-flex gap-4"
        >
          <a
            href="#about"
            className="group relative rounded-full text-sm px-7 py-3.5 bg-foreground text-background hover:bg-background hover:text-foreground transition-all hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Learn More
          </a>
          <a
            href="#register"
            className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-background text-foreground hover:border-transparent transition-all hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            Register Now
          </a>
        </motion.div>
      </div>

    </section>
  );
};

export default HeroSection;
