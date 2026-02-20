import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import startupfestImg from "@/assets/startupfest.png";

const events = [
  {
    name: "North Star 2026",
    image: "https://img.playbook.com/Qz0aUJupHzdCgjeFCXLOLyqQPuKWhNGgV0xq1SXy6V4/w:1200/aHR0cHM6Ly9wcm9k/LnBsYXlib29rYXNz/ZXRzLmNvbS92MC8w/L3Byb2QvbGFyZ2Vf/cHJldmlld3MvODVk/MjcyZWEtNjVjNy00/YTRiLWE5ZmQtNDRi/MmI3NzVhODBiP3R0/bD1ob3VybHkmdmVy/aWZ5PTE3NzE1NTYz/OTktdGxZM3Q3NkJ1/WFlvbkpBeTVrakM0/ck84czFhb0Y4VllK/T3Z6QzdwTzlCayUz/RA.png",
    stats: [
      { value: 800, suffix: "+", label: "Sign Ups" },
      { value: 19, label: "Speakers" },
      { value: 2, label: "Keynotes" },
    ],
    year: "2026",
    supporters: [],
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
    image: "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,anim=false,background=white,quality=75,width=800,height=500/event-covers/df/1f5d2f8c-6805-4f44-bc0f-f35c1b1c9585.png",
    stats: [
      { value: 300, suffix: "+", label: "Attendees" },
      { value: 5, label: "Pitches" },
      { value: 4, label: "Judges" },
    ],
    year: "2025",
    supporters: ["Startupfest", "Inovia", "Real Ventures"],
  },
];

const WhatIsSection = () => {
  return (
    <section className="relative py-32 px-6 bg-card overflow-hidden">
      <DotPattern className="text-purple-400/8" width={20} height={20} cr={0.6} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-2">
              About
            </h2>
            <h3 className="font-serif text-5xl md:text-7xl font-bold text-gradient-purple mb-8">
              McGill Ventures
            </h3>

            <p className="font-mono text-sm leading-loose text-muted-foreground max-w-2xl">
              A student-run initiative advancing access to Venture Capital through
              networking events, panel discussions, and an exclusive analyst program.
              30 team members. Thousands of attendees.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {[
                { label: "McGill Ventures Fund", desc: "Investing in McGill startups" },
                { label: "Health Tech Innovation Lab (HTIL)", desc: "Stem-focused research for stem-related startups" },
                { label: "Venture Advisory", desc: "Pro bono advisory" },
                { label: "Analyst Program", desc: "VC mentorship from Canada's best" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-4 rounded-xl border-glow bg-background/50"
                >
                  <p className="font-mono text-xs font-bold text-foreground">{item.label}</p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Event Cards with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Our Events
          </h3>
          <p className="font-mono text-xs text-muted-foreground mb-10">
            Flagship events hosted by McGill Ventures
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
