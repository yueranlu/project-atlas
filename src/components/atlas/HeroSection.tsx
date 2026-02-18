import { motion } from "framer-motion";
import GlobeBackground from "./GlobeBackground";
import { Particles } from "@/components/ui/particles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Globe background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <GlobeBackground />
        <Particles className="absolute inset-0" quantity={60} color="#a855f7" size={0.6} staticity={30} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background pointer-events-none" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-block font-mono text-xs text-spaced border border-border px-4 py-1.5 rounded-full mb-8 text-muted-foreground"
        >
          MCGILL VENTURES · MAY 2026
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 flex flex-col items-start text-left max-w-lg"
        >
          <p className="font-mono text-xs text-spaced text-muted-foreground">
            Connecting Montreal's Builders to the World
          </p>
          <div className="flex items-center gap-4 mt-3">
            <div className="w-12 h-[1px] bg-primary/50" />
            <p className="font-mono text-xs text-muted-foreground">
              100–150+ students · 300+ events · 5 days
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-0 right-6 flex flex-col items-end gap-2"
        >
          <span className="font-mono text-xs px-3 py-1 border border-primary/50 rounded-full text-primary">
            MAY 24–30
          </span>
          <span className="font-mono text-xs text-muted-foreground">TORONTO TECH WEEK</span>
          <span className="font-mono text-xs text-muted-foreground">TORONTO, ON</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
