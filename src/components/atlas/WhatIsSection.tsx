import { motion } from "framer-motion";
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
    <section className="relative py-32 px-6 bg-surface overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Track Record</span>
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-foreground mb-2">
            Past Events
          </h3>
          <p className="text-xs text-muted-foreground">
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
              className="rounded-3xl border border-stroke bg-background/50 overflow-hidden group"
            >
              <div className="relative h-40 md:h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="font-display text-lg text-foreground">{event.name}</p>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.3em]">{event.year}</span>
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
                      Supported by
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
