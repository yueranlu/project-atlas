import { motion } from "framer-motion";
import GlobeBackground from "./GlobeBackground";
import { Particles } from "@/components/ui/particles";
import atlasLogo from "@/assets/atlas-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Globe background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <GlobeBackground />
        <Particles className="absolute inset-0" quantity={60} color="#a855f7" size={0.6} staticity={30} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1400px] mx-auto w-full">
        {/* Floating logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-4"
        >
          <img
            src={atlasLogo}
            alt="Atlas logo"
            className="w-28 h-28 md:w-36 md:h-36 object-contain"
            style={{
              filter:
                "drop-shadow(0 0 30px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 70px rgba(168, 85, 247, 0.4))",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-block font-mono text-xs text-spaced border border-border px-4 py-1.5 rounded-full mb-8 text-muted-foreground"
        >
          REGISTRATION OPEN · MAY 24–30TH 2026
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase mb-2"
        >
          project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-[12vw] md:text-[10vw] lg:text-[180px] leading-[0.85] font-bold tracking-tight"
          style={{
            background: "linear-gradient(135deg, #c084fc 0%, #a855f7 35%, #7c3aed 65%, #c084fc 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradientShift 4s ease-in-out infinite",
          }}
        >
          Atlas
        </motion.h1>

        <style>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-mono text-sm md:text-base text-muted-foreground mt-6 tracking-widest"
        >
          Montreal → Toronto Tech Week
        </motion.p>

        {/* Tagline — centered at the bottom, per-letter hover */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl text-foreground mt-16 mb-4 tracking-tight font-bold"
        >
          {"Connecting Canada's Young Builders to the World".split("").map((char, i) => (
            <motion.span
              key={i}
              whileHover={{
                color: "#a855f7",
                y: -6,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;