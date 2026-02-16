import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">
            Bringing together{" "}
            <span className="text-gradient-purple">makers</span>,{" "}
            <span className="text-gradient-purple">creators</span> and{" "}
            <span className="text-gradient-purple">visionaries</span> from the
            local creative community to share their experiences.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 max-w-2xl"
        >
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            Atlas is a meetup designed to bring together local creatives for an
            evening of inspiration, collaboration, and forward-thinking
            discussions. Through feature talks, engaging activities, and
            networking opportunities, you will have the chance to connect, learn,
            and share with like-minded individuals in a vibrant and supportive
            environment.
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#tickets"
              className="font-mono text-xs px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors text-spaced"
            >
              Get Tickets
            </a>
            <a
              href="#speakers"
              className="font-mono text-xs px-6 py-3 rounded-full border-glow text-foreground hover:bg-secondary transition-colors text-spaced"
            >
              View Speakers
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
