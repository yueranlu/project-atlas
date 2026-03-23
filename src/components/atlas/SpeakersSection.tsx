import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MapPin, Bus, Calendar, Home } from "lucide-react";

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

        {/* Horizontal timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-purple-400/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {schedule.map((item, i) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Dot on timeline */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-purple-400/20 bg-background mb-5">
                  <item.icon className="w-4 h-4 text-purple-400" />
                </div>

                {/* Mobile icon */}
                <div className="flex md:hidden items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full border border-purple-400/20 bg-background flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-purple-400" />
                  </div>
                  <span className="font-mono text-[10px] text-purple-400 tracking-wide uppercase">
                    {item.day}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span className="hidden md:block font-mono text-[10px] text-purple-400 tracking-wide uppercase mb-1">
                    {item.day}
                  </span>
                  <h3 className="font-serif text-base font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {item.details.map((detail, j) => (
                      <li
                        key={j}
                        className="font-mono text-[11px] text-muted-foreground leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-purple-400/40 mt-0.5 shrink-0">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
