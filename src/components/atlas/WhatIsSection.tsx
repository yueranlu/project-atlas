import { motion, useMotionValue, animate } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";
import { useEffect, useState, useRef } from "react";
import startupfestImg from "@/assets/startupfest.png";
import scarletPitchImg from "@/assets/scarlet-pitch.jpg";
import northStarImg from "@/assets/north-star.jpg";
import symposiumImg from "@/assets/symposium.png";
import sipsImg from "@/assets/sips.png";

const events = [
  {
    name: "North Star 2026",
    image: northStarImg,
    stats: [
      { value: 900, suffix: "+", label: "Attendees" },
      { value: 21, label: "Speakers" },
      { value: 60, suffix: "+", label: "Startups" },
    ],
    year: "Jan 2026",
    supporters: ["McGill Ventures", "Tech Poutine", "La Entrepreneuriale d'HEC"],
    link: null,
  },
  {
    name: "Startupfest",
    image: startupfestImg,
    stats: [
      { value: 5000, suffix: "+", label: "Attendees" },
      { value: 100, suffix: "+", label: "Startups" },
      { value: 3, label: "Days" },
    ],
    year: "Partner Event",
    supporters: ["McGill Ventures", "Montreal Ecosystem"],
    link: null,
  },
  {
    name: "Scarlet Pitch",
    image: scarletPitchImg,
    stats: [
      { value: 300, suffix: "+", label: "Attendees" },
      { value: 5, label: "Pitches" },
      { value: 4, label: "Judges" },
    ],
    year: "2025",
    supporters: ["ElanTech", "McGill Ventures"],
    link: null,
  },
  {
    name: "Symposium Party",
    image: symposiumImg,
    stats: [
      { value: 100, suffix: "+", label: "VCs and Founders" },
      { label: "Socratica Welcome Party" },
    ],
    year: "March 20th",
    supporters: ["Empire Club, Garage Capital"],
    link: "https://luma.com/projectatlasmvc?e=evt-vPv6mMJSTqr9Y6G",
  },
  {
    name: "Sips & Soundscapes",
    image: sipsImg,
    stats: [
      { value: 50, label: "Founders" },
      { value: 1000, label: "MG of Caffeine" },
      { value: 1, label: "DJ" },
    ],
    year: "March 28",
    supporters: ["Café de Montréal"],
    link: "https://luma.com/8douf1po?tk=9TcvmM",
  },
];

const WhatIsSection = () => {
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cardWidth = 380; // approximate card width including gap
    const totalWidth = cardWidth * events.length;
    
    const startAnimation = () => {
      if (animationRef.current) {
        animationRef.current.stop();
      }

      animationRef.current = animate(x, -totalWidth, {
        duration: 12, // Fast scroll - adjust this to control speed (lower = faster)
        repeat: Infinity,
        ease: "linear",
        onComplete: () => {
          x.set(0);
        },
      });
    };

    if (!hovering) {
      startAnimation();
    } else {
      animationRef.current?.stop();
    }

    return () => {
      animationRef.current?.stop();
    };
  }, [hovering, x]);

  const handleCardClick = (link: string | null) => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="relative py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 px-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Track Record</span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            Past Events
          </h3>
          <p className="text-xs text-muted-foreground">
            Events hosted by Project Atlas
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          ref={containerRef}
        >
          <motion.div 
            className="flex gap-6"
            style={{ x }}
          >
            {/* Render events twice for seamless loop */}
            {[...events, ...events].map((event, i) => (
              <motion.div
                key={`${event.name}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i % events.length) * 0.1 }}
                className={`rounded-3xl border border-stroke bg-background/50 overflow-hidden group flex-shrink-0 w-[350px] ${
                  event.link ? 'cursor-pointer' : ''
                }`}
                onClick={() => handleCardClick(event.link)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="font-display text-lg text-foreground">{event.name}</p>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">
                      {event.year}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between gap-2 mb-4">
                    {event.stats.map((stat, j) => (
                      <div key={j} className="text-center flex-1">
                        <span className="font-display text-2xl md:text-3xl text-foreground block">
                          <NumberTicker value={stat.value} delay={0.5 + j * 0.2} />
                          {stat.suffix || ""}
                        </span>
                        <span className="text-[9px] text-muted-foreground uppercase tracking-[0.3em]">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {event.supporters.length > 0 && (
                    <div className="pt-3 border-t border-stroke">
                      <span className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] block mb-2">
                        {event.link ? 'Location' : 'Supported by'}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {event.supporters.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] px-2 py-0.5 rounded-full border border-stroke text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {event.link && (
                    <div className="mt-3 pt-3 border-t border-stroke">
                      <span className="text-[10px] text-blue-500 hover:text-blue-400 transition-colors">
                        View Event Details →
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <p className="text-center text-[10px] text-muted-foreground uppercase tracking-[0.3em] mt-8">
          Hover to pause
        </p>
      </div>
    </section>
  );
};

export default WhatIsSection;