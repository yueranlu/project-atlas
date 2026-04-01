import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden bg-background">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">About Atlas</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-foreground leading-[0.95] mb-4">
            The best builders in Canada, moving together.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mt-6">
            Together, with the right people and the right momentum, you move faster, go further, reach peaks that seemed out of range. Toronto this year. New York, SF, London next.
          </p>
        </motion.div>

        {/* Bento grid of images */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[16/10]"
          >
            <img
              src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image%20(1).png"
              alt="Students collaborating"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-5 group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[16/10]"
          >
            <img
              src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image%20(2).png"
              alt="Toronto skyline at night"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[16/10]"
          >
            <img
              src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image%20(3).png"
              alt="Conference presentation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:col-span-7 group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[16/10]"
          >
            <img
              src="https://raw.githubusercontent.com/Babushka1/McDave/05c5a5ffbb60e387a2008a762d01d0bd338acb2c/image.png"
              alt="Toronto CN Tower"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="#schedule"
            className="group relative inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 border-2 border-stroke text-foreground hover:border-transparent transition-all hover:scale-105"
          >
            <span className="absolute inset-[-2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            View Schedule
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">&darr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
