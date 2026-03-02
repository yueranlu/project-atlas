import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MapPin, Bus, Calendar, Home } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";

const schedule = [
  {
    day: "Sun, May 24",
    title: "Departure & Opening",
    icon: Bus,
    details: [
      "9:00 AM — Bus from McGill (McTavish St)",
      "6:00 PM — Arrive Toronto, transfer to Airbnb",
      "7:30 PM — Dinner, Icebreakers & Pitch Night",
    ],
  },
  {
    day: "Mon, May 25",
    title: "Exclusive Site Visits",
    icon: MapPin,
    details: [
      "9:00 AM – 7:00 PM — Partner office tours",
      "Networking with Toronto's top firms",
    ],
  },
  {
    day: "Tue–Fri, May 26–29",
    title: "Toronto Tech Week",
    icon: Calendar,
    details: [
      "Breakfast at Airbnb each morning",
      "300+ events to explore all day",
      "Curated founder dinners & closed events",
    ],
  },
  {
    day: "Sat, May 30",
    title: "Return to Montreal",
    icon: Home,
    details: [
      "10:00 AM — Bus departure from Toronto",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schedule.map((item, i) => (
            <motion.div
              key={item.day}
              className="h-[210px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <MagicCard
                className="border-glow h-full"
                gradientColor="hsl(270, 50%, 15%)"
                gradientFrom="#7c3aed"
                gradientTo="#a855f7"
                gradientOpacity={0.1}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-primary text-spaced block">{item.day}</span>
                      <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-1.5">
                    {item.details.map((detail, j) => (
                      <li key={j} className="font-mono text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="text-primary/40 mt-1">—</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
