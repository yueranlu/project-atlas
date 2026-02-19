import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 100, suffix: "+", label: "Students" },
  { value: 300, suffix: "+", label: "Events" },
  { value: 30, label: "Team Members" },
  { value: 5, suffix: "", label: "Days" },
];

const StatsBar = () => {
  return (
    <section className="py-20 px-6 border-y border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <span className="font-serif text-4xl md:text-7xl font-bold text-foreground">
              <NumberTicker value={stat.value} delay={0.3 + i * 0.15} />
              {stat.suffix}
            </span>
            <p className="font-mono text-xs text-spaced text-muted-foreground mt-3">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
