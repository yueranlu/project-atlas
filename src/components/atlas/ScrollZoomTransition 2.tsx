import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollZoomTransition = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scale the entire mountain scene from 1x to 20x — zooms into the dark foreground
  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);

  // Fade out the scene as it zooms past
  const opacity = useTransform(scrollYProgress, [0, 0.6, 0.85], [1, 1, 0]);

  // Text zooms in and fades
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 4]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.45], [1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "hsl(240, 30%, 5%)" }}>
        {/* The mountain scene — scales up from center-bottom as you scroll */}
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 origin-[50%_85%]"
        >
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            {/* Sky gradient */}
            <defs>
              <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(300, 30%, 85%)" />
                <stop offset="25%" stopColor="hsl(280, 25%, 78%)" />
                <stop offset="50%" stopColor="hsl(260, 30%, 70%)" />
                <stop offset="100%" stopColor="hsl(245, 35%, 55%)" />
              </linearGradient>
            </defs>

            {/* Sky */}
            <rect width="1440" height="900" fill="url(#skyGrad)" />

            {/* Layer 8 — farthest, lightest */}
            <path
              d="M0,380 Q120,340 240,360 Q360,330 480,350 Q600,320 720,345 Q840,310 960,340 Q1080,320 1200,350 Q1320,330 1440,355 L1440,900 L0,900 Z"
              fill="hsl(260, 30%, 72%)"
              opacity="0.6"
            />

            {/* Layer 7 */}
            <path
              d="M0,420 Q100,380 200,405 Q320,370 440,395 Q560,360 680,390 Q800,355 920,385 Q1040,365 1160,395 Q1280,375 1440,400 L1440,900 L0,900 Z"
              fill="hsl(255, 32%, 65%)"
              opacity="0.7"
            />

            {/* Layer 6 */}
            <path
              d="M0,470 Q140,430 260,455 Q380,420 500,445 Q620,410 740,440 Q860,405 980,435 Q1100,420 1220,445 Q1340,425 1440,450 L1440,900 L0,900 Z"
              fill="hsl(250, 35%, 58%)"
              opacity="0.8"
            />

            {/* Layer 5 */}
            <path
              d="M0,520 Q100,485 220,505 Q340,475 460,500 Q580,465 700,495 Q820,460 940,490 Q1060,470 1180,498 Q1300,480 1440,505 L1440,900 L0,900 Z"
              fill="hsl(248, 38%, 50%)"
              opacity="0.85"
            />

            {/* Layer 4 */}
            <path
              d="M0,570 Q160,535 280,555 Q400,525 520,550 Q640,515 760,545 Q880,510 1000,540 Q1120,525 1240,550 Q1360,535 1440,555 L1440,900 L0,900 Z"
              fill="hsl(245, 40%, 42%)"
              opacity="0.9"
            />

            {/* Layer 3 */}
            <path
              d="M0,630 Q120,595 260,615 Q380,585 500,610 Q620,575 740,605 Q860,570 980,600 Q1100,580 1220,608 Q1340,590 1440,615 L1440,900 L0,900 Z"
              fill="hsl(242, 42%, 34%)"
            />

            {/* Layer 2 */}
            <path
              d="M0,690 Q140,660 280,680 Q400,650 520,672 Q640,640 760,665 Q880,635 1000,660 Q1120,645 1260,670 Q1360,655 1440,680 L1440,900 L0,900 Z"
              fill="hsl(240, 45%, 25%)"
            />

            {/* Layer 1 — nearest, darkest */}
            <path
              d="M0,760 Q100,730 240,750 Q360,720 480,745 Q600,715 720,740 Q840,710 960,735 Q1080,720 1200,745 Q1320,725 1440,750 L1440,900 L0,900 Z"
              fill="hsl(240, 45%, 15%)"
            />

            {/* Foreground — matches site bg */}
            <path
              d="M0,830 Q180,810 360,825 Q540,805 720,820 Q900,800 1080,818 Q1260,805 1440,825 L1440,900 L0,900 Z"
              fill="hsl(240, 30%, 5%)"
            />
          </svg>
        </motion.div>

        {/* Center text */}
        <motion.div
          style={{ scale: textScale, opacity: textOpacity }}
          className="absolute inset-0 z-[5] flex items-center justify-center"
        >
          <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white/90 text-center max-w-3xl px-8 drop-shadow-lg">
            Montreal builds different
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollZoomTransition;
