import { motion } from "framer-motion";

const reasons = [
  {
    title: "Learn",
    desc: "Hear from local experts and learn from the best as they share their insights and tips for tackling today's creative challenges.",
  },
  {
    title: "Connect",
    desc: "Meet new people and connect with other creatives in your area, whether they're potential partners or just new friends.",
  },
  {
    title: "Inspire",
    desc: "Take part in conversations that will spark your creativity and help you think differently about the future of your work.",
  },
  {
    title: "Shape",
    desc: "Join the conversation about where our creative community is heading and how we can shape it together.",
  },
];

const WhyAttendSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4"
        >
          Why attend
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-3xl md:text-4xl text-gradient-purple mb-20"
        >
          Atlas
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-2xl border-glow bg-card hover:bg-secondary/20 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-xs text-primary text-spaced">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
              </div>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;
