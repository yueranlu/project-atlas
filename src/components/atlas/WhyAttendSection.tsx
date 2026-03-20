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
      <div className="p-8 md:p-10 flex flex-col h-full">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <item.icon className="w-4 h-4 text-primary/50" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-primary/50 uppercase">{item.eyebrow}</span>
        </div>

        {/* Headline + sub */}
        <div className="mb-4">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2">
            {item.headline}
          </h3>
          <p className="font-mono text-[11px] text-muted-foreground">
            {item.sub}
          </p>
        </div>

        {/* Divider */}
        <div className="mb-5 h-px bg-border" />

        {/* Stat */}
        <div className="flex items-baseline gap-2 mb-5">
          <span className="font-serif text-3xl font-bold text-foreground">{item.stat}</span>
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">{item.statLabel}</span>
        </div>

        {/* Body */}
        <p className="font-mono text-sm text-muted-foreground leading-relaxed flex-1">
          {item.body}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {item.tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full border-glow text-muted-foreground"
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