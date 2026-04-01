import { motion } from "framer-motion";
import { Zap, Building2, Users } from "lucide-react";

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

const WhyUsCard = ({ item, i }: { item: (typeof whyUs)[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: i * 0.1 }}
    className="relative group bg-surface border border-stroke rounded-3xl p-8 md:p-10 flex flex-col h-full hover:border-white/20 transition-colors"
  >
    {/* Eyebrow */}
    <div className="flex items-center gap-3 mb-8">
      <item.icon className="w-4 h-4 text-muted-foreground" />
      <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase">{item.eyebrow}</span>
    </div>

    {/* Headline + sub */}
    <div className="mb-4">
      <h3 className="font-display text-3xl md:text-4xl text-foreground leading-tight mb-2">
        {item.headline}
      </h3>
      <p className="text-[11px] text-muted-foreground">
        {item.sub}
      </p>
    </div>

    {/* Divider */}
    <div className="mb-5 h-px bg-stroke" />

    {/* Stat */}
    <div className="flex items-baseline gap-2 mb-5">
      <span className="font-display text-3xl text-foreground">{item.stat}</span>
      <span className="text-xs text-muted-foreground uppercase tracking-widest">{item.statLabel}</span>
    </div>

    {/* Body */}
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
      {item.body}
    </p>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mt-6">
      {item.tags.map((t) => (
        <span
          key={t}
          className="text-[9px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-stroke text-muted-foreground"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const WhyAttendSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background">
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
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">What sets this apart</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] mb-4">
            Why Us?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-md">
            Access. Network. Community.
          </p>
        </motion.div>

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
