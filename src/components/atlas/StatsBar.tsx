import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 20, label: "Students" },
  { value: 300, suffix: "+", label: "Events" },
  { value: 7, label: "Days" },
];

const StatsBar = () => {
  return (
    <section className="py-16 md:py-24 border-y border-stroke bg-background">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <span className="font-display text-4xl md:text-7xl text-foreground">
              <NumberTicker value={stat.value} delay={0.3 + i * 0.15} />
              {stat.suffix}
            </span>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mt-3">
              {stat.label}
            </p>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: stats.length * 0.1 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center" style={{ overflow: "visible" }}>
            <div className="font-display text-4xl md:text-7xl flex" style={{ overflow: "visible" }}>
              {"Unlimited".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="text-gradient-accent"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em] mt-3">
              Opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
