import { motion } from "framer-motion";
import { Bed, Bus, Sparkles, Camera } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Particles } from "@/components/ui/particles";

const details = [
  {
    title: "Accommodation",
    desc: "Shared housing near downtown Toronto through Airbnb so you can maximize your time at events and meet like-minded individuals.",
    icon: Bed,
    tag: "Housing",
    meta: ["Downtown Toronto", "Airbnb"],
    bullets: null,
  },
  {
    title: "Transportation",
    desc: "Bus travel from Montreal to and from Toronto Tech Week to facilitate conversation and connection from the very start.",
    icon: Bus,
    tag: "Travel",
    meta: ["Montreal ↔ Toronto", "Coach Bus"],
    bullets: null,
  },
  {
    title: "Curated Experiences",
    desc: null,
    icon: Sparkles,
    tag: "Exclusive",
    meta: ["300+ Events", "Partner Access"],
    bullets: ["Exclusive firm visits", "Founder dinners", "Closed 5–7 events", "Curated site tours"],
  },
  {
    title: "Documentary",
    desc: "A professional camera crew will document the entire trip — capturing the energy, the people, and the moments that define Atlas.",
    icon: Camera,
    tag: "Film",
    meta: ["Professional Crew", "Atlas 2026"],
    bullets: null,
  },
];

const CardContent = ({ detail, index }: { detail: typeof details[0]; index: number }) => (
  <div className="p-8 flex flex-col h-full relative overflow-hidden">
    {/* Watermark number */}
    <span
      className="pointer-events-none select-none absolute right-4 top-2 font-serif font-bold leading-none text-primary/[0.05]"
      style={{ fontSize: "110px" }}
      aria-hidden="true"
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    {/* Top row */}
    <div className="flex items-center justify-between mb-7 relative z-10">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.2em] text-primary/50">
          0{index + 1}
        </span>
        <div className="w-px h-3 bg-primary/20" />
        <span className="font-mono text-[10px] tracking-widest text-primary/40 uppercase">
          {detail.tag}
        </span>
      </div>
      <detail.icon className="w-4 h-4 text-primary/30" />
    </div>

    {/* Title */}
    <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-5 relative z-10">
      {detail.title}
    </h3>

    {/* Divider */}
    <div
      className="mb-5 relative z-10"
      style={{ height: "1px", background: "linear-gradient(to right, rgba(168,85,247,0.4), transparent)" }}
    />

    {/* Description or bullets */}
    <div className="flex-1 relative z-10">
      {detail.bullets ? (
        <ul className="space-y-2.5">
          {detail.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/50 shrink-0" />
              <span className="font-mono text-[13px] text-muted-foreground leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="font-mono text-[13px] text-muted-foreground leading-relaxed">{detail.desc}</p>
      )}
    </div>

    {/* Meta tags */}
    <div className="flex flex-wrap gap-2 mt-6 relative z-10">
      {detail.meta.map((m) => (
        <span
          key={m}
          className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{
            border: "1px solid rgba(168,85,247,0.2)",
            color: "rgba(168,85,247,0.55)",
            background: "rgba(168,85,247,0.05)",
          }}
        >
          {m}
        </span>
      ))}
    </div>
  </div>
);

const WhyAttendSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <Particles className="absolute inset-0" quantity={40} color="#7c3aed" size={0.5} staticity={40} />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Section header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-8 h-px" style={{ background: "rgba(168,85,247,0.5)" }} />
            <span className="font-mono text-[10px] tracking-[0.25em] text-primary/50 uppercase">
              May 24–30 · Montreal → Toronto
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
          >
            Trip Details
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-3xl md:text-4xl text-gradient-purple"
          >
            What's Included
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {details.map((detail, i) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <MagicCard
                className="border-glow h-full"
                gradientColor="hsl(270, 50%, 15%)"
                gradientFrom="#7c3aed"
                gradientTo="#a855f7"
                gradientOpacity={0.15}
                gradientSize={280}
              >
                <CardContent detail={detail} index={i} />
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
