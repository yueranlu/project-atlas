import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const stats = [
  { value: 20, label: "Students" },
  { value: 300, suffix: "+", label: "Events" },
  { value: 7, suffix: "", label: "Days" },
];

const unlimitedLetters = "Unlimited".split("");

const StatsBar = () => {
  return (
    <section className="py-20 border-y border-border">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pl-6 pr-16 md:pl-12 md:pr-32">
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: stats.length * 0.1 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center" style={{ overflow: "visible" }}>
            <div
              className="font-serif text-4xl md:text-7xl font-bold flex"
              style={{ overflow: "visible" }}
            >
              {unlimitedLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
                  className="text-gradient-purple"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <p className="font-mono text-xs text-spaced text-muted-foreground mt-3">
              Opportunities
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;