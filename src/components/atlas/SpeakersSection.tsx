import { motion } from "framer-motion";
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
    day: "Mon-Fri, May 25-29",
    title: "Exclusive Site Visits",
    icon: MapPin,
    details: [
      "Partner office tours throughout the week",
      "Networking with Toronto's top firms",
      "NationGraph visit pending confirmation — full schedule shared with participants only",
    ],
  },
  {
    day: "Tue-Fri, May 26-29",
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
    <section id="schedule" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Itinerary</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] mb-4">
            The Schedule
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-lg">
            7 days from Montreal to Toronto and back. Here's how we're spending them.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-5 left-0 right-0 h-px bg-stroke" />

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
                {/* Desktop dot */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-stroke bg-background mb-5">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                </div>

                {/* Mobile icon */}
                <div className="flex md:hidden items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full border border-stroke bg-background flex items-center justify-center">
                    <item.icon className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-[10px] text-muted-foreground tracking-wide uppercase">
                    {item.day}
                  </span>
                </div>

                <div>
                  <span className="hidden md:block text-[10px] text-muted-foreground tracking-wide uppercase mb-1">
                    {item.day}
                  </span>
                  <h3 className="font-display text-base text-foreground mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {item.details.map((detail, j) => (
                      <li
                        key={j}
                        className="text-[11px] text-muted-foreground leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-stroke mt-0.5 shrink-0">--</span>
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
