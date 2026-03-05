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
          REGISTRATION OPEN · MAY 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-[12vw] md:text-[10vw] lg:text-[180px] leading-[0.85] font-bold tracking-tight text-foreground"
        >
          Atlas
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-mono text-sm md:text-base text-muted-foreground mt-6 tracking-widest"
        >
          Montreal → Toronto Tech Week
        </motion.p>

        <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col items-start text-left"
          >
            <p className="font-mono text-[10px] md:text-xs text-spaced text-muted-foreground">
              Connecting Canada's Young Builders to the World
            </p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-3">
              <div className="hidden md:block w-12 h-[1px] bg-primary/50" />
              <p className="font-mono text-[10px] md:text-xs text-muted-foreground">
                20 students · 300+ events · 7 days
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col items-start md:items-end gap-2 w-full md:w-auto"
          >
            <span className="font-mono text-[10px] md:text-xs px-3 py-1 border border-primary/50 rounded-full text-primary">
              MAY 24–30
            </span>
            <span className="font-mono text-[10px] md:text-xs text-muted-foreground">TORONTO TECH WEEK</span>
            <span className="font-mono text-[10px] md:text-xs text-muted-foreground">TORONTO, ON</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
