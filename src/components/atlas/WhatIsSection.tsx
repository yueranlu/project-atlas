import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import startupfestImg from "@/assets/startupfest.png";
import scarletPitchImg from "@/assets/scarlet-pitch.jpg";
import northStarImg from "@/assets/north-star.jpg";

const events = [
  {
    name: "North Star 2026",
    image: northStarImg,
    stats: [
      { value: 900, suffix: "+", label: "Attendees" },
      { value: 21, label: "Speakers" },
      { value: 60, suffix: "+", label: "Startups" },
    ],
    year: "2026",
    supporters: ["McGill Ventures", "Tech Poutine", "La Entrepreneuriale d'HEC"],
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
  },
];

const WhatIsSection = () => {
  return (
    <section className="relative py-32 px-6 bg-card overflow-hidden">
      <DotPattern className="text-purple-400/8" width={20} height={20} cr={0.6} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Event Cards with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Past Events
          </h3>
          <p className="font-mono text-xs text-muted-foreground mb-10">
            Past events hosted by Project Atlas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="rounded-2xl border-glow bg-background/50 overflow-hidden group"
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="font-serif text-lg font-bold text-foreground">{event.name}</p>
                  <span className="font-mono text-[10px] text-primary text-spaced">{event.year}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex justify-between gap-2 mb-4">
                  {event.stats.map((stat, j) => (
                    <div key={j} className="text-center flex-1">
                      <span className="font-serif text-2xl md:text-3xl font-bold text-foreground block">
                        <NumberTicker value={stat.value} delay={0.5 + j * 0.2} />
                        {stat.suffix || ""}
                      </span>
                      <span className="font-mono text-[9px] text-muted-foreground text-spaced">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {event.supporters.length > 0 && (
                  <div className="pt-3 border-t border-border">
                    <span className="font-mono text-[9px] text-muted-foreground text-spaced block mb-2">
                      Supported by
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {event.supporters.map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] px-2 py-0.5 rounded-full border-glow text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
