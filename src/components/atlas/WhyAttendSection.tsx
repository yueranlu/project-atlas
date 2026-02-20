import { motion } from "framer-motion";
import { Bed, Bus, Sparkles, Camera } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Particles } from "@/components/ui/particles";

const details = [
  {
    title: "Accommodation",
    desc: "Shared housing near downtown Toronto through Airbnb so you can maximize your time at events and meet like-minded individuals.",
    icon: Bed,
  },
  {
    title: "Transportation",
    desc: "Bus travel from Montreal to and from Toronto Tech Week to facilitate transportation and ignite conversation from the very start.",
    icon: Bus,
  },
  {
    title: "Curated Experiences",
    desc: "Beyond TTW's 300+ events — exclusive firm visits, founder dinners, closed 5-7 events, and site tours curated by our partners.",
    icon: Sparkles,
  },
  {
    title: "Documentary",
    desc: "A professional camera crew will document the entire trip, capturing the energy, the people, and the moments that define Atlas.",
    icon: Camera,
  },
];

const WhyAttendSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <Particles className="absolute inset-0" quantity={40} color="#7c3aed" size={0.5} staticity={40} />
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
        >
          Trip Details
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl text-gradient-purple mb-20"
        >
          What's Included
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, i) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <MagicCard
                className="border-glow"
                gradientColor="hsl(270, 50%, 15%)"
                gradientFrom="#7c3aed"
                gradientTo="#a855f7"
                gradientOpacity={0.15}
              >
                <div className="p-8 group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <detail.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-primary/60 text-spaced block">
                        0{i + 1}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        {detail.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                    {detail.desc}
                  </p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
