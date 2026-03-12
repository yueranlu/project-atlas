import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MapPin, Bus, Calendar, Home, ArrowRight, ArrowDown } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const schedule = [
  {
    day: "Sun, May 24",
    title: "Departure & Opening",
    icon: Bus,
    details: [
      "9:00 AM — Bus from McGill (McTavish St)",
      "6:00 PM — Arrive Toronto",
      "7:30 PM — Dinner, Icebreakers & Pitch Night",
    ],
  },
  {
    day: "Mon–Fri, May 25–29",
    title: "Exclusive Site Visits",
    icon: MapPin,
    details: [
      "Partner office tours throughout the week",
      "Networking with Toronto's top firms",
      "NationGraph visit pending confirmation — full schedule shared with participants only",
    ],
  },
  {
    day: "Tue–Fri, May 26–29",
    title: "Toronto Tech Week",
    icon: Calendar,
    details: [
      "Breakfast at dorms each morning",
      "300+ events to explore all day",
      "Curated founder dinners & closed events",
    ],
  },
  {
    day: "Sat, May 30",
    title: "Return to Montreal",
    icon: Home,
    details: [
      "9:00 AM — Bus departure from Toronto",
      "6:00 PM — Arrive McGill (McTavish St)",
    ],
  },
];

// Arrow shown between cards — horizontal on md+, vertical on mobile
const TimelineArrow = ({ index }: { index: number }) => (
  <>
    {/* Horizontal arrow: after card 0 (→ card 1) and after card 2 (→ card 3), same row */}
    {(index === 0 || index === 2) && (
      <motion.div
        initial={{ opacity: 0, x: -6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        className="hidden md:flex items-center justify-center"
      >
        <div className="flex items-center gap-1" style={{ color: "rgba(168,85,247,0.5)" }}>
          <div className="w-8 h-px" style={{ background: "rgba(168,85,247,0.4)" }} />
          <ArrowRight className="w-5 h-5" />
        </div>
      </motion.div>
    )}

    {/* Vertical arrow: after card 1 (row break on md grid), shown only on md+ */}
    {index === 1 && (
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:flex col-span-2 items-center justify-center py-1"
      >
        {/* Two-part arrow: right side of row 1 curves down, left side of row 2 continues */}
        <div className="flex items-center gap-2" style={{ color: "rgba(168,85,247,0.5)" }}>
          <div className="w-16 h-px" style={{ background: "rgba(168,85,247,0.3)" }} />
          <ArrowDown className="w-5 h-5" />
          <div className="w-16 h-px" style={{ background: "rgba(168,85,247,0.3)" }} />
        </div>
      </motion.div>
    )}

    {/* Mobile: vertical arrow between every card */}
    {index < 3 && (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className="flex md:hidden items-center justify-center py-1"
      >
        <ArrowDown className="w-5 h-5" style={{ color: "rgba(168,85,247,0.5)" }} />
      </motion.div>
    )}
  </>
);

const SpeakersSection = () => {
  return (
    <section id="schedule" className="relative py-32 px-6 overflow-hidden">
      <DotPattern className="text-purple-500/10" width={24} height={24} cr={0.8} />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-8xl font-bold text-spaced-wide text-foreground mb-6"
        >
          Schedule
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-muted-foreground mb-16 max-w-lg"
        >
          7 days from Montreal to Toronto and back. Here's how we're spending them.
        </motion.p>

        {/*
          Layout: 2-col grid on md+.
          We interleave arrow elements into the grid using col-span tricks.
          Order: [card 0] [arrow →] [card 1] [arrow ↓ spanning 2 cols] [card 2] [arrow →] [card 3]
        */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-4 md:gap-y-4 md:gap-x-4 items-center">
          {schedule.map((item, i) => (
            <>
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                // On desktop: card 0 & 1 are row 1, card 2 & 3 are row 2
                // We need to span correctly in the 3-col grid (card | arrow | card)
                className={
                  i === 1 || i === 3
                    ? "md:col-start-3"
                    : "md:col-start-1"
                }
              >
                <MagicCard
                  className="border-glow"
                  gradientColor="hsl(270, 50%, 15%)"
                  gradientFrom="#7c3aed"
                  gradientTo="#a855f7"
                  gradientOpacity={0.1}
                >
                  <div className="p-7">
                    {/* Icon — large */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Day + title */}
                    <span className="font-mono text-[11px] tracking-[0.2em] text-primary uppercase block mb-1">
                      {item.day}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div
                      className="mb-4"
                      style={{ height: "1px", background: "linear-gradient(to right, rgba(168,85,247,0.35), transparent)" }}
                    />

                    {/* Details */}
                    <ul className="space-y-2">
                      {item.details.map((detail, j) => (
                        <li key={j} className="font-mono text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="text-primary/40 mt-1 shrink-0">—</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MagicCard>
              </motion.div>

              {/* Arrow after card 0: horizontal → (col 2 of row 1) */}
              {i === 0 && (
                <motion.div
                  key="arrow-0"
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="hidden md:flex items-center justify-center md:col-start-2 md:row-start-1"
                >
                  <div className="flex items-center gap-1" style={{ color: "rgba(168,85,247,0.55)" }}>
                    <div className="w-6 h-px" style={{ background: "rgba(168,85,247,0.4)" }} />
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </motion.div>
              )}

              {/* Arrow after card 1: vertical ↓ spanning full width between rows */}
              {i === 1 && (
                <motion.div
                  key="arrow-1"
                  initial={{ opacity: 0, y: -6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="hidden md:flex col-span-3 items-center justify-center py-2"
                  style={{ gridColumn: "1 / -1" }}
                >
                  <div className="flex items-center gap-3" style={{ color: "rgba(168,85,247,0.55)" }}>
                    <div className="w-24 h-px" style={{ background: "rgba(168,85,247,0.3)" }} />
                    <ArrowDown className="w-6 h-6" />
                    <div className="w-24 h-px" style={{ background: "rgba(168,85,247,0.3)" }} />
                  </div>
                </motion.div>
              )}

              {/* Arrow after card 2: horizontal → (col 2 of row 2) */}
              {i === 2 && (
                <motion.div
                  key="arrow-2"
                  initial={{ opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="hidden md:flex items-center justify-center md:col-start-2"
                >
                  <div className="flex items-center gap-1" style={{ color: "rgba(168,85,247,0.55)" }}>
                    <div className="w-6 h-px" style={{ background: "rgba(168,85,247,0.4)" }} />
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </motion.div>
              )}

              {/* Mobile: vertical arrow between every card */}
              {i < 3 && (
                <motion.div
                  key={`arrow-mobile-${i}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                  className="flex md:hidden items-center justify-center py-1"
                >
                  <ArrowDown className="w-5 h-5" style={{ color: "rgba(168,85,247,0.5)" }} />
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;