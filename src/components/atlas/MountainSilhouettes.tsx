import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const MountainSilhouettes = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFar = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const yNear = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Far mountains — lightest, slowest parallax */}
      <motion.div
        style={{ y: yFar }}
        className="absolute bottom-0 left-0 right-0 z-[1]"
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="w-full h-[45vh] md:h-[50vh]"
        >
          <path
            d="M0,400 L0,280 Q40,260 80,270 L120,250 Q160,220 200,240 L260,200 Q300,170 340,190 L400,160 Q430,140 460,155 L520,130 Q560,100 600,120 L660,95 Q700,75 740,100 L800,80 Q840,60 880,85 L940,110 Q980,90 1020,105 L1080,130 Q1120,115 1160,135 L1220,160 Q1260,145 1300,170 L1360,200 Q1400,220 1440,210 L1440,400 Z"
            fill="hsl(270, 30%, 16%)"
          />
        </svg>
      </motion.div>

      {/* Mid mountains — medium shade, medium parallax */}
      <motion.div
        style={{ y: yMid }}
        className="absolute bottom-0 left-0 right-0 z-[2]"
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="w-full h-[35vh] md:h-[42vh]"
        >
          <path
            d="M0,400 L0,300 Q60,270 100,285 L160,260 Q200,230 240,250 L320,210 Q360,180 400,200 L480,170 Q520,145 560,165 L640,140 Q680,120 720,145 L780,125 Q820,105 860,130 L920,155 Q960,140 1000,160 L1060,185 Q1100,165 1140,180 L1200,210 Q1240,195 1280,220 L1340,250 Q1380,270 1440,255 L1440,400 Z"
            fill="hsl(270, 40%, 10%)"
          />
        </svg>
      </motion.div>

      {/* Near mountains — darkest, most parallax */}
      <motion.div
        style={{ y: yNear }}
        className="absolute bottom-0 left-0 right-0 z-[3]"
      >
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="w-full h-[28vh] md:h-[35vh]"
        >
          <path
            d="M0,400 L0,320 Q50,300 100,310 L180,280 Q220,255 260,275 L340,245 Q380,220 420,240 L500,215 Q540,195 580,210 L660,185 Q700,165 740,190 L820,170 Q860,155 900,175 L960,200 Q1000,185 1040,195 L1120,225 Q1160,210 1200,230 L1280,260 Q1320,250 1360,270 L1440,290 L1440,400 Z"
            fill="hsl(270, 40%, 6%)"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default MountainSilhouettes;
