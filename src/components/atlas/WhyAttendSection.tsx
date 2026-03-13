import { motion } from "framer-motion";
import { Zap, Building2, Users } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { Particles } from "@/components/ui/particles";

const whyUs = [
  {
    index: "01",
    eyebrow: "Access",
    icon: Zap,
    headline: "Private Events",
    sub: "NationGraph & General Magic",
    body: "Closed-door sessions not on the public schedule.",
    stat: "2",
    statLabel: "exclusive firms",
    tags: ["NationGraph", "General Magic", "Closed-door"],
  },
  {
    index: "02",
    eyebrow: "Network",
    icon: Building2,
    headline: "Firm Visits",
    sub: "VCs & Founders",
    body: "Curated office tours with the people building and funding what's next.",
    stat: "10+",
    statLabel: "partner firms",
    tags: ["Venture Capital", "Founders", "Site Tours"],
  },
  {
    index: "03",
    eyebrow: "Community",
    icon: Users,
    headline: "Your Cohort",
    sub: "Ambitious students, one trip",
    body: "7 days alongside ambitious peers — connections that outlast the week.",
    stat: "7",
    statLabel: "days together",
    tags: ["Alumni", "Cohort", "Lifelong Network"],
  },
];

const WhyUsCard = ({ item, i }: { item: typeof whyUs[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: i * 0.1 }}
    className="relative group"
  >
    <MagicCard
      className="border-glow h-full"
      gradientColor="hsl(270, 50%, 15%)"
      gradientFrom="#7c3aed"
      gradientTo="#a855f7"
      gradientOpacity={0.15}
      gradientSize={320}
    >
      <div className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">

        {/* Watermark number */}
        <span
          className="pointer-events-none select-none absolute -right-3 -top-6 font-serif font-bold leading-none"
          style={{ fontSize: "180px", color: "rgba(168,85,247,0.04)" }}
          aria-hidden="true"
        >
          {item.index}
        </span>

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-7 relative z-10">
          <span className="font-mono text-[10px] tracking-[0.25em] text-primary/40 uppercase">{item.index}</span>
          <div className="w-px h-3 bg-primary/20" />
          <span className="font-mono text-[10px] tracking-widest text-primary/40 uppercase">{item.eyebrow}</span>
        </div>

        {/* Large icon */}
        <div className="mb-6 relative z-10">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: "rgba(124,58,237,0.1)",
              border: "1px solid rgba(168,85,247,0.2)",
              boxShadow: "0 0 32px rgba(124,58,237,0.15)",
            }}
          >
            <item.icon className="w-10 h-10" style={{ color: "rgba(168,85,247,0.8)" }} />
          </div>
        </div>

        {/* Headline + sub */}
        <div className="relative z-10 mb-5">
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-[1.0] mb-2">
            {item.headline}
          </h3>
          <p className="font-mono text-[11px] tracking-widest uppercase" style={{ color: "rgba(168,85,247,0.7)" }}>
            {item.sub}
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-5 relative z-10"
          style={{ height: "1px", background: "linear-gradient(to right, rgba(168,85,247,0.35), transparent)" }}
        />

        {/* Stat — big visual number */}
        <div className="flex items-end gap-3 mb-5 relative z-10">
          <span
            className="font-serif font-bold leading-none"
            style={{ fontSize: "64px", color: "rgba(168,85,247,0.9)", lineHeight: 1 }}
          >
            {item.stat}
          </span>
          <span className="font-mono text-xs text-muted-foreground mb-2 uppercase tracking-widest">
            {item.statLabel}
          </span>
        </div>

        {/* Body — one line max */}
        <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1 relative z-10">
          {item.body}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-7 relative z-10">
          {item.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full"
              style={{
                border: "1px solid rgba(168,85,247,0.2)",
                color: "rgba(168,85,247,0.55)",
                background: "rgba(168,85,247,0.05)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </MagicCard>
  </motion.div>
);

const WhyAttendSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <Particles className="absolute inset-0" quantity={40} color="#7c3aed" size={0.5} staticity={40} />

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Header */}
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
              What sets this apart
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-serif text-5xl md:text-7xl lg:text-[7rem] font-bold text-foreground leading-[0.95] mb-4"
          >
            Why Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-2xl md:text-3xl text-gradient-purple"
          >
            Access. Network. Community.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyUs.map((item, i) => (
            <WhyUsCard key={item.index} item={item} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyAttendSection;