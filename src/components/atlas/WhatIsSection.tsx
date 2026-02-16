import { motion } from "framer-motion";

const WhatIsSection = () => {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-2">
            What is
          </h2>
          <h3 className="font-serif text-5xl md:text-7xl font-bold text-gradient-purple">
            Atlas
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-sm leading-loose text-muted-foreground">
            Atlas was founded with the goal of uniting creatively minded people,
            regardless of their experience or profession, to share their
            knowledge, ideas, and interests.
          </p>
          <p className="font-mono text-sm leading-loose text-muted-foreground mt-6">
            We believe that creativity flourishes when people come together,
            exchange ideas, and collaborate. Our events are open to everyone,
            whether you're an established professional, or simply someone with a
            passion for creativity.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsSection;
